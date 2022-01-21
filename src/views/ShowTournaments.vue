<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div>
      {{ tournament }}
    </div>
    <button v-on:click="pushBackToScore()">Return to Scorecard</button>
  </div>
</template>

<style></style>

<script>
    import axios from 'axios'
  export default {
    data: function () {
      return {
        message: "Leaderboard",
        tournament: {}
      };
    },
    created: function () {
      axios.get("/tournaments/" + this.$route.params.id).then((response) => {
        console.log("tournaments show", response);
        this.tournament = response.data;
      });
    },
    methods: {
      pushBackToScore() {
        this.$router.go(-1)
      }
    },
  };
</script>