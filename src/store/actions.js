import * as stockTypes from "./modules/stocks/types";
import * as portfolioTypes from "./modules/portfolio/types";
import Vue from "vue";

export const loadData = ({ commit }) => {
  Vue.http
    .get("data.json")
    .then(resp => resp.json())
    .then(jsonObj => {
      if (jsonObj) {
        const stocks = jsonObj.stocks;
        const funds = jsonObj.funds;
        const stockPortfolio = jsonObj.stockPortfolio;

        const portfolio = {
          stockPortfolio,
          funds
        };

        commit(stockTypes.MUTATIONS.SET_STOCKS, stocks);
        commit(portfolioTypes.MUTATIONS.SET_PORTFOLIO, portfolio);
      }
    });
};
