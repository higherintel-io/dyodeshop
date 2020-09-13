<template>
  <div style="width:100%;">
    <ComponentSettingsHeader v-if="isAdmin && $route.name === 'admin-store-manager'" />
    <v-card
      flat
      tile
    >
      <v-img :src="backgroundImage">
        <v-col cols="12">
          <v-row
            align="center"
            justify="center"
            style="min-height:400px;max-width:100%"
          >
            <v-col cols="12">
              <h1>{{ title }}</h1>
              <h2 class="hero-tagline">
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
    <SettingsModifier v-if="isAdmin && $route.name === 'admin-store-manager'">
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
import { sync, get } from 'vuex-pathify'
export default {
  name: 'HeroBanner',
  computed: {
    isAdmin: get('isAdmin'),
    title: sync('heroBanner/title'),
    tagline: sync('heroBanner/tagline'),
    backgroundImage: sync('heroBanner/backgroundImage'),
    buttonBackgroundColor: sync('heroBanner/buttonBackgroundColor'),
    buttonText: sync('heroBanner/buttonText'),
    buttonTextColor: sync('heroBanner/buttonTextColor')
  }
}
</script>

<style lang="scss" scoped>
</style>
