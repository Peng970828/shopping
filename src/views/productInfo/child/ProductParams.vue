<template>
    <div class="params">
        <table class="rule">
            <tr class="ruleItem" v-for="(item,index) in productParams.rule" :key="index">
                <td v-for="(item1,index1) in item" :key="index1">
                    {{item1}}
                </td>
            </tr>
        </table>
        <table class="info">
            <tr v-for="(item,index) in productParams.info" :key="index">
                <td class="key">{{item.key}}</td>
                <td class="value">{{item.value}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "ProductParams",
        props:{
            productParams:{
                type:Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
.params{
    box-sizing: border-box;
    font-size: 14px;
    padding: 20px 15px;
}
.params tr{
    height: 40px;
}
.params td{
    border-bottom: 1px solid rgba(100,100,100,.3);
}
.params .rule{
    width: 100%;
}
.params .rule tr{
    line-height: 40px;
}
.params .rule .ruleItem{
    display: flex
}
.params .rule .ruleItem td{
    flex: 1;
}
.key{
    width: 95px;
}
.value{
    color: #ff5777;
}
</style>