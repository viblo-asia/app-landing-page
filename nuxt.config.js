import meta from './meta.json';

export default {
    mode: 'spa',

    head: {
        title: 'Viblo Mobile Application',

        meta,

        script: [
            { src: '/app/onepagescroll.js' },
            { src: 'https://www.google-analytics.com/analytics.js' }
        ],

        link: [
            { rel: 'stylesheet', href: '/app/onepage-scroll.css' }
        ]
    },

    css: [
        '~/scss/minireset.scss',
        '~/scss/utilities.scss',
        '~/scss/app.scss'
    ],

    plugins: [
        '~/plugins/element-ui'
    ],

    router: {
        base: process.env.NODE_ENV === 'production' ? '/app' : '/',
    }
};
