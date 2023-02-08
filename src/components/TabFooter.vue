<template>
	<footer>
		<div class="menuWrap">
			<router-link to="/home" class="footer-home">홈</router-link>
    		<router-link to="/category" class="footer-category">카테고리</router-link>
			<router-link to="/search" class="footer-search">검색</router-link>
    		<router-link to="/my" class="footer-my">MY</router-link>
		</div>
	</footer>
</template>

<script>
export default {
	
}
</script>

<style scoped>
footer{
	width:100%; 
	text-align:center; 
	position:fixed; 
	border-bottom:1px solid #35495e;
	z-index: 999;
	bottom : 0;
	background-color: #000;
}
footer .menuWrap{
	position: relative;
    display: block;
    top: 20px;
    margin: 0 auto;
    height: 80px;
}
footer .menuWrap a{
	float: left;
    padding: 10px 20px;
    list-style: none;
    position: relative;
    width: 24%;
    box-sizing: border-box;
	font-size: 9px;
	background-position: center top;
	line-height: 6;
}

footer .footer-home{
	background-image: url("../assets/img/icon-home.png");
	background-size: 24px auto;
	background-repeat: no-repeat;
}
footer .footer-category{
	background-image: url("../assets/img/icon-menu.png");
	background-size: 27px auto;
	background-repeat: no-repeat;
}
footer .footer-search{
	background-image: url("../assets/img/icon-search.png");
	background-size: 24px auto;
	background-repeat: no-repeat;
}
footer .footer-my{
	background-image: url("../assets/img/icon-user.png");
	background-size: 24px auto;
	background-repeat: no-repeat;
}
</style>