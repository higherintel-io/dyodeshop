<template>
  <v-layout style="width:100%;">
    <v-app-bar
      :color="backgroundColor"
      :height="height"
    >
      <v-spacer />
      <v-row v-if="$vuetify.breakpoint.smAndUp">
        <v-toolbar-title>
          <nuxt-link to="/">
            <img src="https://res.cloudinary.com/higherintel/image/upload/v1599932929/dyode/logo.png">
          </nuxt-link>
        </v-toolbar-title>

        <v-toolbar-items class="pt-0">
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
          <v-btn
            icon
            to="/shop/cart"
          >
            <v-icon color="white">
              mdi-cart-outline
            </v-icon>
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
    <SettingsModifier v-if="isAdmin && $route.name === 'admin-store-manager'">
      <v-text-field
        v-model="backgroundColor"
        background-color="white"
        outlined
        label="Background Color"
      />
      <v-text-field
        v-model="textColor"
        background-color="white"
        outlined
        label="Text Color"
      />
      <v-text-field
        v-model="height"
        background-color="white"
        outlined
        label="height"
      />
    </SettingsModifier>
  </v-layout>
</template>

<script>
import { sync, get } from 'vuex-pathify'
export default {
  name: 'MainNavigation',
  computed: {
    isAdmin: get('isAdmin'),
    backgroundColor: sync('MainNavigation/backgroundColor'),
    textColor: sync('MainNavigation/textColor'),
    height: sync('MainNavigation/height'),
    links: sync('MainNavigation/links')
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
