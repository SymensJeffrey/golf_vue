<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-if="!isLoggedIn()">
      <button v-on:click="pushToSignup">Signup</button>
      <button v-on:click="pushToLogin">Login</button>
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