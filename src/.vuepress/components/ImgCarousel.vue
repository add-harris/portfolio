<template>

  <carousel
      :per-page="1"
      :navigation-enabled="true"
      :style="customStyle">
    <slide v-for="url in sources" :key="url">
      <img :src="url">
    </slide>
  </carousel>

</template>

<script>

import { Carousel, Slide } from 'vue-carousel';

export default {
  name: "ImgCarousel",

  components: {
    Carousel, Slide
  },

  props: {
    sources: {
      type: Array,
      default: []
    },
    width: {
      type: String,
      default: "500"
    }
  },

  computed: {
    customStyle() {
      return {
        "maxWidth": `${this.width}px`
      }
    }
  }

}
</script>

<style scoped>

</style>