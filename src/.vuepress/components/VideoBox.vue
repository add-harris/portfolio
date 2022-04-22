<template>

  <video class="video-box" controls playsinline onloadstart="this.volume=0.5" onclick="this.play()">
    <source :src="mp" type="video/mp4">
    <source :src="ogg" type="video/ogg">
    Your browser does not support this media.
  </video>

</template>

<script>
export default {
  name: "VideoBox",

  props: {
    ogg: String,
    mp: String
  },

}
</script>

<style scoped>

.video-box {
  max-width: 400px;
  max-height: 450px;
  margin: auto;
  display: block;
}

</style>