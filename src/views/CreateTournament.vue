<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="tournament in tournaments" v-bind:key="tournament.id">
        {{tournament.id}}
        {{tournament.user_id}}
        {{tournament.token}}
        {{tournament.status}}
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
        this.tournamentIndex();
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