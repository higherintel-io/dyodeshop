<template>
  <div class="mb-6">
    <ComponentSettingsHeader v-if="isAdmin && $route.name === 'admin-store-manager'" />
    <v-sheet
      class="mx-auto"
      elevation="0"
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
            :width="$vuetify.breakpoint.smAndUp ? 200 : 140"
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
