<template>
    <div :class="$style.banner">
        <div :class="$style.appName">
            <img :class="$style.logo" src="../../images/viblo.png"/>
            <span>Viblo</span>
        </div>

        <div :class="$style.content">
            <img
                v-if="avatar"
                :src="avatar"
                :class="$style.avatar"
            >
            <div>
                <h2 :class="$style.title">
                    <slot name="title"/>
                </h2>
                <p :class="$style.text">
                    <slot name="text"/>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            avatar: String
        }
    };
</script>

<style module lang="scss">
    @import '~element-ui/packages/theme-chalk/src/mixins/mixins.scss';

    .banner {
        border-radius: .5rem;
        margin: .5rem;
        padding: 1rem;
        margin-bottom: 0;
        background: white;
        font-family: Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;
    }

    .appName {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        font-size: .8rem;
    }

    .logo {
        width: 1rem;
        margin-right: 1rem;
    }

    .avatar {
        width: 3rem;
        margin-right: 1rem;
    }

    .title {
        color: #545454;
        font-weight: 500;
    }

    .text {
        margin: 0;
    }

    .appName, .text {
        color: #9e9e9e;
    }

    .content {
        display: flex;
        align-items: flex-start;
    }

    @include res(xs) {
        .title, .text {
            font-size: .8rem;
        }

        .title {
            margin-bottom: .5rem;
        }

        .text {
            line-height: 1rem;
        }
    }
</style>
