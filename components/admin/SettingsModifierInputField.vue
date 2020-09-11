<template>
  <div>
    <slot name="color">
      <v-text-field
        v-model="model"
        background-color="white"
        outlined
        :label="label"
      />
    </slot>
  </div>
</template>

<script>
export default {
  name: 'SettingsModifierInputField',
  props: {
    model: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
