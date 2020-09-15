<template>
  <div style="width:100%;">
    <ComponentSettingsHeader v-if="isAdmin && $route.name === 'admin-store-manager'" />
    <v-row
      align="center"
      justify="center"
      style="min-height:285px"
      :style="{backgroundColor: `${backgroundColor}`}"
    >
      <v-col
        cols="12"
        md="10"
        class="px-6"
      >
        <h2
          class="text-center d-flex align-center justify-center"
          :style="{color: bodyTextColor}"
        >
          <img
            class="mr-2"
            width="36"
            height="36"
            src="https://res.cloudinary.com/higherintel/image/upload/v1600190101/dyode/mail-icon.png"
          >
          {{ headline }}
        </h2>
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            md="6"
          >
            <span
              class="text-caption"
              :style="{color: bodyTextColor}"
            >{{ bodyText }}</span>
          </v-col>
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
              >
                <v-text-field
                  solo
                  style="min-height:0!important"
                  height="44"
                  hide-details="true"
                  :placeholder="placeholderText"
                />
              </v-col>
              <v-col
                cols="4"
                md="3"
                class="pr-6"
              >
                <v-btn
                  block
                  tile
                  outlined
                  height="44"
                  :color="buttonBorderColor"
                >
                  Subscribe
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <SettingsModifier v-if="isAdmin && $route.name === 'admin-store-manager'">
      <v-text-field
        v-model="headline"
        outlined
        label="Headline"
      />
      <v-text-field
        v-model="bodyText"
        outlined
        label="Body Text"
      />
      <v-text-field
        v-model="placeholderText"
        outlined
        label="Input placeholder text"
      />
      <v-text-field
        v-model="backgroundColor"
        outlined
        label="background color"
      />
      <v-text-field
        v-model="buttonBackgroundColor"
        outlined
        label="Button Background Color"
      />
      <v-text-field
        v-model="buttonBorderColor"
        outlined
        label="Button border color"
      />
      <v-text-field
        v-model="buttonTextColor"
        outlined
        label="Button text color"
      />
    </SettingsModifier>
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
