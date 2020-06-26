<template>
    <div class="show">
        <div class="txt">图片展示</div>
        <div class="img" v-for="(item,index) in productShow" :key="index">
            <img :src="item" alt="" @load="imgLoad">
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductShow",
        props:{
            productShow:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods:{
            imgLoad(){
                this.$emit('imgFinish')
            }
        }
    }
</script>

<style scoped>
.txt{
    line-height: 50px;
    text-align: center;
    margin: 20px 0;
    border-top: 8px solid rgba(100,100,100, .3);
    font-size: 18px;
    font-weight: bold;
}
.img{
    width: 100vw;
}
.img img{
    width: 100%;
}
</style>