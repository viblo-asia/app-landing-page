<template>
    <div :class="$style.download">
        <h1 :class="$style.downloadTitle">Download Now</h1>
        <h2 :class="$style.downloadSubtitle">Join us and spread the knowledge.</h2>

        <div :class="$style.badges">
            <div :class="$style.stores">
                <PlayStoreBadge/>
                <AppStoreBadge/>
            </div>
            <img :class="$style.qr" src="../images/qr.png">
        </div>
    </div>
</template>

<script>
    import AppStoreBadge from '~/components/Badges/AppStore.vue';
    import PlayStoreBadge from '~/components/Badges/PlayStore.vue';

    export default {
        components: {
            AppStoreBadge,
            PlayStoreBadge
        }
    };
</script>

<style module lang="scss">
    @import '~element-ui/packages/theme-chalk/src/mixins/mixins.scss';

    .download {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .downloadTitle {
        font-size: 3rem;
        font-weight: 300;
    }

    .downloadSubtitle {
        font-size: 1.5rem;
        font-weight: 300;
    }

    .badges {
        margin: 1.5rem 0;
    }

    .qr {
        display: none;
    }

    @include res(md) {
        .downloadTitle {
            font-size: 5rem;
            font-weight: 300;
        }

        .downloadSubtitle {
            font-size: 2rem;
            font-weight: 300;
        }

        .badges {
            margin: 3rem 0 1.5rem 0;
            display: flex;
            justify-content: center;
        }

        .stores {
            display: flex;
            flex-direction: column;
        }

        .qr {
            display: block;
            height: 140px;
            margin: 10px;
        }
    }
</style>
