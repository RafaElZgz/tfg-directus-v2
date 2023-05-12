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
        iconsPlugin({ collections: getIconCollections(['mdi', 'lucide']) }),
    ],
};
