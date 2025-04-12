<template>
  <div>
  <div class="container">
    <h1 class="headline">TRA<strong style="color: orange">V</strong>AGIR</h1>
    <h1 class="subheadline">Choose your next destination</h1>
    <div class="search_tab">
      <div
        :class="['item', page === 'HOTELS' ? 'selectedItem' : '']"
        @click="page = 'HOTELS'"
      >
        <HotelIcon />HOTELS
      </div>
      <div
        :class="['item', page === 'FLIGHTS' ? 'selectedItem' : '']"
        @click="page = 'FLIGHTS'"
      >
        <PlaneIcon />FLIGHTS
      </div>
      <div
        :class="['item', page === 'TRIPS' ? 'selectedItem' : '']"
        @click="page = 'TRIPS'"
      >
        <TripIcon />Vacation Packages
      </div>
      <div
        :class="['item', page === 'ACTIVITIES' ? 'selectedItem' : '']"
        @click="page = 'ACTIVITIES'"
      >
        <ActivitiesIcon />ACTIVITIES
      </div>
    </div>
  
  </div>
  <div v-show="page === 'FLIGHTS'"><FlightSearch/></div>
<div v-show="page === 'HOTELS'" class="search"><HotelSearch/></div>

  
  <div class="offersSection">
    <h1>OUR BEST OFFERS</h1>
    <div class="offers">
      <OfferCard v-for="i in 3" :key="i" />
    </div>
  </div>
  
</div>
</template>

<script setup>
import { ref, watch  } from "vue"; // Import ref for reactive state
import PlaneIcon from "~/components/icons/plane.vue";
import OfferCard from "~/components/cards/offer.vue";
import HotelSearch from "~/components/search/hotel.vue";
import FlightSearch from "~/components/search/flight.vue";
import TripIcon from "~/components/icons/trip.vue";
import ActivitiesIcon from "~/components/icons/activities.vue";
import HotelIcon from "~/components/icons/hotel.vue";

// Declare the 'page' variable using ref() for reactivity
const page = ref("FLIGHTS");
watch(page, (newPage, oldPage) => {
  console.log('Page changed from', oldPage, 'to', newPage);
});
</script>

<style scoped>
.offers{
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 50px;
}
.offersSection{
  height: fit-content;
  background-color: white;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
}
.item {
  display: flex;
  align-items: center;
  width: inherit;
  height: 100%;

  justify-content: center;
}
.search{
  cursor: pointer;
}
.item:hover {
  background-color: orange;
  cursor: pointer;
}
.selectedItem {
  background-color: orange;
}
.headline {
  font-size: 112px;
  font-weight: 900;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 0;
}

.subheadline {
  font-family: Beyond;
  font-size: 100px;
  color: rgb(255, 255, 255);

  -webkit-font-smoothing: antialiased;
  text-shadow: rgba(0, 0, 0, 0.01) 0px 0px 1px;
}

.search_tab {
  overflow: hidden;
  text-transform: uppercase;
  justify-content: space-around;
  display: flex;
  height: 94px;
  align-items: center !important;
  flex-direction: row !important;
  background-color: white;
  height: 94px;
  position: absolute;
  bottom: 0%;
  left: 0%;
  width: 100%;
  -webkit-border-top-left-radius: 50px;
  -webkit-border-top-right-radius: 30px;
  -moz-border-radius-topleft: 50px;
  -moz-border-radius-topright: 30px;
  border-top-left-radius: 50px;
  border-top-right-radius: 30px;
}
.container {
  font-weight: bold;
  border-radius: 30px;
  padding: 20px;
  height: 500px;
  background-color: rgba(83, 83, 76, 0.5);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  margin-top: 20px;
}

el-button {
  margin-right: 10px;
}
</style>
