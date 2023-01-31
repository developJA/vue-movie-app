<template>
	<header>
		<div class="menuWrap">
			<div><img src="../assets/img/icon-wavve.png"></div>
    		<router-link to="/search">영화검색</router-link>
		</div>
	</header>
</template>

<script>
export default {
	
}
</script>

<style scoped>
header{width:100%; text-align:center; position:relative; height:120px; border-bottom:1px solid #35495e}
header .menuWrap{display:block; clear:both; content:''; position:absolute; top:20px; right:50px;}
header .menuWrap a{padding:10px 20px; list-style:none;}
header img{width:110px;}

a{text-decoration:none; color:#333;}
</style>