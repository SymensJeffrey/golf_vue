<template>
  <div class="home">
    <br />
    <br />
    <h1>{{ message }}</h1>
    <br />
    <div class="container justify-content-center big-text">
      <div class="row bold-text">
        <div class="col">Name</div>
        <div class="col-1">Score</div>
        <div class="col-1">Through</div>
      </div>
      <div class="row" v-for="score in tournament.scores" v-bind:key="score.id">
        <div class="col border-top border-end border-dark">
          {{ score.name }}
        </div>
        <div class="col-1 border-top border-end border-dark">
          <div
            :class="{
              positive: score.to_par > 0,
              negative: score.to_par < 0,
              even: score.to_par == 0,
            }"
          >
            {{ score.to_par }}
          </div>
        </div>
        <div class="col-1 border-top border-dark">
          {{ score.through }}
        </div>
      </div>
    </div>
    <br />
    <br />
    <h5 class="mb-3">{{ tournament.course.name }}</h5>
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
            <div :class="{ zero: score.hole1 == 0 }">{{ score.hole1 }}</div>
          </div>
          <div class="row justify-content-center border border-dark">
            <div :class="{ zero: score.hole2 == 0 }">{{ score.hole2 }}</div>
          </div>
          <div class="row justify-content-center border border-dark">
            <div :class="{ zero: score.hole3 == 0 }">{{ score.hole3 }}</div>
          </div>
          <div class="row justify-content-center border border-dark">
            <div :class="{ zero: score.hole4 == 0 }">{{ score.hole4 }}</div>
          </div>
          <div class="row justify-content-center border border-dark">
            <div :class="{ zero: score.hole5 == 0 }">{{ score.hole5 }}</div>
          </div>
          <div class="row justify-content-center border border-dark">
            <div :class="{ zero: score.hole6 == 0 }">{{ score.hole6 }}</div>
          </div>
          <div class="row justify-content-center border border-dark">
            <div :class="{ zero: score.hole7 == 0 }">{{ score.hole7 }}</div>
          </div>
          <div class="row justify-content-center border border-dark">
            <div :class="{ zero: score.hole8 == 0 }">{{ score.hole8 }}</div>
          </div>
          <div class="row justify-content-center border border-dark">
            <div :class="{ zero: score.hole9 == 0 }">{{ score.hole9 }}</div>
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-green bold-text"
          >
            <div :class="{ zero: score.front == 0 }">{{ score.front }}</div>
          </div>
          <div class="row justify-content-center border border-dark">
            <div :class="{ zero: score.hole10 == 0 }">{{ score.hole10 }}</div>
          </div>
          <div class="row justify-content-center border border-dark">
            <div :class="{ zero: score.hole11 == 0 }">{{ score.hole11 }}</div>
          </div>
          <div class="row justify-content-center border border-dark">
            <div :class="{ zero: score.hole12 == 0 }">{{ score.hole12 }}</div>
          </div>
          <div class="row justify-content-center border border-dark">
            <div :class="{ zero: score.hole13 == 0 }">{{ score.hole13 }}</div>
          </div>
          <div class="row justify-content-center border border-dark">
            <div :class="{ zero: score.hole14 == 0 }">{{ score.hole14 }}</div>
          </div>
          <div class="row justify-content-center border border-dark">
            <div :class="{ zero: score.hole15 == 0 }">{{ score.hole15 }}</div>
          </div>
          <div class="row justify-content-center border border-dark">
            <div :class="{ zero: score.hole16 == 0 }">{{ score.hole16 }}</div>
          </div>
          <div class="row justify-content-center border border-dark">
            <div :class="{ zero: score.hole17 == 0 }">{{ score.hole17 }}</div>
          </div>
          <div class="row justify-content-center border border-dark">
            <div :class="{ zero: score.hole18 == 0 }">{{ score.hole18 }}</div>
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-green bold-text"
          >
            <div :class="{ zero: score.back == 0 }">{{ score.back }}</div>
          </div>
          <div
            class="row justify-content-center border border-dark row-fill-green bold-text"
          >
            <div :class="{ zero: score.total == 0 }">{{ score.total }}</div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <button
      class="btn btn-secondary btn-l rounded-pill"
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
.big-text {
  font-size: 130%;
}
.positive {
  color: rgb(0, 47, 128);
}

.negative {
  color: rgb(195, 0, 0);
}
.even {
  color: none;
}
.btn-l {
  width: 130px;
}
.zero {
  opacity: 0%;
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
      let scoresSorted = this.tournament.scores;
      scoresSorted.sort((a, b) => {
        return a.total - b.total;
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
