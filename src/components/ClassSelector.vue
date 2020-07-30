<template>
  <v-container>
    <ClassTable v-on:changeSelectedClass="handleChangeSelectedClass($event)" />
    <ClassDetails
      v-if="selectedClass"
      v-bind:selectedClass="selectedClass"
      v-bind:classesInSchedule="classesInSchedule"
      v-on:closeDetailedSection="handleCloseDetailedSection($event)"
      v-on:addToScheduleRequest="handleAddToScheduleRequest($event)"
      v-on:removeFromScheduleRequest="handleRemoveFromScheduleRequest($event)"
    />
  </v-container>
</template>

<script>
import ClassTable from "./ClassTable";
import ClassDetails from "./ClassDetails";

export default {
  name: "ClassSelector",

  props: ["classesInSchedule"],

  components: {
    ClassTable,
    ClassDetails,
  },

  data() {
    return {
      selectedClass: null,
    };
  },

  methods: {
    handleChangeSelectedClass: function(selectedClass) {
      this.selectedClass = selectedClass;
    },
    handleCloseDetailedSection: function(event) {
      event;
      console.log("request to close section");
      this.selectedClass = null;
    },
    handleAddToScheduleRequest: function(event) {
      event;
      console.log("request to add to schedule");
      this.$emit("addToScheduleRequest", this.selectedClass);
    },
    handleRemoveFromScheduleRequest: function(event) {
      event;
      console.log("request to remove from schedule");
      this.$emit("removeFromScheduleRequest", this.selectedClass);
    },
  },
};
</script>
