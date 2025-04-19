<template>
    <div class="hotel-filter">
      <!-- Filter Header -->
      <div class="filter-header">
        <div class="filter-title">
          <el-icon><Operation /></el-icon>
          <span>Filters</span>
        </div>
        <el-button 
          type="text" 
          class="reset-btn" 
          @click="resetAllFilters"
        >
          Reset
        </el-button>
      </div>
  
      <!-- Sort Section -->
      <div class="filter-section">
        <h3 class="section-title">Sort By</h3>
        <div class="sort-options">
          <el-button
            v-for="option in sortOptions"
            :key="option.value"
            :type="activeSort === option.value ? 'primary' : ''"
            size="small"
            round
            @click="setActiveSort(option.value)"
          >
            {{ option.label }}
          </el-button>
        </div>
      </div>
  
      <!-- Hotel Star Rating -->
      <div class="filter-section">
        <h3 class="section-title">Hotel Class</h3>
        <el-checkbox-group 
          v-model="selectedStars" 
          class="checkbox-group"
        >
          <el-checkbox v-for="star in starOptions" :key="star.value" :label="star.value">
            {{ star.label }}
          </el-checkbox>
        </el-checkbox-group>
      </div>
  
      <!-- Price Range -->
      <div class="filter-section">
        <h3 class="section-title">Price Range (TND)</h3>
        <div class="price-inputs">
          <el-input-number
            v-model="priceRange[0]"
            :min="0"
            :max="priceRange[1]"
            controls-position="right"
            placeholder="Min"
            class="price-input"
          />
          <span class="price-separator">-</span>
          <el-input-number
            v-model="priceRange[1]"
            :min="priceRange[0]"
            :max="3000"
            controls-position="right"
            placeholder="Max"
            class="price-input"
          />
        </div>
        <el-slider
          v-model="priceRange"
          range
          :min="0"
          :max="3000"
          :step="50"
          class="price-slider"
        />
      </div>
  
      <!-- Hotel Chains -->
      <div class="filter-section">
        <h3 class="section-title">Hotel Chains</h3>
        <el-input
          v-model="hotelSearch"
          placeholder="Search hotels..."
          clearable
          prefix-icon="Search"
          class="search-input"
        />
        <el-checkbox-group 
          v-model="selectedHotels" 
          class="checkbox-group"
        >
          <el-checkbox
            v-for="hotel in filteredHotels"
            :key="hotel.value"
            :label="hotel.value"
            class="filter-option"
          >
            <div class="hotel-option">
              <img 
                :src="hotel.logo" 
                :alt="hotel.label"
                class="hotel-logo"
                @error="handleImageError"
              >
              <span>{{ hotel.label }}</span>
            </div>
          </el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { Operation } from '@element-plus/icons-vue'
  
  // Sort options
  const sortOptions = [
    { value: 'price', label: 'Price' },
    { value: 'rating', label: 'Rating' },
    { value: 'reviews', label: 'Reviews' }
  ]
  
  // Hotel class options
  const starOptions = [
    { value: '3', label: '3 Stars' },
    { value: '4', label: '4 Stars' },
    { value: '5', label: '5 Stars' }
  ]
  
  // Hotel chain options
  const hotelChains = [
  { 
    value: 'hilton', 
    label: 'Hilton', 
    logo: 'https://logos-world.net/wp-content/uploads/2021/02/Hilton-Logo.png',
  
  },
  { 
    value: 'marriott', 
    label: 'Marriott', 
    logo: 'https://logos-world.net/wp-content/uploads/2020/11/Marriott-International-Logo.png',
   
  },
  { 
    value: 'ibis', 
    label: 'Ibis', 
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPMAAADQCAMAAADlEKeVAAAA81BMVEX////LoWaqglXKoGXXrGzftHDcsW7UqWrar23Qpmjes2+5kF2wiFi2jVupgVTjt3LpvXW/lmDuwnf7zn7Fm2Pf0sX2ynzbzL2mfEzVxLL3y3ynfU/u6OH++vXDqY/++/X8zXjfsWTInF3EllP89ern1sK8j1Oyhk7YqmG0h0318Ousf0m7nX/+7M/27uPtvmzx5NPRo17Srnz16NXo3tThxZ6hdD/fuoP30pT+3aP50Ij+8dv+5b394K/y0p771ZTx1avw3L7dvI7fxaPizbLrxYnqy53PqXbTt5TJqH/PqXTSup/AmWm5l3Lq1ru0kGjQn09OHSP+AAALT0lEQVR4nO2de1fiOhfGVXSUqyLIKFBtU6AVtFAE8YyjA+IFRMf3+3+aN0lLockGGSjUYp4/zlmL1nP2bz1JmuzcNjaEhISEhISEhISEhISEhISEhISEhISEhISE3Cr4HcDqdSv7HcHqlZIv/Q5h1fpPTqX8jmHFusTI381ojJxK/fI7ipWKlOxUVr71O44V6pYiZ7PfyegURc5kqt/H6N8ydTmTydz4HcqqJDnImep36YzdyVbJzmQOD7+J0WdjyIffxGhss4N8eHjvdzgrkQv5exh9KVvINvO3MPpPyoV8WD3zO6KlS5LdyAcHbb9DWrpuZQb5oCr5HdOydZdlkL+B0TdZFvlA8TumZevXOLIFrXT8DmrJyrIuHxzsr7vRWQd5yLy/v+5GczbvE/kd1XL1C0Jec6PvAeSdnR2/w1qqflchZOXK77iWqdsqgBz5sd5GVyHkH/paG30PIf/Ya/kd1zJ1VbW7X0Nmiryn1/wObJk6cNsciRDkvfU2ulNlSzZB3jYNvwNbpvjKjJG3t9fb6CHy/jjymhutsC4T5t3dB7/jWqY6CoS8a5b9DmyZUjhkwrzeRrdB5PBaGy0pEHI43PQ7MK8EpXLbEQg5bK5L2veyzf8mKRByGHVXHt1y1KkCWZDnCIAc3lTXxOj7QwC6oLuQLebNTfToQ4BL0NPhYZUfHT//AJAxtA8BLkFVcJbZ0J2+yBjymhhdqNIkAff7A4QcCq2F0ZdVmiJ4Yn83dFf7ZSOH1sLotj0p1WYftNxNtoUcCqV9iNFrObOPbDtW0wHkdBoVfQnTSxWqTiqIfdSCXMbyI0xPZWeCyIj5mXlUM8eQQw5yKfBGP40Sflzpfh31RdDrS0hFaUu+BOqdCq6EH/OwZlrIqE4TvVIxTalLAU/7tkfI+zvc9KM1sAiPGB9VAv222hi9VtWd42SeFrHRyMqOGMXHYhn/K11KJkuN1QfqnTpuZP0v8zwcVmkfpIgrM0Jq38AFvpdM9n0I1TOxmWzW6L8qKdfSCwqlrTb75fERM5fyfgTrjToMMj8rRTJgBrI+UlQlXLYDbbTCzVcAkxVFdQw5aSm4Rrdtm8cSfjqXCOmqoRFzcqigGi0pzHwrmYljW7E6gpCT5wFN+z7zk4/b2+68vRGCkZPRnk9BL6aCAiBv746/8qjSTnaIR44G0+j7fWDycXcshV1+JSYjEDkaHfgY+rwyFHDycTTjapmMil0EIUfPA5j2fQKRd037C228IpL9qksbZZVhpshRLXhGG8B8K2W2Rsf4C4WRrY5nD0IOotHPMLLFXESIZAlUi58YzSPHA2e0NGGKOYzLdi2MaGJEHVbtHoAcjcc1Xwn+XR3F3RcZ5Ti7r2jTjbxhlCDkuHbiJ8G/62kSspPwU8eGG30IOWhGk6LN9EVc2XunLlvKl9jKbDEHyugr5TNk93RFH0KOx2I+hT+XOmz3i5mjQUx3ulECkOMx7ac/4c+l5wjbF3FPS9XZP3iDkGOBMroVmYoc4v4AG80iE+bKkQ/Bz6lWBGyybWQVGDO9Qcix2MfqY59XralfKWhy5ugcQo5VgpP2bcFLZKxZdXhxUJKvzMEy+nkKMtd+WSpqEHKAjO7ok5BDm5P+BkSOxd5XGfciutInIaOJOZ+fGoQcqwQm7avDfZGxgQUvDUKObQXG6IcJyNPm0080ADm2FRijazqIPH1RkAYhb21drCjmhTUH8sZA40s21nVQ0r5/Tb779enSLw1C3jo+XUXAXmiX6359vtoNG80jB8royXmRSZIqEHKAjDbHkRGaaffUQAOQsdEBSfuWzXHkCR1O7o8qLuQh9nFA0r5dc4Q8Q1W2dQohB8VoY4SMNmffFegY7UIOiNHOVyqk/tPGkguHeQx5K3G8rDg91OsQGdX/7UOTr0DIieMvn/YtO+s4N/95HeOFu8m2kBNf3uii3WSjzTmW6BKjeeQvbnShTpGRWp9vreo7hJxI5DwO00NJTUpsou68HcZGBUJOHH/V/H65iXtfphnuLrIc+aNyDMqzKL2U8WBiPfxdcJN+/iesrzjSaP5vu7kor5CQkJCQkJCQkJCQkJCQkJCQkJCQkJDQiiTNuArC6/eWocIl1vRXjM7TvkLUak89Hd94rG+qWKg+fVqrMehHz7Hi/cGkRdxHnBoezvDIRNOgO/uKs8c7oujtSf48biIUso+RQgh1J74XP49H4/YuQm3ChlFgNu86MfCoaPymF/lOvrH56kBxtrWT3WSRiA7ebVJDaLj3xsaG1xQVzzVrq8JwTbcG7rVKbHFKJI6vvZmft5AnGt22iBWyfS6iKHTXjQ6cRdJV6UIipGJy/A+UTofSKnAuR4/uSMH2Rt/eiMuUGljfm8OQOZfNOTJX7Qk0sVmebLSFrLSvaKmSjE5EJwft7LHvNREl7tbs9x4R3df/wr7XJyZr0YG9cjt/EifUGr96HfucOz0Z1ymlvvZgzTdBJleeyr+hp3Tjr/uQww45p5V1+pEgu5dOFcnGftbpAXH53OXVTwrNrfvEzNz6g9PjRCK3+JpvajO9qFoGntL93ewhcBIp3O421CAFm133WU6nS313o5MnyBrT/pbJMmduEw7EvPHhxTIjyXK4IKeykNHP0Ll3GxJ3cFaduMx9ncrcfgWypY4/noSuEIwzP4LMP7HRCy+WvLMN/i+VzcrcU2oze74hIGLzLIdNN7DN0M7nE43fbZWDmI88YJaGFbkgZwGjSW1WZrj1ldTmWc6aHuCP8jn0gKxzZmo0yDwgzJ//f6bqzqnH5KJEmX1MzpvhTqYFhIs2vwcYECna4GlDdM2v+yeIWSJt2IIblM5G7XVBzmSyrNHkM9We4b+jznjq8oSijesprtEVd0HJJTjmxhb+WF0vuIf4bqy5Jkazd50qM94nR5hnWAtZJsxgyA3C7G7bMHPi/XRMF1vXpNX2zmbb6Dv3CzMyS0ti3krkxkWXDC66mZZ+lR1rb8jF8+7bi2cv2zMdNC0RZnCd4xFYtl0LJMm60OPrRRe4F9y9r0I1kzl0G/2ExxWz3En0GuKObgAVx+MKMOoB2THq/okwk7GU3dkmyBeL97WJzak/N39ubJE7Md1Gt/G4YpbbT7totlPUe7jHFYUefGBmpk9J2rCT/FAnuC57sIuhYA2osliZ0TXsrvvIDQWPpWao0DXCPEOFPsJdaw1IEtDqzBR6pt0mXe3Fx1R/HGJbwMXzZMCs8J2NB7b7SIfL/Hs99j06XuZDifFFm/tWfZDv1II746nNsq2qJc7oK2L0DgvTNNkzHslBniF+3FhiD9ymYyjua0P2LFRYD1lm0h9JLLjVkNgsF6QzLOlMotq44Yx+jhC5RhlSy9zeNZmmrY7I0X+ugVX5hZxJzIwl38m48c0VefmdDDG4bxDXJ8njKp1LzA7I65aOm5kfjSpr9AY9gEV/cMZMRlN3n/1nK0TzIj2n8OV79MydEmOMZGWDBs7APz+gu3EqXMXIcev3STu2UM+T2nzG/vrEX/LRonkRXW81u93mw55JT5/hL5iT7EPF1X6vO+j1rbN5kyXuvTLNi8S02MXg5GRwEbM3mvFllmem7dgCm0pBm+0rX5lRxbN1f83e8LgKTPwKjaF6qnMYsX0IIJsxsNTXYnQrtKYNd41WIPMAZqsdm7vx/iVDNmOjMXSVMcdo6fqIeNvcZTMGtmovpeGx+ZQ4OeHr1fhw7QuuxMDu6HEuB4yrcBd03kHGLemIQAkw4+n+/r7N/drF2FimaW43pyTrjW5aLVlK9qZ8VxqDeMVWbFJS/wKLo2uQX99XtnvDqGEZnyYGpHytWGzM8l7j6KiRD8SmWCEhISEhISEhISEhISEhISEhISEhISEhIQ/0f2Q+pEtONAJdAAAAAElFTkSuQmCC',
  
  },

]
  // State
  const activeSort = ref('price')
  const selectedStars = ref([])
  const selectedHotels = ref([])
  const hotelSearch = ref('')
  const priceRange = ref([0, 1500])
  
  // Filtered hotel list
  const filteredHotels = computed(() => {
    return hotelChains.filter(h =>
      h.label.toLowerCase().includes(hotelSearch.value.toLowerCase())
    )
  })
  
  // Handlers
  const setActiveSort = (option) => {
    activeSort.value = option
  }
  
  const resetAllFilters = () => {
    activeSort.value = 'price'
    selectedStars.value = []
    selectedHotels.value = []
    priceRange.value = [0, 1500]
    hotelSearch.value = ''
  }
  
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/24'
  }
  </script>
  
  <style scoped>
  .hotel-filter {
    width: 100%;
    background: #fff;
    /* margin-left: 10px; */
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    padding: 16px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid #f0f0f0;
  }
  
  .filter-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    font-size: 18px;
    color: #333;
  }
  
  .reset-btn {
    color: #666;
    padding: 0;
    font-size: 14px;
  }
  .reset-btn:hover {
    color: #FF6421;
  }
  
  .filter-section {
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid #f0f0f0;
    margin-left: 10px;
  }
  .filter-section:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  
  .section-title {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin-bottom: 12px;
  }
  
  .sort-options {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .checkbox-group {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  .filter-option {
    display: flex;
    align-items: center;
  }
  
  .price-inputs {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
  }
  .price-input {
    flex: 1;
  }
  .price-separator {
    color: #999;
    font-size: 14px;
  }
  .price-slider {
    margin-top: 8px;
  }
  .search-input {
    margin-bottom: 12px;
  }
  
  .hotel-option {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .hotel-logo {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
  
  /* Element Plus Overrides */
  :deep(.el-button) {
    transition: all 0.2s;
  }
  :deep(.el-button:not(.is-primary)) {
    background-color: #f5f5f5;
    border-color: #e0e0e0;
    color: #666;
  }
  :deep(.el-button.is-primary) {
    background-color: #FF6421;
    border-color: #FF6421;
  }
  :deep(.el-checkbox__label) {
    font-size: 14px;
    color: #444;
  }
  
  @media (max-width: 768px) {
    .hotel-filter {
      width: 100%;
      margin-bottom: 20px;
    }
    .sort-options {
      justify-content: space-between;
    }
    .sort-options .el-button {
      flex: 1;
      min-width: calc(50% - 4px);
    }
  }
  </style>
  