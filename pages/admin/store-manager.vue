<template>
  <v-container>
    <v-row>
      <h1>{{ welcomeMessage }} <span v-if="user && user.email">{{ user.email }}</span></h1>
    </v-row>
    <template>
      <v-expansion-panels class="mt-4">
        <v-expansion-panel
          v-for="component in components"
          :key="component.component"
        >
          <v-expansion-panel-header>
            <h2>{{ component.name }}</h2>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-container>
              <component :is="component.component" />
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>
  </v-container>
</template>

<script>
import { get } from 'vuex-pathify'
export default {
  name: 'StoreManager',
  components: {
    TopAnnoucementBar: () => import('@/components/header/TopAnnoucementBar'),
    MainNavigation: () => import('@/components/header/MainNavigation')
  },
  data () {
    return {
      welcomeMessage: 'Shop Manager',
      components: [
        {
          component: 'TopAnnoucementBar',
          name: 'Top annoucement bar settings'
        },
        {
          component: 'MainNavigation',
          name: 'Main navigation settings'
        }
      ]
    }
  },
  computed: {
    user: get('user')
  }
}
</script>

<style lang="scss" scoped>
</style>
