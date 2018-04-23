<template>
    <el-row
        :class="$style.part"
        class="site-container"
        type="flex"
        justify="center"
    >
        <el-col :lg="10" :md="11">
            <slot name="image"/>
        </el-col>

        <el-col :lg="10" :md="8" :class="$style.text">
            <slot name="text"/>
        </el-col>
    </el-row>
</template>

<script>
    import Phone from './Phone.vue';

    export default {
        components: {
            Phone
        },

        props: {
            color: String
        }
    };
</script>

<style module lang="scss">
    @import '~element-ui/packages/theme-chalk/src/mixins/mixins.scss';

    .featurePart {
        flex-wrap: wrap;
        box-sizing: content-box;
    }

    .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 1.2rem;
        margin: 0 auto;
        text-align: center;
        max-width: 80%;
    }

    @include res(md) {
        .text {
            text-align: inherit;
        }
    }
</style>
