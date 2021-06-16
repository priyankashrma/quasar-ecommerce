<template>
  <q-page-container>
    <p>sasa</p>
    <q-btn @click="logout">Logout</q-btn>
  </q-page-container>
</template>

<script>
import firebase from "firebase";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "LayoutDefault",
  computed: {
    ...mapGetters(["getUser", "isUserAuth"])
  },
  methods: {
    beforeCreate() {
      if (!this.getUser) {
        this.$router.push({ name: "login" });
      }
    },
    ...mapActions(["signOutAction"]),
    logout() {
      this.signOutAction();
    }
  }
};
</script>
