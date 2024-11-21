import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  modules: [
    '@primevue/nuxt-module',  // PrimeVue module
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  primevue: {
    options: {
        theme: {
            preset: Aura
        }
    }
}
});