<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-if="!isLoggedIn()">
      <button v-on:click="pushToSignup">Signup</button>
      <button v-on:click="pushToLogin">Login</button>
    </div>
    <div v-if="isLoggedIn()">
      <h2>Start a Tournament</h2>
      <p>Starting a tournament allows you to generate a unique code so you and your friends can track there scores and will allow everyone to see eachother scores. If you have a code already, hit Start a Scorecard</p>
      <h2> Start a Scorecard</h2>
      <p>Starting a Scorecard will allow you to enter your scores and update them throughout your round. Note:you will need a unique code to sync with the tournament to be able to see all your friends scores</p>
    </div>
  </div>
</template>

<style></style>

<script>
  export default {
    data: function () {
      return {
        message: "Welcome to Scoreboard",
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
    },
  };
</script>