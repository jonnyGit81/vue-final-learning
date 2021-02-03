import Vue from "vue";
import Vuex from "vuex";
import stocksModule from "./modules/stocks/stocks";
import portfolioModule from "./modules/portfolio/portfolio";
import * as actions from "./actions";
Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  modules: {
    stocksModule,
    portfolioModule
  }
});
