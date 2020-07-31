<template>
  <div>
    <v-container>
      <v-sheet tile height="54" color="grey lighten-3" class="d-flex">
        <v-select
          v-model="weekday"
          :items="weekdays"
          dense
          outlined
          hide-details
          label="weekdays"
          class="ma-2"
        ></v-select>
        <v-spacer></v-spacer>
        <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn icon class="ma-2" @click="$refs.calendar.next()">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-sheet>
      <!-- <v-sheet height="1000"> -->
      <v-calendar
        ref="calendar"
        v-model="value"
        :weekdays="weekday"
        :type="type"
        :events="events"
        :key="classesInSchedule.length"
        :event-overlap-mode="mode"
        :event-overlap-threshold="30"
        :event-color="getEventColor"
        :first-interval="6"
        :interval-minutes="60"
        :interval-count="17"
        @change="getEvents"
      ></v-calendar>
      <!-- </v-sheet> -->
    </v-container>
  </div>
</template>

<script>
export default {
  name: "WeekView",

  props: ["classesInSchedule"],

  data: () => ({
    type: "week",
    start: 0,
    end: 0,

    mode: "stack",
    weekday: [1, 2, 3, 4, 5],
    weekdays: [
      { text: "Sun - Sat", value: [0, 1, 2, 3, 4, 5, 6] },
      { text: "Mon - Sun", value: [1, 2, 3, 4, 5, 6, 0] },
      { text: "Mon - Fri", value: [1, 2, 3, 4, 5] },
      { text: "Mon, Wed, Fri", value: [1, 3, 5] },
    ],
    value: "",
    events: [],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1",
    ],
    names: [
      "Meeting",
      "Holiday",
      "PTO",
      "Travel",
      "Event",
      "Birthday",
      "Conference",
      "Party",
    ],
  }),

  methods: {
    extractTime(timeStr, date) {
      // timestr is the string to apply it to, and date is the date object that i need to modify
      console.log(timeStr);

      return date;
    },

    getEvents({ start, end }) {
      const events = [];
      end;
      this.start = start;
      this.end = end;

      console.log("Calendar getEvents ");

      const min = new Date(`${start.date}T00:00:00`);
      // const max = new Date(`${end.date}T23:59:59`);

      this.classesInSchedule.forEach((classItem, classIndex) => {
        // determine which days the class is running:
        let days = [];

        if (classItem.M === "M") {
          days.push(1);
        }
        if (classItem.T === "T") {
          days.push(2);
        }
        if (classItem.W === "W") {
          days.push(3);
        }
        if (classItem.TH === "TH") {
          days.push(4);
        }
        if (classItem.F === "F") {
          days.push(5);
        }
        if (classItem.S === "S") {
          days.push(6);
        }
        if (classItem.SU === "SU") {
          days.push(0);
        }

        console.log(classItem.CourseTitle, days);

        // for each day create an event
        days.forEach((day) => {
          const startTime = new Date(min.getTime());

          // set to the right day
          startTime.setDate(startTime.getDate() + day - startTime.getDay());

          // determine the AM-PM
          var AM = classItem.Time.slice(-2) == "AM";
          // pop and split
          var time = classItem.Time.slice(0, -2).split("-");

          let startHour = 0;
          let startMin = 0;
          let endHour = 0;
          let endMin = 0;

          if (time[0].slice(-2) === "30") {
            // start is half hour
            startHour = parseInt(time[0].slice(0, -2));
            startMin = 30;
          } else {
            startHour = parseInt(time[0]);
            startMin = 0;
          }

          if (time[1].slice(-2) === "30") {
            // end is half hour
            endHour = parseInt(time[1].slice(0, -2));
            endMin = 30;
          } else {
            endHour = parseInt(time[1]);
            endMin = 0;
          }

          if (endHour !== 12) {
            if (!AM) {
              // ie PM
              if (endHour >= startHour) {
                // eg. 1-4pm
                startHour = startHour += 12;
              } else {
                // eg 11-2pm
              }
              endHour = endHour += 12;
            }
          }

          // assign to time
          startTime.setHours(startHour, startMin);

          const endTime = new Date(startTime.getTime());
          endTime.setHours(endHour, endMin);

          console.log("Start time: ", startTime, "End time: ", endTime);

          const event = {
            name: classItem.SubjectCatalog,
            start: startTime,
            end: endTime,
            timed: true,
            color: this.colors[classIndex % this.colors.length],
          };

          events.push(event);
        });
      });

      this.events = events;
    },
    getEventColor(event) {
      return event.color;
    },
  },
};
</script>
