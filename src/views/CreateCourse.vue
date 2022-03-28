<template>
  <div class="home">
    <br />
    <h1>{{ message }}</h1>
    <div v-if="isAdmin()" class="container">
      <br />
      <div>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <p>Name: <input type="text" v-model="newCourseParams.name" /></p>
        <p>City: <input type="text" v-model="newCourseParams.city" /></p>
        <p>
          Hole 1 Par:
          <input
            class="par-input"
            type="number"
            v-model="newCourseParams.hole1_par"
          />
        </p>
        <p>
          Hole 2 Par:
          <input type="number" v-model="newCourseParams.hole2_par" />
        </p>
        <p>
          Hole 3 Par:
          <input type="number" v-model="newCourseParams.hole3_par" />
        </p>
        <p>
          Hole 4 Par:
          <input type="number" v-model="newCourseParams.hole4_par" />
        </p>
        <p>
          Hole 5 Par:
          <input type="number" v-model="newCourseParams.hole5_par" />
        </p>
        <p>
          Hole 6 Par:
          <input type="number" v-model="newCourseParams.hole6_par" />
        </p>
        <p>
          Hole 7 Par:
          <input type="number" v-model="newCourseParams.hole7_par" />
        </p>
        <p>
          Hole 8 Par:
          <input type="number" v-model="newCourseParams.hole8_par" />
        </p>
        <p>
          Hole 9 Par:
          <input type="number" v-model="newCourseParams.hole9_par" />
        </p>
        <p>
          Front Par: <input type="number" v-model="newCourseParams.front_par" />
        </p>
        <p>
          Hole 10 Par:
          <input type="number" v-model="newCourseParams.hole10_par" />
        </p>
        <p>
          Hole 11 Par:
          <input type="number" v-model="newCourseParams.hole11_par" />
        </p>
        <p>
          Hole 12 Par:
          <input type="number" v-model="newCourseParams.hole12_par" />
        </p>
        <p>
          Hole 13 Par:
          <input type="number" v-model="newCourseParams.hole13_par" />
        </p>
        <p>
          Hole 14 Par:
          <input type="number" v-model="newCourseParams.hole14_par" />
        </p>
        <p>
          Hole 15 Par:
          <input type="number" v-model="newCourseParams.hole15_par" />
        </p>
        <p>
          Hole 16 Par:
          <input type="number" v-model="newCourseParams.hole16_par" />
        </p>
        <p>
          Hole 17 Par:
          <input type="number" v-model="newCourseParams.hole17_par" />
        </p>
        <p>
          Hole 18 Par:
          <input type="number" v-model="newCourseParams.hole18_par" />
        </p>
        <p>
          Back Par: <input type="number" v-model="newCourseParams.back_par" />
        </p>
        <p>
          Total Par: <input type="number" v-model="newCourseParams.total_par" />
        </p>
        <button
          class="btn btn-secondary btn-l rounded-pill mt-3"
          v-on:click="courseCreate()"
        >
          Create
        </button>
      </div>
    </div>
    <div v-if="!isAdmin()">
      <p>You do not have access to add courses</p>
    </div>
  </div>
</template>

<style scoped>
input[type="number"] {
  text-align: center;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Add a Course",
      errors: [],
      newCourseParams: {},
      user: {}
    };
  },
  created: function () {
    this.userShow();
  },
  methods: {
    courseCreate() {
      axios
        .post("/courses", this.newCourseParams)
        .then((response) => {
          this.$router.push("/courses");
          console.log("course create", response);
          this.course.push(response.data);
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid course"];
        });
    },
    userShow: function () {
        axios.get(`/users/${localStorage.user_id}`).then((response) => {
        this.user = response.data;
        });
    },
    isAdmin() {
      if(this.user.role == "admin" || this.user.role == "master"){
        return true 
      } else {
        return false
      }
    },
  },
};
</script>
