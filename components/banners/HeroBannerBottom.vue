<template>
  <div>
    <ComponentSettingsHeader />
    <v-card
      flat
      tile
    >
      <v-img :src="backgroundImage">
        <v-col cols="12">
          <v-row
            align="center"
            justify="end"
            style="min-height:400px;max-width:100%"
          >
            <v-col cols="4">
              <h1 :style="{color: `${textColor}`}">
                {{ title }}
              </h1>
              <h2 :style="{color: `${textColor}`}">
                {{ tagline }}
              </h2>
              <v-btn :color="buttonBackgroundColor">
                <span :style="{color: `${buttonTextColor}`}">{{ buttonText }}</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-img>
    </v-card>
    <SettingsModifier>
      <v-text-field
        v-model="title"
        background-color="white"
        outlined
        label="Banner Title"
      />
      <v-text-field
        v-model="tagline"
        background-color="white"
        outlined
        label="Tagline"
      />
      <v-text-field
        v-model="textColor"
        background-color="white"
        label="Title and Tagline text color"
        outlined
      />
      <v-text-field
        v-model="buttonBackgroundColor"
        background-color="white"
        outlined
        label="Button Background Color"
      />
      <v-text-field
        v-model="buttonText"
        background-color="white"
        outlined
        label="Button Text"
      />
      <v-text-field
        v-model="buttonTextColor"
        background-color="white"
        label="Button Text Color"
        outlined
      />
    </SettingsModifier>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify'
export default {
  name: 'HeroBannerBottom',
  computed: {
    title: sync('heroBannerBottom/title'),
    tagline: sync('heroBannerBottom/tagline'),
    backgroundImage: sync('heroBannerBottom/backgroundImage'),
    buttonBackgroundColor: sync('heroBannerBottom/buttonBackgroundColor'),
    buttonText: sync('heroBannerBottom/buttonText'),
    buttonTextColor: sync('heroBannerBottom/buttonTextColor'),
    textColor: sync('heroBannerBottom/textColor')
  }
}
</script>

<style lang="scss" scoped>
</style>
