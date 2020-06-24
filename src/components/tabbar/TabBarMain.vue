<template>
    <div>
        <tab-bar>
            <tab-bar-item path="/home">
                <img slot="item-img" src="~assets/img/tabbar/home.svg" alt="">
                <img slot="item-img-active" src="~assets/img/tabbar/home_active.svg" alt="">
                <div slot="item-text">首页</div>
            </tab-bar-item>
            <tab-bar-item path="/category">
                <img slot="item-img" src="~assets/img/tabbar/category.svg" alt="">
                <img slot="item-img-active" src="~assets/img/tabbar/category_active.svg" alt="">
                <div slot="item-text">分类</div>
            </tab-bar-item>
            <tab-bar-item path="/cart">
                <img slot="item-img" src="~assets/img/tabbar/cart.svg" alt="">
                <img slot="item-img-active" src="~assets/img/tabbar/cart_active.svg" alt="">
                <div slot="item-text">购物车</div>
            </tab-bar-item>
            <tab-bar-item path="/user">
                <img slot="item-img" src="~assets/img/tabbar/profile.svg" alt="">
                <img slot="item-img-active" src="~assets/img/tabbar/profile_active.svg" alt="">
                <div slot="item-text">我的</div>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
  import TabBar from "./TabBar";
  import TabBarItem from "./TabBarItem";
  export default {
    name: "TabBarMain",
    components:{
      TabBar,TabBarItem
    }
  }
</script>

<style scoped>

</style>
