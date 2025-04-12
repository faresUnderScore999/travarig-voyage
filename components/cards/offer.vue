<template>
    <div class="offerCard">
      <div class="offerContent">
        <div class="offerDate">{{ offerDate }}</div>
        <div class="offerPrice">{{ offerPrice }}</div>
        <button class="seeMoreButton">See More</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const offerDate = ref('March 25, 2025')
  const offerPrice = ref('1999 DT')

  </script>
  
  <style scoped>
  .offerCard {
    position: relative;
    background-image: url('https://www.visitusa.org.uk/memberassets/517/visitusa%20profile%20picture%20san%20fran%20bridge.jpg'); /* Your background image URL */
    background-size: cover;
    background-position: center;
    height: 450px;
    width: 300px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
  
  .offerContent {
    text-align: center;
    z-index: 1;
  }
  
  .offerDate {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .offerPrice {
    font-size: 24px;
    margin-bottom: 15px;
  }
  
  .seeMoreButton {
    background-color: orange;
    border: none;
    padding: 10px 20px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .seeMoreButton:hover {
    background-color: darkorange;
  }
  </style>
  