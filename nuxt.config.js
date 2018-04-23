import meta from './config/meta';

export default {
    mode: 'spa',

    head: {
        title: 'Viblo Mobile Application',

        meta,

        script: [
            { src: '/vendor/onepagescroll.js' }
        ],

        link: [
            { rel: 'stylesheet', href: '/vendor/onepage-scroll.css' }
        ]
    },

    css: [
        '~/scss/minireset.scss',
        '~/scss/utilities.scss',
        '~/scss/app.scss'
    ],

    plugins: [
        '~/plugins/element-ui'
    ]
};
