<template>
  <div class="home">
    <div class="container">
      <br />
      <br />
      <h1>{{ message }}</h1>
      <br />
      <br />
      <div>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <p>
          Name:
          <input
            maxlength="12"
            type="text"
            v-model="newScoreParams.name"
            placeholder="Max 12 Characters"
          />
        </p>
        <p>Token: <input type="text" v-model="newScoreParams.token" /></p>
        <button
          class="btn btn-secondary btn-l rounded-pill mt-5"
          v-on:click="scoresCreate()"
        >
          Create
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-l {
  width: 150px;
  height: 35px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Create Scorecard",
      newScoreParams: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    scoresCreate() {
      axios
        .post("/scores", this.newScoreParams)
        .then((response) => {
          this.$router.push("/scores");
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
