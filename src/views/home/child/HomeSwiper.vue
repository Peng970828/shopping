<template>
    <div>
        <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(item,index) in bannerList">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                </a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
        name: "HomeSwiper",
        props:{
            bannerList:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        components:{
            Swiper,
            SwiperSlide
        },
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
        }
    }
</script>

<style scoped>




    .swiper img{
        width: 100%;
        height: 100%;
    }
</style>