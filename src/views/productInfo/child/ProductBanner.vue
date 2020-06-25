<template>
    <div>
        <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(item,index) in bannerList" :key="index">
                <img :src="item" alt="" >
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
        name: "ProductBanner",
        components:{Swiper,SwiperSlide},
        data(){
            return{
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    loop:true,
                    autoplay:{
                        delay:2000
                    }

                    // Some Swiper option/callback...
                }
            }
        },
        props:{
            bannerList:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .swiper{
        width: 100vw;
        height: 300px;
        margin-top: 44px;
    }
    .swiper img{
        width: 100%;
    }
</style>