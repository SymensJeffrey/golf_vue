<template>
  <div class="home">
    <br>
    <h1>Scorecard</h1>
    <!-- Scorecard -->
    <div class="container">
      <div class="row justify-content-center no-border">
        <div class="row justify-content-center mb-1 bold-text">
          {{ score.course.name }}
        </div>
      <h5>{{score.name}}: {{score.to_par}}</h5>
        <div class="row justify-content-center mb-1 bold-text">
        </div>
        <!-- Hole list -->
        <div class="col-1">
          <div
            class="row justify-content-center border border-dark row-fill-green bold-text"
          >
            Hole
          </div>
          <div class="row justify-content-center border border-dark">1</div>
          <div class="row justify-content-center border border-dark">2</div>
          <div class="row justify-content-center border border-dark">3</div>
          <div class="row justify-content-center border border-dark">4</div>
          <div class="row justify-content-center border border-dark">5</div>
          <div class="row justify-content-center border border-dark">6</div>
          <div class="row justify-content-center border border-dark">7</div>
          <div class="row justify-content-center border border-dark">8</div>
          <div class="row justify-content-center border border-dark">9</div>
          <div
            class="row justify-content-center border border-dark row-fill-green bold-text"
          >
            Front
          </div>
          <div class="row justify-content-center border border-dark">10</div>
          <div class="row justify-content-center border border-dark">11</div>
          <div class="row justify-content-center border border-dark">12</div>
          <div class="row justify-content-center border border-dark">13</div>
          <div class="row justify-content-center border border-dark">14</div>
          <div class="row justify-content-center border border-dark">15</div>
          <div class="row justify-content-center border border-dark">16</div>
          <div class="row justify-content-center border border-dark">17</div>
          <div class="row justify-content-center border border-dark">18</div>
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
        <!-- Course hole Par -->
        <div class="col-1">
          <div
            class="row justify-content-center border border-dark row-fill-green bold-text"
          >
            Par
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ score.course.hole1_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ score.course.hole2_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ score.course.hole3_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ score.course.hole4_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ score.course.hole5_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ score.course.hole6_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ score.course.hole7_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ score.course.hole8_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ score.course.hole9_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-green bold-text"
          >
            {{ score.course.front_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ score.course.hole10_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ score.course.hole11_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ score.course.hole12_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ score.course.hole13_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ score.course.hole14_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ score.course.hole15_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ score.course.hole16_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ score.course.hole17_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ score.course.hole18_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-green bold-text"
          >
            {{ score.course.back_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-green bold-text"
          >
            {{ score.course.total_par }}
          </div>
        </div>
        <!-- Array of Scores in the tournament -->
        <div
          class="col-1"
        >
          <div
            class="row justify-content-center border border-dark row-fill-green bold-text"
          >
            Score
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
    </div>
    <div>
      <p>
      <button
        v-if="this.score.status == 'active'"
        class="btn btn-secondary btn-l rounded-pill mt-2 me-3"
        data-bs-toggle="modal"
        data-bs-target="#score-update"
        v-on:click="scoreUpdateModal(score)"
      >
        Add Score
      </button>
      <button
        v-if="this.score.status == 'active'"
        class="btn btn-secondary btn-l rounded-pill mt-2 me-3"
        v-on:click="tournamentShow(score)"
      >
        View Leaderboard
      </button>
      </p>
      <button
      class="btn btn-secondary btn-s rounded-pill mt-2 me-3"
      v-on:click="pushBackToProfile()"
      >
        Return
      </button>
      <button
        v-if="this.score.status == 'active'"
        class="btn btn-secondary btn-l rounded-pill mt-2 me-3"
        data-bs-toggle="modal"
        data-bs-target="#score-finish"
        v-on:click="scoreFinishModal(score)"
      >
        Finish Round
      </button>
    </div>
    <p>
    </p>
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
              data-bs-dismiss="modal"
              aria-label="Close"
              v-on:click="scoreUpdate(currentScore)"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Score Finish Modal -->
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
.col-1 {
  resize: none;
  overflow: scroll;
  width: 100px;
}
.border {
  border-style: solid;
  border-width: 2px;
  border-color: black;
}
.row-fill-green {
  background-color: #01ca233b;
}
.row-fill-grey {
  background-color: #2c2c2c18;
}
.bold-text {
  font-weight: 600;
}
.dropdown {
  width: 30%;
  height: 30px;
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
        score: {},
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
      currentScore: {},
      };
    },
    created: function () {
        this.scoreShow();
    },
    methods: {
      pushBackToProfile() {
          this.$router.go(-1);
      },
      scoreShow() {
        axios.get("/scores/" + this.$route.params.id).then((response) => {
            console.log("scores show", response);
            this.score = response.data;
        }); 
      },
      scoreUpdate: function (score) {
        let editScoreParams = score;
        let i = 1
        let toPar = 0
        let through = 0
        while(i < 19){
          if((score['hole' + i]) > 0){
            toPar = (score['hole' + i]) - (score.course['hole' + i +'_par'])
            through += 1 
          }
          i += 1
        }
        if (toPar == 0){
          toPar = "E"
        }
        this.score.to_par = String(toPar)
        this.score.through = through
        axios
          .patch("/scores/" + score.id, editScoreParams)
          .then((response) => {
            console.log("scores update", response);
            this.currentScore = {};
            location.reload();
          })
          .catch((error) => {
            console.log("scores update error", error.response);
          });
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
      Default: function () {},
      scoreUpdateModal: function (score) {
        this.currentScore = score;
      },
      scoreFinishModal: function (score) {
        this.currentScore = score;
      },
      tournamentShow(score) {
        this.$router.push({
          path: `/tournament/${score.tournament_id}`,
        });
      },
    },
  };
</script>