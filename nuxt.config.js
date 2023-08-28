export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],
  ssr: true,
  fetchOnServer: true,
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'zSQa3rlXe20W1vseSOT8DQtt',
        apiOptions: {
           region: '' // Set 'US" if your space is created in US region (EU default)
        }
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
  vite: {
    optimizeDeps: { exclude: ["fsevents"] }
  }
})
