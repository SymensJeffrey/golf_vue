<template>
  <div class="home">
    <header class="masthead text-center text-white">
      <div class="masthead-content">
          <div class="container px-5">
              <h1 class="masthead-heading mb-0">Scoreboard</h1>
              <h2 class="masthead-subheading mb-0">Live Golf Score Tracking</h2>
              <a class="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">Learn More</a>
          </div>
          <div v-if="!isLoggedIn()">
            <button class="btn btn-primary btn-l rounded-pill mt-5" v-on:click="pushToSignup">Signup</button>
            <button class="btn btn-primary btn-l rounded-pill mt-5" v-on:click="pushToLogin">Login</button>
          </div>
      </div>
      <div class="bg-circle-1 bg-circle"></div>
      <div class="bg-circle-2 bg-circle"></div>
      <div class="bg-circle-3 bg-circle"></div>
      <div class="bg-circle-4 bg-circle"></div>
    </header>
    <br>
    <br>
    <section id="scroll">
      <div class="container px-5">
        <div class="row gx-5 align-items-center">
          <div class="col-lg-6 order-lg-2">
            <div class="p-2"><img class="img-fluid rounded-circle" src="assets/img/new01.jpg" alt="..." /></div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="p-2">
              <h2 class="display-4">Start a Scorecard</h2>
              <p>Starting a Scorecard will allow you to enter your scores and update them throughout your round. Everyone with the same tournament code will be able to see your scores. (Note: you will need a unique code to sync with the tournament to be able to see all your friends scores)</p>
            </div>
            <button class="btn btn-secondary btn-xl rounded-pill mt-5" v-if="isLoggedIn()" v-on:click="pushToCreateScorecard()">Start</button>
          </div>
        </div>
      </div>
    </section>
    <!-- Content section 2-->
    <section>
      <div class="container px-2">
        <div class="row gx-5 align-items-center">
          <div class="col-lg-6">
            <div class="p-5"><img class="img-fluid rounded-circle" src="assets/img/new02.jpg" alt="..." /></div>
          </div>
          <div class="col-lg-6">
            <div class="p-2">
              <h2 class="display-4">Start a Tournament</h2>
              <p>Starting a tournament allows you to generate a unique code so you and your friends can track there scores and will allow everyone to see each other scores. If you have a code already, hit Start a Scorecard</p>
            </div>
            <button class="btn btn-secondary btn-xl rounded-pill mt-5" v-if="isLoggedIn()" v-on:click="pushToCreateTournament()">Start</button>
          </div>
        </div>
      </div>
    </section>
    <!-- Content section 3-->
    <section>
      <div class="container px-5">
        <div class="row gx-5 align-items-center">
          <div class="col-lg-6 order-lg-2">
            <div class="p-2"><img class="img-fluid rounded-circle" src="assets/img/new03.jpg" alt="..." /></div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="p-2">
              <h2 class="display-4">How it works</h2>
                <p>Scoreboard is a place that allows you and your friends to log scores so they are visible to everyone. You can create a tournament and generate a unique code that you can give to people in your tournament. Then you can generate a scorecard and track your score as you go and check the leaderboard to see everyone elses scores. Get out there and hit em straight!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.bottom-margin{
  margin-bottom: 60px;
}
.column-padding{
  padding: 20px;
}
</style>

<script>
  // import axios from "axios"
  export default {
    data: function () {
      return {
        message: "Welcome to Scoreboard",
        newTournamentParams: {},
      };
    },
    created: function () {},
    methods: {
      pushToSignup () {
        this.$router.push("/signup");
      },
      pushToLogin () {
        this.$router.push("/login");
      },
      isLoggedIn: function() {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }      
      },
      pushToCreateTournament () {
        this.$router.push("/Tournament/new");
      },
      pushToCreateScorecard () {
        this.$router.push("/score/new")
      }
    },
  };
</script>