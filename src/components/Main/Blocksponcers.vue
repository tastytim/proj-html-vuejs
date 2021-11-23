<template>
  <div class="blocksponcers">
     <div class="container">
       <div class="row">
         <div v-for="(item,index) in sponcerList" :key="index" class="col">
           <img :src="item.img" alt="item.img">
         </div>
       </div>
     </div>
  </div>
</template>

<script>
export default {
name : "Blocksponcers",
data() {
    return {
      sponcerList : [
        {
          img : require('@/assets/logo-5.png'),
        },
        {
          img : require('@/assets/logo-1.png'),
        },
        {
          img : require('@/assets/logo-2.png'),
        },
        {
          img : require('@/assets/logo-3.png'),
        },
        {
          img : require('@/assets/logo-4.png'),
        },
        {
          img : require('@/assets/logo-5.png'),
        },
      ]
    }
  }
}
</script>

<style>

</style>