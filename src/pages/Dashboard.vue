<template>
    <q-page-container>
      <p>dsdsd</p>
     <q-btn @click="logout">Logout</q-btn>
    </q-page-container>
</template>

<script>

import firebase from "firebase";

export default {
  name: 'LayoutDefault',

  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        alert('Logout Successfull')
        this.$router.push({ path: 'login' })
      })
    }
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged(user => {
      console.log('user',user)
      if (!user)
        this.$router.push({ path: 'login' })
    })
  }
}
</script>
