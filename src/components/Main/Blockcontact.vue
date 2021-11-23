<template>
  <div class="blockcontact">
    <div class="container">
      <div class="row">
        <div class="col-8 pe-5">
          <h6>SEND A MESSAGE</h6>
          <h2>Get in <span class="touch">Touch</span></h2>
          <p>We will respond to your message as soon as possible.</p>
          <div class="row d-flex ">
            <div class="col "><input class="form-control" type="text" placeholder="Name"></div>
            <div class="col"> <input class="form-control" type="text" placeholder="Email"></div>
          </div>
          <div class="row d-flex ">
            <div class="col"><input class="form-control" type="text" placeholder="Phone"></div>
            <div class="col"> <input class="form-control" type="text" placeholder="More Info"></div>
          </div>
          <div>
            <textarea class="form-control" cols="30" rows="10"></textarea>
          </div>
          <div>
            <button class="blue-lagoon-button">SEND</button>
          </div>

        </div>
        <div class="col-4 ps-5">
          <h3>Example Inc.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <ul class="icons-contact-form">
            <li><button><i class="fas fa-phone-alt"></i></button><span class="icon-txt">+1(305) 1234-5678</span></li>
            <li><button><i class="fas fa-envelope"></i></button><span class="icon-txt">hello@example.com</span> </li>
            <li><button><i class="fas fa-map-marker-alt"></i></button><span class="icon-txt">Main Avenue, 987</span> </li>
          </ul>
          <button class="trasparent-button">
            VIEW MAP
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blockcontact"
}
</script>

<style>

</style>