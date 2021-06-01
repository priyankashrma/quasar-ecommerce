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
          <p class="text-weight-medium text-h5">Welcome, Login Here</p>
        </div>

        <div class="col q-pt-lg q-px-md">
          <q-input
            filled
            v-model="userLogin.email"
            label="Email*"
            bg-color="white"
            stack-label
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please enter your email']"
          />
        </div>

        <div class="col q-pt-lg q-px-md">
          <q-input
            filled
            v-model="userLogin.password"
            label="Password"
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
          <span>Don't have an account? <router-link to="/signup"><a>Sign Up</a></router-link></span>
        </div>
      </q-form>

    </q-page>
  </q-page-container>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      userLogin: {
        email: "",
        password: ""
      },
      isPwd:true

    }
  }
}
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

