<template>
  <v-container>
    <v-card>
      <v-list-item v-for="item in classesInSchedule" :key="item.index">
        <v-list-item-content>
          <v-list-item-title>
            {{ item.SubjectCatalog }} - {{ item.CourseTitle }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ item.M }} {{ item.T }} {{ item.W }} {{ item.TH }} {{ item.F }}
            {{ item.S }} {{ item.SU }} - {{ item.Time }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "SelectedClasses",

  props: ["classesInSchedule"],
};
</script>
