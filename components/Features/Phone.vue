<template functional>
    <div class="phone">
        <div class="phone-top">
            <span class="camera"/>
            <span class="sensor"/>
            <span class="speaker"/>
        </div>
        <div class="antenna top"/>
        <div class="phone-screen">
            <slot/>
        </div>

        <div class="buttons">
            <span class="sleep"/>
            <span class="down"/>
        </div>
        <div class="antenna bottom"/>
        <div class="phone-bottom"/>
    </div>
</template>

<script>
    export default {
        functional: true,
    };
</script>

<style lang="scss">
    .phone {
        box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px #999, 0 0 30px 0px rgba(0, 0, 0, 0.7);
        border: 5px solid #d9dbdc;
        background: #f8f8f8;
        padding: 15px;
        border-radius: 50px;
        /* height: 877px; */
        width: 100%;
        max-width: 423px;
        position: relative;
        margin: 0 auto;

        -webkit-transform: scale(0.8);
                transform: scale(0.8);
    }

    .phone-top {
        padding: 25px 110px 40px;
        position: relative;
    }

    .phone-top .speaker {
        display: block;
        width: 80px;
        height: 6px;
        margin: -10px auto;
        border-radius: 6px;
        background: #d2d2d2;
    }
    .phone-top .camera {
        display: block;
        margin:10px auto;
        height: 10px;
        width: 25px;
        border-radius: 10px;

        background: #333;
    }
    .phone-top .sensor {
        display: block;
        width: 15px;
        height: 15px;
        margin-left:-50px;
        background: #333;
        margin-top: -50px;
        border-radius: 50%;
    }

    .phone-bottom {
        padding: 25px 110px 40px;
    }

    .antenna {
        display: block;
        width: calc(100% + 10px);
        height: 15px;
        border-left: 5px solid #BBB;
        border-right: 5px solid #BBB;
        position: absolute;
        left: -5px;

        &.top {
            top: 65px;
        }

        &.bottom {
            bottom: 65px;
        }
    }

    .phone-screen {
        background: #eee;
        border: 1px solid #fff;
        height: 700px;
        width: 100%;
        margin: 0 auto;


        border-radius: 3px;
        overflow: hidden;
        background: url(../../images/pixel-wp.jpg) center top;
        background-size: cover;
    }

    .buttons .down, .buttons .sleep {
        display: block;
        background: #CCC;
        position: absolute;
        border-radius: 2px 0px 0px 2px;
    }

    .buttons .down, .buttons .sleep {
        height: 120px;
        width: 5px;
        left: 418px;
    }

    .buttons .down {
        top: 310px;
    }
    .buttons .sleep {
        left: auto;
        right: -10px;
        top: 190px;
        height:60px;
        border-radius: 0px 2px 2px 0px;
    }
</style>
