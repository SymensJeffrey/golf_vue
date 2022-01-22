<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="score in scores" v-bind:key="score.id">
      <div class="row justify-content-center no-border">
        <div class="col-1">
          <div class="row justify-content-center border border-secondary">
            Name
          </div>
          <div class="row justify-content-center border border-secondary">
            1
          </div>
          <div class="row justify-content-center border border-secondary">
            2
          </div>
          <div class="row justify-content-center border border-secondary">
            3
          </div>
          <div class="row justify-content-center border border-secondary">
            4
          </div>
          <div class="row justify-content-center border border-secondary">
            5
          </div>
          <div class="row justify-content-center border border-secondary">
            6
          </div>
          <div class="row justify-content-center border border-secondary">
            7
          </div>
          <div class="row justify-content-center border border-secondary">
            8
          </div>
          <div class="row justify-content-center border border-secondary">
            9
          </div>
          <div class="row justify-content-center border border-secondary">
            Front
          </div>
          <div class="row justify-content-center border border-secondary">
            10
          </div>
          <div class="row justify-content-center border border-secondary">
            11
          </div>
          <div class="row justify-content-center border border-secondary">
            12
          </div>
          <div class="row justify-content-center border border-secondary">
            13
          </div>
          <div class="row justify-content-center border border-secondary">
            14
          </div>
          <div class="row justify-content-center border border-secondary">
            15
          </div>
          <div class="row justify-content-center border border-secondary">
            16
          </div>
          <div class="row justify-content-center border border-secondary">
            17
          </div>
          <div class="row justify-content-center border border-secondary">
            18
          </div>
          <div class="row justify-content-center border border-secondary">
            Back
          </div>
          <div class="row justify-content-center border border-secondary">
            Out
          </div>
        </div>
        <div class="col-1">
          <div class="row justify-content-center border border-secondary">
            {{ score.name }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole1 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole2 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole3 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole4 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole5 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole6 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole7 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole8 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole9 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.front }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole10 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole11 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole12 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole13 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole14 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole15 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole16 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole17 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole18 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.back }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.total }}
          </div>
        </div>
      </div>
      <br>
      <button>Add Score</button>
      <button v-on:click="tournamentShow(score)">View Leaderboard</button>
      <button>Delete Scorecard</button>
    </div>
  </div>
</template>

<style>
.border{
  border-style: solid;
  border-width: 2px;
  border-color: black;
} 
.no-border{
  border-bottom-width: 0px;
  border-top-width: 0px;
}
.col-1{
  resize: none;
  overflow: scroll;
  width: 100px;
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