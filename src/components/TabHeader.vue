<template>
	<header>
		<div class="menuWrap">
			<div class="logo" v-show="logoShow==true">
				<img src="../assets/img/icon-wavve.png">
			</div>
			<div class="close" v-on:click="$router.go(-1)" v-show="logoShow==false">닫기</div>
    		<!-- <router-link to="/search">영화검색</router-link> -->
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {
			logoShow : this.$store.state.global.headerLogoFlag
		}
	},
}
</script>

<style>
/* header{width:100%; text-align:center; position:fixed; height:120px; border-bottom:1px solid #35495e} */
header{
	width:100%; 
	position:fixed; 
	height: 74px;
	z-index: 999;
}
header .menuWrap{
	display:block; 
	clear:both; 
	content:''; 
	position:relative; 
	top:10px; 
	margin:0 15px;
}
header .menuWrap .logo{
	display: inline-block;
	text-decoration:none;
	color:#333;
	line-height: 55px;
}
header .menuWrap .menuWrap a{
	padding:10px 20px; 
	list-style:none;
	position: absolute;
    right: -4px;
}
header .menuWrap img{
	width:110px;
}
header .menuWrap .close{
	background-image: url("../assets/img/icon-close.png");
	background-size: cover;
	width :35px;
	height: 35px;
	background-repeat: no-repeat;
	color: transparent;
    position: absolute;
    display: inline-block;
    right: -1px;
}
</style>