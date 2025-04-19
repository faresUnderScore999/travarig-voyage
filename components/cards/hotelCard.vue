<template>
    <el-card class="hotel-card" shadow="hover">
      <!-- Image with wishlist button -->
      <div class="image-container">
        <el-image 
          :src="hotel.image" 
          :alt="hotel.name"
          fit="cover"
          class="hotel-image"
        />
        <el-button 
          circle 
          class="wishlist-btn"
          @click="toggleWishlist"
        >
          <el-icon :color="isWishlisted ? 'orange' : 'white'">
            <el-icon><Opportunity /></el-icon>
          </el-icon>
        </el-button>
      </div>
  
      <!-- Hotel info -->
      <div class="hotel-info">
        <div class="header">
          <h3 class="name">
            <el-link :href="hotel.url" target="_blank" :underline="false">
              {{ hotel.name }}
            </el-link>
          </h3>
          <div class="rating">
            <el-rate
              v-model="hotel.rating"
              disabled
              :max="5"
              :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
            />
            <span class="rating-text">{{ hotel.ratingScore }} ({{ hotel.reviewCount }} reviews)</span>
          </div>
        </div>
  
        <!-- Location info -->
        <div class="location">
            <el-icon><LocationInformation /></el-icon>
          <span>{{ hotel.location }}</span>
          <el-tag size="small" class="distance">{{ hotel.distance }} from center</el-tag>
        </div>
  
        <!-- Features -->
        <div class="features">
          <el-tag 
            v-for="feature in hotel.features" 
            :key="feature"
            size="small"
            effect="plain"
          >
            {{ feature }}
          </el-tag>
        </div>
  
        <!-- Room type -->
        <div class="room-type">
          <h4>{{ hotel.roomType }}</h4>
          <ul class="room-details">
            <li v-for="detail in hotel.roomDetails" :key="detail">
              {{ detail }}
            </li>
          </ul>
          <div class="policies">
            <div class="policy">
                <el-icon><SuccessFilled /></el-icon>
              <span>{{ hotel.cancellationPolicy }}</span>
            </div>
            <div class="policy">
                <el-icon><SuccessFilled /></el-icon>
              <span>{{ hotel.paymentPolicy }}</span>
            </div>
          </div>
        </div>
  
        <!-- Price and CTA -->
        <div class="price-section">
          <div class="price-info">
            <div class="price">{{ hotel.price }} {{ hotel.currency }}</div>
            <div class="price-detail">{{ hotel.priceDetail }}</div>
            <div class="tax-info">{{ hotel.taxInfo }}</div>
          </div>
          <el-button 
            type="primary" 
            class="book-btn"
            :href="hotel.url"
            target="_blank"
          >
            View Availability
          </el-button>
        </div>
      </div>
    </el-card>
  </template>
  
  <script setup>
  import { ref } from 'vue'

  
  const props = defineProps({
    hotel: {
      type: Object,
      required: true,
      default: () => ({
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/428248382.jpg?k=23fa35a21baf133862865f885562329ef8f1f6d91ea9675e01d4e02d17e81ce3&o=&hp=1',
        name: 'Appartement quartier Dar Sebastian, Hammamet',
        rating: 3,
        ratingScore: 8.2,
        reviewCount: 53,
        location: 'Hammamet',
        distance: '2.5 km',
        features: ['Near beach', 'Free WiFi', 'Kitchen'],
        roomType: 'Apartment with Balcony',
        roomDetails: [
          'Entire apartment',
          '1 bedroom',
          '1 living room',
          '1 bathroom',
          '1 kitchen',
          '75 m²'
        ],
        cancellationPolicy: 'Free cancellation',
        paymentPolicy: 'No prepayment needed - Pay at property',
        price: 'TND 761',
        currency: 'TND',
        priceDetail: '6 nights, 2 adults',
        taxInfo: 'Additional charges may apply',
        url: '#'
      })
    }
  })
  
  const isWishlisted = ref(false)
  
  const toggleWishlist = () => {
    isWishlisted.value = !isWishlisted.value
  }
  </script>
  
  <style>
  .hotel-card {
    width: 100%;
    max-width: 400px;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease;
    margin: 10px;
  }
  
  .hotel-card:hover {
    transform: translateY(-4px);
  }
  
  .image-container {
    position: relative;
    height: 240px;
    overflow: hidden;
  }
  
  .hotel-image {
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease;
  }
  
  .hotel-card:hover .hotel-image {
    transform: scale(1.05);
  }
  
  .wishlist-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    background: rgba(0, 0, 0, 0.5);
    border: none;
    backdrop-filter: blur(4px);
  }
  
  .wishlist-btn:hover {
    background: rgba(0, 0, 0, 0.7);
  }
  
  .hotel-info {
    padding: 16px;
  }
  
  .header {
    margin-bottom: 12px;
  }
  
  .name {
    margin: 0 0 8px 0;
    font-size: 18px;
    font-weight: 600;
  }
  
  .name a {
    color: var(--el-text-color-primary);
    text-decoration: none;
  }
  
  .name a:hover {
    color: var(--el-color-primary);
  }
  
  .rating {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .rating-text {
    font-size: 14px;
    color: var(--el-text-color-secondary);
  }
  
  .location {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 12px;
    font-size: 14px;
    color: var(--el-text-color-secondary);
  }
  
  .distance {
    margin-left: 8px;
  }
  
  .features {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 16px;
  }
  
  .features .el-tag {
    background-color: var(--el-color-primary-light-9);
    color: var(--el-color-primary);
    border-color: var(--el-color-primary-light-5);
  }
  
  .room-type {
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--el-border-color-light);
  }
  
  .room-type h4 {
    margin: 0 0 8px 0;
    font-size: 16px;
  }
  
  .room-details {
    margin: 0 0 12px 0;
    padding-left: 18px;
    font-size: 14px;
    color: var(--el-text-color-secondary);
  }
  
  .room-details li {
    margin-bottom: 4px;
  }
  
  .policies {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .policy {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
  }
  
  .policy .el-icon {
    color: var(--el-color-success);
  }
  
  .price-section {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  
  .price-info .price {
    font-size: 22px;
    font-weight: 700;
    color: var(--el-color-primary);
  }
  
  .price-info .price-detail,
  .price-info .tax-info {
    font-size: 12px;
    color: var(--el-text-color-secondary);
  }
  
  .book-btn {
    font-weight: 600;
    padding: 10px 16px;
  }
  </style>