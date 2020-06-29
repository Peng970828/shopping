<template>
    <div class="CartNavBar">
        <nav-bar class="nav" v-if="$store.state.cart.length">
            <div slot="center">
                购物车({{$store.state.cart.length}})
            </div>
        </nav-bar>

        <nav-bar class="nav" v-else>
            <div slot="center">
                购物车
            </div>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from '../../../components/navbar/NavBar'
    export default {
        name: "CartNavBar",
        components:{NavBar}
    }
</script>

<style scoped>
.nav{
    background: #ff5777;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}
</style>