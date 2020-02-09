<template>
	<div v-if="Object.keys(detailinfo).length !==0" class="goodsinfo">
		<!-- <div class="infodesc clearfix">
			<div class="start"></div>
			<div class="desc">{{detailinfo.desc}}</div>
			<div class="end"></div>
		</div> -->
		<!-- <div class="infokey">{{detailinfo.detailImage[0].key}}</div> -->
		<!-- <div class="infolist">
			<img v-for="(item, index) in detailinfo.detailImage[0].list" :key="index"
			:src="item" @load="imgload"/>
		</div> -->
	</div>
</template>

<script>
	export default {
		name:"detailinfo",
		props:{
			detailinfo:{
				type: Object,
				default(){
					return []
				}
			}
		},
		methods:{
			imgload(){
				this.$emit('imageload')
			}
		}
	}
</script>

<style scoped="scoped">
	.goodsinfo{
		margin: 20px 8px;
	}
	.infolist img{
		width: 400px;
		height: 400px;
	}
	
</style>