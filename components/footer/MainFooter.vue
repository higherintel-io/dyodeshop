<template>
  <div style="width:100%;">
    <ComponentSettingsHeader v-if="isAdmin && $route.name === 'admin-store-manager'" />
    <v-footer
      v-if="$vuetify.breakpoint.smAndUp"
      :color="backgroundColor"
    >
      <v-row justify="space-between">
        <v-col cols="6">
          <v-row
            align="start"
            justify="start"
          >
            <v-col cols="6">
              <p
                class="headline mb-0"
                :style="{color: bodyTextColor}"
              >
                Customer Service
              </p>
              <ul class="d-block pl-0">
                <li
                  v-for="(link, i) in customerServiceLinks"
                  :key="i"
                  :style="{color: bodyTextColor}"
                  style="list-style:none"
                >
                  <nuxt-link
                    :to="`/pages/${link}`"
                    style="text-decoration:none"
                    :style="{color: bodyTextColor}"
                  >
                    <span class="text-capitalize">{{ link.replace(/[-]/g, ' ') }}</span>
                  </nuxt-link>
                </li>
              </ul>
            </v-col>
            <v-col cols="6">
              <p
                class="headline mb-0"
                :style="{color: bodyTextColor}"
              >
                Company
              </p>
              <ul class="d-block pl-0">
                <li
                  v-for="(link, i) in companyLinks"
                  :key="i"
                  :style="{color: bodyTextColor}"
                  style="list-style:none"
                >
                  <nuxt-link
                    :to="`/pages/${link}`"
                    style="text-decoration:none"
                    :style="{color: bodyTextColor}"
                  >
                    <span class="text-capitalize">{{ link.replace(/[-]/g, ' ') }}</span>
                  </nuxt-link>
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6">
          <v-row
            justify="end"
            align="end"
            class="text-right"
          >
            <v-col cols="4">
              <h3
                :style="{color: bodyTextColor}"
                style="padding-right:56px;"
              >
                Follow Us
              </h3>
            </v-col>
            <v-col cols="12">
              <li
                v-for="social in socialMedia"
                :key="social.name"
                style="display:inline"
                class="px-3"
              >
                <img :src="social.icon">
              </li>
            </v-col>
          </v-row>
        </v-col>
        <nuxt-link
          to="/admin/store-manager"
          style="text-decoration:none"
        >
          Site Manager
        </nuxt-link>
      </v-row>
    </v-footer>
    <v-footer
      v-else
      :color="backgroundColor"
      class="pa-0 pt- pb-4"
    >
      <FooterDropdown
        :background-color="backgroundColor"
        :menus="[{title: 'Company', links: companyLinks}, {title: 'Customer Service', links: customerServiceLinks}]"
      />
      <v-container class="px-7">
        <v-row
          justify="end"
          align="center"
        >
          <v-col cols="12">
            <h3 :style="{color: bodyTextColor}">
              Follow Us
            </h3>
          </v-col>
          <v-col cols="12">
            <li
              v-for="social in socialMedia"
              :key="social.name"
              style="display:inline"
              class="px-3"
            >
              <img :src="social.icon">
            </li>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
    <SettingsModifier v-if="isAdmin && $route.name === 'admin-store-manager'">
      <v-text-field
        v-model="backgroundColor"
        outlined
        background-color="white"
        label="Background Color"
      />
      <v-text-field
        v-model="bodyTextColor"
        outlined
        background-color="white"
        label="Body text color"
      />
    </SettingsModifier>
  </div>
</template>

<script>
import { sync, get } from 'vuex-pathify'
export default {
  name: 'MainFooter',
  computed: {
    isAdmin: get('isAdmin'),
    bodyTextColor: sync('footerMain/bodyTextColor'),
    backgroundColor: sync('footerMain/backgroundColor'),
    customerServiceLinks: get('footerMain/customerServiceLinks'),
    companyLinks: get('footerMain/companyLinks'),
    socialMedia: get('footerMain/socialMedia')
  }

}
</script>

<style lang="scss" scoped>
h3 {
  font-family: "Pacifico", cursive;
  font-size: 1.2em;
}
</style>
