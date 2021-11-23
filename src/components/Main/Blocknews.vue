<template>
  <div class="blocknews">
    <div class="container d-flex pb-5">
      <div class="col">
        <h6>OUR EDITORIAL CONTENT</h6>
        <h2>Latest <span class="news">News</span></h2>
        <p>
          Every week we publish content about what is best in the business world
        </p>
      </div>
      <div class="col d-flex justify-content-end align-items-end">
        <button class="lagoon-button">SEE ALL</button>
      </div>
    </div>
    <div class="container pt-2">
      <div class="row">
        <div v-for="(item, index) in newsList" :key="index" class="col">
          <img :src="item.img" :alt="item.img" width="100%" />

          <span class="img-text">{{ item.txt }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blocknews",
  data() {
    return {
      newsList: [
        {
          img: require("@/assets/news-1.jpg"),
          txt: "Increasing creativity is possible for everyone",
        },
        {
          img: require("@/assets/news-2.jpg"),
          txt: "Because market research is part of the business plan",
        },
        {
          img: require("@/assets/news-3.jpg"),
          txt: "Working from home is now a trend",
        },
      ],
    };
  },
};
</script>

<style></style>
