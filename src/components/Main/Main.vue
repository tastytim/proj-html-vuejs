<template>
  <div>
    <Blockservice></Blockservice>
    <Blockcompany></Blockcompany>
    <Blocksponcers></Blocksponcers>
    <Blocknews></Blocknews>
    <Blocksubscribe></Blocksubscribe>
    <Blockcontact></Blockcontact>
  </div>
</template>

<script>
import Blockservice from "./Blockservice.vue";
import Blockcompany from "./Blockcompany.vue";
import Blocknews from "./Blocknews.vue";
import Blocksubscribe from "./Blocksubscribe.vue";
import Blockcontact from "./Blockcontact.vue";
import Blocksponcers from "./Blocksponcers.vue";
export default {
  
  name: "Main",

  components: {
    Blockservice,
    Blockcompany,
    Blocknews,
    Blocksubscribe,
    Blockcontact,
    Blocksponcers
  }
};
</script>

<style></style>
