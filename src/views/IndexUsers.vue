<template>
  <div class="home">
    <br>
    <h1>{{ message }}</h1>
    <br>
    <div class="row bottom-border">
        <div class="col-8">
            <h6>Email</h6>
        </div>
        <div class="col">
           <h6>Role</h6>
        </div>
    </div>
    <div  class="row mb-2" v-for="user in users" v-bind:key="user.id">
      <div class="col-8 m-1">
        {{user.email}}
      </div>
      <div class="col">
          <a href="" v-on:click="userUpdateModal(user)" data-bs-toggle="modal" data-bs-target="#user-update">{{user.role}}</a>
      </div>
    </div>
    <!-- User Update Modal -->
    <div
      class="modal fade"
      id="user-update"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">User Role</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h6>Update User Role for {{currentUser.email}}</h6>
            <v-select
              class="dropdown"
              :options="roles"
              label="role"
              v-model="editUserParams.role"
              :reduce="(user) => user.role"
            ></v-select>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              v-on:click="userUpdate(currentUser)"
              data-bs-dismiss="modal"
            >
              Update
            </button>
          </div>
        </div>
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
.user-role{
  border: none;
}
</style>

<script>
import axios from "axios"
  export default {
    data: function () {
      return {
        message: "User Role Management",
        users: [],
        currentUser: {},
        user: {},
        editUserParams: {},
        roles:[
          {role: "user"},
          {role: "admin"},
          {role: "master"}
        ]
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
      },
      userUpdateModal(user) {
        this.currentUser = user;
      },
      userUpdate: function (user) {
      var editUserParams = user;
      console.log(editUserParams)
      axios
        .patch("/users/" + user.id, this.editUserParams)
        .then((response) => {
          console.log("users update", response);
          this.currentUser = {};
        })
        .catch((error) => {
          console.log("users update error", error.response);
        });
      },
    },
  };
</script>