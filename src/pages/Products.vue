<template>
  <q-page-container>
    <q-page class="q-pa-sm q-pt-md">
      <div class="q-pa-md row items-start q-gutter-lg">
        <div v-for="product in products" :key="product.image">
          <product v-bind:image="product.image" />
        </div>
      </div>
    </q-page>
  </q-page-container>
</template>

<script>
import Product from "../components/Product.vue";

export default {
  data() {
    return { products: [] };
  },
  beforeCreate() {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(json => (this.products = json));
  },
  components: { Product }
};
</script>
