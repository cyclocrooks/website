// https://nuxt.com/docs/api/configuration/nuxt-config
import packageJSON from './package.json';

export default defineNuxtConfig({
    ssr: false,
    devtools: {enabled: true},
    app: {
        head: {
            title: packageJSON.name || '',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'},
                {rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png'},
                {rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png'},
                {rel: 'manifest', href: '/site.webmanifest'},
                {rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ff0077'},
            ],
            meta: [
                {name: 'msapplication-TileColor', content: '#ff0077'},
                {name: 'theme-color', content: '#ff0077'},
            ]
        }
    },
    css: ['~/assets/scss/main.scss']
})
