<template>
  <v-app>
    <v-main>
      <!-- <v-container> -->

      <div class="navBar">
        <v-container>
          <h1>BlueHose</h1>
          <p><a href="https://firehose.guide/">Firehose</a>, but for UMich</p>
        </v-container>
      </div>
      <div class="pa-md-4 ma-4">
        <v-layout row class="text-center">
          <v-flex md6>
            <WeekView v-bind:classesInSchedule="classesInSchedule" />
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
    </v-main>
  </v-app>
</template>

<script>
import WeekView from "./components/WeekView";
import ClassSelector from "./components/ClassSelector";

export default {
  name: "App",

  components: {
    WeekView,
    ClassSelector,
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
</style>
