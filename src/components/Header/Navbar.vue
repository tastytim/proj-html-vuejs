<template>
  <nav class="navbar navbar-expand-lg">
  <div class="container">
    <div class="box-nex">
      <a class="navbar-brand" href="#"><span class="nex">NEX</span>GEN</a>
    </div>



    

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="d-flex justify-content-end  collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item" v-for="(item,index) in linksList" :key="index">
          <a class="nav-link" :href="'#'+item.ref">{{item.name}}</a>
        </li> 
      </ul>
    </div>
    <div class="d-flex">
      <button class="getintouch-button">GET IN TOUCH</button>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name:"Navbar",
  data(){
    return{
      linksList:[
        {
          name: "HOME",
          ref: ""
        },
        {
          name: "SERVICES",
          ref: ""
        },
        {
          name: "SKILLS",
          ref: ""
        },
        {
          name: "PARTNERS",
          ref: ""
        },
        {
          name: "BLOG",
          ref: ""
        }
      ]
    }

  }
}
</script>

<style>

</style>