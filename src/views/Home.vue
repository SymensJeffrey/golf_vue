<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <button v-on:click="pushToSignup">Signup</button>
    <button v-on:click="pushToLogin">Login</button>
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
    },
  };
</script>