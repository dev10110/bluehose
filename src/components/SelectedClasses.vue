<template>
  <v-container>
    <div v-for="(item, index) in classesInSchedule" :key="index">
      <v-card
        :color="colors[index]"
        dark
        @click="handleClickonCard($event, index)"
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.SubjectCatalog }} - {{ item.CourseTitle }}
            </v-list-item-title>
            <v-list-item-subtitle>
              <v-chip
                class="ma-2"
                color="red"
                text-color="white"
                label
                small
                v-if="item.Time === 'ARR'"
              >
                ARR
              </v-chip>
              <v-chip class="ma-2" small label text-color="white">
                {{ item.Location }}
              </v-chip>

              <v-chip class="ma-2" small label text-color="white">
                {{ item.Units }} units
              </v-chip>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "SelectedClasses",

  props: ["classesInSchedule", "colors"],

  methods: {
    handleClickonCard: function(event, index) {
      console.log("Clicked on", event, index);
      this.$emit("selectedClass", this.classesInSchedule[index]);
    },
  },
};
</script>
