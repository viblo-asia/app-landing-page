<template>
    <el-row
        :class="$style.notifications"
        type="flex"
        justify="center"
        class="site-container flex-wrap h100 overflow-hidden"
    >
        <el-col :lg="10" :md="11" :class="$style.phone">
            <Phone>
                <transition-group name="notification-banner" tag="div" mode="out-in">
                    <Banner
                        v-if="currentText >= 0"
                        :key="0"
                        :avatar="require('../../images/lorelei.png')"
                    >
                        <template slot="title">Lorelei answered your question</template>
                        <template slot="text">What is a 'Closure'?</template>
                    </Banner>

                    <Banner
                        v-if="currentText >= 1"
                        :key="1"
                        :avatar="require('../../images/ike.png')"
                    >
                        <template slot="title">New post published by Ike</template>
                        <template slot="text">Build a blockchain in Golang</template>
                    </Banner>

                    <Banner v-if="currentText >= 2" :key="2">
                        <template slot="title">Today's top post</template>
                        <template slot="text">"Docker: From zero to hero" published by John Smith</template>
                    </Banner>
                </transition-group>
            </Phone>
        </el-col>

        <el-col :lg="10" :md="8" class="d-flex align-items-center">
            <transition name="fly" mode="out-in">
                <Content v-if="currentText === -1" :key="1">
                    <h2>Don't miss a single notification</h2>
                    <p>Receive your notifications in real time. Interact timely with readers of your posts and answers.</p>
                </Content>

                <Content v-if="currentText === 0" :key="0">
                    <h2>Don't miss a single notification</h2>
                    <p>Been waiting for answer to your questions? We'll tell you immediately when help arrives</p>
                </Content>

                <Content v-if="currentText === 1" :key="1">
                    <h2>Never miss a post from your favorite authors</h2>
                    <p>Get notified immediately about posts from authors you followed.</p>
                </Content>

                <Content v-if="currentText === 2" :key="2">
                    <h2>Stay in the loop</h2>
                    <p>Keep up with the hottest trending posts. Get updated every day with best posts hand-picked by Viblo's staffs.</p>
                </Content>
            </transition>
        </el-col>
    </el-row>
</template>

<script>
    import { up } from '~/utils/rotate';
    import Phone from './Phone.vue';
    import Banner from './NotificationBanner.vue';
    import Content from './Content.vue';

    export default {
        components: {
            Phone,
            Banner,
            Content
        },

        data: () => ({
            currentText: 0
        }),

        mounted() {
            this.$_interval = setInterval(() => {
                this.currentText = up(-1, 2, this.currentText);
            }, 2000);
        },

        beforeDestroy() {
            clearInterval(this.$_interval);
        },

        methods: {
            setText(value) {
                this.currentText = value;
            }
        }
    };
</script>

<style module lang="scss">
    @import '~element-ui/packages/theme-chalk/src/mixins/mixins.scss';

    @include res(xs) {
        .phone {
            max-height: 500px;
            overflow: hidden;
        }
    }

    @include res(md) {
        .notifications {
            flex-direction: row-reverse;
        }
    }
</style>

<style lang="scss">
    .fly {
        &-leave {
            transform: none;
        }

        &-leave-active, &-enter {
            opacity: 0;
        }

        &-enter {
            opacity: 0;
        }

        &-enter-active, &-leave-active {
            transition-property: transform, opacity;
            transition-duration: .2s;
            transition-timing-function: ease-in-out;
        }
    }

    .notification-banner {
        &-enter, &-leave-active {
            transform: scaleY(0.8) translateY(-20px);
            opacity: 0;
        }

        &-enter-active {
            transition-delay: .2s;
        }

        &-enter-active, &-leave-active {
            transition-property: transform, opacity;
            transition-duration: .45s;
            transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
        }
    }
</style>
