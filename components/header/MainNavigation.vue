<template>
  <v-layout style="width:100%;">
    <v-app-bar
      :color="backgroundColor"
      :height="height"
    >
      <v-app-bar-nav-icon />

      <v-toolbar-title>
        <nuxt-link to="/">
          <img src="https://res.cloudinary.com/higherintel/image/upload/v1599932929/dyode/logo.png">
        </nuxt-link>
      </v-toolbar-title>

      <v-spacer />

      <v-toolbar-items>
        <v-btn
          v-for="n in links"
          :key="n"
          text
          class="overline font-weight-black"
          exact
          :to="`/shop/${n}`"
          nuxt
          :color="textColor"
        >
          {{ n }}
        </v-btn>
      </v-toolbar-items>
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
  }
}
</script>

<style lang="scss" scoped>
.v-toolbar__title img {
  width: 55px;
  margin-top: 7px;
}
</style>
