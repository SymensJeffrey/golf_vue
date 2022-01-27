<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <br>
    <br>
    <div>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
        <p>
        Name: <input type="text" v-model="newScoreParams.name">
        </p>
        <p>
        Token: <input type="text" v-model="newScoreParams.token">
        </p>
        <button v-on:click="scoresCreate()">Create</button>
    </div>
  </div>
</template>

<style></style>

<script>
    import axios from 'axios'
  export default {
    data: function () {
      return {
        message: "Create your Scorecard",
        newScoreParams: {},
        errors: []
      };
    },
    created: function () {},
    methods: {
        scoresCreate () {
        axios.post("/scores", this.newScoreParams).then((response) => {
          console.log("scores create", response);
          this.scores.push(response.data);
        })
        .catch((error) => {
          console.log("scores create error", error.response);
        });
        this.$router.push("/scores")
        },
    },
  };
</script>