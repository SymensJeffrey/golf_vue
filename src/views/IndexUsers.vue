<template>
  <div class="home">
    <br>
    <h1>{{ message }}</h1>
    <br>
    <div class="row bottom-border">
        <div class="col">
            <h6>Email</h6>
        </div>
        <div class="col">
           <h6>Role</h6>
        </div>
    </div>
    <div  class="row mb-2" v-for="user in users" v-bind:key="user.id">
        <div class="col m-1">
            {{user.email}}
        </div>
        <div class="col">
            {{user.role}}
        </div>
    </div>
  </div>
</template>

<style scoped>
.bottom-border{
    border-style: solid;
    border-color: rgb(58, 58, 58);
    border-top: 3px;
    margin-bottom: 5px;
}
</style>

<script>
import axios from "axios"
  export default {
    data: function () {
      return {
        message: "User Role Management",
        users: [],
      };
    },
    created: function () {
        this.usersIndex();
    },
    methods: {
        usersIndex() {
            axios.get("/users").then((response) => {
            console.log("users index", response);
            this.users = response.data;
        });
        }
    },
  };
</script>