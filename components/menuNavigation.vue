<template>
  <div class="menu">
    <div
      :class="['item', page === 'Home' ? 'selected' : '']"
      @click="page = 'Home'"
    >
      Home
    </div>
    <div
      :class="['item', page === 'Documents Assistance' ? 'selected' : '']"
      @click="page = 'Documents Assistance'"
    >
    Visa & Travel Documents Assistance
    </div>
 
    <div
      :class="['item', page === 'Offers' ? 'selected' : '']"
      @click="page = 'Offers'"
    >
      Offers
    </div>
  
    <div
      :class="['item', page === 'Contact' ? 'selected' : '']"
      @click="page = 'Contact'"
    >
      Contact
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: "Home",
    };
  },
};
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
  align-items: self-start;
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
</style>
