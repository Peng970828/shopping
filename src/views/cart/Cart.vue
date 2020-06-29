<template>
    <div class="Cart">
<!--        头部导航-->
        <cart-nav-bar></cart-nav-bar>
<!--中间滚动区域-->
        <div class="content">
            <cart-main :Cart="Cart"></cart-main>
        </div>
<!--        底部结算区域-->
        <cart-bottom></cart-bottom>
    </div>
</template>

<script>
    import CartNavBar from './child/CartNavBar'
    import CartMain from './child/CartMain'
    import CartBottom from './child/CartBottom'
    export default {
        name: "Cart",
        data(){
            return {
             Cart:null
            }
        },
        components:{CartNavBar,CartMain,CartBottom},
        created() {
            this.Cart = this.$store.state.cart
        }
    }
</script>

<style scoped>
.content{
    height: calc(100vh - 93px - 40px);
    margin-top: 44px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
}
</style>