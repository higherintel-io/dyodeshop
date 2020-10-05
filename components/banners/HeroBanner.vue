<template>
  <v-card
    height="400"
    color="#f3f3f3"
    flat
  />
</template>

<script>
import { sync, get } from 'vuex-pathify'
export default {
  name: 'HeroBanner',
  computed: {
    isAdmin: get('isAdmin'),
    title: sync('heroBanner/title'),
    tagline: sync('heroBanner/tagline'),
    backgroundImage: sync('heroBanner/backgroundImage'),
    buttonBackgroundColor: sync('heroBanner/buttonBackgroundColor'),
    buttonText: sync('heroBanner/buttonText'),
    buttonTextColor: sync('heroBanner/buttonTextColor'),
    textColor: sync('heroBanner/textColor')
  }
}
</script>

<style lang="scss" scoped>
.v-skeleton-loader__heading.v-skeleton-loader__bone {
  display: none;
}
</style>
