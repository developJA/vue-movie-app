<template>
    <div>
        <h2>{{ genreTitle }}</h2>
        <div class="cate-list-wrap">
            <div class="inner-box" v-for="listItem in lists" :key="listItem.item">
                <div class="list-item">
                    <router-link v-bind:to="`detail/${listItem.id}`">
                        <img :src="`https://image.tmdb.org/t/p/w500/${listItem.poster_path}`" class="lft-img">
                        <span>{{ listItem.title }}</span>    
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title : "드라마",
                lists : []
            }
        },
        props : {
            genreTitle : String,
        },
    }
</script>

<style scoped>

</style>