<template>
  <div class="home">
    <br />
    <br />
    <h1>{{ message }}</h1>
    <div v-if="activeScores.length == 0">
      <h5>You have no active scorecards</h5>
      <a href="/score/new">Create Scorecard</a>
    </div>
    <div class="center-cards row">
      <div
        class="card margin-bottom shadow-lg p-3 mb-5 bg-white rounded"
        v-for="score in activeScores" v-bind:key="score.id"
      >
        <div class="card-body">
          <h5 class="card-title">Score: {{ score.total }}</h5>
          <h5 class="card-title">Tournament: {{ score.token }}</h5>
          <p class="card-text"></p>
          <button
            class="btn btn-secondary btn-l rounded-pill mt-2 mb-3 view-button"
            v-on:click="scoreShow(score)"
          >
            View
          </button>
          <button
            class="btn btn-secondary btn-l rounded-pill mt-2 mb-3"
            v-on:click="scoreDestroyModal(score)"
            data-bs-toggle="modal"
            data-bs-target="#score-destroy"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
    <!-- Score Destroy Modal -->
    <div
      class="modal fade"
      id="score-destroy"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Delete Scorecard</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h6>Are you sure you want to delete this scorecard?</h6>
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
              v-on:click="scoreDestroy(currentScore)"
              data-bs-dismiss="modal"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Score Finish Round Modal -->
    <div
      class="modal fade"
      id="score-finish"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Finish Round</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h6>Are you sure you want to finish this round?</h6>
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
              v-on:click="scoreFinish(currentScore)"
              data-bs-dismiss="modal"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row-fill-green {
  background-color: #009c1a3b;
}
.row-fill-grey {
  background-color: #2c2c2c18;
}
.border {
  border-style: solid;
  border-width: 2px;
  border-color: black;
}
.bold-text {
  font-weight: 600;
}
.no-border {
  border-bottom-width: 0px;
  border-top-width: 0px;
}
.col-1 {
  resize: none;
  overflow: scroll;
  width: 100px;
}
.margin-top {
  margin-top: 8%;
}
.btn-l{
  width: 150px;
  height: 35px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      options: [
        { text: "Hole 1", value: "hole1" },
        { text: "Hole 2", value: "hole2" },
        { text: "Hole 3", value: "hole3" },
        { text: "Hole 4", value: "hole4" },
        { text: "Hole 5", value: "hole5" },
        { text: "Hole 6", value: "hole6" },
        { text: "Hole 7", value: "hole7" },
        { text: "Hole 8", value: "hole8" },
        { text: "Hole 9", value: "hole9" },
        { text: "Hole 10", value: "hole10" },
        { text: "Hole 11", value: "hole11" },
        { text: "Hole 12", value: "hole12" },
        { text: "Hole 13", value: "hole13" },
        { text: "Hole 14", value: "hole14" },
        { text: "Hole 15", value: "hole15" },
        { text: "Hole 16", value: "hole16" },
        { text: "Hole 17", value: "hole17" },
        { text: "Hole 18", value: "hole18" },
      ],
      selected: "",
      message: "Active Scorecards",
      scores: [],
      currentScore: {},
      activeScores: [],
    };
  },
  created: function () {
    this.scoresIndex();
  },
  methods: {
    scoresIndex() {
      axios.get("/scores").then((response) => {
        console.log("scores index", response);
        this.scores = response.data;
        this.activeScores = this.scores.filter(function (score) {
          return score.status == "active";
        });
      });
    },
    tournamentShow(score) {
      this.$router.push({
        path: `/tournament/${score.tournament_id}`,
      });
    },
    scoreUpdateModal: function (score) {
      this.currentScore = score;
    },
    Default: function () {},
    scoreDestroy: function (score) {
      axios.delete("/scores/" + score.id).then((response) => {
        console.log("scores destroy", response);
        var index = this.scores.indexOf(score);
        this.scores.splice(index, 1);
      });
    },
    scoreDestroyModal: function (score) {
      this.currentScore = score;
    },
    scoreFinishModal: function (score) {
      this.currentScore = score;
    },
    scoreFinish: function (score) {
      var editScoreParams = score;
      score.status = 'inactive'
      axios
        .patch("/scores/" + score.id, editScoreParams)
        .then((response) => {
          console.log("scores update", response);
          this.currentScore = {};
        })
        .catch((error) => {
          console.log("scores update error", error.response);
        });
    },
    scoreShow(score) {
      this.$router.push({
        path: `/scores/${score.id}`,
      });
    },
  },
};
</script>
