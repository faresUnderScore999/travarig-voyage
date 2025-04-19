<template>
  <div class="">
    <resSearch />
    <div class="reservation-page">
      <div class="reservation">
        <h2>No Reservation Found</h2>
        <p>Make a reservation or contact the support.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import resSearch from "~/components/search/reservation.vue";
definePageMeta({
  middleware: 'authenticate'  // this will trigger middleware in `middleware/auth.js`
})
</script>

<style scoped>
.reservation-page {
  padding: 20px;
  background: #f5f5f5;
}

.reservation {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-top: 20px;
}

.reservation h2 {
  font-size: 22px;
  margin-bottom: 10px;
}

.reservation p {
  color: #666;
}
</style>
