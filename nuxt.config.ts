import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  //   builder: "webpack",
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  content: {},
});
