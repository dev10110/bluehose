<template>
  <v-app>
    <v-main>
      <!-- <v-container> -->

      <div class="navBar">
        <v-container>
          <h1>BlueHose</h1>
          <p>
            <a target="_blank" href="https://firehose.guide/">Firehose</a>, but
            for UMich
          </p>
        </v-container>
      </div>
      <div class="pa-md-4 ma-4">
        <v-layout row class="text-center">
          <v-flex md6>
            <WeekView
              v-bind:classesInSchedule="classesInSchedule"
              v-bind:colors="colors"
              v-on:selectedClass="handleChangeSelectedClass($event)"
            />
            <SelectedClasses
              v-bind:classesInSchedule="classesInSchedule"
              v-bind:colors="colors"
              v-on:selectedClass="handleChangeSelectedClass($event)"
            />
          </v-flex>
          <v-flex md6>
            <ClassSelector
              v-on:addToScheduleRequest="handleAddToScheduleRequest($event)"
              v-on:removeFromScheduleRequest="
                handleRemoveFromScheduleRequest($event)
              "
              v-on:changeSelectedClass="handleChangeSelectedClass($event)"
              v-bind:classesInSchedule="classesInSchedule"
              v-bind:selectedClass="selectedClass"
            />
          </v-flex>
        </v-layout>
        <!-- </v-container> -->
      </div>
      <div class="botBar">
        <v-container>
          <v-row>
            <v-col>
              Devansh Agrawal
            </v-col>

            <v-col>
              <a target="_blank" href="https://github.com/dev10110/bluehose">
                Github
              </a>
            </v-col>
            <v-col>
              <a target="_blank" href="https://github.com/dev10110/bluehose">
                Bugs/Feature Request
              </a>
            </v-col>
            <v-col>
              Last Updated: 31 July 2020
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import WeekView from "./components/WeekView";
import ClassSelector from "./components/ClassSelector";
import SelectedClasses from "./components/SelectedClasses";

export default {
  name: "App",

  components: {
    WeekView,
    ClassSelector,
    SelectedClasses,
  },

  data: () => ({
    classesInSchedule: [],
    selectedClass: null,
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1",
    ],
  }),

  watch: {
    classesInSchedule: function(newSched, oldSched) {
      oldSched;
      this.$cookies.set("classesInSchedule", JSON.stringify(newSched));
    },
  },

  mounted: function() {
    if (this.$cookies.isKey("classesInSchedule")) {
      this.classesInSchedule = JSON.parse(
        this.$cookies.get("classesInSchedule")
      );
      console.log("Mounted: ", this.classesInSchedule);
    }
  },

  methods: {
    handleAddToScheduleRequest: function(classObj) {
      if (!this.classesInSchedule.includes(classObj)) {
        this.classesInSchedule.push(classObj);
      }
    },
    handleRemoveFromScheduleRequest: function(classObj) {
      this.classesInSchedule = this.classesInSchedule.filter(function(obj) {
        return obj !== classObj;
      });
    },

    handleChangeSelectedClass: function(event) {
      this.selectedClass = event;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab");

.navBar,
.botBar {
  background-color: #01274d;
  color: #ffcb09;
  font-family: "Roboto Slab", "Roboto", "Helvetica Neue" !important;
}
.navBar a:link,
a:visited,
a:hover,
a:active {
  color: #ffcb09;
}

.botBar {
  color: #fff;
}
.botBar a:link,
.botBar a:visited,
.botBar a:hover,
.botBar a:active {
  color: #fff;
}
</style>
