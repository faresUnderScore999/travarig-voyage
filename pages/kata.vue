<!-- pages/api-request.vue -->
<script setup>
definePageMeta({
  middleware: 'authenticate'  // this will trigger middleware in `middleware/auth.js`
})
import axiosInstance from '~/utils/axios'

// Define two functions to handle button clicks
const sendRequest1 = async () => {
  try {
    const response = await axiosInstance.get('/api/verify-token')  // Example GET request
    console.log('verify-token:', response.data)
  } catch (error) {
    console.error('Error sending request 1:', error)
  }
}

const sendRequest2 = async () => {
  try {
    const response = await axiosInstance.post('/api/endpoint2', { data: 'Sample data' })  // Example POST request
    console.log('Response 2:', response.data)
  } catch (error) {
    console.error('Error sending request 2:', error)
  }
}
</script>

<template>
  <div>
    <h1>API Request Page</h1>

    <button @click="sendRequest1">Send GET Request</button>
    <button @click="sendRequest2">Send POST Request</button>
  </div>
</template>

<style scoped>
button {
  margin: 10px;
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}
</style>
