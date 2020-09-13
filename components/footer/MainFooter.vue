<template>
  <div style="width:100%;">
    <ComponentSettingsHeader v-if="isAdmin && $route.name === 'admin-store-manager'" />
    <v-footer :color="backgroundColor">
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
                    :to="link"
                    style="text-decoration:none"
                    :style="{color: bodyTextColor}"
                  >
                    {{ link }}
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
                    :to="link"
                    style="text-decoration:none"
                    :style="{color: bodyTextColor}"
                  >
                    {{ link }}
                  </nuxt-link>
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6">
          <v-row
            justify="end"
            align="center"
          >
            <li
              v-for="social in socialMedia"
              :key="social.name"
              class="px-3"
            >
              <img :src="social.icon">
            </li>
          </v-row>
        </v-col>
      </v-row>
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
</style>
