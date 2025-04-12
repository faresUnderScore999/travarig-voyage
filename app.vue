<template>
  <div style="width: 100%; height: 100%;">
    
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style >
/* Reset margin and padding globally */


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
  font-family: "Gill Sans", sans-serif;
}

html {
  width: 100%;
  height: 100%;
}
</style>