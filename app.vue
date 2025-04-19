<template>
  <div style="width: 100%; height: 100%;">
    
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style >
/* Reset margin and padding globally */
a{
  color: inherit!important;
  text-decoration: none!important;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 0;
}


body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1742302954292-1f903368084e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); /* adjust the path */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  -webkit-font-smoothing: antialiased;
  background-attachment: fixed;
  font-family: "Gill Sans", sans-serif;
}
:root {
  --el-color-primary: #ff7a00;
  --el-color-primary-light-3: #ff9a33;
  --el-color-primary-light-5: #ffb366;
  --el-color-primary-light-7: #ffcc99;
  --el-color-primary-light-8: #ffe5cc;
  --el-color-primary-light-9: #fff2e5;
  --el-color-primary-dark-2: #e66e00;
}
.cust-button {
  background: linear-gradient(90deg, #ff7b00, #ffaa00)!important;
  border: none!important;
  padding: 10px 24px;
  font-weight: 500!important;
  transition: all 0.3s ease!important;
}

.cust-button:hover {
  transform: translateY(-2px)!important;
  box-shadow: 0 4px 12px rgba(255, 123, 0, 0.3)!important;
}
html {
  width: 100%;
  height: 100%;
}
</style>