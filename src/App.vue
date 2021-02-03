
<template>
  <div class="container">
    <app-header></app-header>
    <div class="col-xs-12">
      <transition name="slide-animation" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import * as typesStocks from "./store/modules/stocks/types";

export default {
  components: {
    appHeader: Header,
  },
  created() {
    this.$store.dispatch(typesStocks.ACTIONS.INIT_STOCKS_ACTION);
  },
};
</script>
<style>
body {
  padding: 30px;
}

.slide-animation-enter-active {
  animation: slide-animation-in 200ms ease-out forwards;
}

.slide-animation-leave-active {
  animation: slide-animation-out 200ms ease-out forwards;
}

@keyframes slide-animation-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-animation-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
