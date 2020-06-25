<template>
    <div class="goods">
        <div class="item" v-for="(item,index) in showList">
            <img :src="item.show.img" alt="" @load="imgLoad()">
            <div class="bottom">
                <p class="title">{{item.title}}</p>
                <span class="price">￥{{item.price}}</span>
                <span class="like">{{item.cfav | formatcafv}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeMsgShow",
        props:{
            showList:{
                type:Array,
                default(){
                    return
                }
            },
            bscroll:{
                type: Object,
                default() {
                    return {};
                }
            }
        },
        methods:{
            imgLoad(){
                this.bscroll.refresh()
            }
        },
        filters:{
            formatcafv(val){
                return val > 10000 ? (val/10000).toFixed(2) + '万' : val
            }
        }
    }
</script>

<style scoped>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.goods .item {
    position: relative;
    box-sizing: border-box;
    width: 48%;
    padding: 5px;
    box-shadow: 0 0 2px rgba(100,100,100 .9);
    margin-top: 10px;
    padding-bottom: 60px;
}
.goods .item img{
    width: 100%;
}
.title{
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #333333;
}
.price{
    margin-left: 20px;
    margin-right: 10px;
    font-size: 14px;
    color: #ff5777;
}
.like{
    font-size: 13px;
    color: #333333;
}
.like::before{
    content: '';
    width: 14px;
    height: 14px;
    display: inline-block;
    background-image: url("~assets/img/common/collect.svg");
    background-size: 100%;
}
.bottom{
    position: absolute;
    width: 100%;
    bottom: 3px;
}

</style>