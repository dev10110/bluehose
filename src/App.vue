<template>
  <v-app>
    <v-main>
      <v-container>
        <h1>BlueHose</h1>
        <p><a href="https://firehose.guide/">Firehose</a>, but for UMich</p>
        <v-layout row class="text-center">
          <v-flex md6>
            <WeekView />
          </v-flex>
          <v-flex md6>
            <ClassSelector />
          </v-flex>
        </v-layout>
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
