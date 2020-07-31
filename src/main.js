import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VuePapaParse from "vue-papa-parse";
import VueCookies from "vue-cookies";

Vue.use(VuePapaParse);
Vue.config.productionTip = false;

Vue.use(VueCookies);

Vue.$cookies.config("6M");

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
