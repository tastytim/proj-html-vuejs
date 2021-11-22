<template>
<div class="header">
  <ContactsBar></ContactsBar>
  <Hero></Hero>
</div>
  
</template>

<script>
import ContactsBar from './ContactsBar.vue';
import Hero from './Hero.vue';
export default {
  components :{
     ContactsBar,
     Hero
  },
  name: "Header"
}
</script>

<style>

</style>