<template>
  <v-row
    align="center"
    class="mt-5"
  >
    <v-col
      cols="12"
      class="pa-0"
    >
      <v-card
        tile
        flat
        color="#f7f7f7"
      >
        <v-card-title>
          <h3>Customize component</h3>
        </v-card-title>
        <v-card-text>
          <slot />
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            outlined
            @click="saveDesignSettings"
          >
            Save Changes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'SettingsModifier',
  props: {
    component: {
      type: String,
      default: ''
    },
    fields: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    async saveDesignSettings () {
      await this.$store.dispatch('saveDesignSettings', this.$store.get('featuredItems'))
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
