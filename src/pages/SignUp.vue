<template>
  <q-page-container>
    <q-page class="q-pa-lg q-pt-xl">

      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <div class="flex flex-center">
          <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"/>
        </div>
        <div class="flex flex-center">
          <p class="text-weight-medium text-h5">Create Account</p>
        </div>
        <div class="col q-pt-lg q-px-md">
          <q-input
            filled
            v-model="userDetails.firstName"
            stack-label
            label="First Name"
            bg-color="white"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please enter your first name']"
          />
        </div>

        <div class="col q-pt-lg q-px-md">
          <q-input
            filled
            v-model="userDetails.lastName"
            label="Last Name"
            bg-color="white"
            stack-label
            lazy-rules
          />
        </div>

        <div class="col q-pt-lg q-px-md">
          <q-input
            filled
            v-model="userDetails.email"
            label="Email"
            bg-color="white"
            stack-label
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please enter your email']"
          />
        </div>
        <div class="col q-pt-lg q-px-md">
          <q-input
            filled
            type="number"
            v-model="userDetails.phoneNumber"
            label="Phone Number"
            bg-color="white"
            stack-label
            lazy-rules
            :rules="[
          val => val !== null && val !== '' || 'Please type your number',
          val => val > 0 && val < 100 || 'Please type a correct number'
        ]"
          />
        </div>
        <div class="col q-pt-lg q-px-md">

          <q-input
            filled
            v-model="userDetails.password"
            label="Create Password"
            bg-color="white"
            stack-label
            lazy-rules
            :type="isPwd ? 'password' : 'text'"
            :rules="[
               val => val !== null && val !== '' || 'Please create you password'
            ]"
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
            <q-btn label="Sign Up" class="full-width q-pt-sm q-pb-sm" type="submit" color="primary"/>
          </div>
        </div>
        <div class="flex flex-center">
          <span>Already have an account? <router-link to="/"><a>Login</a></router-link></span>
        </div>
      </q-form>

    </q-page>
  </q-page-container>
</template>

<script>
import axios from "axios"

export default {
  name: 'PageIndex',
  data() {
    return {
      userDetails: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: ""
      }
    }
  },
  methods: {
    registerUser() {
      axios.post("https://vue-http-172eb-default-rtdb.firebaseio.com/data", this.userDetails, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          this.userDetails.userId = response.data.id
        });
    }

  }

}
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

