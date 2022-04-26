<template>

  <div class="features">
    <div class="feature">
      <h2><router-link to="/cloud-computing/">Cloud Computing</router-link></h2>
      <p>Technologies such as AWS and GCP, as well as containerization tools like Docker and Kubernetes.</p>
    </div>
    <div class="feature">
      <h2><router-link to="/frontend/">Frontend</router-link></h2>
      <p>JavaScript technologies like NodeJS, VueJs and Nuxt!</p>
    </div>
    <div class="feature">
      <h2><router-link to="/backend/">Backend</router-link></h2>
      <p>Some of the latest JVM technologies - Spring-Boot, Java 17, Kotlin and Quarkus</p>
    </div>
  </div>

</template>

<script>
export default {
  name: "FeaturesLinks"
}
</script>

<style scoped>

</style>