<template>
  <div class="blockcompany fluid-container">
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
        <h2><span>The</span>Company</h2>
        <p>
          With all of this expertise and capability comes an unrivalled
          commitment to customer service
        </p>
        <div class="percent-block" v-for="(item,index) in 3" :key="index">
          <div><button>0%</button></div>
          <div>
            <h1>LeaderShip</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="col">
        
      </div>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Blockcompany",
};
</script>

<style></style>
