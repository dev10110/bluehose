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
            <WeekView v-bind:classesInSchedule="classesInSchedule" />
            <SelectedClasses v-bind:classesInSchedule="classesInSchedule" />
          </v-flex>
          <v-flex md6>
            <ClassSelector
              v-on:addToScheduleRequest="handleAddToScheduleRequest($event)"
              v-on:removeFromScheduleRequest="
                handleRemoveFromScheduleRequest($event)
              "
              v-bind:classesInSchedule="classesInSchedule"
            />
          </v-flex>
        </v-layout>
        <!-- </v-container> -->
      </div>
      <div class="botBar">
        <v-container>
          <p>
            Devansh Agrawal - 2020 -
            <a target="_blank" href="https://github.com/dev10110/bluehose">
              Github
            </a>
            -
            <a target="_blank" href="https://github.com/dev10110/bluehose">
              Bugs/Feature Request
            </a>
          </p>
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
  }),

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
  },
};
</script>

<style scoped>
.navBar {
  background-color: #01274d;
  color: #ffcb09;
}
.navBar a:link,
a:visited,
a:hover,
a:active {
  color: #ffcb09;
}

.botBar {
  background-color: #01274d;
  color: #fff;
}
.botBar a:link,
a:visited,
a:hover,
a:active {
  color: #fff;
}
</style>
