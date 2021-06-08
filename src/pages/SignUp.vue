<template>
  <q-page-container>
    <q-page class="q-pa-lg q-pt-xl">
      <div class="q-gutter-md">
        <div class="flex flex-center">
          <img
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
          />
        </div>
        <div class="flex flex-center">
          <p class="text-weight-medium text-h5">Create Account</p>
        </div>
        <div class="col q-pt-lg q-px-md">
          <q-input
            v-model="firstname"
            dense
            :rules="[
              val => (val && val.length > 0) || 'Please enter your first name'
            ]"
            bg-color="white"
            filled
            label="First Name"
            lazy-rules
            stack-label
          />
        </div>

        <div class="col q-pt-lg q-px-md">
          <q-input
            v-model="lastname"
            dense
            bg-color="white"
            filled
            label="Last Name"
            lazy-rules
            stack-label
          />
        </div>

        <div class="col q-pt-lg q-px-md">
          <q-input
            v-model="email"
            dense
            :rules="[
              val => (val && val.length > 0) || 'Please enter your email'
            ]"
            bg-color="white"
            filled
            label="Email"
            lazy-rules
            stack-label
          />
        </div>
        <div class="col q-pt-lg q-px-md">
          <q-input
            v-model="phone"
            dense
            :rules="[
              val => (val !== null && val !== '') || 'Please type your number'
            ]"
            bg-color="white"
            filled
            label="Phone Number"
            lazy-rules
            stack-label
            type="number"
          />
        </div>
        <div class="col q-pt-lg q-px-md">
          <q-input
            v-model="password"
            dense
            :rules="[
              val =>
                (val !== null && val !== '') || 'Please create your password'
            ]"
            :type="password ? 'password' : 'text'"
            bg-color="white"
            filled
            label="Create Password"
            lazy-rules
            stack-label
          >
            <template v-slot:append>
              <q-icon
                :name="password ? 'visibility_off' : 'visibility'"
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
              label="Sign Up"
              type="submit"
              @click="registerUser"
            />
          </div>
        </div>
        <div class="flex flex-center">
          <span
            >Already have an account?
            <router-link to="/"><a>Login</a></router-link></span
          >
        </div>
      </div>
    </q-page>
  </q-page-container>
</template>

<script>
import firebase from "firebase";

export default {
  name: "PageIndex",
  data() {
    return {
      email: "",
      password: "",
      phone: "",
      firstname: "",
      lastname: ""
    };
  },
  methods: {
    async registerUser() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(response => {
          const signupData = {
            data: {
              firstname: this.firstname,
              lastname: this.lastname,
              email: this.email,
              phone: this.phone
            }
          };
          if (response) {
            response.user
              .updateProfile({
                signupData
              })
              .then(s => {
                alert("User created");
              });
          }
        })
        .catch(error => {
          console.log(error);
          alert(
            "Oh no it looks like there was some problem creating account, please contact support or try again"
          );
        });
    }
  }
};
</script>

<style lang="sass">
.q-page
  background: #F8FAFE

.q-field__inner .q-field__label
  top: -10px
  font-size: 22px
  padding-bottom: 15px

img
  width: 50px
  height: 50px

p
  color: #585858
  letter-spacing: 2px

.q-btn
  font-size: 20px

span a
  font-size: 18px

a
  font-weight: bolder
</style>
