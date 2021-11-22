<template>
  <div>
    <Blockservice></Blockservice>
    <Blockcompany></Blockcompany>
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
export default {
  name: "Main",
  components: {
    Blockservice,
    Blockcompany,
    Blocknews,
    Blocksubscribe,
    Blockcontact,
  },
};
</script>

<style></style>
