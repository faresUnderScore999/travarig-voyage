<template>
  <div>
    <DefaultHeader />

    <header class="sticky-header">
    
      <nav>
        <menuNavigation />
      </nav>
    </header>
    <main>
      <!-- Slot for the page content -->
      <slot/>
    </main>
    <!-- <footer>
        <p>&copy; 2025 My Website</p>
      </footer> -->
  </div>
</template>

<script setup>
// Optional: You can add logic to handle layout-specific features
import menuNavigation from "~/components/menuNavigation.vue";
</script>

<style scoped>
.sticky-header {
  position: sticky;
  top: 0;
  background-color: rgba(128, 84, 0, 0.6); /* semi-transparent purple */
  backdrop-filter: blur(8px); /* blur effect */
  color: white;
  border-top: 1px solid white;
  color: white;
  display: flex;
  align-items: center;
  z-index: 100;
  font-family: Georgia, serif;
font-size: 25px;
letter-spacing: 1.4px;
word-spacing: -0.4px;
color: #000000;
font-weight: 900;
text-decoration: none;
font-style: normal;
font-variant: small-caps;
text-transform: capitalize;
}
nav {
  width: 100%;
}
router-link {
  text-decoration: none; /* Remove underline */
  color: inherit; /* Keep the color of the parent element */
}

img {
  max-width: 100px; /* Optional: limit the image size */
  height: auto;
  margin-right: 10px; /* Space between image and title */
}
footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
}

main {
  z-index: 99;
  padding: 20px;
}
</style>
