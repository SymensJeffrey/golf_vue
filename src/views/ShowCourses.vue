<template>
  <div class="home">
      <br>
      <br>
    <div>
      <h1>{{ course.name }}</h1>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios"
  export default {
    data: function () {
      return {
        course: {},
      };
    },
    created: function () {
      this.courseShow();
    },
    methods: {
      courseShow() {
        axios.get("/courses/" + this.$route.params.id).then((response) => {
            console.log("courses show", response);
            this.course = response.data;
        }); 
      },
    },
  };
</script>