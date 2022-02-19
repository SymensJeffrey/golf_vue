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
        <h2 class="mb-5"> Active Tournaments </h2>
        <div class="center-cards">
          <div class="card margin-bottom shadow-lg p-3 mb-5 bg-white rounded" v-for="tournament in tournaments" v-bind:key="tournament.id">
            <div class="card-body">
              <h5 class="card-title">Date: {{tournament.date}}</h5>
              <p class="card-text">Token: {{tournament.token}}</p>
              <button class="btn btn-secondary btn-l rounded-pill mt-2 me-3" v-on:click="tournamentShow(tournament)">View</button>
              <button class="btn btn-secondary btn-l rounded-pill mt-2" v-on:click="tournamentDestroyModal(tournament)">Delete</button>
            </div>
          </div>
        </div>
        <dialog id="tournament-delete">
          <form method="dialog">
            <div>
              <h6> Are you sure you want to delete this tournament?</h6>
              <p class="italic">If you delete this tournament all the scores will be removed as well</p>
              <br>
              <button class="btn btn-secondary btn-l rounded-pill mt-2 me-3" v-on:click="tournamentDestroy(currentTournament)"> Yes </button>
              <button class="btn btn-secondary btn-l rounded-pill mt-2"> No </button>
            </div>
          </form>
        </dialog>
      </div>
    </div>
  </div>
</template>

<style>
.center-cards{
  display: flex;
  justify-content: center;
}
.margin-bottom{
 margin-bottom: 40px;
}
.card{
  width: 275px;
}
#tournament-delete{
  height: 180px;
}
.italic{
  font-style: italic;
}
</style>

<script>
    import axios from 'axios'
  export default {
    data: function () {
      return {
        message: "Create your Tournament",
        tournaments: [],
        currentTournament: {},
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
      },
      tournamentDestroy: function (tournament) {
        axios.delete("/tournaments/" + tournament.id).then((response) => {
          console.log("tournaments destroy", response);
          var index = this.tournaments.indexOf(tournament);
          this.tournaments.splice(index, 1);
        });
      },
      tournamentDestroyModal: function(tournament) {
        this.currentTournament = tournament;
        document.querySelector("#tournament-delete").showModal();
      },
      Default: function () {
      },
      tournamentShow(tournament) {
        this.$router.push({
          path: `/tournament/${tournament.id}`, 
        })
      },
    },
  };
</script>