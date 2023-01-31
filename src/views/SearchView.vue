<template>
    <div>
        <input type="text" id="inputValue">
        <button v-on:click="getSearchList">확인</button>
        <div class="search-list-wrap">
            <ul>
                <li v-for="listItem in getSearchList" class="post" v-bind:key="listItem.item"></li>
            </ul>
        </div>
    </div>
</template>
  
<script>
    export default {
        name: "search",
        components:	{
        },
        data() {
            return {
                searchList : []
            }
        },
        created() {
            
        },
        computed : {
            // searchList(){
            //     let result;
            //     result = this.$store.state.weeklys.results;
            //     return result;
            // }
            
        },
        methods : {
            getSearchList() {
                let searchStr = document.getElementById('inputValue').value;
                console.log("searchStr   >> ",searchStr);
                this.$store.dispatch("FETCH_SEARCH", searchStr);
                
                return this.$store.dispatch("FETCH_SEARCH", searchStr);
            }
        }
    }
</script>
  
<style scoped>
    input{
        margin-top : 10px;
        margin-right: 10px;
        height: 20px;
    }
</style>
  