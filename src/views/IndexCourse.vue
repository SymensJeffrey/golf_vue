<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
    data: function () {
      return {
        message: "Welcome to Vue.js!",
        courses: [],
      };
    },
    created: function () {
        this.coursesIndex
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