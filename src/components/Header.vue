<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link
            to="/portfolio"
            tag="li"
            active-class="active"
            v-show="isAuthenticated"
            ><a>Portfolio</a></router-link
          >
          <router-link
            to="/stocks"
            tag="li"
            active-class="active"
            v-show="isAuthenticated"
            ><a>Stocks</a></router-link
          >
          <router-link
            to="/auth/signup"
            tag="li"
            active-class="active"
            v-show="!isAuthenticated"
            ><a>Sign Up</a></router-link
          >
          <router-link
            to="/auth/signin"
            tag="li"
            active-class="active"
            v-show="!isAuthenticated"
            ><a>Sign In</a></router-link
          >
        </ul>

        <strong
          v-show="isAuthenticated"
          class="navbar-text navbar-left"
          :style="{ color: 'blue' }"
          >Funds : {{ funds | customCurrency }}</strong
        >

        <ul class="nav navbar-nav navbar-right">
          <li v-show="isAuthenticated">
            <a href="#" @click.prevent="endDay">End Date</a>
          </li>
          <li
            class="dropdown"
            :class="{ open: openDropDown }"
            @click="openDropDown = !openDropDown"
            v-show="isAuthenticated"
          >
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Save & Load <span class="caret"></span
            ></a>
            <ul class="dropdown-menu">
              <li><a href="#" @click="saveData">Save</a></li>
              <li><a href="#" @click="loadData">Load Data</a></li>
            </ul>
          </li>
          <li
            class="dropdown"
            :class="{ open: openLogout }"
            @click="openLogout = !openLogout"
            v-show="isAuthenticated"
          >
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >{{ currentUser.userInfo.email }}<span class="caret"></span
            ></a>
            <ul class="dropdown-menu">
              <li><a href="#" @click="logOut">Log Out</a></li>
            </ul>
          </li>
        </ul>
      </div>

      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>

<script>
import * as portfolioTypes from "../store/modules/portfolio/types";
import * as stocksType from "../store/modules/stocks/types";
import * as authTypes from "../store/modules/auth/types";

import { mapActions } from "vuex";
export default {
  data() {
    return { openDropDown: false, openLogout: false };
  },
  computed: {
    funds() {
      return this.$store.getters[portfolioTypes.GETTERS.GET_FUNDS];
    },
    isAuthenticated() {
      return this.$store.getters[authTypes.GETTERS.IS_AUTHENTICATED];
    },
    currentUser() {
      return this.$store.getters[authTypes.GETTERS.GET_USER];
    },
  },
  watch: {},
  methods: {
    ...mapActions({
      [stocksType.ACTIONS.RANDOMIZE_STOCKS_ACTION]:
        stocksType.ACTIONS.RANDOMIZE_STOCKS_ACTION,
      fetchData: "loadData",
    }),
    endDay() {
      console.log("end day");
      this[stocksType.ACTIONS.RANDOMIZE_STOCKS_ACTION]();
    },
    saveData() {
      const data = {
        funds: this.$store.getters[portfolioTypes.GETTERS.GET_FUNDS],
        stockPortfolio: this.$store.getters[
          portfolioTypes.GETTERS.GET_PORTFOLIO
        ],
        stocks: this.$store.getters[stocksType.GETTERS.GET_STOCKS],
      };

      this.$http.put("data.json", data);
    },
    loadData() {
      this.fetchData();
    },
    logOut() {
      this.$store.dispatch(authTypes.ACTIONS.LOGOUT_USER_ACTION);
    },
  },
};
</script>