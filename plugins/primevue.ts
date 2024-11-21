import PrimeVue from 'primevue/config';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {
    ripple: true,   // Enable ripple globally
    icon: 'pi',     // Default icon prefix
    theme: 'aura',  // Set the theme
  });
});