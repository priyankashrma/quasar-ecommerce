<template>
  <q-page-container>
    <p>dsdsd</p>
    <q-btn @click="logout">Logout</q-btn>
  </q-page-container>
</template>

<script>
import firebase from "firebase";

export default {
  name: "LayoutDefault",
  computed: {
    ...mapGetters(["getUser", "isUserAuth"])
  },
  methods: {
    ...mapActions(["signOutAction"]),
    logout() {
      this.signOutAction();
    },

    beforeCreate() {
      firebase.auth().onAuthStateChanged(user => {
        console.log("user", user);
        if (!user) this.$router.push({ path: "login" });
      });
    }
  }
};
</script>
