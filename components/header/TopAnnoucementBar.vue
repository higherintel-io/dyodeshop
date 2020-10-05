<template>
  <v-row
    align="center"
    justify="center"
    style="background-color:#f7f7f7;min-height:75px"
  >
    <v-skeleton-loader type="heading" />
  </v-row>
</template>

<script>
import { sync, get } from 'vuex-pathify'
export default {
  name: 'TopAnnoucementBar',
  computed: {
    isAdmin: get('isAdmin'),
    backgroundColor: sync('topAnnoucementBar/backgroundColor'),
    textColor: sync('topAnnoucementBar/textColor'),
    text: sync('topAnnoucementBar/text'),
    height: sync('topAnnoucementBar/height')
  }
}
</script>

<style lang="scss" scoped>
</style>
