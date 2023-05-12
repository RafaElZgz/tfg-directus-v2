import directusConfig from './config/directus.config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        // '@nuxt/devtools',
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        'nuxt-directus',
    ],

    srcDir: './src',

    /*
        Modules
    */

    directus: directusConfig,
});
