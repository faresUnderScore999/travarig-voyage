<template>
  <div>
    <div class="OnTop">
      <div class="box">
        <div class="underbox">
          <div>
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5V1H7V5L4.5 7.5L8.5 11.5L11 9H15V15H11C5.47715 15 1 10.5228 1 5Z"
                fill="#ffffff"
              />
            </svg>
          </div>
          <div style="margin-left: 10px; display: flex; align-items: center; color: white">
            +216 51000000
          </div>
        </div>
      </div>
      <div class="box">
        <div>
          <div class="underbox">
            <div>
              <svg
                fill="#ffffff"
                width="20px"
                height="20px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="icon-hover">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"
              fill="#ffffff"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </div>
      <div v-show="!loged.logedin" class="box log">
        <el-button  class="white-link-button" type="primary" link @click="loginSearchdepart = true" 
          >LOGIN</el-button
        >
      </div>
      <div v-show="!loged.logedin" class="box log">
        <el-button :key="'plain'" type="" link @click="registerSearchdepart = true" >REGISTER</el-button>
      </div>
      <div v-show="loged.logedin" class="box loged">
        <el-button :key="'plain'" type="" link  >  <el-icon size="30"><Avatar /></el-icon></el-button>
      
      </div>
    </div>

    <el-dialog :id="dialogId" v-model="loginSearchdepart" title="Login Form" width="500">
    <el-form :model="form">
      <el-form-item label="Email" :label-width="formLabelWidth">
        <el-input v-model="loginForm.mail" placeholder="enter your email here" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Password" :label-width="formLabelWidth">
        <el-input v-model="loginForm.pwd" placeholder="enter your password here" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="loginSearchdepart = false">Cancel</el-button>
        <el-button type="primary" @click="loginSubmit">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
  <el-dialog :id="dialogId" v-model="registerSearchdepart" title="Register Form" width="900">
    <el-form :model="form">
      <el-form-item label="Full Name" :label-width="formLabelWidth">
        <el-input v-model="form.mail" placeholder="enter your Full Name here" autocomplete="on" />
      </el-form-item>
      <el-form-item label="Password" :label-width="formLabelWidth">
        <el-input v-model="form.mail" placeholder="enter your password here" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Password" :label-width="formLabelWidth">
        <el-input v-model="form.mail" placeholder="confirm your password here" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Email" :label-width="formLabelWidth">
        <el-input v-model="form.mail" placeholder="enter your email here" autocomplete="on" />
      </el-form-item>
      <el-form-item label="capchat" :label-width="formLabelWidth">
        <el-input v-model="form.mdp" placeholder="" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="registerSearchdepart = false">Cancel</el-button>
        <el-button type="primary" @click="registerSearchdepart = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const { generateId } = useNuxtApp().$idProvider;
const dialogId = generateId()

// Reactive state
const loginSearchdepart = ref(false);
const registerSearchdepart = ref(false);
const loginForm=ref({
  mail:"",
  pwd:""
})
const loged = useLoginStore()
const loginSubmit = () => {

  loged.login(loginForm.value)
  loginSearchdepart.value = false
  console.log(loged.logedin)
}

// Form model
const form = ref({
  mail: '',
  mdp:''
});

// Label width for form items
const formLabelWidth = '120px';
</script>


<style scoped>

nav {
  width: 100%;
}
router-link {
  text-decoration: none; /* Remove underline */
  color: inherit; /* Keep the color of the parent element */
}

.white-link-button {
  color: white !important;
}

.white-link-button:hover {
  color: orange !important; /* Optional: on hover */
}
.box div svg:hover {
  border-bottom: 2px solid white;
}
.log {
  position: relative;
  left: calc(100% - 400px);
  color: white;
}
.loged{
  position: absolute;
  right: 2%;
}
.box {
  border: 0px #000000 solid;
  width: fit-content;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none; /* removes the bullet points */
}

li {
  margin: 0;
  padding: 0;
}
.OnTop {
  display: flex;
  background: rgba(36, 27, 1, 0.79);
  backdrop-filter: blur(8px);
}
.underbox {
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
header {
  background-color: rgba(128, 84, 0, 0.6); /* semi-transparent purple */
  backdrop-filter: blur(8px); /* blur effect */
  color: white;
  border-top: 1px solid white;
  color: white;

  display: flex;
  align-items: center;
}

img {
  max-width: 100px; /* Optional: limit the image size */
  height: auto;
  margin-right: 10px; /* Space between image and title */
}

h1 {
  margin: 0; /* Remove default margin from the h1 */
  font-size: 24px;
}

.info i {
  margin-right: 10px; /* Add space between icons */
}
</style>
