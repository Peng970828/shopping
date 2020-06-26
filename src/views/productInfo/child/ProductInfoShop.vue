<template>
    <div class="shop">
        <div class="name">
            <img :src="shopInfo.shopLogo" alt="">
            <span>{{shopInfo.name}}</span>
        </div>
        <div class="detail">
            <div class="left">
                <div class="cSells">
                    <div class="count">{{shopInfo.cSells | cSellsCount}}</div>
                    <div class="txt">总销量</div>
                </div>
                <div class="cGoods">
                    <div class="count">{{shopInfo.cGoods}}</div>
                    <div class="txt">全部宝贝</div>
                </div>
            </div>
            <div class="right">
                <table v-for="(item,index) in shopInfo.score" :key="index">
                    <tr>
                        <td>{{item.name}}</td>
                        <td class="lowColor" :class="{highColor:item.isBetter}">{{item.score}}</td>
                        <td class="lowBg" :class="{highBg:item.isBetter}">{{item.isBetter ? "高" : "低"}}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="intoShop">
            <a :href="shopInfo.shopUrl">进店逛逛</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductInfoShop",
        props:{
            shopInfo:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        filters:{
            cSellsCount(val){
                return val > 10000 ? (val/10000).toFixed(2) + '万' : val
            }
        }
    }
</script>

<style scoped>
.name{
    padding: 20px;
}
.name img{
    width: 50px;
    height: 50px;
    border: 1px solid #666666;
    border-radius: 50%;
    vertical-align: middle;
}
.name span{
    padding-left: 10px;
    font-weight: bold;
}
.detail{
    display: flex;
    padding: 20px 10px;
}
.detail .left,.detail .right{
    flex: 1;
}
.detail .left{
    display: flex;
    height: 40px;
}
.detail .left .cSells,.detail .left .cGoods{
    flex: 1;
    text-align: center;
    line-height: 20px;
}
.detail .left .cGoods{
    border-right: 1px solid rgba(100,100,100, .2);
}
.detail .left .count{
    color: #666666;
}
.detail .left .txt{
    font-size: 13px;
}
.detail .right{
    text-align: center;
}
.detail .right table{
    padding: 0 20px ;
    font-size: 13px;
}
.detail .right table td{
    padding-left: 5px;
}
.detail .right table .lowColor{
    color: yellowgreen;
}
.detail .right table .lowBg{
    color: white;
    background: yellowgreen;
    padding: 1px 3px;
}
.highColor{
    color: red !important;
}
.highBg{
    background: red !important;
}
.intoShop{
    text-align: center;
    padding-top: 20px;
}
.intoShop a{
    padding: 10px 70px;
    color: #ffffff;
    background: #999999;
    border-radius: 10px;
}
</style>