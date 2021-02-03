<template>
  <div>
    <app-stock
      v-for="stock in getPortfolio"
      :key="stock.id"
      :stock="stock"
    ></app-stock>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as typesPortfolio from "../../store/modules/portfolio/types";
import Stock from "./Stock";
export default {
  computed: {
    ...mapGetters({ getPortfolio: typesPortfolio.GETTERS.GET_PORTFOLIO }),
  },
  components: {
    appStock: Stock,
  },
  methods: {},
};
</script>