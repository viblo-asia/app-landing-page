<template>
    <div :class="[$style.perspective, { show }]">
        <div :class="$style.wrapper">
            <div :class="$style.phone"/>
            <ul :class="$style.screens">
                <li
                    v-for="(style, index) in imageStyles"
                    :key="index"
                    :style="style"
                />
            </ul>
        </div>
    </div>
</template>

<script>
    import _map from 'lodash/map';

    export default {
        data: () => ({
            show: false,
            images: [
                /* eslint global-require: off */
                require('~/images/screens/login.png'),
                require('~/images/screens/tags.png'),
                require('~/images/screens/profile.png'),
                require('~/images/screens/featured.png'),
                require('~/images/screens/post.png'),
                require('~/images/screens/home.png')
            ]
        }),

        computed: {
            imageStyles() {
                return _map(this.images, (img, index) => ({
                    'background-image': `url(${img})`,
                    transform: this.show ? `translateZ(${85 + (75 * index)}px) rotateY(-15deg)` : null,
                    'transition-delay': this.show ? `${((this.images.length + 3) / 10) - (index / 10)}s` : null
                }));
            }
        },

        mounted() {
            setTimeout(() => {
                this.show = true;
            }, 3000);
        }
    };
</script>

<style module lang="scss">
    @import '~element-ui/packages/theme-chalk/src/mixins/mixins.scss';

    .perspective {
        perspective: 1200px;
        perspective-origin: 50% 0%;
    }

    .wrapper {
        position: relative;
        width: 150px;
        height: 279px;

        backface-visibility: hidden;
        transition: .9s ease-in-out;
    }

    .phone {
        width: 100%;
        height: 100%;
        background: url('../../images/screens/phone.png');
        background-size: cover;
        position: absolute;
    }

    .wrapper, .screens {
        transform-style: preserve-3d;
    }

    .screens {
        width: 100%;
        height: 100%;

        li {
            width: 100%;
            height: 100%;
            background-size: cover;
            position: absolute;
            transition: opacity .4s, transform .9s;
        }
    }

    :global(.show) {
        .wrapper {
            transform: rotateY(40deg) translateZ(-260px);
        }

        .phone {
            transform: rotateY(-15deg);
            transition: transform .9s .4s;
        }

        .screens {
            li {
                cursor: pointer;
                opacity: 0.9;

                &:hover {
                    opacity: 1;
                }
            }
        }
    }

    @include res(md) {
        .wrapper {
            width: 250px;
            height: 465px;
        }

        :global(.show) {
            .wrapper {
                transform: rotateY(40deg) translateZ(-224px);
            }
        }
    }
</style>
