<template  >
  <div class="menu">
    <img src="~/assets/logo.png" alt="travigir" >
    <div
        v-for="item in navItems"
        :key="item.route"
        :class="['item', navigation.page === item.page ? 'selected' : '']"
       
      >
      <div v-if="item.page=='Offers'">
        <ClientOnly>
        <el-dropdown class="itemLabl">
        <span >
          {{ item.label }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
       
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item  @click="changePage('Flight')"><el-icon><SuitcaseLine /></el-icon>Flights</el-dropdown-item>
            <el-dropdown-item  @click="changePage('Hotel')"><el-icon><OfficeBuilding /></el-icon> Hotel </el-dropdown-item>
            <el-dropdown-item  ><el-icon><DishDot /></el-icon> Hajj & Omra </el-dropdown-item>
          </el-dropdown-menu>
          
        </template>
     
      </el-dropdown>
    </ClientOnly>
        </div>
      <div v-else  @click="changePage(item.page)"> {{ item.label }}</div>
       
      </div>
  </div>

</template>

<script setup>

import { useRouter } from 'vue-router'
const router = useRouter()
const navigation = navigationStore()
const isMenuOpen = ref(false)
const navItems = [
  { page: 'Home', label: 'Home', route: '/' },
  { page: 'Offers', label: 'Offers', route: '/vol' },
  { page: 'Assistance', label: 'Visa & Travel Documents Assistance', route: '/assistance' },
  { page: 'Contact', label: 'Contact', route: '/Contact' }
]

const changePage = (page) => {
  try {
    const newArr = [...navItems, 
    { page: 'Flight', label: 'Offers', route: '/vol' },
    { page: 'Hotel', label: 'Offers', route: '/hotel' },];
    ['Flight', 'Hotel'].includes(page)? navigation.changePageTo('Offers'): navigation.changePageTo(page);
    console.log('pushing to ' + page)  
    const route = newArr.find(item => item.page === page)
    if (route.route) {
      router.push(route.route)
      
    }
    
    // Close menu on mobile
    if (window.innerWidth < 768) {
      isMenuOpen.value = false
    }
  } catch (err) {
    console.log("problem routing")
    console.log(err)
  }
}



</script>

<style scoped>
/* Transparent background for the anchor */
.menu {

  font-family: "Open Sans", sans-serif;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
}

.selected {
  color: rgba(255, 255, 255);
  border-bottom: solid 1px white;
}
.itemLabl {
  
  color: rgba(255, 255, 255, 0.7)!important;
}
.item:hover {
  cursor: pointer;
  color: rgba(255, 255, 255, 1);
}
img {
  max-width: 100px; /* Optional: limit the image size */
  height: auto;
  margin-right: 10px; /* Space between image and title */
}
</style>
