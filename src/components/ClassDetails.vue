<template>
  <div>
    <v-card>
      <v-card-title>
        {{ selectedClass.SubjectCatalog }} - {{ selectedClass.CourseTitle }}
        <v-spacer></v-spacer>
        <v-btn icon v-on:click="handleCloseCard"
          ><v-icon>mdi-close</v-icon></v-btn
        >
      </v-card-title>

      <v-card-text align="start">
        <div>
          <v-row>
            <v-col>
              <v-chip class="ma-2" v-if="selectedClass.M == 'M'">
                Monday
              </v-chip>
              <v-chip class="ma-2" v-if="selectedClass.T == 'T'">
                Tuesday
              </v-chip>
              <v-chip class="ma-2" v-if="selectedClass.W == 'W'">
                Wednesday
              </v-chip>
              <v-chip class="ma-2" v-if="selectedClass.TH == 'TH'">
                Thursday
              </v-chip>
              <v-chip class="ma-2" v-if="selectedClass.F == 'F'">
                Friday
              </v-chip>
              <v-chip class="ma-2" v-if="selectedClass.S == 'S'">
                Saturday
              </v-chip>
              <v-chip class="ma-2" v-if="selectedClass.SU == 'SU'">
                Sunday
              </v-chip>
            </v-col>

            <v-col>
              <v-chip class="ma-2">
                {{ selectedClass.Time }}
              </v-chip>
            </v-col>
            <v-col>
              <v-chip class="ma-2">
                {{ selectedClass.Location }}
              </v-chip>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-subtitle>
                    Instructor
                  </v-list-item-subtitle>
                  <v-list-item-title>
                    {{ selectedClass.Instructor }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-subtitle>{{
                    selectedClass.AcadGroup
                  }}</v-list-item-subtitle>
                  <v-list-item-title>
                    {{ selectedClass.Subject }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-subtitle>
                    Class Number
                  </v-list-item-subtitle>
                  <v-list-item-title>
                    {{ selectedClass.ClassNbr }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-subtitle>
                    Catalog Number
                  </v-list-item-subtitle>
                  <v-list-item-title>
                    {{ selectedClass.CatalogNbr }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-subtitle>
                    Section
                  </v-list-item-subtitle>
                  <v-list-item-title>
                    {{ selectedClass.Section }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-subtitle>
                    Component
                  </v-list-item-subtitle>
                  <v-list-item-title>
                    {{ selectedClass.Component }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>

            <v-col>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-subtitle>
                    Codes
                  </v-list-item-subtitle>
                  <v-list-item-title>
                    {{ selectedClass.Codes }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>

            <v-col>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-subtitle>
                    Units
                  </v-list-item-subtitle>
                  <v-list-item-title>
                    {{ selectedClass.Units }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle>
                Dates
              </v-list-item-subtitle>
              <v-list-item-title>
                {{ selectedClass.StartDate }} - {{ selectedClass.EndDate }}
              </v-list-item-title>
              <v-list-item-title>
                {{ selectedClass.Term }} - {{ selectedClass.Session }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
        <div class="my-2">
          <v-btn
            color="primary"
            v-if="!classesInSchedule.includes(selectedClass)"
            v-on:click="handleAddtoSchedule"
          >
            Add to Schedule
          </v-btn>
          <v-btn
            v-if="classesInSchedule.includes(selectedClass)"
            v-on:click="handleRemoveFromSchedule"
          >
            Remove from Schedule
          </v-btn>
        </div>
      </v-card-text>

      <!-- {{ selectedClass }} -->
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ClassDetails",

  props: ["selectedClass", "classesInSchedule"],

  methods: {
    handleAddtoSchedule: function(event) {
      console.log("Adding to schedule", event);
      this.$emit("addToScheduleRequest", event);
    },

    handleCloseCard: function(event) {
      console.log("Closing Section", event);
      this.$emit("closeDetailedSection", event);
    },
    handleRemoveFromSchedule: function(event) {
      console.log("Removing from selection");
      this.$emit("removeFromScheduleRequest", event);
    },
  },
};
</script>
