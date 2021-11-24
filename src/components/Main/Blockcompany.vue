<template>
  <div class="blockcompany">
    <div class="dots">
      <hr v-for="(item, index) in 4" :key="index" class="dotted" />
    </div>
    <div class="dots-low">
      <hr v-for="(item, index) in 4" :key="index" class="dotted" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h6>ABOUT THE NETWORK</h6>
          <h2><span class="the">The </span>Company</h2>
          <p>
            With all of this expertise and capability comes an unrivalled
            commitment to customer service
          </p>
          <div
            class="percent-block"
            v-for="(item, index) in percentList"
            :key="index"
          >
            <vue-ellipse-progress
              :progress="item.percent"
              color="#087A7C"
              emptyColor="#232328"
              :size="70"
              :noData="false"
              :loading="false"
              fontColor="trasparent"
              :half="false"
              :gap="10"
              fontSize="20px"
              :angle="180"
              :thickness="8"
              emptyThickness="10"
            >
              <span slot="legend-value"> % </span>
            </vue-ellipse-progress>

            <div class="txt">
              <h4>LeaderShip</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blockcompany",
  data() {
    return {
      percentList: [
        {
          percent: 15,
        },
        {
          percent: 55,
        },
        {
          percent: 95,
        },
      ],
    };
  },
};
</script>

<style></style>
