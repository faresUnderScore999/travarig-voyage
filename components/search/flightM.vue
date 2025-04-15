<template>
  <div>
  
    <div class="block">
      <el-autocomplete
        v-model="formFlight.depart.displayname"
        :fetch-suggestions="querySearchAsync"
        popper-class="my-autocomplete"
        placeholder="Please input"
        @select="handleSelectI"
      >
      
        <template #default="{ item }">
          <div class="value">{{ item.displayname  }}</div>
          <span class="link">{{ item.id }}</span>
        </template>
      </el-autocomplete>

    </div>

     <div class="block">
      <el-autocomplete
        v-model="formFlight.destination.displayname"
        :fetch-suggestions="querySearchAsync"
        popper-class="my-autocomplete"
        placeholder="Please input"
        @select="handleSelectO"
      >
     
        <template #default="{ item }">
          <div class="value">{{ item.displayname  }}</div>
          <span class="link">{{ item.id }}</span>
        </template>
      </el-autocomplete>

    </div>

    <div class="block">
       <dateIn/>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref,watch } from "vue";
import dateIn from"~/components/inputs/dateIn.vue"
const links = ref([
  { value: "vue" },
  { value: "nuxt" },
  { value: "vite" },
  { value: "element-plus" },
]);
const formFlight = flightStore();

const handleSelectI = (item) => {
    formFlight.depart=item
}
const handleSelectO = (item) => {
    formFlight.destination=item
}

const querySearchAsync = async (queryString, cb) => {
  if (queryString != "") {
    console.log(queryString);
    const res = await fetchSearchResults(queryString);
    console.log(res);
    links.value = res;
    cb(res);
  }
};
watch(formFlight, (newValue, oldValue) => {
  console.log(newValue.dateIn)
})
const fetchSearchResults = async (queryString) => {
  const url =
    "https://booking.kayak.com/mvm/smartyv2/search?s=airportonly&where=" +
    queryString +
    "&lc_cc=FR&lc=fr";
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("API error:", error);
    return [];
  }
};
</script>
<style scoped lang="css">
/* Your styles here */
</style>
