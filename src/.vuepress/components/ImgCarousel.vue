<template>

  <carousel
      :per-page="1"
      :navigation-enabled="true"
      class="carousel-custom">
    <slide v-for="url in sources" :key="url"
           @slideclick="handleSlideClick">
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

  data() {
    return {
      model: 0,
      sources: [
        "https://storage.googleapis.com/portfolio_images_src/portfolio/2048/2048-1.png",
        "https://storage.googleapis.com/portfolio_images_src/portfolio/2048/2048-2.png",
        "https://storage.googleapis.com/portfolio_images_src/portfolio/2048/2048-3.png",
        "https://storage.googleapis.com/portfolio_images_src/portfolio/2048/2048-6.png",
      ]
    }
  },

  methods: {
    handleSlideClick (dataset) {
      this.model++
      console.log(dataset.index, dataset.name)
    }
  },

}
</script>

<style scoped>

.carousel-custom {
  max-width: 500px;
}

</style>