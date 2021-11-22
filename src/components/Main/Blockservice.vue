<template>
  <div class="blockservice">
    <div class="container">
      <div class="row row-cols-1 row-cols-lg-3 g-4">
        <div class="col">
          <div class="custom-card colwht">
            <h6 >OUR BUSINESS AREAS</h6>
            <h2>Logistics Services</h2>
            <p>
              We are leaders in providing logistics services with a set of
              cutting edge technologies and a team of experienced and renowed
              professionals.
            </p>
            <div>
              <button class="lagoon-label">Tradition</button>
              <button class="lagoon-label">Quality</button>
              <button class="lagoon-label">Security</button>
            </div>
            <button class="blue-lagoon-button">READ MORE</button>
          </div>
        </div>
        <div class="col img-col">
          <div class="custom-card">
            <div class="center-div">
              <img :src="require(`@/assets/gallery-3.jpg`)">
            <h4>Technology</h4>
          <p>Focused on developing technology solutions adapted to our client's needs.</p>
            </div>
            
          </div>
          
        </div>
        <div class="col img-col">
          <div class="custom-card">
            <div class="center-div">
              <img :src="require(`@/assets/gallery-5.jpg`)">
            <h4>Transport</h4>
            <p>We develop operational strategies to improve logistical effeciency</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blockservice",
};
</script>

<style></style>
