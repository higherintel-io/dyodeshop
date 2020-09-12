<template>
  <div>
    <ComponentSettingsHeader v-if="isAdmin" />
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        v-for="cta in ctas"
        :key="cta.title"
        cols="12"
        md="4"
      >
        <CallToActionItem
          :item="cta"
          :button-background-color="buttonBackgroundColor"
          :cta-font-color="ctaFontColor"
        />
      </v-col>
    </v-row>
    <SettingsModifier>
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
    ctas: get('callToActionItems/ctas'),
    buttonBackgroundColor: sync('callToActionItems/ctaLinkBackgroundColor'),
    ctaFontColor: sync('callToActionItems/ctaFontColor')
  }
}
</script>

<style lang="scss" scoped>
</style>
