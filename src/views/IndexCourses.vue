<template>
  <div class="home">
    <br />
    <h1>{{ message }}</h1>
    <div>
      <p><input placeholder="Search" v-model="searchTerm" /></p>
    </div>
    <div v-if="isAdmin()">
      <button
        class="btn btn-secondary btn-l rounded-pill mt-2 mb-3"
        v-on:click="pushToCreateCourse()"
      >
        Add Course
      </button>
    </div>
    <div class="center-cards row">
      <div
        class="card margin-bottom shadow-lg p-3 mb-5 bg-white rounded"
        v-for="course in filterBy(courses, searchTerm)"
        v-bind:key="course.id"
      >
        <div class="card-body">
          <h5 class="card-title">{{ course.name }}</h5>
          <p class="card-text">{{ course.city }}</p>
          <button
            class="btn btn-secondary btn-l rounded-pill mt-2 me-3"
            v-on:click="courseShow(course)"
          >
            View Course
          </button>
          <button
            class="btn btn-secondary btn-l rounded-pill mt-2 me-3"
            v-on:click="courseDestroy(course)"
            v-if="isAdmin()"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.center-cards {
  display: flex;
  justify-content: center;
}
.card {
  width: 275px;
}
.btn-l {
  width: 150px;
  height: 35px;
}
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      message: "Courses",
      courses: [],
      searchTerm: "",
      user: {},
    };
  },
  created: function () {
    this.coursesIndex();
    this.userShow();
  },
  methods: {
    coursesIndex() {
      axios.get("/courses").then((response) => {
        console.log("courses index", response);
        this.courses = response.data;
      });
    },
    userShow: function () {
      axios.get(`/users/${localStorage.user_id}`).then((response) => {
        this.user = response.data;
      });
    },
    isAdmin() {
      if (this.user.role == "admin" || this.user.role == "master") {
        return true;
      } else {
        return false;
      }
    },
    pushToCreateCourse() {
      this.$router.push("/course/new");
    },
    courseShow(course) {
      this.$router.push({
        path: `/courses/${course.id}`,
      });
    },
    courseDestroy: function (course) {
      axios.delete("/courses/" + course.id).then((response) => {
        console.log("courses destroy", response);
        var index = this.courses.indexOf(course);
        this.courses.splice(index, 1);
        location.reload();
      });
    },
  },
};
</script>
