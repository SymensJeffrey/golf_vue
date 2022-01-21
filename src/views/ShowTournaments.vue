<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="tournament in tournaments" v-bind:key="tournament.id">
        {{ tournament }}
    </div>
  </div>
</template>

<style></style>

<script>
    import axios from 'axios'
  export default {
    data: function () {
      return {
        message: "Leaderboard",
        tournaments: [],
      };
    },
    created: function () {
        this.tournamentsShow();
    },
    methods: {
        tournamentsShow() {
        axios.get("/tournaments/:id").then((response) => {
          console.log("tournaments show", response);
          this.tournaments = response.data;
        });
      },
    },
  };
</script>