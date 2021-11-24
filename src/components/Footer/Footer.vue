<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="box-nex">
            <a class="navbar-brand" href="#"><span class="nex">NEX</span>GEN</a>
          </div>
          <p>A Functional HTML Template for Corporate & Business.</p>
          <ul>
            <li><i class="fas fa-phone-alt"></i><span class="icon-txt">+1(305) 1234-5678</span></li>
            <li><i class="fas fa-envelope"></i><span class="icon-txt">hello@example.com</span></li>
            <li><i class="fas fa-map-marker-alt"></i><span class="icon-txt">Main Avenue, 987</span></li>
          </ul>
          <button class="trasparent-button">
            GET IN TOUCH
          </button>
        </div>
        <div v-for="(item, index) in dataList" :key="index" class="col">
          <Footercard :title="item.title" :ulList="item.list"> </Footercard>
        </div>
      </div>
    </div>
    <Copyright></Copyright>
  </div>
</template>

<script>
import Copyright from "../Footer/Copyrigt.vue";
import Footercard from "../Footer/Footercard.vue";
export default {
  name: "Footer",
  components: {
    Copyright,
    Footercard,
  },
  data() {
    return {
      dataList: [
        {
          title: "About",
          list: [
            { link: "The Company" },
            { link: "Institutional" },
            { link: "Social & Events" },
            { link: "Innvation" },
            { link: "Environment" },
            { link: "Technology" },
          ],
        },
        {
          title: "Transport",
          list: [
            { link: "Industrialized" },
            { link: "Chemicals" },
            { link: "Package & Liquids" },
            { link: "Constructions" },
            { link: "Laminated Wood" },
            { link: "And Others" },
          ],
        },
        {
          title: "Support",
          list: [
            { link: "Responsibility" },
            { link: "Terms of Use" },
            { link: "About Cookies" },
            { link: "Privacy Policy" },
            { link: "Accesibility" },
            { link: "Information" },
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
