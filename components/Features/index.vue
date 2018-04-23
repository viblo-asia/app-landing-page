<template>
    <div :class="$style.features">
        <div :class="$style.partContainer">
            <Screens :class="$style.part"/>
        </div>

        <div :class="$style.partContainer">
            <Notifications :class="$style.part"/>
        </div>
    </div>
</template>

<script>
    import Screens from './Screens.vue';
    import Notifications from './Notifications.vue'

    export default {
        components: {
            Screens,
            Notifications
        }
    };
</script>

<style module lang="scss">
    .partContainer {
        height: calc(100vh - 60px);
        min-height: 500px;
        overflow: hidden;

        &:nth-child(2n) {
            background-color: #fafafa;
        }

        &:nth-child(2n) .part {
            flex-direction: row-reverse;
        }
    }
</style>
