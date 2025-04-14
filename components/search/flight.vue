<template>
  <div class="containerSearch">
    <div class="box">depart</div>
    <div class="box">destination</div>
    <div class="box">check in</div>
    <div class="box">check out</div>
    <div class="box">passagens</div>
    <div class="box">action</div>
    <div style="margin-left: 10px" class="box">
      <el-autocomplete
        v-model="formFlight.depart.displayname"
        :fetch-suggestions="querySearch"
        popper-class="my-autocomplete"
        placeholder="Please input"
        @select="handleSelectdepart"
      >
        <template #suffix>
          <el-icon class="el-input__icon" @click="handleIconClick">
            <edit />
          </el-icon>
        </template>
        <template #default="{ item }">
          <div class="list_aeroport">
            <aeroportIcon style="margin-left: -10px; padding-right: 10px" />
            <div>
              <div class="value">{{ item.displayname }}</div>
              <span class="link">{{ item.cityname }}</span>
            </div>
          </div>
        </template>
      </el-autocomplete>
    </div>
    <div style="margin-left: 10px" class="box">
      <el-autocomplete
        v-model="formFlight.destination.displayname"
        :fetch-suggestions="querySearch"
        popper-class="my-autocomplete"
        placeholder="Please input"
        @select="handleSelectdestination"
      >
        <template #suffix>
          <el-icon class="el-input__icon" @click="handleIconClick">
            <edit />
          </el-icon>
        </template>
        <template #default="{ item }">
          <div class="list_aeroport">
            <aeroportIcon style="margin-left: -10px; padding-right: 10px" />
            <div>
              <div class="value">{{ item.displayname }}</div>
              <span class="link">{{ item.cityname }}</span>
            </div>
          </div>
        </template>
      </el-autocomplete>
    </div>
    <div class="box">
      <el-date-picker
        v-model="formFlight.dateDepart"
        type="date"
        placeholder="Pick a date"
        style="width: 90%"
      />
    </div>
    <div class="box">
      <el-date-picker
        v-model="formFlight.dateOut"
        type="date"
        placeholder="Pick a date"
        style="width: 90%"
      />
    </div>
    <div class="box NBpassenger">
      <el-dropdown trigger="click" :hide-on-click="false">
        <span class="el-dropdown-link">
          <strong>
            {{
              formFlight.NBadult +
              formFlight.NBenfant +
              formFlight.NBbbAsise +
              formFlight.NBbbGenous
            }}</strong
          >

          <el-icon color="white" size="30"><User /></el-icon>
          <el-icon color="white" size="30" class="el-icon--right"
            ><arrow-down
          /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              style="display: flex; justify-content: space-between"
              :icon="Plus"
              >Adultes
              <el-input-number
                v-model="formFlight.NBadult"
                :min="0"
                :max="10"
              />
            </el-dropdown-item>
            <el-dropdown-item
              style="display: flex; justify-content: space-between"
              :icon="CirclePlus"
              >Enfants 2-11 ans
              <el-input-number
                v-model="formFlight.NBenfant"
                :min="0"
                :max="10"
              />
            </el-dropdown-item>
            <el-dropdown-item
              style="display: flex; justify-content: space-between"
              :icon="Check"
              >Bebes avec place asise
              <el-input-number
                v-model="formFlight.NBbbAsise"
                :min="0"
                :max="10"
              />
            </el-dropdown-item>
            <el-dropdown-item
              style="display: flex; justify-content: space-between"
              :icon="CircleCheck"
              >Bebes sur les genoux
              <el-input-number
                v-model="formFlight.NBbbGenous"
                :min="0"
                :max="10"
            /></el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="box">
      <el-button type="warning" round @click="submitSearch">SEARCH</el-button>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
import { Edit } from "@element-plus/icons-vue";
import aeroportIcon from "~/components/icons/aeroport.vue";
const router = useRouter();
const navigation = navigationStore();

const links = ref([]);
// Declare the  variable using ref() for reactivity

const formFlight = flightStore();

const querySearch = async (queryString, cb) => {
  console.log(queryString);
  const res = await fetchSearchResults(queryString);
  console.log(res);
  links.value = res;
  cb(res);
};

const submitSearch = () => {
  console.log("/vol" + navigation.page);
  if(navigation.page!='vol'){
  navigation.changePageTo("vol");

  router.push("/vol");}
};

const handleSelectdepart = (item) => {
  console.log("Selected item:", item);
  Object.assign(formFlight.depart, item);
};
const handleSelectdestination = (item) => {
  console.log("Selected item:", item);
  Object.assign(formFlight.destination, item);
};

const handleIconClick = (ev) => {
  console.log("Icon clicked:", ev);
};
//this is booking
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

<style scoped>
.value {
  color: black;
  font-size: 15px;
}
.NBpassenger:hover {
  border-bottom: 3px solid white;
}
strong {
  color: white;
  font-size: 40px;
}
.el-dropdown-menu_item {
  display: flex !important;
  justify-content: space-between !important;
}
.list_aeroport {
  display: flex;

  align-items: center;
}
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
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
