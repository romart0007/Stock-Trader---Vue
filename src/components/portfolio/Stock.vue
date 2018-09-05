<template>
    <div class="col-sm-6 col-md-4 mb-4">
        <div class="card">
            <h5 class="card-header">{{ stock.name }} <small>(Price: {{ stock.price }} | Quantity: {{stock.quantity}})</small></h5>
            <div class="card-body">
                <p class="card-text">With supporting holder as a natural lead-in to additional content.</p>
                <div class="input-group">
                    <input type="number" 
                           v-model="quantity"
                           class="form-control" 
                           placeholder="Quantity"
                           aria-label="Amount (to the nearest dollar)">
                    <div class="input-group-append">
                        <button @click="sellStock" 
                                :disabled="quantity <=0"
                                class="btn btn-success input-group-text"
                                >Sell</button>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: parseInt(this.quantity)
      };
      console.log(order);
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>
