<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div>
    </div>
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
        <div class="col-1" v-for="score in tournament.scores" v-bind:key="score.id">
          {{score}}
        </div>
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