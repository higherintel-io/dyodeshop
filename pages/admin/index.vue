<template>
  <v-form>
    <v-row
      align="center"
      justify="center"
      style="min-height: 600px"
    >
      <v-col
        cols="12"
        md="6"
      >
        <v-card tile>
          <v-card-title>
            <h2 class="overline">
              Account Login
            </h2>
          </v-card-title>
          <v-card-text class="pb-0 mb-0">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="email"
                  :error-messages="errorMessage"
                  :error="hasEmailError"
                  outlined
                  label="email"
                  placeholder="email"
                  prepend-inner-icon="mdi-email"
                  @keydown.enter="login"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="password"
                  type="password"
                  label="password"
                  outlined
                  placeholder="password"
                  prepend-inner-icon="mdi-lock"
                />
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="pb-0 pt-0">
            <v-container class="pt-0 pr-6">
              <v-row
                align="center"
                justify="end"
              >
                <v-btn
                  color="primary"
                  min-width="150"
                  :loading="loggingIn"
                  @click="login"
                  @keydown.enter="login"
                >
                  Login
                </v-btn>
              </v-row>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-form>
</template>
<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      email: '',
      password: '',
      errorMessage: '',
      hasEmailError: false,
      loggingIn: false
    }
  },
  methods: {
    async logout () {
      await this.$store.dispatch('logout')
    },
    async login () {
      this.loggingIn = true
      try {
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        })
        this.$router.push('/admin/store-manager')
      } catch (error) {
        this.loggingIn = false
        this.hasEmailError = true
        this.errorMessage = `error: unable to locate ${this.email} user account. Please register instead`
      }
    }
  }
}
</script>
