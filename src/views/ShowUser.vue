<template>
  <div class="home">
    <h1>{{ message }}</h1>
        <div class="my-5" v-for="score in inactiveScores" v-bind:key="score.id">
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
}</style>

<script>
import axios from "axios"
  export default {
    data: function () {
      return {
        message: "Previous Scorecards",
        user: "",
        inactiveScores: [],
        scores: [],
      };
    },
    created: function () {
        this.userShow();
        this.scoresIndex();
    },
    methods: {
        userShow: function() {
            axios.get(`/users/${localStorage.user_id}`).then((response) => {console.log(response)
                this.user = response.data;
            });
        },
        scoresIndex() {
            axios.get("/scores").then((response) => {
                console.log("scores index", response);
                this.scores = response.data;
                this.inactiveScores = this.scores.filter(function(score){
                return score.status == "inactive";
            });
        });
    },
    },
  };
</script>