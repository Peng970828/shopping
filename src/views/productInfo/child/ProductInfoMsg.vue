<template>
    <div class="Info">
        <h3 class="title">{{productInfo.title}}</h3>
        <div class="price">
            <span class="nprice">{{productInfo.price}}</span>
            <span class="oprice">{{productInfo.oldPrice}}</span>
            <span class="discount">{{productInfo.discountDesc}}</span>
        </div>
        <div class="sale">
            <span v-for="(item,index) in productInfo.columns" :key="index">{{item}}</span>
        </div>
        <div class="services">
            <div class="item" v-for="(item,index) in productInfo.services" :key="index">
                <img :src="item.icon">
                <span>{{item.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductInfoMsg",
        props:{
            productInfo:{
                type:Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
.title{
    font-size: 18px;
    color: #333333;
    padding: 0 5px;
}
.price{
    padding: 10px  0;

}
.price .nprice{
    font-size: 16px;
    color: #ff5777;
}
.price .oprice{
    font-size: 13px;
    color: #666666;
    margin: 0 8px;
    text-decoration: line-through;
}
.price .discount{
    font-size: 13px;
    background: red;
    color: #fff;
    border-radius: 4px;
    padding: 2px;
}
.sale{
    display: flex;
    border-bottom:1px solid rgba(0,0,0, .6) ;
    padding: 5px 0;
}
.sale span{
    flex: 1;
    color: #666666;
}
.services{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-bottom:5px solid rgba(100,100,100, .3) ;
}
.services .item{
    width: 33.33%;
    font-size: 13px;
    line-height: 30px;
}
.services img{
    width: 15px;
    height: 15px;
    vertical-align: middle;
}

</style>