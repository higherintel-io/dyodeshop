<template>
  <v-container>
    <v-row class="mb-10">
      <h1 class="overline">
        {{ welcomeMessage }} <span v-if="user && user.email">{{ user.email }}</span>
      </h1>
      <v-spacer />
      <v-btn
        color="primary"
        to="/"
      >
        View frontend
      </v-btn>
      <v-btn
        class="ml-5"
        color="secondary"
        @click="logout"
      >
        Logout
      </v-btn>
    </v-row>
    <template>
      <v-expansion-panels
        class="mt-4"
        accordian
      >
        <v-expansion-panel
          v-for="component in components"
          :key="component.component"
        >
          <v-expansion-panel-header>
            <h2 class="overline">
              {{ component.name }}
            </h2>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-container>
              <component :is="component.component" />
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>
    <v-row>
      <v-col
        cols="12"
        class="mt-10"
      >
        <BcSettings />
      </v-col>
    </v-row>
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
    FooterNewsletter: () => import('@/components/footer/FooterNewsletter'),
    MainFooter: () => import('@/components/footer/MainFooter')
  },
  middleware ({ store, redirect }) {
    const user = store.get('user')
    if (!user) {
      redirect('/admin')
    }
  },
  data () {
    return {
      welcomeMessage: 'Shop Manager',
      components: [
        {
          component: 'TopAnnoucementBar',
          name: '(Global) Top annoucement bar '
        },
        {
          component: 'MainNavigation',
          name: '(Global) Main navigation'
        },
        {
          component: 'HeroBanner',
          name: '(Home) Hero Banner'
        },
        {
          component: 'CallToActionItems',
          name: '(Home) Call To Action Items'
        },
        {
          component: 'FeaturedItems',
          name: '(Home) Featured Items'
        },
        {
          component: 'HeroBannerBottom',
          name: '(Home) Bottom Hero Banner'
        },
        {
          component: 'InstagramFeed',
          name: '(Global) Instagram Feed'
        },
        {
          component: 'FooterNewsletter',
          name: '(Global) Footer newsletter section'
        },
        {
          component: 'MainFooter',
          name: '(Global) Main footer section'
        }
      ]
    }
  },
  computed: {
    user: get('user')
  },
  methods: {
    async logout () {
      await this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
