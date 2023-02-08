<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="listItem in getList" class="post" v-bind:key="listItem.item">
        <img :src="`https://image.tmdb.org/t/p/w500/${listItem.poster_path}`">
          
        <router-link v-bind:to="`detail/${listItem.id}`"><p>{{ listItem.title || listItem.name }}</p></router-link>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
    import { Swiper, SwiperSlide } from "vue-awesome-swiper";
    import "swiper/css/swiper.css";

    export default {
        name: "slider",
        components:	{
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                swiperOption: {
                    slidesPerView: 3, 
                    spaceBetween: 30, 
                    loop: true, 
                    // pagination: { 
                    //     el: '.swiper-pagination', 
                    //     clickable: true 
                    // }, 
                    navigation: { 
                        nextEl: '.swiper-button-next', 
                        prevEl: '.swiper-button-prev' 
                    } 
                },
                list : []
            }
        },
        created() {
            console.log("this   ", this);
            this.$store.dispatch("FETCH_DAILY");
            this.list = this.$store.state.dailys;
            console.log(this.list);
        },
        computed : {
            getList(){
                let result;
                result = this.$store.state.dailys.results;
                console.log("result            ",  result);
                return result;
            }
            
        }
    }
</script>

<style>
    .swiper{
        min-height : 350px;
    }
    .swiper-pagination .swiper-pagination-bullet {
        background-color: #eee !important;
    }
    .swiper-pagination.swiper-pagination-bullets {
        bottom: 0px !important;
    }
</style>