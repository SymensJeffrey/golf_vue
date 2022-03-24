<template>
  <div class="home">
    <br> 
    <h1>{{ message }}</h1>
    <div>
        <p><input placeholder="Search" v-model="searchTerm"></p>
    </div>
    <div class="center-cards row">
          <div
            class="card margin-bottom shadow-lg p-3 mb-5 bg-white rounded"
            v-for="course in filterBy(courses, searchTerm)"
            v-bind:key="course.id"
          >
            <div class="card-body">
              <h5 class="card-title">Name: {{ course.name }}</h5>
              <p class="card-text">{{ course.city }}</p>
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
</style>

<script>
import axios from "axios";
import Vue2Filters from 'vue2-filters'
export default {
    mixins: [Vue2Filters.mixin],
    data: function () {
      return {
        message: "Courses",
        courses: [],
        searchTerm: ""
      };
    },
    created: function () {
        this.coursesIndex();
    },
    methods: {
      coursesIndex() {
          axios.get("/courses").then((response) => {
          console.log("courses index", response);
          this.courses = response.data;
          });
      },
    }
};
</script>