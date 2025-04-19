<template>
    <div class="container-hotel">
      <strong>Find yo<div>u</div>r hotel</strong>
      <HotelSearch />
      <div class="content">
       
        <div class="menu">
            <client-only>
            <HotelMenu/>
            </client-only>
        </div>
        <div class="offers">
          <div v-for="i in 10" :key="i">
            <client-only>
            <HotelCard/>
            </client-only>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import HotelSearch from '~/components/search/hotel.vue'
 import HotelMenu from '~/components/menus/hotelMenu.vue'
   import HotelCard from '~/components/cards/hotelCard.vue'
   definePageMeta({
  middleware: 'authenticate'  // this will trigger middleware in `middleware/auth.js`
})
  const sampleHotel = {
    name: 'Hilton Garden Inn',
    location: 'Rome, Italy',
    rating: 4.5,
    reviewsCount: 832,
    pricePerNight: '€129',
    image: 'https://example.com/hotel.jpg',
    amenities: ['Free WiFi', 'Pool', 'Gym', 'Breakfast included'],
    checkIn: '15:00',
    checkOut: '11:00',
    roomsAvailable: 3
  }
  </script>
  
  <style scoped>
  strong div {
    color: orange;
  }
  strong {
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 50px;
    padding-top: 50px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    font-family: Beyond;
    font-size: 50px;
    color: white;
    text-transform: uppercase;
  }
  .content {
    width: 100%;
    display: flex;
  }
  .menu {
    width: 25%;
    display: flex;
    justify-content: center;
    overflow: hidden;
  }
  .offers {
    background: #f0f3f5;
    width: 75%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 6fr)); 
   

  }
  .container-hotel {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>
  