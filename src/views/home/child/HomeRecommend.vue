<template>
    <div class="recommend">
        <div class="item" v-for="(item,index) in recommendList">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div class="title">{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        props:{
            recommendList:{
                type:Array,
                default(){
                    return []
                }
            }
        },
    }
</script>

<style scoped>
.recommend{
    width: 100vw;
    display: flex;
    padding: 10px 0 20px 0;
    border-bottom: 8px solid rgba(100,100,100,.2);
}
.recommend .item{
    flex: 1;
    text-align: center;
    font-size: 13px;
    color: #666666;
}
.recommend .item img{
    width: 80px;
    height: 80px;
}
</style>