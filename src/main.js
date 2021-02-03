import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import store from "./store/store";
import VueCurrencyFilter from "vue-currency-filter";
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource)

Vue.http.options.root = "https://jonny-vue-js-stock-trader-default-rtdb.firebaseio.com/"

Vue.filter("customCurrency", value => {
  return "Using Custom Filter - $" + value.toLocaleString();
});

Vue.use(VueCurrencyFilter, {
  symbol: "US$",
  thousandsSeparator: ",",
  fractionCount: 0,
  fractionSeparator: ".",
  symbolPosition: "front",
  symbolSpacing: true
});

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
