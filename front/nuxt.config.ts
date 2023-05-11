import directusConfig from './config/directus.config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        // '@nuxt/devtools',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@unocss/nuxt',
        'nuxt-directus',
    ],

    srcDir: './src',

    /*
        Modules
    */

    directus: directusConfig,
});
