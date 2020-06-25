<template>
    <div class="productInfo">
<!--        头部导航-->
        <product-info-nav class="nav"></product-info-nav>
<!--        轮播图-->
        <product-banner :bannerList="bannerList"></product-banner>
        <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </ul>
    </div>
</template>

<script>
    import ProductInfoNav from './child/ProductInfoNav'
    import ProductBanner from './child/ProductBanner'
    export default {
        name: "ProductInfo",
        data(){
            return {
                productID:null, //商品id
                bannerList:[]  //商品详情的轮播图
            }
        },
        components:{
            ProductInfoNav,
            ProductBanner
        },
        created() {
            this.productID = this.$route.query.iid
            this.getProductInfo()
        },
        methods:{
            getProductInfo(){
                this.request({
                    url:this.url.productData,
                    method:'get',
                    params:{
                        iid:this.productID
                    }
                }).then( res =>{
                    console.log(res);
                    this.bannerList = res.result.itemInfo.topImages
                })
            }
        }
    }
</script>

<style scoped>
.nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    background: #ffffff;
}
</style>