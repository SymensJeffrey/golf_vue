<template>
  <div class="home">
    <br />
    <br />
    <h1>{{ message }}</h1>
    <br />
    <div class="container justify-content-center">
      <div class="row bold-text">
        <div class="col">
          Name
        </div>
        <div class="col">
          Score
        </div>
        <div class="col">
          Through
        </div>
      </div>
      <div class="row" v-for="score in tournament.scores" v-bind:key="score.id">
        <div class="col border-top border-end border-dark">
          {{score.name}}
        </div>
        <div class="col-1 border-top border-end border-dark">
          {{score.to_par}}
        </div>
        <div class="col-1 border-top  border-dark">
          {{score.through}}
        </div>
      </div>
    </div>
    <br>
    <br>
    <h5 class="mb-3">{{tournament.course.name}}</h5>
    <!-- Leaderboard -->
    <!-- Full Scorecard -->
    <div class="container">
      <div class="row flex-nowrap justify-content-center no-border">
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
            {{ tournament.course.hole1_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ tournament.course.hole2_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ tournament.course.hole3_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ tournament.course.hole4_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ tournament.course.hole5_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ tournament.course.hole6_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ tournament.course.hole7_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ tournament.course.hole8_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ tournament.course.hole9_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-green bold-text"
          >
            {{ tournament.course.front_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ tournament.course.hole10_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ tournament.course.hole11_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ tournament.course.hole12_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ tournament.course.hole13_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ tournament.course.hole14_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ tournament.course.hole15_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ tournament.course.hole16_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ tournament.course.hole17_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-grey"
          >
            {{ tournament.course.hole18_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-green bold-text"
          >
            {{ tournament.course.back_par }}
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-green bold-text"
          >
            {{ tournament.course.total_par }}
          </div>
        </div>
        <!-- Array of Scores in the tournament -->
        <div
          class="col-1"
          v-for="score in tournament.scores"
          v-bind:key="score.id"
        >
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
    </div>
    <br />
    <button
      class="btn btn-secondary btn-s rounded-pill"
      v-on:click="pushBackToScore()"
    >
      Return
    </button>
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
.container {
  display: grid;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Leaderboard",
      tournament: {},
      
    };
  },
  created: function () {
    axios.get("/tournaments/" + this.$route.params.id).then((response) => {
      console.log("tournaments show", response);
      this.tournament = response.data;
      let scoresSorted = this.tournament.scores
      scoresSorted.sort((a,b) => {
        return a.to_par - b.to_par
      });
    });
  },
  methods: {
    pushBackToScore() {
      this.$router.go(-1);
    },
  },
};
</script>
