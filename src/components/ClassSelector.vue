<template>
  <v-container>
    Class Selector
    <ClassTable v-on:changeSelectedClass="handleChangeSelectedClass($event)" />
    <ClassDetails v-bind:selectedClass="selectedClass" />
  </v-container>
</template>

<script>
import ClassTable from "./ClassTable";
import ClassDetails from "./ClassDetails";

export default {
  name: "ClassSelector",

  components: {
    ClassTable,
    ClassDetails,
  },

  data() {
    return {
      selectedClass: [],
    };
  },

  methods: {
    handleChangeSelectedClass: function(selectedClass) {
      this.selectedClass = selectedClass;
    },
  },
};
</script>
