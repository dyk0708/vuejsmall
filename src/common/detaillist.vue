<template>
	<div class="goods">
		<detailitem v-for="item in rec" :detailitem="item"></detailitem>
	</div>
</template>

<script>
	import detailitem from './detailitem.vue'
	
	export default{
		name:"detaillist",
		components:{
			detailitem
		},
		props:{
			rec:{
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
