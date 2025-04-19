<template>
  <div class="flight-filter">
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

    <!-- Flight Class Section -->
    <div class="filter-section">
      <h3 class="section-title">Flight Class</h3>
      <el-checkbox-group 
        v-model="selectedClasses" 
        class="checkbox-group"
      >
        <el-checkbox
          v-for="classOption in classOptions"
          :key="classOption.value"
          :label="classOption.value"
          class="filter-option"
        >
          {{ classOption.label }}
        </el-checkbox>
      </el-checkbox-group>
    </div>

    <!-- Price Range Section -->
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
          :max="10000"
          controls-position="right"
          placeholder="Max"
          class="price-input"
        />
      </div>
      <el-slider
        v-model="priceRange"
        range
        :min="0"
        :max="10000"
        :step="100"
        class="price-slider"
      />
    </div>

    <!-- Airlines Section -->
    <div class="filter-section">
      <h3 class="section-title">Airlines</h3>
      <el-input
        v-model="airlineSearch"
        placeholder="Search airlines..."
        clearable
        prefix-icon="Search"
        class="search-input"
      />
      <el-checkbox-group 
        v-model="selectedAirlines" 
        class="checkbox-group"
      >
        <el-checkbox
          v-for="airline in filteredAirlines"
          :key="airline.value"
          :label="airline.value"
          class="filter-option"
        >
          <div class="airline-option">
            <img 
              :src="getAirlineLogo(airline.code)" 
              :alt="airline.label"
              class="airline-logo"
              @error="handleImageError"
            >
            <span>{{ airline.label }}</span>
          </div>
        </el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Operation } from '@element-plus/icons-vue';

// Sort options
const sortOptions = [
  { value: 'price', label: 'Price' },
  { value: 'departure', label: 'Departure' },
  { value: 'arrival', label: 'Arrival' },
  { value: 'duration', label: 'Duration' }
];

// Class options
const classOptions = [
  { value: 'economy', label: 'Economy' },
  { value: 'premium', label: 'Premium Economy' },
  { value: 'business', label: 'Business' },
  { value: 'first', label: 'First Class' }
];

// Airline options
const airlineOptions = [
  { value: 'tunisair', label: 'Tunisair', code: 'TU' },
  { value: 'royal_air_maroc', label: 'Royal Air Maroc', code: 'AT' },
  { value: 'turkish', label: 'Turkish Airlines', code: 'TK' },
  { value: 'nouvelair', label: 'Nouvelair', code: 'BJ' },
  { value: 'air_france', label: 'Air France', code: 'AF' },
  { value: 'egyptair', label: 'Egyptair', code: 'MS' }
];

// Reactive state
const activeSort = ref('price');
const selectedClasses = ref([]);
const selectedAirlines = ref([]);
const airlineSearch = ref('');
const priceRange = ref([0, 5000]);

// Computed properties
const filteredAirlines = computed(() => {
  const searchTerm = airlineSearch.value.toLowerCase();
  return airlineOptions.filter(airline => 
    airline.label.toLowerCase().includes(searchTerm))
});

// Methods
const setActiveSort = (option) => {
  activeSort.value = option;
  // Emit event or update store
};

const resetAllFilters = () => {
  activeSort.value = 'price';
  selectedClasses.value = [];
  selectedAirlines.value = [];
  priceRange.value = [0, 5000];
  airlineSearch.value = '';
  // Emit event or update store
};

const getAirlineLogo = (code) => {
  return `https://www.gstatic.com/flights/airline_logos/70px/${code}.png`;
};

const handleImageError = (event) => {
  event.target.src = 'https://via.placeholder.com/70';
};
</script>

<style scoped>
.flight-filter {
  width: 100%;
  background: #ffffff;
  /* margin-left:10px; */
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
  margin-right: 0;
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

.airline-option {
  display: flex;
  align-items: center;
  gap: 8px;
}

.airline-logo {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

/* Element Plus overrides */
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
  .flight-filter {
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