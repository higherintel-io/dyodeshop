<template>
  <v-card :to="item.link">
    <v-img :src="item.image" />

    <v-card-actions class="pa-0">
      <v-btn
        block
        tile
        :color="buttonBackgroundColor"
        height="110"
        :to="item.link"
      >
        <span :style="{color: `${ctaFontColor}`}">{{ item.title }}</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CtaItem',
  props: {
    item: {
      type: Object,
      default: () => { }
    },
    buttonBackgroundColor: {
      type: String,
      default: '#10504F'
    },
    ctaFontColor: {
      type: String,
      default: '#fff'
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card__actions > .v-btn.v-btn {
  font-family: "Pacifico", cursive !important;
  text-transform: capitalize;
  font-size: 1.6em;
}
</style>
