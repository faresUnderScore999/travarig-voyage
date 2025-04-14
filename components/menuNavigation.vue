<template  >
  <div class="menu">
    <img src="~/assets/logo.png" alt="travigir" >
    <div
      :class="['item', navigation.page === 'Home' ? 'selected' : '']"
      @click="changePage('Home')"
    >
      Home
    </div>
    <div
      :class="['item', navigation.page === 'Assistance' ? 'selected' : '']"
      @click="changePage('Assistance')"
    > Visa & Travel Documents Assistance
    
    </div>
 
    <div
      :class="['item', navigation.page === 'Offers' ? 'selected' : '']"
      @click="changePage('Offers')"
    >
      Offers
    </div>
  
    <div
      :class="['item', navigation.page === 'Contact' ? 'selected' : '']"
      @click="changePage('Contact')"
    >
      Contact
    </div>
  </div>
</template>

<script setup>

import { useRouter } from 'vue-router'
const router = useRouter()
const navigation = navigationStore()

const changePage = (Npage) => {
  try{
  navigation.changePageTo(Npage)
  console.log('pushing to ' + Npage)
  
  if (Npage === 'Home') {
    router.push('/')
  } else if (Npage === 'Assistance') {
    router.push('/assistance')
  } else if (Npage === 'vol') {
    router.push('/vol/index')
  }}
  catch(err){
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
