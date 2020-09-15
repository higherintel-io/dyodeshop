<template>
  <v-card :to="item.link">
    <v-img
      :src="item.image"
      :height="index === 2 && $vuetify.breakpoint.smAndDown ? 167 : $vuetify.breakpoint.mdAndUp ? 400 : 240"
    />
    <v-card-actions class="pa-0">
      <v-btn
        block
        tile
        :color="buttonBackgroundColor"
        :height="$vuetify.breakpoint.smAndDown ? 50 : 110"
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
    },
    index: {
      type: Number,
      default: null
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
