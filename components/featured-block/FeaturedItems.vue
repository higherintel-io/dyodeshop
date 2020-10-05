<template>
  <div class="mb-6">
    <v-sheet
      class="mx-auto"
      elevation="0"
      max-width="1000"
    >
      <v-card-title class="d-block text-center">
        <v-skeleton-loader type="text" />
      </v-card-title>
      <v-row>
        <v-col
          v-for="i in 12"
          :key="i"
          cols="2"
        >
          <v-skeleton-loader
            type="card"
            boilerplate
          />
          <v-row />
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
import { sync, get } from 'vuex-pathify'
export default {
  name: 'FeaturedItemsComponent',
  computed: {
    isAdmin: get('isAdmin'),
    title: sync('featuredItems/title'),
    products: get('featuredItems/products')
  }

}
</script>

<style lang="scss" scoped>
</style>
