<template>
  <div>
    <ComponentSettingsHeader />
    <v-sheet
      class="mx-auto"
      elevation="8"
      max-width="1000"
    >
      <v-card-title class="d-block text-center">
        <h2>{{ title }}</h2>
      </v-card-title>
      <v-slide-group show-arrows>
        <v-slide-item
          v-for="(product,i) in products"
          :key="i"
          v-slot:default="{ active }"
        >
          <v-card
            flat
            class="ma-4"
            width="200"
            @click="toggle"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <FeaturedItem
                :product="product"
                :active="active"
              />
              <v-scale-transition>
                <v-icon
                  v-if="active"
                  color="white"
                  size="48"
                  v-text="'mdi-close-circle-outline'"
                />
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
import { sync, get } from 'vuex-pathify'
export default {
  name: 'FeaturedItems',
  computed: {
    title: sync('featuredItems/title'),
    products: get('featuredItems/products')
  }

}
</script>

<style lang="scss" scoped>
</style>
