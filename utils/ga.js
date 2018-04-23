export default function () {
    window['GoogleAnalyticsObject'] = 'ga';
    window['ga'] = window['ga'] || function () {
        (window['ga'].q = window['ga'].q || []).push(arguments);
    }
    window['ga'].l = 1 * new Date();
}

ga('create', 'UA-88817199-1', 'auto');
ga('send', 'pageview', {
    page: '/app',
    title: 'Viblo App'
});
