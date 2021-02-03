<template>
  <div class="col-sm-6 col-md-4">
    <div
      class="panel"
      :class="isInsuficientFunds ? 'panel-danger' : 'panel-success'"
    >
      <div class="panel-heading">
        <h3>
          {{ stock.name }}
          <small>Price : {{ stock.price }}</small>
          <small style="color: red" v-show="isInsuficientFunds"
            >Insufficient Fund</small
          >
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{ danger: isInsuficientFunds }"
          />
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="isInsuficientFunds || quantity <= 0 || !isInt(quantity)"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as typesStocks from "../../store/modules/stocks/types";
import * as typesPorftfolio from "../../store/modules/portfolio/types";
export default {
  props: ["stock"],
  data() {
    return { quantity: 0 };
  },
  computed: {
    isInsuficientFunds() {
      return (
        this.$store.getters[typesPorftfolio.GETTERS.GET_FUNDS] <
        this.stock.price * this.quantity
      );
    },
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: +this.quantity,
      };
      this.$store.dispatch(typesStocks.ACTIONS.BUY_STOCK_ACTION, order);
      this.quantity = 0;
    },
    isInt(n) {
      return n % 1 === 0;
    },
  },
};
</script>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>