<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
.nav-bar{
    width: 100vw;
    height: 44px;
    display: flex;
    text-align: center;
    line-height: 44px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.2);
}
.nav-bar .left,.nav-bar .right{
    width: 60px;
    height: 44px;
}
.nav-bar .center{
    flex: 1;
}
</style>