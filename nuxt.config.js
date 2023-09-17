// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  runtimeConfig: {
    public: { YOUR_API_KEY: process.env.APP_API_KEY },
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: [["defineStore", "definePiniaStore"]],
      },
    ],
    ["@vueuse/nuxt"],
  ],
  app: {
    head: {
      title: "Books",
      meta: [{ name: "description", content: "Books" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap",
        },
      ],
    },
  },
  extends: ["./backend"],
  ssr: false,
});
