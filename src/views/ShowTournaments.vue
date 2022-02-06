<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div>
    </div>
    <!-- Scorecard -->
    <div class="row justify-content-center no-border">
        <!-- Hole list -->
        <div class="col-1">
          <div class="row justify-content-center border border-dark">
            Hole
          </div>
          <div class="row justify-content-center border border-dark">
            1
          </div>
          <div class="row justify-content-center border border-dark">
            2
          </div>
          <div class="row justify-content-center border border-dark">
            3
          </div>
          <div class="row justify-content-center border border-dark">
            4
          </div>
          <div class="row justify-content-center border border-dark">
            5
          </div>
          <div class="row justify-content-center border border-dark">
            6
          </div>
          <div class="row justify-content-center border border-dark">
            7
          </div>
          <div class="row justify-content-center border border-dark">
            8
          </div>
          <div class="row justify-content-center border border-dark">
            9
          </div>
          <div class="row justify-content-center border border-dark">
            Front
          </div>
          <div class="row justify-content-center border border-dark">
            10
          </div>
          <div class="row justify-content-center border border-dark">
            11
          </div>
          <div class="row justify-content-center border border-dark">
            12
          </div>
          <div class="row justify-content-center border border-dark">
            13
          </div>
          <div class="row justify-content-center border border-dark">
            14
          </div>
          <div class="row justify-content-center border border-dark">
            15
          </div>
          <div class="row justify-content-center border border-dark">
            16
          </div>
          <div class="row justify-content-center border border-dark">
            17
          </div>
          <div class="row justify-content-center border border-dark">
            18
          </div>
          <div class="row justify-content-center border border-dark">
            Back
          </div>
          <div class="row justify-content-center border border-dark">
            Out
          </div>
        </div>
        <!-- Array of Scores in the tournament -->
        <div class="col-1" v-for="score in tournament.scores" v-bind:key="score.id">
          <div class="row justify-content-center border border-dark">
            {{ score.name }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{  score.hole1  }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{  score.hole2  }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{  score.hole3  }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{  score.hole4  }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{  score.hole5  }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{  score.hole6  }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{  score.hole7  }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{  score.hole8  }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{  score.hole9  }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{  score.front  }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{  score.hole10  }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{  score.hole11  }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{  score.hole12  }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{  score.hole13  }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{  score.hole14  }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{  score.hole15  }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{  score.hole16  }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{  score.hole17  }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{  score.hole18  }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{  score.back  }}
          </div>
          <div class="row justify-content-center border border-dark">
            {{  score.total }}
          </div>
        </div>
    </div>
    <br>
    <button class="btn btn-secondary btn-s rounded-pill" v-on:click="pushBackToScore()">Return to Scorecard</button>
  </div>
</template>

<style scoped>
.col-1{
  resize: none;
  overflow: scroll;
  width: 100px;
}
.border{
  border-style: solid;
  border-width: 2px;
  border-color: black;
} 
</style>

<script>
    import axios from 'axios'
  export default {
    data: function () {
      return {
        message: "Leaderboard",
        tournament: {}
      };
    },
    created: function () {
      axios.get("/tournaments/" + this.$route.params.id).then((response) => {
        console.log("tournaments show", response);
        this.tournament = response.data;
      });
    },
    methods: {
      pushBackToScore() {
        this.$router.go(-1)
      }
    },
  };
</script>