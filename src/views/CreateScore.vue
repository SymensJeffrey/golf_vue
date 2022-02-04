<template>
  <div class="home background-image">
    <div class="container white-background">
      <br>
      <br>
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
          <button class="btn btn-secondary btn-xl rounded-pill mt-5" v-on:click="scoresCreate()">Create</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.white-background{
  background: white;
  min-height: 100vh;
  width: 70%
}
.background-image{
  min-height: 100vh;
  background-image: url("../images/topography.png")
}
</style>

<script>
    import axios from 'axios'
  export default {
    data: function () {
      return {
        message: "Create Scorecard",
        newScoreParams: {},
        errors: []
      };
    },
    created: function () {},
    methods: {
        scoresCreate () {
        axios.post("/scores", this.newScoreParams).then((response) => {
          this.$router.push("/scores")
          console.log("scores create", response);
          this.scores.push(response.data);
        })
        .catch((error) => {
            console.log(error.response);
            this.errors = ["Invalid token"];
          });
        },
    },
  };
</script>