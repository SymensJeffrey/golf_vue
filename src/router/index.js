import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import CreateTournament from "../views/CreateTournament.vue";
import CreateScore from "../views/CreateScore.vue";
import IndexScores from "../views/IndexScores.vue";
import ShowTournaments from "../views/ShowTournaments.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/signup", name: "Signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/createTournament", name: "createTournament", component: CreateTournament },
  { path: "/createScore", name: "createScore", component: CreateScore },
  { path: "/indexScores", name: "indexScores", component: IndexScores },
  { path: "/tournament/:id", name: "showtournaments", component: ShowTournaments },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
