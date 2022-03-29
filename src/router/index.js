import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import CreateTournament from "../views/CreateTournament.vue";
import CreateScore from "../views/CreateScore.vue";
import IndexScores from "../views/IndexScores.vue";
import ShowTournaments from "../views/ShowTournaments.vue";
import ShowUser from "../views/ShowUser.vue";
import CreateCourse from "../views/CreateCourse.vue";
import IndexCourse from "../views/IndexCourse.vue";
import ShowScores from "../views/ShowScores.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/signup", name: "Signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  {
    path: "/tournament/new",
    name: "createTournament",
    component: CreateTournament,
  },
  { path: "/score/new", name: "createScore", component: CreateScore },
  { path: "/scores", name: "indexScores", component: IndexScores },
  {
    path: "/tournament/:id",
    name: "showtournaments",
    component: ShowTournaments,
  },
  {
    path: "/user",
    name: "showuser",
    component: ShowUser,
  },
  {
    path: "/course/new",
    name: "createcourse",
    component: CreateCourse,
  },
  {
    path: "/courses",
    name: "indexcourse",
    component: IndexCourse,
  },
  {
    path: "/score/:id",
    name: "showscores",
    component: ShowScores,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
