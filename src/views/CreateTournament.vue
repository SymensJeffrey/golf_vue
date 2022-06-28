<template>
  <div class="home">
    <div class="container">
      <br />
      <br />
      <h1>{{ message }}</h1>
      <div class="center-cards">
        <v-select
          class="dropdown"
          :options="courses"
          label="name"
          v-model="newTournamentParams.course_id"
          :reduce="(course) => course.id"
        ></v-select>
      </div>
      <button
        class="btn btn-secondary btn-l rounded-pill mt-5"
        v-on:click="tournamentsCreate()"
      >
        Create
      </button>
      <br />
      <br />
      <br />
      <div class="container">
        <h2 class="mb-5">Active Tournaments</h2>
        <div v-if="tournaments.length == 0">
          <h5>You have no active Tournaments</h5>
        </div>
        <div class="center-cards row">
          <div
            class="card margin-bottom shadow-lg p-3 mb-5 bg-white rounded"
            v-for="tournament in tournaments"
            v-bind:key="tournament.id"
          >
            <div class="card-body">
              <h5 class="card-title">Date: {{ tournament.date }}</h5>
              <h5 class="card-title">Course: {{ tournament.course.name }}</h5>
              <p class="card-text">Token: {{ tournament.token }}</p>
              <!-- <p class="card-text">Course: {{ tournament.course.name }}</p> -->
              <button
                class="btn btn-secondary btn-l rounded-pill mt-2 me-3"
                v-on:click="tournamentShow(tournament)"
              >
                View
              </button>
              <button
                class="btn btn-secondary btn-l rounded-pill mt-2"
                data-bs-toggle="modal"
                data-bs-target="#tournament-delete"
                v-on:click="tournamentDestroyModal(tournament)"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="tournament-delete"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Delete Tournament
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <h6>Are you sure?</h6>
                <p class="italic">
                  If you delete this tournament all the scores will be removed
                  as well
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  v-on:click="tournamentDestroy(currentTournament)"
                  data-bs-dismiss="modal"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.center-cards {
  display: flex;
  justify-content: center;
}
.margin-bottom {
  margin-bottom: 40px;
}
.card {
  width: 275px;
}
#tournament-delete {
  height: 300px;
}
.italic {
  font-style: italic;
}
.dropdown {
  width: 400px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Create your Tournament",
      tournaments: [],
      currentTournament: {},
      courses: [],
      newTournamentParams: {},
    };
  },
  created: function () {
    this.tournamentsIndex();
    this.coursesIndex();
  },
  methods: {
    tournamentsIndex() {
      axios.get("/tournaments").then((response) => {
        console.log("tournaments index", response);
        this.tournaments = response.data;
      });
    },
    coursesIndex() {
      axios.get("/courses").then((response) => {
        console.log("courses index", response);
        this.courses = response.data;
      });
    },
    tournamentsCreate() {
      axios
        .post("/tournaments", this.newTournamentParams)
        .then((response) => {
          console.log("tournaments create", response);
          this.tournaments.push(response.data);
          location.reload();
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
        location.reload();
      });
    },
    tournamentDestroyModal: function (tournament) {
      this.currentTournament = tournament;
    },
    Default: function () {},
    tournamentShow(tournament) {
      this.$router.push({
        path: `/tournament/${tournament.id}`,
      });
    },
  },
};
</script>
