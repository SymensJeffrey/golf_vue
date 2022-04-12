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
          <p class="card-text">Course: {{ score.course.name }}</p>
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
      message: "Active Scorecards",
      scores: [],
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
    Default: function () {},
    scoreDestroy: function (score) {
      axios.delete("/scores/" + score.id).then((response) => {
        console.log("scores destroy", response);
        var index = this.scores.indexOf(score);
        this.scores.splice(index, 1);
      });
      location.reload();
    },
    scoreDestroyModal: function (score) {
      this.currentScore = score;
    },
    scoreShow(score) {
      this.$router.push({
        path: `/scores/${score.id}`,
      });
    },
  },
};
</script>
