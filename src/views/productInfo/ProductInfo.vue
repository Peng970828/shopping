<template>
    <div class="productInfo">
<!--        头部导航-->
        <product-info-nav class="nav"></product-info-nav>
<!--        轮播图-->
        <product-banner :bannerList="bannerList"></product-banner>
<!--        商品详情-->
        <product-info-msg :productInfo="productInfo"></product-info-msg>
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
    import ProductInfoMsg from  './child/ProductInfoMsg'
    export default {
        name: "ProductInfo",
        data(){
            return {
                productID:null, //商品id
                bannerList:[],  //商品详情的轮播图
                productInfo:{}  //商品详情信息
            }
        },
        components:{
            ProductInfoNav,
            ProductBanner,
            ProductInfoMsg
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
                    this.productInfo.title = res.result.itemInfo.title
                    this.productInfo.price = res.result.itemInfo.price
                    this.productInfo.oldPrice = res.result.itemInfo.oldPrice
                    this.productInfo.discountDesc = res.result.itemInfo.discountDesc
                    this.productInfo.columns = res.result.columns
                    this.productInfo.services = res.result.shopInfo.services
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