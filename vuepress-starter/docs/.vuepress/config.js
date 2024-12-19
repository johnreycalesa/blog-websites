import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler(), // Use Vite as the bundler
    title: 'My VuePress Site', // Website title
    description: 'A site built with VuePress', // Meta description

    theme: defaultTheme({
        navbar: [
            { text: 'Home', link: '/' }, // Links to the homepage
            { text: 'About', link: '/about/' }, // Links to "About" page
            {
                text: 'Guide', // Dropdown menu
                children: [
                    { text: 'Getting Started', link: '/guide/getting-started/' },
                    { text: 'Configuration', link: '/guide/configuration/' },
                ],
            },
            { text: 'External', link: 'https://google.com' }, // External link
        ],
    }),

    head: [
        ['link', { rel: 'stylesheet', href: '/styles/index.scss' }],
    ],
});
