<template>
    <div class="bottom">
        <div class="select">
            <img @click="allCheckedActive" :class="{active:AllActive}" src="~/assets/img/cart/tick.svg" alt="">
            <span>全选</span>
        </div>
        <div class="totalPrice">
            合计 : ￥{{totalPrice}}
        </div>
        <div class="buy">
            去结算({{checkPrice}})
        </div>
    </div>
</template>

<script>
    export default {
        name: "CartBottom",
        data(){
            return {
                allChecked:true
            }
        },
        methods:{
            allCheckedActive(){
                this.allChecked = !this.allChecked
                this.$store.commit('allCheckedActive',this.allChecked)
            }
        },
        computed:{
            AllActive(){
                return  this.$store.getters.AllActive
            },
            totalPrice(){
                let total = 0
                this.$store.state.cart.forEach( item =>{
                    if (item.checked){
                        total += item.price * item.count
                    }
                })
                return total.toFixed(2)
            },

            checkPrice(){
                let count = 0
                this.$store.state.cart.forEach( item =>{
                    if (item.checked){
                        count ++
                    }
                })
                return count
            }
        }
    }
</script>

<style scoped>
.bottom{
    position: fixed;
    bottom: 49px;
    width: 100vw;
    height: 40px;
    z-index: 999;
    line-height: 40px;
    font-size: 14px;
    color: #646464;
    display: flex;
    background: rgba(0,0,0, .1);
}
.select{
    width: 24%;
    padding-left: 5px;
}
.select img{
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid #cccccc;
    vertical-align: middle;
}
.select span{
    margin-left: 4px;
}
    .totalPrice{
        width: 42%;
    }
    .buy{
        width: 34%;
        background: #ff4400;
        color: white;
        text-align: center;
    }
    .active{
        background: #ff5777;
    }
</style>