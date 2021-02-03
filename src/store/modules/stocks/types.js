//Actions
const BUY_STOCK_ACTION = "stocks_buyStockAction";
const INIT_STOCKS_ACTION = "stocks_initStocksAction";
const RANDOMIZE_STOCKS_ACTION = "stocks_randomizeStocksAction";

const ACTIONS = {
  BUY_STOCK_ACTION,
  INIT_STOCKS_ACTION,
  RANDOMIZE_STOCKS_ACTION
};

//Getters
const GET_STOCKS = "stocks_getStocks";

const GETTERS = { GET_STOCKS };

//Mutations
const SET_STOCKS = "stocks_setStock";
const RANDOM_STOCK = "stocks_randomStock";
const MUTATIONS = { SET_STOCKS, RANDOM_STOCK };

export { ACTIONS, MUTATIONS, GETTERS };
