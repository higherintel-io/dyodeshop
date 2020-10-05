<template>
  <div style="width:100%;">
    <v-row
      align="center"
      justify="center"
      style="min-height:285px;background:#f7f7f7"
    >
      <v-col
        cols="12"
        md="10"
        class="px-6"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            md="6"
            class=""
          >
            <v-row align="center">
              <v-col
                cols="8"
                md="9"
                class="pr-0"
              />
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { sync, get } from 'vuex-pathify'
export default {
  name: 'FooterNewsletter',
  computed: {
    isAdmin: get('isAdmin'),
    headline: sync('footerNewsletter/headline'),
    bodyText: sync('footerNewsletter/bodyText'),
    bodyTextColor: sync('footerNewsletter/bodyTextColor'),
    backgroundColor: sync('footerNewsletter/backgroundColor'),
    buttonBackgroundColor: sync('footerNewsletter/buttonBackgroundColor'),
    buttonTextColor: sync('footerNewsletter/buttonTextColor'),
    placeholderText: sync('footerNewsletter/placeholderText'),
    buttonBorderColor: sync('footerNewsletter/buttonBorderColor')
  }
}
</script>

<style lang="scss" scoped>
.v-text-field.v-text-field--solo .v-input__control {
  min-height: 44px;
  padding: 0;
}
.v-input__slot {
  box-shadow: none !important;
  border-radius: 0px !important;
}
button.v-btn.v-btn--block.v-btn--depressed.v-btn--flat.v-btn--outlined.v-btn--tile.theme--light.v-size--default {
  font-family: "Pacifico", cursive !important;
}
</style>
