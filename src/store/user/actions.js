import firebase from "firebase/app";

export function authAction({ commit }) {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      commit("setUser", user);
    } else {
      commit("setUser", null);
    }
  });
}

export function signInAction({ commit }, payload) {
  firebase
    .auth()
    .signInWithEmailAndPassword(payload.email, payload.password)
    .then(() => {
      this.$router.push("/");
    })
    .catch(error => {
      commit("setError", error.message);
    });
}

export function signUpAction({ commit }, payload) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(payload.email, payload.password)
    .then(response => {
      if (response) {
        response.user
          .updateProfile({
            payload
          })
          .then(s => {
            commit("setUser", s);
          });
      }
    })
    .catch(error => {
      commit("setError", error.message);
    });
}

export function signOutAction({ commit }) {
  firebase
    .auth()
    .signOut()
    .then(() => {
      this.$router.push({ path: "login" });
      commit("setUser", null);
    })
    .catch(error => {
      commit("setError", error.message);
    });
}
