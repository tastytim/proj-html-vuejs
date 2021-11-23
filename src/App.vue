<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Main from "./components/Main/Main.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@font-face {
  font-family: "Mochiy Pop P One", sans-serif;
  font-family: "Roboto", sans-serif;
  src: local("Mochiy Pop P One"),
    url(./fonts/Mochiy_Pop_P_One/MochiyPopPOne-Regular.ttf) format("truetype");
  src: local("Roboto"),
  url(./fonts/Roboto/Roboto-Regular.ttf) format("truetype");
}

@import "src/styles/header.scss";
@import "src/styles/main.scss";

html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Mochiy Pop P One", sans-serif;
  font-family: "Roboto", sans-serif;
  h1,h2,h3,h4,h5,h6{
    font-weight: bold;
  }
}
</style>
