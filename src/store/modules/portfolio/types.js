//Actions
const SELL_STOCK_ACTION = "portfolio_sellStockAction";
const ACTIONS = { SELL_STOCK_ACTION };

//Getters
const GET_PORTFOLIO = "portfolio_getPortfolio";
const GET_FUNDS = "portfolio_getFunds";
const GETTERS = { GET_PORTFOLIO, GET_FUNDS };

//Mutations
const BUY_STOCK = "portfolio_buyStock";
const SELL_STOCK = "portfolio_sellStock";
const SET_PORTFOLIO = "portfolio_setStock";
const MUTATIONS = { SET_PORTFOLIO, SELL_STOCK, BUY_STOCK };

export { ACTIONS, MUTATIONS, GETTERS };
