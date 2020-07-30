<template>
  <v-container>
    Class Selector
    <ClassTable />
  </v-container>
</template>

<script>
import ClassTable from "./ClassTable";

export default {
  name: "ClassSelector",

  components: {
    ClassTable,
  },
};
</script>
