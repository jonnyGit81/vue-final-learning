<template>
  <div>
    <h1>Your Portfolio</h1>
    <h6>You May Save and Load your data</h6>
    <h6>Click End Day to start a New Day</h6>
    <hr />
    <h2>Your Funds : {{ getFunds | currency }}</h2>
    <div v-if="getPortFolios.length > 0">
      <p>Your Trading Portfolio's :</p>
      <app-stock
        v-for="stock in getPortFolios"
        :key="stock.id"
        :stock="stock"
        :hideTrade="true"
      ></app-stock>
    </div>
  </div>
</template>

<script>
import * as portfolioTypes from "../store/modules/portfolio/types";
import Stock from "../components/portfolio/Stock";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      getFunds: portfolioTypes.GETTERS.GET_FUNDS,
      getPortFolios: portfolioTypes.GETTERS.GET_PORTFOLIO,
    }),
  },
  components: {
    appStock: Stock,
  },
};
</script>