<template>
    <div class="containerSearch">
      <div class="box">Reservation Code</div>
      <div class="box">Check-in Date</div>
      <div class="box">-</div>
     <DIV></DIV>

      <div class="box">
      
        <el-input 
            
            placeholder="code or id of reservation" 
            clearable
            style="width: 90%"
          >
            <template #prefix>
                <el-icon><Paperclip /></el-icon>
            </template>
          </el-input>
      </div>
      <div class="box">
        <el-date-picker type="date" placeholder="Pick a date" style="width: 90%" />
      </div>
      <div class="box">
       -
      </div>
    
      <div class="box">
         <!-- <el-button  type="warning" round @click="shearchHotel">SEARCH</el-button> -->
         <el-button 
            type="warning" 
            round 
            @click="searchHotel"
            :loading="loading"
          >
            <template #icon>
              <el-icon><Search /></el-icon>
            </template>
            SEARCH
          </el-button>
      </div>
     
    </div>
  </template>
  <script setup>
  import { ref } from "vue"; // Import ref for reactive state
  import { useRouter } from 'vue-router'
  const router =useRouter()
  // Declare the 'page' variable using ref() for reactivity
  const num = ref("HOTELS");
  
  const shearchHotel =()=>{
    router.push('/hotel')
  }
  </script>
  <style scoped>
  .box{
      display:flex;
      justify-content:center;
      align-items:center;
      color:white;
      font-size: 15px;
    font-weight: 300;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    letter-spacing: 4px;
  }
  .containerSearch {
    width: 100%;
    height: 120px;
    background: #e09f12;
    background: linear-gradient(
      280deg,
      rgba(224, 159, 18, 1) 0%,
      rgba(240, 103, 91, 1) 32%,
      rgba(252, 176, 69, 1) 100%
    );
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
  </style>
  