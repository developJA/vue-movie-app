<template>
    <div class="category-section">
        <div v-show="detailShowFlag==false">
            <div class="category-box">
                <p class="box-title">방송</p>
                <div id="divTvCont" class="thumb maxH16">
                    <div class="thumb-item" v-for="listItem in tvList" :key="listItem.item" v-on:click="moveCateDetail(listItem)">
                        <span>{{listItem.name}}</span>
                    </div>
                </div>
                <button id="btnTvMore" class="btn-more" v-on:click="showMore($event)">더보기</button>
            </div>
            <div class="category-box">
                <p class="box-title">영화</p>
                <div id="divMvCont" class="thumb maxH16">
                    <div class="thumb-item" v-for="listItem in movieList" :key="listItem.item" v-on:click="moveCateDetail(listItem)">
                        <span>{{listItem.name}}</span>
                    </div>
                </div>
                <button id="btnMvMore" class="btn-more" v-on:click="showMore($event)">더보기</button>
            </div>
        </div>
        <category-detail-list v-show="detailShowFlag==true" :genreTitle="genreTitle"></category-detail-list>
    </div>
</template>
  
<script>
    import { fetchGenreList } from '../api/index.js';
    import CategoryDetailList from '../components/category/CategoryDetailList.vue'

    export default {
        components : {
            CategoryDetailList
        },  
        data() {
            return {
                tvList : [],
                movieList : [],
                detailShowFlag : false,
                genreTitle : "",
            }
        },
        created() {
            this.getTvCategoryList();
            this.getMovieCategoryList();
        },
        methods : {
            getTvCategoryList() {
                fetchGenreList("tv")
                .then(({ data }) => {
                    console.log(data);
                    this.tvList = data.genres;
                })
                .catch(function(error){
                    console.log(error);
                })
            },
            getMovieCategoryList() {
                fetchGenreList("movie")
                .then(({ data }) => {
                    console.log(data);
                    this.movieList = data.genres;
                })
                .catch(function(error){
                    console.log(error);
                })
            },
            showMore(e) {
                console.log("e   >>> ",e);
                let className = [];
                if(e.target.id == "btnMvMore"){
                    className = document.getElementById("divMvCont").className;
                    if(className.includes("maxH16")){
                        document.getElementById("divMvCont").classList.remove("maxH16");
                    }else{
                        document.getElementById("divMvCont").classList.add("maxH16");
                    }
                }else if(e.target.id == "btnTvMore"){
                    className = document.getElementById("divTvCont").className;
                    if(className.includes("maxH16")){
                        document.getElementById("divTvCont").classList.remove("maxH16");
                    }else{
                        document.getElementById("divTvCont").classList.add("maxH16");
                    }
                }
            },
            moveCateDetail(obj){
                console.log("moveCateDetail!!",obj);
                this.genreTitle = obj.name;
                this.detailShowFlag = true;
            }
        }
    }
</script>
  
<style>
    .category-section {
        padding: 0px 10px;
    }
    .category-section .category-box {
        min-height: 200px;
    }
    .category-section .box-title{
        font-weight: 900;
        font-size: 20px;
        margin-bottom: 0px;
    }
    .category-section .category-box .thumb{
        margin-top: 5px;
        padding: 3px;
        display: flex;
        flex-wrap: wrap;
        list-style:none;
        width: 100%;
        overflow: hidden;
    }
    .category-section .category-box .thumb.maxH16{
        max-height: 160px;
    }
    .category-section .category-box .btn-more{
        width: 100%;
        margin: 10px 0px;
    }
    .category-section .category-box .thumb-item{
        width: 80px;
        height: 80px;
        font-size: 12px;
        text-align: center;
        margin: 2px;
        background-color:rgb(25, 25, 25)    
    }
    .category-section .thumb-item > span{
        position: relative;
        top: 30%;
    }
</style>
  