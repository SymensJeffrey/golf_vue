<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <br>
    <br>
    <button v-on:click="tournamentsCreate()">Create</button>
    <br>
    <br>
    <div v-for="tournament in tournaments" v-bind:key="tournament.id">
      Date: {{tournament.date}} | 
      Token: {{tournament.token}}
    </div>
  </div>
</template>

<style></style>

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