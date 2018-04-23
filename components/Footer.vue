<template>
    <div :class="$style.footerContainer" class="d-flex">
        <a href="https://viblo.asia" target="_blank" class="d-flex align-items-center">
            <img :class="$style.logo" src="../images/logo_full.svg">
            <span :class="$style.brandText" class="hidden-md-and-down">Free service for technical knowledge sharing</span>
        </a>

        <div :class="$style.links">
            <a href="https://viblo.asia/register" target="_blank">Sign up</a>
            <a href="https://viblo.asia/terms" target="_blank">Terms</a>
        </div>
    </div>
</template>

<style module lang="scss">
    @import '~element-ui/packages/theme-chalk/src/mixins/mixins.scss';

    .logo {
        width: 100px;
        margin-right: 1.5rem;
    }

    .links {
        margin-top: 2rem;

        a {
            display: block;

            &:not(:last-child) {
                margin-bottom: 1rem;
            }
        }

    }

    .footerContainer{
        width: 85%;
        margin: 0 auto;
        padding: 40px 0 60px 0;
        justify-content: space-between;
        font-size: 1.1rem;
    }

    .footerContainer {
        flex-direction: column;
    }

    @include res(md) {
        .footerContainer {
            flex-direction: row;
            align-items: center;
        }

        .links {
            margin-top: 0;

            a {
                display: inline;

                &:not(:last-child) {
                    margin-right: 1rem;
                }
            }
        }
    }
</style>
