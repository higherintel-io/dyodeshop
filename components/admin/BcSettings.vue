<template>
  <v-card
    flat
    tile
  >
    <v-card-title>
      <h3 class="overline">
        Store connection settings
      </h3>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="clientId"
            outlined
            label="BigCommerce Client ID"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="authToken"
            outlined
            label="BigCommerce Auth Token"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="storeHash"
            outlined
            label="BigCommerce Store hash"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { sync } from 'vuex-pathify'
export default {
  name: 'BcSettings',
  computed: {
    clientId: sync('bcSettings/clientId'),
    authToken: sync('bcSettings/authToken'),
    storeHash: sync('bcSettings/storeHash')
  }
}
</script>

<style lang="scss" scoped>
</style>
