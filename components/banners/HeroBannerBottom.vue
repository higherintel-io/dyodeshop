<template>
  <div
    style="width:100%"
    class="my-5"
  >
    <v-card
      flat
      tile
      height="400"
      color="#f7f7f7"
    />
  </div>
</template>

<script>
import { sync, get } from 'vuex-pathify'
export default {
  name: 'HeroBannerBottom',
  computed: {
    isAdmin: get('isAdmin'),
    title: sync('heroBannerBottom/title'),
    tagline: sync('heroBannerBottom/tagline'),
    backgroundImage: sync('heroBannerBottom/backgroundImage'),
    buttonBackgroundColor: sync('heroBannerBottom/buttonBackgroundColor'),
    buttonText: sync('heroBannerBottom/buttonText'),
    buttonTextColor: sync('heroBannerBottom/buttonTextColor'),
    textColor: sync('heroBannerBottom/textColor')
  }
}
</script>

<style lang="scss" scoped>
</style>
