<template>
  <div class="container mb-4">
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        v-for="i in 4"
        :key="i"
        cols="3"
        md="3"
      >
        <nuxt-link to="/about">
          <v-skeleton-loader
            type="card"
            boilerplate
          />
        </nuxt-link>
      </v-col>
    </v-row>
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
