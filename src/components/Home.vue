<template>
    <div>
        <h2>Trade or view your<router-link tag="a" class="nav-link d-inline text-black" to="/portfolio">Portfolio</router-link>
        </h2>
        <h6>You may Save & Load your Data</h6>
        <h6>Click on 'End Day' to begin a New Day</h6>
        <p>Your Funds: {{ funds }}</p>
    </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>
