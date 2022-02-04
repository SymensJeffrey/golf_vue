<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="score in scores" v-bind:key="score.id">
      <div class="row justify-content-center no-border">
        <div class="col-1">
          <div class="row justify-content-center border border-secondary">
            Hole
          </div>
          <div class="row justify-content-center border border-secondary">
            1
          </div>
          <div class="row justify-content-center border border-secondary">
            2
          </div>
          <div class="row justify-content-center border border-secondary">
            3
          </div>
          <div class="row justify-content-center border border-secondary">
            4
          </div>
          <div class="row justify-content-center border border-secondary">
            5
          </div>
          <div class="row justify-content-center border border-secondary">
            6
          </div>
          <div class="row justify-content-center border border-secondary">
            7
          </div>
          <div class="row justify-content-center border border-secondary">
            8
          </div>
          <div class="row justify-content-center border border-secondary">
            9
          </div>
          <div class="row justify-content-center border border-secondary">
            Front
          </div>
          <div class="row justify-content-center border border-secondary">
            10
          </div>
          <div class="row justify-content-center border border-secondary">
            11
          </div>
          <div class="row justify-content-center border border-secondary">
            12
          </div>
          <div class="row justify-content-center border border-secondary">
            13
          </div>
          <div class="row justify-content-center border border-secondary">
            14
          </div>
          <div class="row justify-content-center border border-secondary">
            15
          </div>
          <div class="row justify-content-center border border-secondary">
            16
          </div>
          <div class="row justify-content-center border border-secondary">
            17
          </div>
          <div class="row justify-content-center border border-secondary">
            18
          </div>
          <div class="row justify-content-center border border-secondary">
            Back
          </div>
          <div class="row justify-content-center border border-secondary">
            Out
          </div>
        </div>
        <div class="col-1">
          <div class="row justify-content-center border border-secondary">
            {{ score.name }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole1 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole2 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole3 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole4 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole5 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole6 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole7 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole8 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole9 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.front }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole10 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole11 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole12 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole13 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole14 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole15 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole16 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole17 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.hole18 }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.back }}
          </div>
          <div class="row justify-content-center border border-secondary">
            {{ score.total }}
          </div>
        </div>
      </div>
      <br>
      <button class="btn btn-secondary btn-l rounded-pill mt-2 me-3" v-on:click="scoreUpdateModal(score)">Add Score</button>
      <button class="btn btn-secondary btn-l rounded-pill mt-2 me-3" v-on:click="tournamentShow(score)">View Leaderboard</button>
      <button class="btn btn-secondary btn-l rounded-pill mt-2" v-on:click="scoreDestroyModal(score)">Delete Scorecard</button>
    </div>
    <dialog id="score-update">
        <form method="dialog">
          <div>
            <button class="btn btn-secondary btn-l rounded-circle mt-2" id="close-button"> x </button>
          </div>
          <div class="container">
            <h2 class="margin-top">Add Score</h2>
            <select v-model="selected" class="dropdown">
              <option value="" disabled selected>Hole</option>
              <option v-for="option in options" v-bind:key="option.value">
                  {{ option.value }}
              </option>
            </select>
            <p>
              <button class="btn btn-secondary btn-s rounded-2" v-on:click.prevent="Default()" v-on:click="currentScore[selected] -= 1"> - </button>
              <input class="score-input" type="number" placeholder="Score" v-model="currentScore[selected]">
              <button class="btn btn-secondary btn-s rounded-2" v-on:click.prevent="Default()" v-on:click="currentScore[selected] += 1"> + </button>
            </p>
            <button class="btn btn-secondary btn-l rounded-pill mt-2" v-on:click="scoreUpdate(currentScore)">Save</button>
          </div>
        </form>
    </dialog>
    <dialog id="score-destroy">
      <form method="dialog">
        <div>
          <h6> Are you sure you want to delete this scorecard?</h6>
          <br>
          <button class="btn btn-secondary btn-l rounded-pill mt-2 me-3" v-on:click="scoreDestroy(currentScore)"> Yes </button>
          <button class="btn btn-secondary btn-l rounded-pill mt-2"> No </button>
        </div>
      </form>
    </dialog>
  </div>
</template>

<style scoped>
.dropdown{
  width: 30%;
  height: 30px;
}
.border{
  border-style: solid;
  border-width: 2px;
  border-color: black;
} 
.no-border{
  border-bottom-width: 0px;
  border-top-width: 0px;
}
.col-1{
  resize: none;
  overflow: scroll;
  width: 100px;
}
#close-button{
  margin-right: 95%;
}
#score-update{
  width: 450px;
  height: 300px;
}
.margin-top{
  margin-top: 8%;
}
label{
  margin-right: 3px;
}
.score-input{
  width: 30%;
  margin: 10px; 
}
input[type="number"]{ 
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
select{
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
  import axios from 'axios'
  export default {
    data: function () {
      return {
        options: [
          {text: 'Hole 1', value: 'hole1'},
          {text: 'Hole 2', value: 'hole2'},
          {text: 'Hole 3', value: 'hole3'},
          {text: 'Hole 4', value: 'hole4'},
          {text: 'Hole 5', value: 'hole5'},
          {text: 'Hole 6', value: 'hole6'},
          {text: 'Hole 7', value: 'hole7'},
          {text: 'Hole 8', value: 'hole8'},
          {text: 'Hole 9', value: 'hole9'},
          {text: 'Hole 10', value: 'hole10'},
          {text: 'Hole 11', value: 'hole11'},
          {text: 'Hole 12', value: 'hole12'},
          {text: 'Hole 13', value: 'hole13'},
          {text: 'Hole 14', value: 'hole14'},
          {text: 'Hole 15', value: 'hole15'},
          {text: 'Hole 16', value: 'hole16'},
          {text: 'Hole 17', value: 'hole17'},
          {text: 'Hole 18', value: 'hole18'}
        ],
        selected: '',
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
        })
      },
      scoreUpdateModal: function(score) {
        this.currentScore = score;
        document.querySelector("#score-update").showModal();
      },
      scoreUpdate: function (score) {
        var editScoreParams = score;
        axios.patch("/scores/" + score.id, editScoreParams).then((response) => {
          console.log("scores update", response);
          this.currentScore = {};
        })
        .catch((error) => {
          console.log("scores update error", error.response);
        });
        window.location.reload();
      },
      Default: function () {
      },
      scoreDestroy: function (score) {
        axios.delete("/scores/" + score.id).then((response) => {
          console.log("scores destroy", response);
          var index = this.scores.indexOf(score);
          this.scores.splice(index, 1);
        });
      },
      scoreDestroyModal: function(score) {
        this.currentScore = score;
        document.querySelector("#score-destroy").showModal();
      }
    },
  };
</script>