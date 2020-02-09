<template>
  <div id="app">
	  <keep-alive exclude="detail">
		  <router-view></router-view>
	  </keep-alive>
	  
	  <tabbar>
		  <tabbaritem path="/home">
			<img slot="img" src="./assets/images/tabbar/home.svg"/>
			<img slot="imgact" src="./assets/images/tabbar/home_active.svg"/>
			<div slot="text">首页</div>
		  </tabbaritem>
		  <tabbaritem path="/itemize">
			<img slot="img" src="./assets/images/tabbar/category.svg"/>
			<img slot="imgact" src="./assets/images/tabbar/category_active.svg"/>
			<div slot="text">分类</div>
		  </tabbaritem>
		  <tabbaritem path="/shopcar">
		  	<img slot="img" src="./assets/images/tabbar/shopcart.svg"/>
			<img slot="imgact" src="./assets/images/tabbar/shopcart_active.svg"/>
		  	<div slot="text">购物车</div>
		  </tabbaritem>
		  <tabbaritem path="/mine">
		  	<img slot="img" src="./assets/images/tabbar/profile.svg"/>
			<img slot="imgact" src="./assets/images/tabbar/profile_active.svg"/>
		  	<div slot="text">我的</div>
		  </tabbaritem>
	  </tabbar>
  </div>
</template>

<script>
import tabbar from 'components/tabbar.vue'
import tabbaritem from 'components/tabbaritem.vue'

export default {
  name: 'app',
  components: {
	  tabbar,
	  tabbaritem
  }
}
</script>

<style>
	@import "./assets/css/base.css";
</style>
