<template>
  <el-card class="hotels-list-item" :body-style="{ padding: '0' }">
    <figure class="image-container">
      <el-image 
        :src="state.imageSrc" 
        :alt="state.title" 
        fit="cover" 
        class="card-image"
        loading="lazy"
      />
    </figure>
    
    <div class="card-content">
      <div class="card-header">
        <h3 class="title">
          <el-link 
            :href="url" 
            :title="title" 
            target="_blank" 
            type="primary"
            :underline="false"
          >
            {{ state.title }}
          </el-link>
          
          <el-rate
            v-model="state.rating"
            disabled
            :max="5"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
            class="rating-stars"
          />
        </h3>
        
        <p class="location">{{ state.location }}</p>
        <p class="description">{{ state.description }}</p>
      </div>
      
      <div class="card-footer">
        <div class="price-section">
          <span class="price">{{ state.price }}</span>
          <span class="currency">{{ state.currency }}</span>
          <span class="price-note">{{ state.priceNote }}</span>
        </div>
        
        <el-button 
       
          type="primary" 
          :href="url" 
          target="_blank"
           class="cust-button"
        >
          Voir l'offre
        </el-button>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { reactive } from 'vue' // ✅ CORRECT

const state = reactive({
  imageSrc: 'https://hotelbellevuepark.tn/cr.fwk/images/hotels/Hotel-554-20230424-113727.jpg',
  title: 'Hôtel Sentido Bellevue Park',
  url: '/hotels-tunisie/sousse/hotel-sentido-bellevue-park-1073.html',
  rating: 5,
  location: 'Sousse - Tunisie',
  description: 'L\'hôtel accepte uniquement Les Familles (Couples sans Enfants ou Couples avec Enfants).',
  price: '139',
  currency: 'TND',
  priceNote: 'en AIS'
})
</script>

<style scoped>
.hotels-list-item {
  height: 100%;
  margin: 10px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hotels-list-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.image-container {
  margin: 0;
  height: 200px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.hotels-list-item:hover .card-image {
  transform: scale(1.05);
}

.card-content {
  padding: 16px;
}

.card-header {
  margin-bottom: 16px;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-size: 1.1rem;
}

.title a {
  font-weight: 600;
  color: var(--el-text-color-primary);
}

.rating-stars {
  margin-left: 8px;
}

.location {
  color: var(--el-text-color-secondary);
  margin-bottom: 8px;
  font-size: 0.9rem;
}

.description {
  color: var(--el-color-success);
  font-size: 0.9rem;
  margin-bottom: 0;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid var(--el-border-color-light);
}

.price-section {
  display: flex;
  align-items: baseline;
}

.price {
  font-size: 1.5rem;
  font-weight: 600;
  color: orange;
}

.currency {
  font-size: 0.9rem;
  margin-left: 2px;
}

.price-note {
  font-size: 0.8rem;
  color: var(--el-text-color-secondary);
  margin-left: 4px;
}

.offer-button {
  font-weight: 500;
  padding: 8px 16px;
}
</style>