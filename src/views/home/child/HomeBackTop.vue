<template>
    <div class="backTop">
        <img src="~assets/img/common/top.png" alt="" >
    </div>
</template>

<script>
    export default {
        name: "HomeBackTop",
    }
</script>

<style scoped>
.backTop{
    position: fixed;
    bottom: 50px;
    right: 20px;
    z-index: 9;
}
.backTop img{
    width: 48px;
    height: 48px;
    opacity: .6;
}
</style>