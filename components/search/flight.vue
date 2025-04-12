<template>
    <div class="containerSearch">
      <div class="box">depart</div>
      <div class="box">destination</div>
      <div class="box">check in</div>
      <div class="box">check out</div>    
      <div class="box">passagens</div>
      <div></div>
      <div class="box">
        <el-input style="width: 90%" placeholder="Please input" />
      </div>
      <div class="box">
        <el-input style="width: 90%" placeholder="Please input" />
      </div>
      <div class="box">
        <el-date-picker type="date" placeholder="Pick a date" style="width: 90%" />
      </div>
      <div class="box">
        <el-date-picker type="date" placeholder="Pick a date" style="width: 90%" />
      </div>
      <div class="box NBpassenger">
      
      <el-dropdown trigger="click" :hide-on-click="false">
        <span class="el-dropdown-link">
            <strong>  {{NBadult+NBenfant+NBbbAsise+NBbbGenous}}</strong>
          
            <el-icon color="white" size="30" ><User /></el-icon>
            <el-icon color="white" size="30" class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item style="display: flex;justify-content: space-between;" :icon="Plus">Adultes  <el-input-number v-model="NBadult" :min="0" :max="10"/> </el-dropdown-item>
            <el-dropdown-item style="display: flex;justify-content: space-between;" :icon="CirclePlus">Enfants 2-11 ans  <el-input-number v-model="NBenfant" :min="0" :max="10"/> </el-dropdown-item>
            <el-dropdown-item style="display: flex;justify-content: space-between;" :icon="Check">Bebes avec place asise  <el-input-number v-model="NBbbAsise" :min="0" :max="10"/> </el-dropdown-item>
            <el-dropdown-item style="display: flex;justify-content: space-between;" :icon="CircleCheck">Bebes sur les genoux  <el-input-number v-model="NBbbGenous" :min="0" :max="10"/></el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
  
      </div>
      <div class="box"> <el-button  type="warning" round>SEARCH</el-button></div>
     
    </div>
  </template>
<script setup>
import { ref } from 'vue'

// Declare the 'page' variable using ref() for reactivity
const NBadult = ref(0);
const NBenfant = ref(0);
const NBbbAsise = ref(0);
const NBbbGenous = ref(0);
</script>

  <style scoped>
  .NBpassenger:hover{
    border-bottom:3px solid white;
  }
  strong{
    color: white;
  font-size: 40px;
  }
 .el-dropdown-menu_item{
    display: flex!important;
  justify-content: space-between!important;
 }
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
  .small-text {
  font-size: 12px;
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
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
  </style>
  