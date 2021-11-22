<template>
  <div class="hero">
    <div class="container">
      <Navbar></Navbar>
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <div class="hero-description">
            <h1><span class="h1-shadow">Logistics</span> that goes further.</h1>
          <p>For 20 years working with the most innovative in the field of transport</p>
          <div class="jumbo-buttons">
            <button class="riptide-button">GET IN TOUCH</button>
            <button class="trasparent-button">READ MORE</button>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  name: "Hero",
  components: {
    Navbar,
  },
};
</script>

<style></style>
