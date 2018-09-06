<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div id="navbarSupportedContent" class="collapse navbar-collapse">
    <div class="d-flex justify-content-between full-width" style="
         width:  100%;
         ">
        <ul class="navbar-nav">
            <router-link tag="li" class="nav-item" to="/portfolio" activeClass="active"><a class="nav-link">Portfolio</a></router-link>
            <router-link tag="li" class="nav-item" to="/stocks" activeClass="active"><a class="nav-link">Stocks</a></router-link>
        </ul>
        <ul class="navbar-nav navbar-right">
            <li class="nav-item dropdown">
                <a @click="endDay" href="#" 
                   class="nav-link">End Day </a></li>
            <li class="nav-item dropdown">
                <a  href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle">
                    Save &amp; Load 
                </a>
                <div aria-labelledby="navbarDropdown" class="dropdown-menu">
                    <a @click="saveData" href="#" class="dropdown-item">Save Data</a> 
                    <a href="#" class="dropdown-item">Load Data</a></div>
            </li>
            <li class="nav-item"><a class="nav-link"> <strong>{{ funds | currency }}</strong> </a></li>
        </ul>
    </div>
</div>
</nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions(["randomizeStocks"]),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put("data.json", data);
    }
  }
};
</script>