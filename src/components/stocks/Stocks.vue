<template>
  <div>
    <app-stock
      v-for="stock in getStocks"
      :key="stock.id"
      :stock="stock"
    ></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock";
import { mapGetters } from "vuex";
import * as types from "../../store/modules/stocks/types";
export default {
  components: {
    appStock: Stock,
  },
  computed: {
    ...mapGetters({
      getStocks: types.GETTERS.GET_STOCKS,
    }),
  },
};
</script>