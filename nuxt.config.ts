// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  css: ["devextreme/dist/css/dx.light.css"],
  build: {
    transpile: ["devextreme-vue"],
  },
  devtools: { enabled: true },
});
