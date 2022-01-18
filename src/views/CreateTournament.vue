<template>
  <div class="home">
    <h1>{{ message }}</h1>
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
        }
    },
  };
</script>