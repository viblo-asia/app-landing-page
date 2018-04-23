<template>
    <div :class="$style.featureContent">
        <slot/>
    </div>
</template>

<style module lang="scss">
    @import '~element-ui/packages/theme-chalk/src/mixins/mixins.scss';

    .featureContent {
        width: 75%;

        h2 {
            font-size: 2rem;
            line-height: 2rem;
        }

        p {
            margin-top: 1.5rem;
            margin-bottom: 2rem;
        }
    }

    @include res(xs) {
        .featureContent {
            margin: 2rem auto;
            text-align: center;
        }
    }

    @include res(md) {
        .features .partContainer {
            p {
                margin-top: 2rem;
                margin-bottom: 1rem;
            }
        }
    }
</style>
