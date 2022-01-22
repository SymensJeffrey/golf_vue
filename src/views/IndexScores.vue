<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="score in scores" v-bind:key="score.id">
      <div class="container">
        <div class="row">
          <div class="col">
            Name
          </div>
          <div class="col">
            1
          </div>
          <div class="col">
            2
          </div>
          <div class="col">
            3
          </div>
          <div class="col">
            4
          </div>
          <div class="col">
            5
          </div>
          <div class="col">
            6
          </div>
          <div class="col">
            7
          </div>
          <div class="col">
            8
          </div>
          <div class="col">
            9
          </div>
          <div class="col">
            Front
          </div>
          <div class="col">
            10
          </div>
          <div class="col">
            11
          </div>
          <div class="col">
            12
          </div>
          <div class="col">
            13
          </div>
          <div class="col">
            14
          </div>
          <div class="col">
            15
          </div>
          <div class="col">
            16
          </div>
          <div class="col">
            17
          </div>
          <div class="col">
            18
          </div>
          <div class="col">
            Back
          </div>
          <div class="col">
            Out
          </div>
        </div>
        <div class="row">
          <div class="col">
            {{ score.name }}
          </div>
          <div class="col">
            {{ score.hole1 }}
          </div>
          <div class="col">
            {{ score.hole2 }}
          </div>
          <div class="col">
            {{ score.hole3 }}
          </div>
          <div class="col">
            {{ score.hole4 }}
          </div>
          <div class="col">
            {{ score.hole5 }}
          </div>
          <div class="col">
            {{ score.hole6 }}
          </div>
          <div class="col">
            {{ score.hole7 }}
          </div>
          <div class="col">
            {{ score.hole8 }}
          </div>
          <div class="col">
            {{ score.hole9 }}
          </div>
          <div class="col">
            {{ score.front }}
          </div>
          <div class="col">
            {{ score.hole10 }}
          </div>
          <div class="col">
            {{ score.hole11 }}
          </div>
          <div class="col">
            {{ score.hole12 }}
          </div>
          <div class="col">
            {{ score.hole13 }}
          </div>
          <div class="col">
            {{ score.hole14 }}
          </div>
          <div class="col">
            {{ score.hole15 }}
          </div>
          <div class="col">
            {{ score.hole16 }}
          </div>
          <div class="col">
            {{ score.hole17 }}
          </div>
          <div class="col">
            {{ score.hole18 }}
          </div>
          <div class="col">
            {{ score.back }}
          </div>
          <div class="col">
            {{ score.total }}
          </div>
        </div>
      </div>
      <br>
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