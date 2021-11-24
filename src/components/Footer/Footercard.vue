<template>
  <div class="footercard">
    <div class="card-custom">
      <h3>{{ title }}</h3>
      <ul>
        <li v-for="(item, index) in ulList" :key="index">
          <i class="fas fa-chevron-right"></i
          ><span class="txt">{{ item.link }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footercard",
  props: {
    title: {
      type: String,
    },
    ulList: {
      type: Array,
    },
  },
};
</script>

<style></style>
