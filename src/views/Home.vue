<template>
  <div class="home">
    <h1 class="bottom-margin">{{ message }}</h1>
    <!-- Signup and login buttons (Only shows if not logged in) -->
    <div v-if="!isLoggedIn()">
      <h2> How Scoreboard Works </h2>
      <p> Scoreboard is a place that allows you and your friends to log scores so they are visible to everyone. You can create a tournament and generate a unique code that you can give to people in your tournament. Then you can generate a scorecard and track your score as you go and check the leaderboard to see everyone elses scores. Get out there and hit em straight!</p>
      <button v-on:click="pushToSignup">Signup</button>
      <button v-on:click="pushToLogin">Login</button>
    </div>
    <!-- Create Tournament and Create Scorecard (only shows if logged in) -->
    <div class="container" v-if="isLoggedIn()">
      <div class="row bottom-margin">
        <div class="col-6 column-padding">
          <h2>Start a Tournament</h2>
          <p>Starting a tournament allows you to generate a unique code so you and your friends can track there scores and will allow everyone to see each other scores. If you have a code already, hit Start a Scorecard</p>
          <button v-on:click="pushToCreateTournament()">Start</button>
        </div>
        <div class="col-6 column-padding">
          <h2> Start a Scorecard</h2>
          <p>Starting a Scorecard will allow you to enter your scores and update them throughout your round. Everyone with the same tournament code will be able to see your scores.(Note:you will need a unique code to sync with the tournament to be able to see all your friends scores)</p>
          <button v-on:click="pushToCreateScorecard()">Start</button>
        </div>
      </div>
      <div class="row">
        <div class="col-12 column-padding">
          <h2> How Scoreboard Works </h2>
          <p> Scoreboard is a place that allows you and your friends to log scores so they are visible to everyone. You can create a tournament and generate a unique code that you can give to people in your tournament. Then you can generate a scorecard and track your score as you go and check the leaderboard to see everyone elses scores. Get out there and hit em straight!</p>
        </div>
      </div> 
    </div>
  </div>
</template>

<style>
.bottom-margin{
  margin-bottom: 60px;
}
.column-padding{
  padding: 20px;
}
</style>

<script>
  // import axios from "axios"
  export default {
    data: function () {
      return {
        message: "Welcome to Scoreboard",
        newTournamentParams: {},
      };
    },
    created: function () {},
    methods: {
      pushToSignup () {
        this.$router.push("/signup");
      },
      pushToLogin () {
        this.$router.push("/login");
      },
      isLoggedIn: function() {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }      
      },
      pushToCreateTournament () {
        this.$router.push("/Tournament/new");
      },
      pushToCreateScorecard () {
        this.$router.push("/score/new")
      }
    },
  };
</script>