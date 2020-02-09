<template>
	<div class="imf" v-if="Object.keys(goods).length !==0">	<!-- 有数据的时候才展示*-->
		<div class="imftitle">{{goods.title}}</div>
		<div class="imfprice">
			<span class="new">{{goods.newPrice}}</span>
			<span class="old">{{goods.oldPrice}}</span>
			<span v-if="goods.discount" class="discount">{{goods.discount}}</span>
		</div>
		<div class="imfother">
			<span class="left">{{goods.columns[0]}}</span>
			<span class="center">{{goods.columns[1]}}</span>
			<span class="right">{{goods.services[goods.services.length-1].name}}</span>
		</div>
		<div class="imfservice">
			<span class="imfserviceitem" v-for="index in goods.services.length-1"
			:key="index">
				<img :src="goods.services[index-1].icon"/>
				<span>{{goods.services[index-1].name}}</span>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:"detailimf",
		props:{
			goods:{
				type: Object,
				default(){
					return {}
				}
			}
		}
	}
</script>

<style>
	.imf{
		margin-top: 15px;
		padding: 0 8px;
		color: #999;
		border-bottom: 5px solid #f2f5f8;
	}
	.imftitle{
		color: #222;
	}
	
	.imfprice{
		margin-top: 10px;
	}
	
	.imfprice .new{
		font-size: 24px;
		color: var(--color-high-text);
	}
	.imfprice .old{
		text-decoration: line-through;
	}
	.imfprice .discount{
		font-size: 12px;
		padding: 2px 5px;
		color: #fff;
		background-color: var(--color-high-text);
		border-radius: 8px;
		margin-left: 5px;
		position: relative;
		top: -8px;
	}
	.imfother{
		margin-top: 15px;
		line-height: 30px;
		display: flex;
		font-size: 13px;
		border-bottom: 1px solid rgba(100,100,100,.1);
	}
	.imfother span{
		flex: 1;
	}
	.imfother .left{
		text-align: left;
	}
	.imfother .center{
		text-align: center;
	}
	.imfother .right{
		text-align: right;
	}
	.imfservice {
		display: flex;
		justify-content: space-between;
		line-height: 60px;
	}
	.imfserviceitem img{
		width: 14px;
		height: 14px;
		position: relative;
		top: 2px;
	}
	.imfserviceitem span{
		font-size: 13px;
		color: #333;
	}
</style>
