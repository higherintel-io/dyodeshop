<template>
  <v-row>
    <v-col cols="12">
      <h3>{{ text }} </h3>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ComponentSettings',
  props: {
    text: {
      type: String,
      default: 'Component Preview'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
