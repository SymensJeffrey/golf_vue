<template>
  <div class="home">
    <div class="container">
      <br />
      <br />
      <h1>{{ message }}</h1>
      <br />
      <br />
      <div>
        <input type="radio" id="round" name="drone" value="round" v-on:click="roundTournamentCheck()">
        <label for="round">Round</label>
      </div>

      <div>
        <input type="radio" id="tournament" name="drone" value="tournament" v-on:click="roundTournamentCheck()">
        <label for="tournament">Tournament</label>
      </div>
      <div>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <p>Name: <input maxlength="12" type="text" v-model="newScoreParams.name" placeholder="Max 12 Characters"/></p>
        <div id="ifTournament" style="display:none">
          <p>Token: <input type="text" v-model="newScoreParams.token" /></p>
        </div>
        <div id="ifRound" style="display:none">
          <p>Player 2: <input type='text' id='player2' name='player2'></p>
          <p>Player 3: <input type='text' id='player3' name='player3'></p>
          <p>Player 4: <input type='text' id='player4' name='player4'></p>
        </div>
        <button
          class="btn btn-secondary btn-xl rounded-pill mt-5"
          v-on:click="scoresCreate()"
        >
          Create
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Create Scorecard",
      newScoreParams: {},
      errors: [],
      roundCheck: "",
      tournamentCheck: "",
    };
  },
  created: function () {},
  methods: {
    scoresCreate() {
      axios
        .post("/scores", this.newScoreParams)
        .then((response) => {
          this.$router.push("/scores");
          console.log("scores create", response);
          this.scores.push(response.data);
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid token"];
        });
    },
    roundTournamentCheck() {
      if (document.getElementById('round').checked) {
        document.getElementById('ifRound').style.display = 'block';
      } else {
        document.getElementById('ifRound').style.display = 'none'
      }
      if (document.getElementById('tournament').checked) {
        document.getElementById('ifTournament').style.display = 'block';
      } else {
        document.getElementById('ifTournament').style.display = 'none'
      }
    },
  },
};
</script>
