<template>
    <div content="Main">
        <div class="item" v-for="(item,index) in Cart" :key="item.iid">
            <div class="checked">
                <img @click="changeCheck(item.iid)" :class="{active:item.checked}" src="~/assets/img/cart/tick.svg" alt="">
            </div>
            <div class="img">
                <img :src="item.img" alt="">
            </div>
            <div class="content">
                <div class="title">{{item.title}}</div>
                <div class="desc">{{item.desc}}</div>
                <div class="bottom">
                    <div class="price">￥{{item.price}}</div>
                    <div class="count">X{{item.count}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CartMain",
        props:{
            Cart:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods:{
            changeCheck(id){
                this.$store.commit('changeCheck',id)
            }
        }
    }
</script>

<style scoped>
.item{
    display: flex;
    padding: 5px;
    border-bottom: 1px solid rgba(0,0,0, .5);
}
.item .checked{
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.item .checked img{
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid #cccccc;
}
    .active{
        background: #ff5777;
    }

.item .img img{
    width: 80px;
    height: 100px;
    border-radius: 5px;
    vertical-align: middle;
}
.content{
    padding: 0 10px;
    overflow: hidden;
}
.content .title,.content .desc{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.content .title{
    margin-top: 4px;
}
.content .desc{
    margin-top: 15px;
    font-size: 12px;
    color: #666666;
}
.content .bottom{
    display: flex;
    margin-top: 15px;
    font-size: 14px;
    justify-content: space-between;
}
.content .bottom .price{
    color: #ff4500;
}
</style>