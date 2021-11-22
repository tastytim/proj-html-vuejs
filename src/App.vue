<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Main from './components/Main/Main.vue'
import Footer from './components/Footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import "src/styles/variables.scss";
@import "src/styles/contactsbar.scss";
@import "src/styles/header.scss";
@import "src/styles/hero.scss";
@import "src/styles/navbar.scss";
html,body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
