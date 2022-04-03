<template>
  <div id="app">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light"
      v-bind:class="{ navbarOpen: show }"
    >
      <div class="container">
        <a class="navbar-brand" href="/">Scoreboard</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          @click.stop="toggleNavbar()"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarSupportedContent"
          v-bind:class="{ show: show }"
        >
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" v-if="isLoggedIn()" href="/scores"
                >Scorecards</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" v-if="isLoggedIn()" href="/tournament/new"
                >Tournaments</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" v-if="isLoggedIn()" href="/courses">Courses</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" v-if="isLoggedIn()" href="/user">Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" v-if="isMaster()" href="/users">Users</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" v-if="isLoggedIn()" href="/logout">Logout</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" v-if="!isLoggedIn()" href="/login">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" v-if="!isLoggedIn()" href="/signup">Signup</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      show: "",
      user: [],
    };
  },
  created: function () {
    this.userShow();
    this.isLoggedIn();
    this.isMaster();
  },
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    toggleNavbar() {
      this.show = !this.show;
    },
    userShow: function () {
      axios.get(`/users/${localStorage.user_id}`).then((response) => {
        console.log(response);
        this.user = response.data;
      });
    },
    isMaster: function () {
      if (this.user){
        if(this.user.role == "master"){
          return true 
        } else {
          return false
        }
      } else {
        return false
      }
    },
  },
};
</script>
