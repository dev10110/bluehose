<template>
  <div>
    <v-card> </v-card>
    <v-card>
      <v-card-title>
        <v-spacer></v-spacer>
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
      </v-container>

      <v-data-table
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
const uniqueAcadGroups = [
  "Architecture & Urban Planning",
  "Dental Hygiene",
  "Dentistry",
  "Education",
  "Engineering",
  "Environment and Sustainability",
  "Information",
  "Kinesiology",
  "LSA Residential College",
  "Law",
  "Literature, Sci, and the Arts",
  "Medicine",
  "Music, Theatre & Dance",
  "Nursing",
  "Officer Education Programs",
  "Pharmacy",
  "Public Health",
  "Public Policy",
  "Rackham",
  "Ross School of Business",
  "Social Work",
  "Stamps School of Art & Design",
];

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
        return vm.selectedAcadGrous.includes(item.AcadGroup);
      });
    },
  },

  methods: {
    handleClickRow: function(event) {
      console.log(event);
      this.selectedClass = event;
    },
  },

  data() {
    return {
      selectedAcadGrous: ["Engineering"],

      selectedClass: null,

      scheduleLink:
        "https://ro.umich.edu/sites/default/files/timesched/pdf/FA2020_open.csv",

      status: "None",
      search: "",

      headers: [
        { text: "Class Number", value: "ClassNbr", align: "center" },
        { text: "Catalog Number", value: "CatalogNbr" },
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
