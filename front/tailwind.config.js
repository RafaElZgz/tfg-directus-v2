const {
    iconsPlugin,
    getIconCollections,
} = require('@egoist/tailwindcss-icons');

const colors = require('./tailwind/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,vue}'],
    theme: {
        extend: {
            colors: colors,
        },
    },
    plugins: [
        require('daisyui'),
        iconsPlugin({ collections: getIconCollections(['mdi']) }),
    ],

    daisyui: {
        styled: true,
        themes: false,
        base: true,
        utils: true,
        logs: false,
        rtl: false,
        prefix: '',
        darkTheme: 'dark',
    },
};
