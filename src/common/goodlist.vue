<template>
	<div class="goods">
		<goodsitem v-for="item in goods" :goodsitem="item"></goodsitem>
	</div>
</template>

<script>
	import goodsitem from './goodsitem.vue'
	
	export default{
		name:"goodlist",
		components:{
			goodsitem
		},
		props:{
			goods:{
				type: Array,
				default(){
					return[]
				}
			}
		},
	}
</script>

<style>
	.goods{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
</style>
