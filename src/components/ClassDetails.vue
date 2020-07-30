<template>
  <div>
    <v-card>
      <v-card-title>
        {{ selectedClass.CatalogNbr }} - {{ selectedClass.CourseTitle }}
      </v-card-title>

      <v-card-text align="start">
        <div>
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
            Fiday
          </v-chip>
          <v-chip class="ma-2" v-if="selectedClass.S == 'S'">
            Saturday
          </v-chip>
          <v-chip class="ma-2" v-if="selectedClass.SU == 'SU'">
            Sunday
          </v-chip>
        </div>

        <div>
          <v-chip class="ma-2">
            {{ selectedClass.Time }}
          </v-chip>
        </div>

        <div>
          <v-chip class="ma-2">
            {{ selectedClass.Location }}
          </v-chip>

          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title
                >{{ selectedClass.Term }} -
                {{ selectedClass.Session }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>

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

          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle>
                Dates
              </v-list-item-subtitle>
              <v-list-item-title>
                {{ selectedClass.StartDate }} - {{ selectedClass.EndDate }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

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
        </div>
      </v-card-text>
      {{ selectedClass }}
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ClassDetails",

  props: ["selectedClass"],
};
</script>
