import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueCookies from "vue-cookies";
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: { id: "UA-154374275-3" },
});

Vue.config.productionTip = false;

Vue.use(VueCookies);

Vue.$cookies.config("6M");

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
