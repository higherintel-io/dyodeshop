<template>
  <div>
    <v-app-bar
      :color="backgroundColor"
      :height="height"
    >
      <v-app-bar-nav-icon />

      <v-toolbar-title>Logo</v-toolbar-title>

      <v-spacer />

      <v-toolbar-items>
        <v-btn
          v-for="n in links"
          :key="n"
          text
          class="overline font-weight-black"
          exact
          nuxt
          :color="textColor"
        >
          {{ n }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <SettingsModifier v-if="isAdmin">
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
  </div>
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
</style>
