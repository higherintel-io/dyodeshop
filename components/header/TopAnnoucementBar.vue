<template>
  <div>
    <ComponentSettingsHeader v-if="isAdmin" />
    <v-row
      align="center"
      justify="center"
      :style="{backgroundColor, height:`${height}px`}"
    >
      <p
        :style="{color: `${textColor}`}"
        class="mb-0"
      >
        {{ text }}
      </p>
    </v-row>

    <SettingsModifier v-if="isAdmin">
      <v-text-field
        v-model="backgroundColor"
        background-color="white"
        outlined
        label="Background Color"
      />
      <v-text-field
        v-model="height"
        background-color="white"
        outlined
        label="height"
      />
      <v-text-field
        v-model="text"
        background-color="white"
        outlined
        label="text"
      />
      <v-text-field
        v-model="textColor"
        background-color="white"
        outlined
        label="Text Color"
      />
    </SettingsModifier>
  </div>
</template>

<script>
import { sync, get } from 'vuex-pathify'
export default {
  name: 'TopAnnoucementBar',
  computed: {
    isAdmin: get('isAdmin'),
    backgroundColor: sync('topAnnoucementBar/backgroundColor'),
    textColor: sync('topAnnoucementBar/textColor'),
    text: sync('topAnnoucementBar/text'),
    height: sync('topAnnoucementBar/height')
  }
}
</script>

<style lang="scss" scoped>
</style>
