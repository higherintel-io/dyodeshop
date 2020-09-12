<template>
  <div>
    <v-img :src="product.image" />
    <v-card-text class="pa-0">
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          class="text-center py-0"
        >
          <span class="font-weight-bold">{{ product.name }}</span>
        </v-col>
        <v-col
          cols="12"
          class="text-center py-0"
        >
          <span class="font-weight-normal">{{ product.shortDesc }}</span>
        </v-col>
        <v-col
          cols="12"
          class="text-center py-0"
        >
          <span class="font-weight-normal">${{ product.price }}</span>
        </v-col>
      </v-row>
    </v-card-text>
  </div>
</template>

<script>
export default {
  name: 'FeaturedItem',
  props: {
    product: {
      type: Object,
      default: () => { }
    },
    active: {
      type: Boolean,
      default: false
    },
    toggle: {
      type: Boolean,
      default: false
    }

  }
}
</script>

<style lang="scss" scoped>
</style>
