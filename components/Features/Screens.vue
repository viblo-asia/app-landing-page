<template>
    <el-row type="flex" justify="center" class="h100 flex-wrap">
        <el-col :md="14" :xl="10" class="d-flex align-items-center justify-content-center">
            <Showcase :class="$style.showcase"/>
        </el-col>

        <el-col :md="10" class="d-flex align-items-center">
            <Content>
                <h2>Optimized for your device</h2>
                <p>An experience tailored for mobile devices. Infinite scrolling, offline reading and more.</p>
            </Content>
        </el-col>
    </el-row>
</template>

<script>
    import Showcase from './Showcase.vue';
    import Content from './Content.vue';

    export default {
        components: {
            Showcase,
            Content
        }
    };
</script>

<style module lang="scss">
    .showcase {
        margin: 2rem;
    }
</style>
