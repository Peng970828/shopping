<template>
    <div class="bottom">
        <div class="left">
            <div class="server">
                <span class="img"></span>
                <span class="text">客服</span>
            </div>
            <div class="shop">
                <span class="img"></span>
                <span class="text">店铺</span>
            </div>
            <div class="like">
                <span class="img"></span>
                <span class="text">收藏</span>
            </div>
        </div>
        <div class="right">
            <div class="addCart" @click="addCart">加入购物车</div>
            <div class="buy">立即购买</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductBottom",
        methods:{
            addCart(){
                this.$emit('addCart')
            }
        }
    }
</script>

<style scoped>
    .bottom {
        height: 58px;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        background: #fff;
        box-shadow: 0 -1px 1px rgba(100,100,100,.2);
    }

    .left {
        width: 53%;
        display: flex;
    }
    .left > div{
        flex: 1;
        text-align: center;
        margin-top: 10px;
    }
    .left .img{
        display: block;
        width: 22px;
        height: 22px;
        background-image: url("~assets/img/detail/detail_bottom.png");
        background-repeat: no-repeat;
        background-size: 22px 150px;
        margin: auto;
    }
    .left .text{
        font-size: 13px;
    }
    .left .server .img{
        background-position: 0 -53px;
    }
    .left .shop .img{
        background-position: 0 -98px;
    }
    .right {
        width: 47%;
        font-size: 13px;
        text-align: center;

    }

    .right{
        display: flex;
    }
    .right div{
        flex: 1;
        height: 30px;
        margin-top: 14px;
        line-height: 30px;
        color: #fff;
    }
    .right div.addCart{
        background: #ff8a00;
        border-radius:10px 0 0 10px ;
    }
    .right div.buy{
        background: #ff4400;
        border-radius:0 10px 10px 0;
    }
</style>