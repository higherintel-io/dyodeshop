<template>
  <v-expansion-panels id="footerExpansionPanels">
    <v-expansion-panel
      v-for="(item,i) in menus"
      :key="i"
      :ref="`expansionPanel-${i}`"
      :style="{backgroundColor}"
      @change="updateIcon(`expansionPanel-${i}`)"
    >
      <v-expansion-panel-header
        class="white--text"
        :expand-icon="expandIcon"
      >
        {{ item.title }}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-list
          :color="backgroundColor"
          dense
        >
          <v-list-item
            v-for="link in item.links"
            :key="link"
            :to="`/pages/${link}`"
          >
            <v-list-item-content>
              <v-list-item-title
                style="color:white"
                v-text="link"
              />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: 'FooterDropdown',
  props: {
    backgroundColor: {
      default: '#000',
      type: String
    },
    menus: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      expandIcon: 'mdi-plus'
    }
  },
  methods: {
    updateIcon (i) {
      this.$refs[i][0].$children[0].expandIcon === 'mdi-plus' ? this.$refs[i][0].$children[0].expandIcon = 'mdi-minus' : this.$refs[i][0].$children[0].expandIcon = 'mdi-plus'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
<style>
#footerExpansionPanels .v-icon {
  color: white !important;
}
#footerExpansionPanels .v-expansion-panel-header {
  font-family: "Pacifico", cursive;
  font-size: 1.2em;
}
</style>
