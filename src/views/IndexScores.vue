<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="score in scores" v-bind:key="score.id">
      {{ score }}
      <button v-on:click="tournamentShow(score)">View Leaderboard</button>
    </div>
  </div>
</template>

<style></style>

<script>
  import axios from 'axios'
  export default {
    data: function () {
      return {
        message: "Active Scorecards",
        scores: [],
      };
    },
    created: function () {
      this.scoresIndex();
    },
    methods: {
      scoresIndex() {
        axios.get("/scores").then((response) => {
          console.log("scores index", response);
          this.scores = response.data;
        });
      },
      tournamentShow(score) {
        this.$router.push({
          path: `/tournament/${score.tournament_id}`, 
        })
      },
    },
  };
</script>