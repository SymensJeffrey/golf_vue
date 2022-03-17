<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
</template>

<style></style>

<script>
import axios from "axios"
  export default {
    data: function () {
      return {
        message: "hi",
        user: ""
      };
    },
    created: function () {
        this.userShow();
    },
    methods: {
        userShow: function() {
            axios.get(`/users/${localStorage.user_id}`).then((response) => {console.log(response)
            this.user = response.data;
            });
        },
    },
  };
</script>