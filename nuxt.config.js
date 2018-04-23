export default {
    mode: 'spa',

    head: {
        title: 'Viblo Mobile Application',

        meta: [
            {
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge'
            }
        ],

        script: [
            { src: '/app/onepagescroll.js' }
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
