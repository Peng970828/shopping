<template>
    <div class="home">
<!--    头部导航-->
        <home-nav-bar></home-nav-bar>
<!--      轮播图-->
        <home-swiper :bannerList="bannerList"></home-swiper>
<!--      推荐-->
        <home-recommend :recommendList="recommendList"></home-recommend>
<!--        流行-->
        <home-fashion></home-fashion>

<!--        tab选择-->
        <home-tab-contorl @tabClick="tabClick" :tabContorlList="['流行','新款','精选']"></home-tab-contorl>
<!--        数据展示-->
        <home-msg-show :showList="goods[tabContorlList].list"></home-msg-show>
        <ul>
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
    import HomeNavBar from './child/HomeNavBar'
    import HomeSwiper from  './child/HomeSwiper'
    import HomeRecommend from  './child/HomeRecommend'
    import HomeFashion from './child/HomeFashion'
    import HomeTabContorl from  './child/HomeTabContorl'
    import HomeMsgShow from './child/HomeMsgShow'

    export default {
        name: "Home",
        components:{
            HomeNavBar,
            HomeSwiper,
            HomeRecommend,
            HomeFashion,
            HomeTabContorl,
            HomeMsgShow
        },
        data(){
            return{
                bannerList: [], //轮播图数组
                recommendList: [],//推荐的数据
                goods: {
                    pop: {page: 0, list: []},
                    new: {page: 0, list: []},
                    sell: {page: 0, list: []}
                },
                tabContorlList: "pop"
            }
        },
        created() {
            this.getBannerAndRecommend()
            this.getGoodsData('pop')
            this.getGoodsData('new')
            this.getGoodsData('sell')
        },
        methods:{
            tabClick(val){
                switch (val) {
                    case 0:this.tabContorlList = 'pop'
                        break;
                    case 1:this.tabContorlList = 'new'
                        break;
                    case 2:this.tabContorlList = 'sell'
                }
            },
            //获取轮播图和推荐数据
            getBannerAndRecommend(){
                this.request({
                    url:this.url.multidata,
                    methods:'get'
                }).then(res =>{
                    this.bannerList = res.data.banner.list //给轮播图赋值
                    this.recommendList = res.data.recommend.list
                })
            },
            //获取商品展示的数据
            getGoodsData(type){
                this.request({
                    url:this.url.goodsData,
                    method:'get',
                    params:{
                        type:type,
                        page:1
                    }
                }).then(res => {
                    let data = res.data.list
                    data.forEach(item => {
                        this.goods[type].list.push(item)
                    })
                })
            },
        },
    }
</script>

<style scoped>

</style>