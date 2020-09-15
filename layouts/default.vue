<template>
  <v-app dark>
    <TopAnnoucementBar />
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      disable-resize-watcher
      stateless
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <MainNavigation />
    <v-main>
      <nuxt />
    </v-main>
    <InstagramFeed />
    <FooterNewsletter />
    <MainFooter />
  </v-app>
</template>

<script>
export default {
  async middleware ({ store, app }) {
    await store.dispatch('getDesignSettings')
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
<style>
h1,
h2,
.v-application .headline {
  font-family: "Pacifico", cursive !important;
}
button.v-btn.v-btn--block.v-btn--depressed.v-btn--flat.v-btn--outlined.v-btn--tile.theme--light.v-size--default {
  font-family: "Pacifico", cursive;
  text-transform: capitalize;
}

.theme--light.v-btn,
.application body,
a,
p {
  font-family: "Lato", sans-serif !important;
  font-weight: 300 !important;
}
body .v-application h2.hero-tagline {
  font-family: "Lato", sans-serif !important;
  font-weight: 300;
}
div#__layout {
  overflow: hidden;
}
</style>
