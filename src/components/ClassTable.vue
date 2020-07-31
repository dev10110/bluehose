<template>
  <div>
    <v-card> </v-card>
    <v-card>
      <v-card-title>
        <!-- <v-spacer></v-spacer> -->
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>

      <v-container fluid>
        <v-row align="center">
          <v-col cols="12">
            <v-autocomplete
              v-model="selectedAcadGrous"
              :items="uniqueAcadGroups"
              outlined
              dense
              chips
              small-chips
              label="Academic Group"
              multiple
            ></v-autocomplete>
          </v-col>
        </v-row>

        <v-row justify="space-around" align="center">
          <v-checkbox
            v-model="hideRemote"
            class="mx-2"
            label="Hide Remote Classes"
          ></v-checkbox>
          <v-checkbox
            v-model="hideInPerson"
            class="mx-2"
            label="Hide In Person Classes"
          ></v-checkbox>
        </v-row>
      </v-container>

      <v-data-table
        dense
        :headers="headers"
        :items="filtData"
        :search="search"
        @click:row="handleClickRow"
        no-data-text="Enable filters above to see classes"
        no-results-text="No classes found - try a different search?"
      >
      </v-data-table>
    </v-card>

    <p></p>

    <v-card>
      {{ selectedClass }}
    </v-card>
  </div>
</template>

<script>
//import vuePapaParse from "vue-papa-parse";

import dataTable from "../data/FA2020_open.json";

var regExp = /\(([^)]+)\)/;

dataTable.forEach((classItem) => {
  var matches = regExp.exec(classItem.Subject);
  classItem.SubjectShort = matches[1];
  classItem.SubjectCatalog =
    classItem.SubjectShort + " " + classItem.CatalogNbr;
});

const uniqueAcadGroups = [...new Set(dataTable.map((obj) => obj.AcadGroup))];

export default {
  name: "ClassTable",

  created: function() {
    this.dataTable = dataTable;
    this.uniqueAcadGroups = uniqueAcadGroups;
  },

  computed: {
    filtData() {
      let vm = this;
      return this.dataTable.filter(function(item) {
        let cond = true;
        if (vm.hideRemote) {
          cond = cond && item.Location !== "REMOTE";
        }
        if (vm.hideInPerson) {
          cond = cond && item.Location === "REMOTE";
        }

        return cond && vm.selectedAcadGrous.includes(item.AcadGroup);
      });
    },
  },

  methods: {
    handleClickRow: function(event) {
      console.log(event);
      this.$emit("changeSelectedClass", event);

      const filtA = this.dataTable.filter(function(item) {
        return item.SubjectCatalog == event.SubjectCatalog;
      });
      if (filtA.length > 1) {
        this.search = event.SubjectCatalog;
      }
    },
  },

  data() {
    return {
      selectedAcadGrous: ["Engineering"],

      hideRemote: false,
      hideInPerson: true,

      selectedClass: null,

      scheduleLink:
        "https://ro.umich.edu/sites/default/files/timesched/pdf/FA2020_open.csv",

      status: "None",
      search: "",

      headers: [
        { text: "Code", value: "SubjectCatalog", align: "center" },

        {
          text: "Course Title",
          align: "start",
          value: "CourseTitle",
        },
        { text: "Instructor", value: "Instructor" },
        { text: "Units", value: "Units", align: "end" },
      ],
      classes: [],
    };
  },
};
</script>
