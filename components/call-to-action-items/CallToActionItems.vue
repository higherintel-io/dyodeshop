<template>
  <div class="container mb-4">
    <ComponentSettingsHeader v-if="isAdmin && $route.name === 'admin-store-manager'" />
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        v-for="(cta, i) in ctas"
        :key="cta.title"
        :cols="i === 2 ? 12 : 6"
        md="4"
      >
        <CallToActionItem
          :item="cta"
          :index="i"
          :button-background-color="buttonBackgroundColor"
          :cta-font-color="ctaFontColor"
        />
      </v-col>
    </v-row>
    <SettingsModifier v-if="isAdmin && $route.name === 'admin-store-manager'">
      <v-text-field
        v-model="buttonBackgroundColor"
        outlined
        background-color="white"
        label="Button background color"
      />
      <v-text-field
        v-model="ctaFontColor"
        outlined
        background-color="white"
        label="Button Font Color"
      />
    </SettingsModifier>
  </div>
</template>

<script>
import { get, sync } from 'vuex-pathify'
export default {
  name: 'CtaItems',
  computed: {
    isAdmin: get('isAdmin'),
    ctas: get('callToActionItems/ctas'),
    buttonBackgroundColor: sync('callToActionItems/ctaLinkBackgroundColor'),
    ctaFontColor: sync('callToActionItems/ctaFontColor')
  }
}
</script>

<style lang="scss" scoped>
</style>
