<template>
  <v-layout style="width:100%;">
    <v-app-bar color="white">
      <v-row v-if="$vuetify.breakpoint.smAndUp">
        <v-toolbar-title class="pl-4">
          <nuxt-link
            to="/"
            style="text-decoration:none;color:#666"
          >
            Logo
          </nuxt-link>
        </v-toolbar-title>

        <v-toolbar-items class="pt-0">
          <v-skeleton-loader
            v-for="n in 5"
            :key="n"
            type="btn"
          />
          <v-btn
            v-for="n in links"
            :key="n"
            text
            class="overline font-weight-black hidden-md-and-down"
            exact
            :to="`/shop/${n}`"
            nuxt
            :color="textColor"
          >
            {{ n }}
          </v-btn>
        </v-toolbar-items>
      </v-row>
      <v-row
        v-else
        style="width:100%;height:60px"
        align="center"
        justify="space-between"
      >
        <v-col
          cols="2"
          class="pa-0"
        >
          <v-app-bar-nav-icon
            class="hidden-md-and-up"
            color="white"
            large
            @click="toggleSidebar"
          />
        </v-col>
        <v-toolbar-title>
          <nuxt-link to="/">
            <img src="https://res.cloudinary.com/higherintel/image/upload/v1599932929/dyode/logo.png">
          </nuxt-link>
        </v-toolbar-title>
        <v-btn
          icon
          to="/shop/cart"
        >
          <v-icon color="white">
            mdi-cart-outline
          </v-icon>
        </v-btn>
      </v-row>
    </v-app-bar>
  </v-layout>
</template>

<script>

export default {
  name: 'MainNavigation',
  computed: {
  },
  methods: {
    toggleSidebar () {
      this.$emit('toggle-nav')
    }
  }
}
</script>

<style lang="scss" scoped>
.v-toolbar__title img {
  width: 55px;
  margin-top: 7px;
}
@media screen and (max-width: 1024px) {
}
</style>
