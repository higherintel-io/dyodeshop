<template>
  <v-container>
    <v-row>
      <h1>{{ welcomeMessage }} <span v-if="user && user.email">{{ user.email }}</span></h1>
      <v-spacer />
      <v-btn
        color="primary"
        to="/"
      >
        View frontend
      </v-btn>
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
  layout: 'admin',
  components: {
    TopAnnoucementBar: () => import('@/components/header/TopAnnoucementBar'),
    MainNavigation: () => import('@/components/header/MainNavigation'),
    HeroBanner: () => import('@/components/banners/HeroBanner'),
    FeaturedItems: () => import('@/components/featured-block/FeaturedItems'),
    CallToActionItems: () => import('@/components/call-to-action-items/CallToActionItems'),
    HeroBannerBottom: () => import('@/components/banners/HeroBannerBottom'),
    InstagramFeed: () => import('@/components/instagram/InstagramFeed'),
    FooterNewsletter: () => import('@/components/footer/FooterNewsletter')
  },
  data () {
    return {
      welcomeMessage: 'Shop Manager',
      components: [
        {
          component: 'TopAnnoucementBar',
          name: 'Top annoucement bar'
        },
        {
          component: 'MainNavigation',
          name: 'Main navigation'
        },
        {
          component: 'HeroBanner',
          name: 'Hero Banner'
        },
        {
          component: 'CallToActionItems',
          name: 'Call To Action Items'
        },
        {
          component: 'FeaturedItems',
          name: 'Featured Items'
        },
        {
          component: 'HeroBannerBottom',
          name: 'Bottom Hero Banner'
        },
        {
          component: 'InstagramFeed',
          name: 'Instagram Feed'
        },
        {
          component: 'FooterNewsletter',
          name: 'Footer newsletter section'
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
