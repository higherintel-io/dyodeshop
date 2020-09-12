<template>
  <v-container
    fluid
    class="pa-0"
  >
    <HeroBanner />
    <CallToActionItems />
    <FeaturedItems />
    <HeroBannerBottom />
    <InstagramFeed />
    <FooterNewsletter />
  </v-container>
</template>

<script>

export default {
  components: {

    // TopAnnoucementBar: () => import('@/components/header/TopAnnoucementBar'),
    // MainNavigation: () => import('@/components/header/MainNavigation'),
    // HeroBanner: () => import('@/components/banners/HeroBanner'),
    // FeaturedItems: () => import('@/components/featured-block/featuredItems'),
    // CallToActionItems: () => import('@/components/call-to-action-items/CallToActionItems'),
    // HeroBannerBottom: () => import('@/components/banners/HeroBannerBottom'),
    // InstagramFeed: () => import('@/components/instagram/InstagramFeed'),
    // FooterNewsletter: () => import('@/components/footer/FooterNewsletter')
  },
  data () {
    return {
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
  }
}
</script>
