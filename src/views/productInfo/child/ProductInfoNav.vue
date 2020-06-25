<template>
    <div>
        <nav-bar>
            <div slot="left" class="back" @click="$router.back()">
                <img src="~assets/img/common/back.svg" >
            </div>
            <div slot="center">详情页</div>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from '../../../components/navbar/NavBar'
    export default {
        name: "ProductInfoNav",
        components:{NavBar}
    }
</script>

<style scoped>
    .back img{
        margin-top: 10px;
    }
</style>