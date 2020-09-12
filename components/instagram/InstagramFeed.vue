<template>
  <div>
    <ComponentSettingsHeader v-if="isAdmin && $route.name === 'admin-store-manager'" />
    <v-card
      tile
      flat
    >
      <v-card-title class="d-block text-center">
        <h2>{{ headline }}</h2>
      </v-card-title>
      <v-row
        align="center"
        justify="space-around"
      >
        <v-col
          v-for="(post, i) in posts"
          :key="i"
          cols="2"
        >
          <v-card>
            <v-img :src="post.image" />
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <SettingsModifier v-if="isAdmin && $route.name === 'admin-store-manager'">
      <v-text-field
        v-model="instagramUsername"
        outlined
        background-color="white"
        label="instagram username"
      />
      <v-text-field
        v-model="headline"
        outlined
        background-color="white"
        label="Section Headline"
      />
    </SettingsModifier>
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
</style>
