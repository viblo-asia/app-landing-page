<template>
    <div :class="$style.navbar">
        <a
            :class="$style.brand"
            href="/"
            class="d-flex align-items-center"
            @click.prevent="go(1)"
        >
            <img :class="$style.logo" src="../images/logo_full.svg">
            <span :class="$style.name">Mobile App</span>
        </a>

        <el-menu
            v-scrollspy="scrollspy"
            :class="$style.menu"
            :default-active="current"
            mode="horizontal"
            class="hidden-sm-and-down"
        >
            <el-menu-item index="features" @click="$root.$emit('jump', 2)">Features</el-menu-item>
            <el-menu-item index="download" @click="$root.$emit('jump', 4)">Download</el-menu-item>
        </el-menu>

        <div :class="$style.download" class="hidden-md-and-up" @click="$root.$emit('jump', 4)">
            Download
        </div>
    </div>
</template>

<script>
    import jump from 'jump.js';
    import scrollspy from '~/directives/scrollspy';

    export default {
        directives: {
            scrollspy
        },

        data: () => ({
            current: null,
            scrollspy: {
                name: 'current',
                offset: 100,
                items: [
                    'features',
                    'download'
                ]
            }
        }),

        methods: {
            go(id) {
                moveTo('#main', id)
            }
        }
    };
</script>

<style module lang="scss">
    @import '~element-ui/packages/theme-chalk/src/mixins/mixins.scss';

    .brand {
        cursor: pointer;
    }

    .logo {
        width: 62px;
        margin-right: .5rem;
    }

    .name {
        font-size: 1.1rem;
        margin-bottom: 2px;
    }

    .navbar {
        height: 100%;
        display: flex;
        justify-content: space-between;
    }

    .menu {
        margin: 0 1.625rem;
        border-bottom: none;

        :global(.el-menu-item) {
            color: #757575;
        }
    }

    .download {
        padding: 0 1rem;
        background-color: #409EFF;
        color: #fff;
        line-height: 55px;
        text-transform: uppercase;
        margin-right: -20px;
    }

    @include res(md) {
        .navbar {
            justify-content: flex-start;
        }
    }
</style>
