<template>

  <div class="qb">
    <p class="qb-para">
      {{ quote }}
    </p>
    <button class="action-button qb-button" @click="getQuote">
      Get Quote
    </button>
  </div>


</template>

<script>

import axios from "axios";

export default {
  name: "QuoteBox",

  props: {
    url: {
      type: String,
      default: 0
    },
  },

  data() {
    return {
      quote: "..."
    }
  },

  methods: {

    getQuote() {
      axios.get( `${this.url}/v1/quotes/kanye`).then((response) => {
        this.quote = response.data.text
      }).catch((error) => {
        console.log(error)
      })
    }

  }
}
</script>

<style scoped>

.qb {
  margin: 10px;
  margin-bottom: 20px;
}

.qb-button {
  padding: 10px;
  border: 0;
  font-size: 1.2em;
  color: white;
  background-color: dodgerblue;
  cursor: pointer;
}

.qb-para {
  padding: 20px;
  font-size: 1.2em;
  text-align: center;
}

</style>