<template  >
  <div class="menu">
    <img src="~/assets/logo.png" alt="travigir" >
    <div
        v-for="item in navItems"
        :key="item.route"
        :class="['item', navigation.page === item.page ? 'selected' : '']"
        @click="changePage(item.page)"
      >
        {{ item.label }}
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
    navigation.changePageTo(page)
    console.log('pushing to ' + page)
    
    const route = navItems.find(item => item.page === page)?.route
    if (route) {
      router.push(route)
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
