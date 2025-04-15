<template>

<client-only>
      <el-date-picker v-if="show"
        v-model="date"
        type="daterange"
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
      />
    </client-only>

  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  const show = ref(true);
  const date = ref(null);
  const formFlight = flightStore();
  
  watch(date, (newValue) => {
    formFlight.dateIn = newValue
  });
  onBeforeUnmount(() => {
    show.value=false
  console.log('Component is about to be destroyed')
  // Clean up listeners, timers, etc.
})
  </script>
  <style scoped>
  .date-picker-wrapper {
    display: flex;
    justify-content: center;
    padding: 1rem;
  }
  </style>
  