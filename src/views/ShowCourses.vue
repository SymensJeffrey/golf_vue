<template>
  <div class="home">
      <br>
      <br>
    <div>
      <h1>{{ course.name }}</h1>
      <div class="container">
        <div class="row justify-content-center no-border">
          <div class="row justify-content-center mb-1 bold-text">
          </div>
          <!-- Hole list -->
          <div class="col-1">
            <div
              class="row justify-content-center border border-dark row-fill-green bold-text"
            >
              Hole
            </div>
            <div class="row justify-content-center border border-dark">1</div>
            <div class="row justify-content-center border border-dark">2</div>
            <div class="row justify-content-center border border-dark">3</div>
            <div class="row justify-content-center border border-dark">4</div>
            <div class="row justify-content-center border border-dark">5</div>
            <div class="row justify-content-center border border-dark">6</div>
            <div class="row justify-content-center border border-dark">7</div>
            <div class="row justify-content-center border border-dark">8</div>
            <div class="row justify-content-center border border-dark">9</div>
            <div
              class="row justify-content-center border border-dark row-fill-green bold-text"
            >
              Front
            </div>
            <div class="row justify-content-center border border-dark">10</div>
            <div class="row justify-content-center border border-dark">11</div>
            <div class="row justify-content-center border border-dark">12</div>
            <div class="row justify-content-center border border-dark">13</div>
            <div class="row justify-content-center border border-dark">14</div>
            <div class="row justify-content-center border border-dark">15</div>
            <div class="row justify-content-center border border-dark">16</div>
            <div class="row justify-content-center border border-dark">17</div>
            <div class="row justify-content-center border border-dark">18</div>
            <div
              class="row justify-content-center border border-dark row-fill-green bold-text"
            >
              Back
            </div>
            <div
              class="row justify-content-center border border-dark row-fill-green bold-text"
            >
              Out
            </div>
          </div>
          <!-- Course hole Par -->
          <div class="col-1">
            <div
              class="row justify-content-center border border-dark row-fill-green bold-text"
            >
              Par
            </div>
            <div
              class="row justify-content-center border border-dark row-fill-grey"
            >
              {{ course.hole1_par }}
            </div>
            <div
              class="row justify-content-center border border-dark row-fill-grey"
            >
              {{ course.hole2_par }}
            </div>
            <div
              class="row justify-content-center border border-dark row-fill-grey"
            >
              {{ course.hole3_par }}
            </div>
            <div
              class="row justify-content-center border border-dark row-fill-grey"
            >
              {{ course.hole4_par }}
            </div>
            <div
              class="row justify-content-center border border-dark row-fill-grey"
            >
              {{ course.hole5_par }}
            </div>
            <div
              class="row justify-content-center border border-dark row-fill-grey"
            >
              {{ course.hole6_par }}
            </div>
            <div
              class="row justify-content-center border border-dark row-fill-grey"
            >
              {{ course.hole7_par }}
            </div>
            <div
              class="row justify-content-center border border-dark row-fill-grey"
            >
              {{ course.hole8_par }}
            </div>
            <div
              class="row justify-content-center border border-dark row-fill-grey"
            >
              {{ course.hole9_par }}
            </div>
            <div
              class="row justify-content-center border border-dark row-fill-green bold-text"
            >
              {{ course.front_par }}
            </div>
            <div
              class="row justify-content-center border border-dark row-fill-grey"
            >
              {{ course.hole10_par }}
            </div>
            <div
              class="row justify-content-center border border-dark row-fill-grey"
            >
              {{ course.hole11_par }}
            </div>
            <div
              class="row justify-content-center border border-dark row-fill-grey"
            >
              {{ course.hole12_par }}
            </div>
            <div
              class="row justify-content-center border border-dark row-fill-grey"
            >
              {{ course.hole13_par }}
            </div>
            <div
              class="row justify-content-center border border-dark row-fill-grey"
            >
              {{ course.hole14_par }}
            </div>
            <div
              class="row justify-content-center border border-dark row-fill-grey"
            >
              {{ course.hole15_par }}
            </div>
            <div
              class="row justify-content-center border border-dark row-fill-grey"
            >
              {{ course.hole16_par }}
            </div>
            <div
              class="row justify-content-center border border-dark row-fill-grey"
            >
              {{ course.hole17_par }}
            </div>
            <div
              class="row justify-content-center border border-dark row-fill-grey"
            >
              {{ course.hole18_par }}
            </div>
            <div
              class="row justify-content-center border border-dark row-fill-green bold-text"
            >
              {{ course.back_par }}
            </div>
            <div
              class="row justify-content-center border border-dark row-fill-green bold-text"
            >
              {{ course.total_par }}
            </div>
          </div>
        </div>
        <button
          class="btn btn-secondary btn-s rounded-pill mt-2 me-3"
          v-on:click="pushBackToPreviousPage()"
          >
            Return
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.col-1 {
  resize: none;
  overflow: scroll;
  width: 100px;
}
.border {
  border-style: solid;
  border-width: 2px;
  border-color: black;
}
.row-fill-green {
  background-color: #01ca233b;
}
.row-fill-grey {
  background-color: #2c2c2c18;
}
</style>

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
      pushBackToPreviousPage() {
          this.$router.go(-1);
      },
    },
  };
</script>