<template>
  <div class="col-sm-6 col-md-4">
    <div
      class="panel"
      :class="
        hideTrade
          ? 'panel-default'
          : isInsufficientQuantity
          ? 'panel-danger'
          : 'panel-info'
      "
    >
      <div class="panel-heading">
        <h3>
          {{ stock.name }}
          <small
            >Price : {{ stock.price }} | Quantity : {{ stock.quantity }}</small
          >
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left" v-show="!hideTrade">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{ danger: isInsufficientQuantity }"
          />
        </div>
        <div class="pull-right" v-show="!hideTrade">
          <button
            class="btn btn-success"
            @click="sellStock"
            :disabled="
              isInsufficientQuantity || quantity <= 0 || !isInt(quantity)
            "
          >
            Sell
          </button>
        </div>
        <div class="pull-left" v-show="hideTrade">
          <p>Go to your portfolio for start Trading</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import * as typesPortfolio from "../../store/modules/portfolio/types";
export default {
  props: ["stock", "hideTrade"],
  data() {
    return { quantity: 0 };
  },
  computed: {
    isInsufficientQuantity() {
      return this.stock.quantity < this.quantity;
    },
  },
  methods: {
    ...mapActions([typesPortfolio.ACTIONS.SELL_STOCK_ACTION]),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this[typesPortfolio.ACTIONS.SELL_STOCK_ACTION](order);
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