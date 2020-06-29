<template>
    <div class="productInfo">
<!--        头部导航-->
        <product-info-nav class="nav"></product-info-nav>
        <div class="wrap" ref="wrap">
            <div class="content">
                <!--        轮播图-->
                <product-banner @bannerFinish="bannerFinish" :bannerList="bannerList"></product-banner>
                <!--        商品详情-->
                <product-info-msg :productInfo="productInfo"></product-info-msg>
                <!-- 商家详情-->
                <product-info-shop :shopInfo="shopInfo"></product-info-shop>
                <!--图片展示-->
                <product-show @imgFinish="imgFinish" :productShow="productShow"></product-show>
                <!--商品参数-->
                <product-params :productParams="productParams"></product-params>
            </div>
        </div>
        <!--底部Bar-->
        <product-bottom @addCart="addCart"></product-bottom>
    </div>
</template>

<script>
    import ProductInfoNav from './child/ProductInfoNav'
    import ProductBanner from './child/ProductBanner'
    import ProductInfoMsg from  './child/ProductInfoMsg'
    import ProductInfoShop from './child/ProductInfoShop'
    import ProductShow from './child/ProductShow'
    import ProductParams from './child/ProductParams'
    import ProductBottom from  './child/ProductBottom'
    import BScroll from 'better-scroll'
    export default {
        name: "ProductInfo",
        data(){
            return {
                productID:null, //商品id
                bannerList:[],  //商品详情的轮播图
                productInfo:{
                    title:'',
                    price:0,
                    oldPrice:0,
                    discountDesc:'',
                    columns:[],
                    services:[],

                },  //商品详情信息
                shopInfo:{
                    shopLogo:'',
                    name:'',
                    cSells:0,
                    cGoods:0,
                    shopUrl:'',
                    score:[],
                    lowNowPrice:'',
                    desc:''
                }, //商家信息详情
                productShow:[], //商品图片展示
                productParams:{
                    info:[],
                    rule:[]
                }, //商品参数
                bscroll:null,
            }
        },
        components:{
            ProductInfoNav,
            ProductBanner,
            ProductInfoMsg,
            ProductInfoShop,
            ProductShow,
            ProductParams,
            ProductBottom,
            BScroll
        },
        created() {
            this.productID = this.$route.query.iid;
            this.getProductInfo()
        },
        methods:{
            //加入购物车
            addCart(){
                this.$toast('加入购物车成功')

                let obj = {
                    iid:this.productID,
                    img:this.bannerList[0],
                    title:this.productInfo.title,
                    price:this.shopInfo.lowNowPrice,
                    desc:this.shopInfo.desc,
                    checked:true,
                    count:1
                }
                this.$store.commit('addCartData',obj)
            },

            getProductInfo(){
                this.request({
                    url:this.url.productData,
                    method:'get',
                    params:{
                        iid:this.productID
                    }
                }).then( res =>{
                    console.log(res);
                    //商品详情赋值
                    this.bannerList = res.result.itemInfo.topImages;
                    this.productInfo.title = res.result.itemInfo.title;
                    this.productInfo.price = res.result.itemInfo.price;
                    this.productInfo.oldPrice = res.result.itemInfo.oldPrice;
                    this.productInfo.discountDesc = res.result.itemInfo.discountDesc;
                    this.productInfo.columns = res.result.columns;
                    this.productInfo.services = res.result.shopInfo.services;
                    this.shopInfo.lowNowPrice = res.result.itemInfo.lowNowPrice;
                    this.shopInfo.desc = res.result.itemInfo.desc;
                    //商家信息赋值
                    this.shopInfo.shopLogo = res.result.shopInfo.shopLogo;
                    this.shopInfo.name = res.result.shopInfo.name;
                    this.shopInfo.cSells = res.result.shopInfo.cSells;
                    this.shopInfo.cGoods = res.result.shopInfo.cGoods;
                    this.shopInfo.shopUrl = res.result.shopInfo.shopUrl;
                    this.shopInfo.score = res.result.shopInfo.score;
                    //图片展示赋值
                    this.productShow = res.result.detailInfo.detailImage[0].list;
                    //商品参数赋值
                    this.productParams.info = res.result.itemParams.info.set;
                    this.productParams.rule = res.result.itemParams.rule.tables[0]
                })
            },
            //监听图片加载
            imgFinish(){
                this.bscroll.refresh()
            },
            //监听轮播图片加载
            bannerFinish(){
                this.bscroll.refresh()
            }

        },
        mounted() {
            this.bscroll = new BScroll(this.$refs.wrap)
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
.productInfo{
    position: absolute;
    z-index: 999;
    background: #ffffff;
}
.wrap{
    margin-top: 44px;
    height: calc(100vh - 44px - 58px);
    background: white;
}
</style>