<template>
    <div class="tab">
        <div class="item" :class="{active:index === activeIndex}" v-for="(item,index) in tabContorlList" @click="tabSelect(index)">
            <span>
                {{item}}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeTabContorl",
        data(){
            return{
                activeIndex:0,
            }
        },
        props:{
            tabContorlList:{
                type:Array,
                default(){
                    return ['流行','新款','精选']
                }
            }
        },
        methods:{
            tabSelect(index){
                this.activeIndex = index
                this.$emit("tabClick",index)
            }
        }
    }
</script>

<style scoped>
.tab{
    width: 100vw;
    height: 40px;
    display: flex;
    line-height: 40px;
}
.tab .item{
    flex: 1;
    text-align: center;
}
.tab .item span{
    padding: 5px;
    font-size: 18px;
}
.active span{
    border-bottom: 3px solid #ff5777;
    color: #ff5777;
}
</style>