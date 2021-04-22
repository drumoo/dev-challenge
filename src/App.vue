<template>
  <div id="app" class="d-flex justify-content-center align-items-center">
    <b-container id="container">
      <header class="text-center" id="header">
        <img
          alt="Vue logo"
          src="./assets/images/logo_multisearch.png"
          class="img-fluid"
        />
        <div class="d-flex justify-content-center align-items-center container">
          <div class="input-group">
            <input v-model="textSearch" type="text" class="form-control" />
            <span class="input-group-btn">
              <button @click="search()" type="button" class="btn btn-default border">
                <i class="fas fa-search"></i>
              </button>
            </span>
          </div>
        </div>
      </header>
      <div
        class="d-flex justify-content-between align-items-center flex-column"
      >
        <Card title="Pedidos de Venda" :data="sales_orders" />
        <Card title="Pedidos de Compra" :data="purchase_orders" />
        <Card title="Produtos" :data="produts" />
        <Card title="Equipamentos" :data="equipments" />
        <Card title="Mão de obra" :data="workforce" />
      </div>
    </b-container>
  </div>
</template>

<script>
import Card from "./components/Card";

import equipments from "./services/equipments";
import produts from "./services/produts";
import sales_orders from "./services/sales_orders";
import workforce from "./services/workforce";
import purchase_orders from "./services/purchase_orders";

export default {
  name: "App",
  components: {
    Card,
  },
  data() {
    return {
      equipments: [],
      sales_orders: [],
      purchase_orders: [],
      produts: [],
      workforce: [],
      textSearch: []
    };
  },
  methods: {
    search() {
      if(this.textSearch == null || this.textSearch == '') {
        return
      }

      this.equipments = equipments.get(this.textSearch);
      this.sales_orders = sales_orders.get(this.textSearch);
      this.purchase_orders = purchase_orders.get(this.textSearch);
      this.produts = produts.get(this.textSearch);
      this.workforce = workforce.get(this.textSearch);
    }
  }
};
</script>

<style scoped>
#container {
  width: 25vw;
  min-width: 350px;
}

@media (max-width: 425px) {
  #app {
    font-size: 0.8rem;
  }
}
</style>
