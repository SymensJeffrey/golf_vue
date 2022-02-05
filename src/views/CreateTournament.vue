<template>
  <div class="home">
    <div class="container">
      <br>
      <br>
      <h1>{{ message }}</h1>
      <button class="btn btn-secondary btn-l rounded-pill mt-5" v-on:click="tournamentsCreate()">Create</button>
      <br>
      <br>
      <br>
      <div class=" container">
        <div class="card w-50 margin" v-for="tournament in tournaments" v-bind:key="tournament.id">
          <div class="card-body">
            <h5 class="card-title">Date: {{tournament.date}}</h5>
            <p class="card-text">Token: {{tournament.token}}</p>
            <a href="#" class="btn btn-secondary">Button</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.margin{
 left: 24.5%;
 margin-bottom: 40px;
}
</style>

<script>
    import axios from 'axios'
  export default {
    data: function () {
      return {
        message: "Create your Tournament",
        tournaments: []
      };
    },
    created: function () {
      this.tournamentsIndex();
    },
    methods: {
      tournamentsIndex () {
        axios.get("/tournaments").then((response) => {
          console.log("tournaments index", response);
          this.tournaments = response.data;
        });
      },
      tournamentsCreate () {
        axios.post("/tournaments").then((response) => {
          console.log("tournaments create", response);
          this.tournaments.push(response.data);
        })
        .catch((error) => {
          console.log("tournaments create error", error.response);
        });
      }
    },
  };
</script>