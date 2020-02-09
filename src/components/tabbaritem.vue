<template>
	<div class="tabbaritem" @click="itemclick()">
		<div v-if="!active"><slot name="img"></slot></div>
		<div v-else><slot name="imgact"></slot></div>
		<div :class="{actives:active}"><slot name="text"></slot></div>
	</div>
</template>

<script>
	export default{
		name:"tabbaritem",
		props:{
			path:String
		},
		computed:{
			active(){
				return this.$route.path.indexOf(this.path) !== -1		/*定义活跃状态*/
			}
		},
		methods:{
			itemclick:function(){
				return this.$router.push(this.path)		/*定义点击状态*/
			}
		}
	}
</script>

<style>
	.tabbaritem{
	  flex: 1;
	  text-align: center;
	  height: 49px;
	}
	
	.tabbaritem img{
	  width: 24px;
	  height: 24px;
	}
	
	.actives{
	  color: red;
	}
</style>
