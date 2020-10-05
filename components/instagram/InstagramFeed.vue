<template>
  <div class="my-6">
    <ComponentSettingsHeader v-if="isAdmin && $route.name === 'admin-store-manager'" />
    <v-card
      tile
      flat
    >
      <v-card-title class="d-block text-center">
        <h2>
          <v-skeleton-loader
            style="margin:auto"
            type="heading"
          />
        </h2>
      </v-card-title>
      <v-row
        align="center"
        justify="space-around"
      >
        <v-col
          v-for="i in 5"
          :key="i"
          cols="2"
        >
          <v-skeleton-loader type="card, list-item" />
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { sync, get } from 'vuex-pathify'
export default {
  name: 'InstagramFeed',
  computed: {
    isAdmin: get('isAdmin'),
    headline: sync('instagramFeed/headline'),
    instagramUsername: sync('instagramFeed/instagramUsername'),
    posts: get('instagramFeed/posts')
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
.v-skeleton-loader__heading.v-skeleton-loader__bone {
  margin: auto;
}
</style>
