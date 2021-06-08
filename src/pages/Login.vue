<template>
  <q-page-container>
    <q-page class="q-pa-lg q-pt-xl">
      <q-form class="q-gutter-md">
        <div class="flex flex-center">
          <img
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
          />
        </div>
        <div class="flex flex-center">
          <p class="text-weight-medium text-h5">Welcome, Login Here</p>
        </div>

        <div class="col q-pt-lg q-px-md">
          <q-input
            v-model="user.email"
            :rules="[
              val => (val && val.length > 0) || 'Please enter your email'
            ]"
            bg-color="white"
            dense
            filled
            label="Email*"
            lazy-rules
            stack-label
          />
        </div>

        <div class="col q-pt-lg q-px-md">
          <q-input
            v-model="user.password"
            :rules="[
              val =>
                (val !== null && val !== '') || 'Please create you password'
            ]"
            :type="isPwd ? 'password' : 'text'"
            bg-color="white"
            filled
            dense
            label="Password"
            lazy-rules
            stack-label
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </div>
        <div class="row  flex flex-center">
          <div class="col-md-5 col-sm-4">
            <q-btn
              class="full-width q-pt-sm q-pb-sm"
              color="primary"
              label="Sign In"
              @click="login"
            />
          </div>
        </div>
        <div class="flex flex-center">
          <span
            >Don't have an account?
            <router-link to="/signup"><a>Sign Up</a></router-link></span
          >
        </div>
      </q-form>
    </q-page>
  </q-page-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PageIndex",
  data() {
    return {
      loading: false,
      user: {
        email: "",
        password: ""
      },
      isPwd: true
    };
  },
  computed: {
    ...mapGetters(["isUserAuth"])
  },
  methods: {
    ...mapActions(["signInAction"]),
    async login() {
      console.log("here");
      this.signInAction({
        email: this.user.email,
        password: this.user.password
      });
    }
  }
};
</script>

<style lang="sass">
.q-page
  background: #f8fafe


img
  width: 50px
  height: 50px

.form-label
  color: #aaa
  margin-left: 5px

p
  text-align: center
  font-size: 16px
</style>
