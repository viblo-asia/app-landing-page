<template>
    <div :class="$style.hero" class="h100">
        <div :class="$style.heroContainer" class="site-container h100 d-flex align-items-center">
            <div :class="$style.heroBg"/>

            <div :class="$style.heroTitle">
                <img :class="$style.logo" src="../images/logo_white.png">

                <h2>The official mobile application of Viblo</h2>
                <p>Is now available for iOS and Android.</p>

                <div :class="$style.buttons">
                    <el-button plain @click="$root.$emit('jump', 2)">Explore</el-button>
                    <el-button plain @click="$root.$emit('jump', 4)">Download Now</el-button>
                </div>
            </div>

        </div>
    </div>
</template>

<style module lang="scss">
    @import '~element-ui/packages/theme-chalk/src/mixins/mixins.scss';

    .hero {
        background-color: #fafafa;
        background: linear-gradient(0deg, #7db9e8 0%, #1e5799 100%);
    }

    .heroContainer {
        display: flex;
    }

    .heroBg {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url('../images/mockup.png');
        background-position: center;
        flex: 1;
        margin: 1rem;
    }

    .heroTitle {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        color: white;
        text-align: center;
        margin-bottom: 5rem;
    }

    .logo {
        width: 4rem;
        margin-bottom: 1rem
    }

    .buttons {
        margin-top: 2rem;

        :global(.el-button) {
            background: transparent;
            color: white;
            border-width: 2px;
            border-color: white !important;
        }
    }

    @include res(xs) {
        .heroContainer {
            flex-direction: column;
            margin: 0 1rem;
        }

        .heroTitle {
            h2 {
                font-size: 1.5rem;
            }
        }
    }

    @include res(md) {
        .heroContainer {
            flex-direction: row;
        }

        .heroBg {
            flex: 0;
            flex-basis: 40%;
        }

        .heroTitle {
            margin-bottom: initial;

            h2 {
                font-size: 2.4rem;
            }

            p {
                font-size: 1.2rem;
            }
        }
    }
</style>
