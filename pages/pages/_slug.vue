<template>
  <v-row
    style="min-height:600px"
    align="center"
    justify="center"
  >
    <h1>{{ $route.params.slug }}</h1>
  </v-row>
</template>

<script>
export default {
  name: 'ShopPage'
}
</script>

<style lang="scss" scoped>
</style>
