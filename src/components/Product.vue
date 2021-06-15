<template>
  <q-card class="my-card">
    <q-img :src="image" style="height:150px">
      <div class="absolute-bottom">
        <div class="text-subtitle2">by John Doe</div>
      </div>
    </q-img>

    <q-card-actions>
      <q-btn flat>Add to Cart</q-btn>
      <q-btn flat>Buy Now</q-btn>
    </q-card-actions>
  </q-card>
</template>
<script>
export default {
  props: { image: String },
  data() {
    return {
      imageProduct: this.image
    };
  }
};
</script>
