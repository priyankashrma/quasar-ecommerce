<template>
  <q-page-container>
    <q-page class="q-pa-sm q-pt-md">
      <div class="q-pa-md row items-start q-gutter-lg">
        <div v-for="product in getProducts" :key="product.image">
          <product v-bind:image="product.image" />
        </div>
      </div>
    </q-page>
  </q-page-container>
</template>

<script>
import Product from "../components/Product.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getProducts"])
  },
  methods: {
    ...mapActions(["getProductsAction"])
  },
  beforeCreate() {
    console.log("we are here");
    this.getProductsAction();
  },
  components: { Product }
};
</script>
