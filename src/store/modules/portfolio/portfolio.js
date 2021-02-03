import * as types from "./types";
import * as typesStocks from "../../modules/stocks/types";

const state = {
  funds: 10000,
  stocks: []
};

const mutations = {
  [types.MUTATIONS.SET_PORTFOLIO]: (state, portfolio) => {
    state.funds = portfolio.funds;
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
  },

  [types.MUTATIONS.BUY_STOCK]: (state, { stockId, quantity, stockPrice }) => {
    console.log(state.stocks.length);
    const existingPortfolio = state.stocks.find(el => el.id == stockId);
    console.log("existingPortfolio", existingPortfolio);
    if (existingPortfolio) {
      existingPortfolio.quantity += quantity;
    } else {
      state.stocks.push({ id: stockId, quantity: +quantity });
    }
    state.funds -= stockPrice * quantity;
    console.log(state.stocks.length);
  },

  [types.MUTATIONS.SELL_STOCK]: (state, { stockId, quantity, stockPrice }) => {
    const existingPortfolio = state.stocks.find(el => el.id == stockId);
    console.log(existingPortfolio);
    if (existingPortfolio.quantity > quantity) {
      console.log("masuk sini");
      existingPortfolio.quantity -= quantity;
    } else {
      console.log("masuk sana");
      state.stocks.splice(state.stocks.indexOf(existingPortfolio), 1);
    }
    state.funds += stockPrice * quantity;
  }
};

const actions = {
  [types.ACTIONS.SELL_STOCK_ACTION]: ({ commit }, order) => {
    console.log("Actions", order);
    commit(types.MUTATIONS.SELL_STOCK, order);
  }
};

// getter here is overall getter in the store, we can inject it here
const getters = {
  [types.GETTERS.GET_PORTFOLIO]: (state, getters) => {
    return state.stocks.map(stock => {
      const record = getters[typesStocks.GETTERS.GET_STOCKS].find(
        el => el.id == stock.id
      );
      const portfolio = {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      };
      return portfolio;
    });
  },
  [types.GETTERS.GET_FUNDS]: state => {
    return state.funds;
  }
};

export default { state, mutations, getters, actions };
