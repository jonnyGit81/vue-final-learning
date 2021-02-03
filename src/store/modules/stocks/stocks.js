import * as typesStocks from "./types";
import * as typesPortfolio from "../portfolio/types";

import initializeStocks from "../../../data/stocks";
import stocks from "../../../data/stocks";

const state = {
  stocks: []
};

const mutations = {
  // Fetch Stock From Server
  [typesStocks.MUTATIONS.SET_STOCKS]: (state, stocks) => {
    state.stocks = stocks;
  },

  [typesStocks.MUTATIONS.RANDOM_STOCK]: state => {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  }
};

const actions = {
  // calling portfolio mutation
  [typesStocks.ACTIONS.BUY_STOCK_ACTION]: ({ commit }, order) => {
    commit(typesPortfolio.MUTATIONS.BUY_STOCK, order);
  },
  [typesStocks.ACTIONS.INIT_STOCKS_ACTION]: ({ commit }) => {
    commit(typesStocks.MUTATIONS.SET_STOCKS, initializeStocks);
  },
  [typesStocks.ACTIONS.RANDOMIZE_STOCKS_ACTION]: ({ commit }) => {
    console.log("RANDOMIZE_STOCKS_ACTION");
    commit(typesStocks.MUTATIONS.RANDOM_STOCK);
  }
};

const getters = {
  [typesStocks.GETTERS.GET_STOCKS]: state => {
    return state.stocks;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
