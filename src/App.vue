<template>
  <div class="hide-on-mobile">
    <Carousel/>
  </div>
  <div class="show-on-mobile">
    <Mobile/>
  </div>
</template>

<script>
import Carousel from "./components/Carousel.vue";
import Mobile from "./components/mobile/Mobile.vue"

export default {
  name: "App",
  components: {
    Carousel,
    Mobile,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

.show-on-mobile {
  display: none;
}

@media screen and (max-width: 480px) {
  .show-on-mobile {
    display: block;
  }
  .hide-on-mobile {
    display: none;
  }
}
</style>
