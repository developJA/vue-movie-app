<template>
    
    <div>
        <tab-header></tab-header>

        <template v-if="videoUrl">
          <iframe class="detail-video" v-bind:src="videoUrl" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </template>
        <template v-else>
          <img class="detail-video" v-bind:src="imgUrl" />
        </template>
        <p class="ttl">{{detailInfo.title}}</p>
        <div class="top-sub-ttl">
          <span><i class="fa fa-star"></i> {{detailInfo.vote_average}}점 | </span>
          <span><img :src="require(`../assets/img/${adultImg}`)"/> | </span>
          <span>{{detailInfo.genres[0].name}}</span>
        </div>
        <p class="top-sub-ttl bold">한국어 자막 순차 지원</p>
        <p class="overview">{{detailInfo.overview}}</p>
        <!-- <p style="font-size: small;">영화사 : {{ companies }}</p> -->
        <!-- <ul>
            <li v-for="company in detailInfo.production_companies" class="no" v-bind:key="company.item">
                <p>영화사 : {{company.name}}</p>
            </li>
        </ul> -->

        <div class="list-content">
          <div class="top-tab">
            <button>관련영상</button>
          </div>
          <ul>
            <li v-for="listItem in recommends" class="no" v-bind:key="listItem.item">
                <img :src="`https://image.tmdb.org/t/p/w500/${listItem.poster_path}`">
                <span>영화명 : {{listItem.title}}</span>
            </li>
          </ul>
          
        </div>
        
        
    </div>
</template>
    
<script>
import TabHeader from '../components/TabHeader.vue'
import { fetchDetailInfo, fetchMovieVideo, fetchSimilarMovieList } from '../api/index.js';

export default {
  name: 'detailInfo',
  components: {
    TabHeader,
  },
  data: function () {
    return {
      detailInfo: [],
      videoUrl: '',
      imgUrl: '',
      adultImg: '',
      companies: "",
      recommends : [],
    }
  },
  created: function () {

    fetchDetailInfo(this.$route.params.id)
    .then((response)=> {
        console.log('### response: ' + JSON.stringify(response));
        this.detailInfo = response.data;
        this.getYoutubeVideo(response.data.id);
        this.getRecommendVideo(response.data.id);
        this.imgUrl = "https://image.tmdb.org/t/p/w500/" + response.data.poster_path;
        this.adultImg = response.data.adult == true ? 'number-19.png' : 'number-15.png';
        let _companyArr = response.data.production_companies.map(x => x.name);
        console.log("_companyArr   : ",_companyArr);
        this.companies = _companyArr.join(", ");
    })
    .catch((error) =>{
        console.log(error);
    })

  },
  methods :{
    getYoutubeVideo(id) {
      fetchMovieVideo(id)
      .then((response)=> {
          console.log('getYoutubeVideo response: ' + JSON.stringify(response));
          if(response.data.results.length > 0){
            this.videoUrl = "https://www.youtube.com/embed/" + response.data.results[0].key + "?autoplay=1";
          }
          
      })
      .catch((error) =>{
          console.log(error);
      })
    },
    getRecommendVideo(id) {
      fetchSimilarMovieList(id)
      .then((response)=> {
          console.log('getRecommendVideo response: ' + JSON.stringify(response));
          if(response.data.results.length > 0){
            this.recommends = response.data.results;
          }
          
      })
      .catch((error) =>{
          console.log(error);
      })
    }
  },
  

}
</script>

<style scoped>
  img.detail-video{
    width: 100%;
    height: 240px;
  }
  .detail-video {
    width: 100%;
    height: 300px;
    border: none;
  }
  .ttl{
    font-weight: 800;
    font-size: large;
    margin-bottom:0px !important;
  }
  .top-sub-ttl{
    font-size: small;
  }
  .bold{
    font-weight: 800;
  }
  .overview{
    font-size: small;
    color: rgb(190, 190, 190);
  }
  .top-sub-ttl img{
    width: 15px;
    height: 15px;
    vertical-align: middle;
  }
  ul {
    list-style: none;
  }
  .list-content .top-tab{
    text-align: center;
  }
  .list-content .top-tab > button{
    width: 90%;
    height: 40px;
    border: none;
    background:transparent;
    color: #fff;
    border-bottom: 0.2rem solid #006ecd;
    font-weight: 700;
    text-align: center;
  }
  .list-content ul{
    list-style: none;
    /* margin-left: 0; */
    padding-left: 15px;
  }
  .list-content ul img{
    width: 100px;
    height: 100px;
  }
  .list-content li span{
    font-size:small;
  }
</style>