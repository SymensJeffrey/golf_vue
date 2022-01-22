<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="score in scores" v-bind:key="score.id">
      <div class="row justify-content-center no-border">
        <div class="col-1">
          <div class="row justify-content-center">
            Name
          </div>
          <div class="row justify-content-center">
            1
          </div>
          <div class="row justify-content-center">
            2
          </div>
          <div class="row justify-content-center">
            3
          </div>
          <div class="row justify-content-center">
            4
          </div>
          <div class="row justify-content-center">
            5
          </div>
          <div class="row justify-content-center">
            6
          </div>
          <div class="row justify-content-center">
            7
          </div>
          <div class="row justify-content-center">
            8
          </div>
          <div class="row justify-content-center">
            9
          </div>
          <div class="row justify-content-center">
            Front
          </div>
          <div class="row justify-content-center">
            10
          </div>
          <div class="row justify-content-center">
            11
          </div>
          <div class="row justify-content-center">
            12
          </div>
          <div class="row justify-content-center">
            13
          </div>
          <div class="row justify-content-center">
            14
          </div>
          <div class="row justify-content-center">
            15
          </div>
          <div class="row justify-content-center">
            16
          </div>
          <div class="row justify-content-center">
            17
          </div>
          <div class="row justify-content-center">
            18
          </div>
          <div class="row justify-content-center">
            Back
          </div>
          <div class="row justify-content-center">
            Out
          </div>
        </div>
        <div class="col-1">
          <div class="row justify-content-center">
            {{ score.name }}
          </div>
          <div class="row justify-content-center">
            {{ score.hole1 }}
          </div>
          <div class="row justify-content-center">
            {{ score.hole2 }}
          </div>
          <div class="row justify-content-center">
            {{ score.hole3 }}
          </div>
          <div class="row justify-content-center">
            {{ score.hole4 }}
          </div>
          <div class="row justify-content-center">
            {{ score.hole5 }}
          </div>
          <div class="row justify-content-center">
            {{ score.hole6 }}
          </div>
          <div class="row justify-content-center">
            {{ score.hole7 }}
          </div>
          <div class="row justify-content-center">
            {{ score.hole8 }}
          </div>
          <div class="row justify-content-center">
            {{ score.hole9 }}
          </div>
          <div class="row justify-content-center">
            {{ score.front }}
          </div>
          <div class="row justify-content-center">
            {{ score.hole10 }}
          </div>
          <div class="row justify-content-center">
            {{ score.hole11 }}
          </div>
          <div class="row justify-content-center">
            {{ score.hole12 }}
          </div>
          <div class="row justify-content-center">
            {{ score.hole13 }}
          </div>
          <div class="row justify-content-center">
            {{ score.hole14 }}
          </div>
          <div class="row justify-content-center">
            {{ score.hole15 }}
          </div>
          <div class="row justify-content-center">
            {{ score.hole16 }}
          </div>
          <div class="row justify-content-center">
            {{ score.hole17 }}
          </div>
          <div class="row justify-content-center">
            {{ score.hole18 }}
          </div>
          <div class="row justify-content-center">
            {{ score.back }}
          </div>
          <div class="row justify-content-center">
            {{ score.total }}
          </div>
        </div>
      </div>
      <br>
      <button v-on:click="tournamentShow(score)">View Leaderboard</button>
    </div>
  </div>
</template>

<style>
.row{
  border-style: solid;
  border-width: 1px;
} 
.no-border{
  border-bottom-width: 0px;
  border-top-width: 0px;
}
</style>

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