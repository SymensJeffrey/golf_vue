<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <br>
    <br>
    <div v-for="tournament in tournaments" v-bind:key="tournament.id">
        <p>Your tournament code is:</p>
        <p>{{tournament.token}}</p>
    </div>
  </div>
</template>

<style></style>

<script>
    import axios from 'axios'
  export default {
    data: function () {
      return {
        message: "Tournament Created!",
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
        }
    },
  };
</script>