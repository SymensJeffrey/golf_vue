<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div>
        
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
      };
    },
    created: function () {},
    methods: {
        scoresCreate () {
        axios.post("/scores").then((response) => {
          console.log("scores create", response);
          this.scores.push(response.data);
        })
        .catch((error) => {
          console.log("scores create error", error.response);
        });
      },
    },
  };
</script>