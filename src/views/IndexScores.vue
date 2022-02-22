<template>
  <div class="home">
    <br />
    <br />
    <h1>{{ message }}</h1>
    <div v-if="scores.length == 0">
      <h5>You have no active scorecards</h5>
      <a href="/score/new">Create Scorecard</a>
    </div>
    <div class="my-5" v-for="score in scores" v-bind:key="score.id">
      <h6>Tournament: {{ score.token }}</h6>
      <div class="row justify-content-center no-border">
        <div class="col-1">
          <div
            class="row justify-content-center border border-dark row-fill-green bold-text"
          >
            Hole
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            1
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            2
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            3
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            4
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            5
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            6
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            7
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            8
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            9
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-green bold-text"
          >
            Front
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            10
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            11
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            12
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            13
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            14
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            15
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            16
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            17
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            18
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-green bold-text"
          >
            Back
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-green bold-text"
          >
            Out
          </div>
        </div>
        <div class="col-1">
          <div
            class="row justify-content-center border border-dark row-fill-green bold-text"
          >
            {{ score.name }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{ score.hole1 }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{ score.hole2 }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{ score.hole3 }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{ score.hole4 }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{ score.hole5 }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{ score.hole6 }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{ score.hole7 }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{ score.hole8 }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{ score.hole9 }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-green bold-text"
          >
            {{ score.front }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{ score.hole10 }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{ score.hole11 }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{ score.hole12 }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{ score.hole13 }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{ score.hole14 }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{ score.hole15 }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{ score.hole16 }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{ score.hole17 }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{ score.hole18 }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-green bold-text"
          >
            {{ score.back }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-green bold-text"
          >
            {{ score.total }}
          </div>
        </div>
      </div>
      <br />
      <button
        class="btn btn-secondary btn-l rounded-pill mt-2 me-3"
        data-bs-toggle="modal"
        data-bs-target="#score-update"
        v-on:click="scoreUpdateModal(score)"
      >
        Add Score
      </button>
      <button
        class="btn btn-secondary btn-l rounded-pill mt-2 me-3"
        v-on:click="tournamentShow(score)"
      >
        View Leaderboard
      </button>
      <button
        class="btn btn-secondary btn-l rounded-pill mt-2"
        v-on:click="scoreDestroyModal(score)"
        data-bs-toggle="modal"
        data-bs-target="#score-destroy"
      >
        Delete Scorecard
      </button>
    </div>

    <!-- Score Update Modal -->
    <div
      class="modal fade"
      id="score-update"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Score</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <select v-model="selected" class="dropdown">
              <option value="" disabled selected>Hole</option>
              <option v-for="option in options" v-bind:key="option.value">
                {{ option.value }}
              </option>
            </select>
            <p>
              <button
                class="btn btn-secondary btn-s rounded-2"
                v-on:click.prevent="Default()"
                v-on:click="currentScore[selected] -= 1"
              >
                -
              </button>
              <input
                class="score-input"
                type="number"
                placeholder="Score"
                v-model="currentScore[selected]"
              />
              <button
                class="btn btn-secondary btn-s rounded-2"
                v-on:click.prevent="Default()"
                v-on:click="currentScore[selected] += 1"
              >
                +
              </button>
            </p>
            <button
              class="btn btn-secondary btn-l rounded-pill mt-2"
              v-on:click="scoreUpdate(currentScore)"
            >
              Save
            </button>
          </div>
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
.dropdown {
  width: 30%;
  height: 30px;
}
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
#close-button {
  margin-right: 95%;
}
.margin-top {
  margin-top: 8%;
}
label {
  margin-right: 3px;
}
.score-input {
  width: 30%;
  margin: 10px;
}
input[type="number"] {
  text-align: center;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
select:required:invalid {
  color: gray;
}
select {
  text-align: center;
}
option[value=""][disabled] {
  display: none;
}
option {
  color: black;
  text-align: center;
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
    scoreUpdate: function (score) {
      var editScoreParams = score;
      axios
        .patch("/scores/" + score.id, editScoreParams)
        .then((response) => {
          console.log("scores update", response);
          this.currentScore = {};
        })
        .catch((error) => {
          console.log("scores update error", error.response);
        });
      window.location.reload();
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
  },
};
</script>
