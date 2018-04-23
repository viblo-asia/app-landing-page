<template>
    <div>
        <el-header :class="$style.header" height="auto">
            <Navbar/>
        </el-header>

        <main id="main" :class="$style.main">
            <section :class="$style.heroSection">
                <Hero/>
            </section>

            <section>
                <Screens/>
            </section>

            <section>
                <Notifications/>
            </section>

            <section :class="$style.downloadSection" class="d-flex flex-column">
                <Download id="download" :class="$style.flex"/>

                <el-footer :class="$style.footer" height="auto">
                    <Footer/>
                </el-footer>
            </section>
        </main>

    </div>
</template>

<script>
    import Navbar from '~/components/Navbar.vue';
    import Hero from '~/components/Hero.vue';
    import Screens from '~/components/Features/Screens.vue';
    import Notifications from '~/components/Features/Notifications.vue';
    import Download from '~/components/Download.vue';
    import Footer from '~/components/Footer.vue';
    import ga from '~/utils/ga.js'

    export default {
        components: {
            Navbar,
            Hero,
            Download,
            Footer,
            Screens,
            Notifications
        },

        mounted() {
            window.onePageScroll('#main', {
                responsiveFallback: 992 // element-ui md breakpoint
            });

            this.$root.$on('jump', window.moveTo.bind(null, 'main'));

            ga();
        }
    };
</script>

<style module lang="scss">
    @import '~element-ui/packages/theme-chalk/src/mixins/mixins.scss';

    .header {
        background-color: #fff;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
        position: fixed;
        width: 100%;
        z-index: 1030;
    }

    .flex {
        flex-grow: 1;
    }

    .footer {
        background-color: #f8f8f8;
    }

    @include res(xs) {
        .main {
            padding-top: 55px;
        }

        .heroSection {
            height: calc(100vh - 55px) !important;
        }

        .downloadSection {
            min-height: 100vh;
        }
    }

    @include res(md) {
        .main {
            height: 100vh;
            padding-top: initial;
        }
    }
</style>
