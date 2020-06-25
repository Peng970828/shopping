<template>
    <div>
        <nav-bar class="nav-bar">
            <div slot="center">购物街</div>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from '../../../components/navbar/NavBar'
    export default {
        name: "HomeNavBar",
        components:{
            NavBar
        }
    }
</script>

<style scoped>
    .nav-bar{
        background-color: #ff5777;
        color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9;
    }
</style>