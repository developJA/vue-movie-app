<template>
    <div class="content">
        <input type="text" id="inputValue" placeholder="제목, 장르, 배우로 찾아보세요.">
        <button v-on:click="getSearchList">확인</button>
        <div class="tag-box">
            <button class="button button-series">시리즈</button>
            <button class="button button-movie">영화</button>
        </div>
        <div class="tab-box" v-on:click="changeTab">
            <button class="button tab-series on">시리즈</button>
            <button class="button tab-movie">영화</button>
        </div>
        <div class="search-list-wrap" v-if="searchfinish===true">
            <li v-for="listItem in searchs" :key="listItem.item">
                <div>
                    <img :src="`https://image.tmdb.org/t/p/w500/${listItem.poster_path}`" class="lft-img">
                    <template v-if="tabName===tab-movie">
                        {{ listItem.title }}
                    </template>
                    
                </div>
                
            </li>
            <!-- <router-link v-bind:to="`detail/${listItem.id}`">
                <img :src="`https://image.tmdb.org/t/p/w500/${listItem.poster_path}`">
            </router-link> -->
        </div>
    </div>
</template>
  
<script>
    import { fetchSearchMovieInfo, fetchSearchTvInfo } from '../api/index.js';


    export default {
        name: "search",
        data() {
            return {
                searchfinish: false,        // 검색완료시 true로 바뀌고, 이때부터 표 생성
                searchList : [],
                tabName : "",
            }
        },
        created() {
            
        },
        computed : {
            searchs(){
                let result;
                result = this.searchList;
                console.log("computed searchs!!! ", result);
                return result;
            }
            
        },
        methods : {
            getSearchList() {
                let searchStr = document.getElementById('inputValue').value;
                console.log("searchStr   >> ",searchStr);
                let className = document.getElementsByClassName("tab-series")[0].className;
                if(className.includes("on")){

                    this.tabName = "tab-series";

                    fetchSearchTvInfo(searchStr)
                    .then(({ data }) => {
                        this.searchfinish = true;
                        this.searchList = data.results;
                    })
                    .catch(function(error){
                        console.log(error);
                    })
                }else{

                    this.tabName = "tab-movie";

                    fetchSearchMovieInfo(searchStr)
                    .then(({ data }) => {
                        this.searchfinish = true;
                        this.searchList = data.results;
                    })
                    .catch(function(error){
                        console.log(error);
                    })
                    
                }
                
                
            }, 
        }
    }
</script>
  
<style scoped>
    .content {
        padding-top : 80px;
        height : 100%;
        min-height : 600px;
    }
    .search-list-wrap{
        padding: 0px 15px;
        font-size : 12px;
    }
    li{
        list-style-type : none;
    }

    input{
        margin-top : 10px;
        margin-right: 10px;
        height: 20px;
        width: 80%;
    }
    .tag-box{
        margin: 15px;
        text-align: center;
    }
    .tag-box button{
        position: relative;
        overflow: hidden;
        height: 40px;
        border-radius: 30px;
        border: 1px solid #717171;
        width: 150px;
        padding-left: 64px;
        font-size: 16px;
        color: #fff;
        text-align: left;
        transition: width .2s ease-in;
        background: transparent;
        margin-left : 10px;
    }
    .tag-box .button:first-child {
        margin-left: 0px;
    }
    .tab-box {
        text-align: center;
    }
    .tab-box .button{
        position: relative;
        overflow: hidden;
        height: 40px;
        width: 150px;
        font-size: 16px;
        color: #fff;
        transition: width .2s ease-in;
        background: transparent;
        border: none;
    }
    .tab-box .button.on::after{
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        width: 60%;
        height: 0.2rem;
        border-bottom: 0.2rem solid #006ecd;
        margin-left: 21px;
    }
    .lft-img{
        width: 90px;
        height: 50px;
        border-radius: 10px;
    }
    
</style>
  