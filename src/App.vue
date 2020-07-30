<template>
  <v-app>
    <v-main>
      <v-container>
        <h1>BlueHose</h1>
        <p><a href="https://firehose.guide/">Firehose</a>, but for UMich</p>
        <v-row class="text-center">
          <v-col cols="6">
            <WeekView />
          </v-col>
          <v-col cols="6">
            <ClassSelector />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import WeekView from "./components/WeekView";
import ClassSelector from "./components/ClassSelector";

export default {
  name: "App",

  components: {
    WeekView,
    ClassSelector,
  },

  data: () => ({
    //
  }),
};
</script>
