<template>

  <h1>{{ jazz }}</h1>

</template>

<script>
export default {
  name: "test",
  props: {
    jazz: {
      type: Text,
      default: "default text"
    },
  }
}
</script>

<style scoped>

</style>