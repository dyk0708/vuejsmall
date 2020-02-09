<template>
	<div class="goodsitem">
		<img :src="detailitem.image" @load="imgload" @click="goodsclick"/> 		
		<div class="goodsinfo">
			<p>{{detailitem.title}}</p>
			<span class="price">{{detailitem.price}}</span>
			<span class="collect">{{detailitem.cfav}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"detailitem",
		props:{
			detailitem:{
				type: Object,
				default() {
					return[]
				}
			}
		},
		methods:{
			//发射事件总线监听图片是否加载完成，用于处理better-scroll的bug
			imgload(){
				this.$bus.$emit('imgload')
			},
			//获取点击的商品信息的iid用于之后显示详情页
			goodsclick(){
				this.$router.push('/detail/' + this.goodsitem.iid)
			}
		}
	}
</script>

<style>
	.goodsitem {
		padding-bottom:  40px;
		position: relative;
		width: 48%;
	}
	
	.goodsitem img{
		width: 100%;
		border-radius: 5px;
	}
	
	.goodsinfo {
		font-size: 12px;
		position: absolute;
		bottom: 5px;
		left: 0;
		right: 0;
		overflow: hidden;
		text-align: center;
	}
	
	.goodsinfo p {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-bottom: 3px;
	}
	
	.goodsinfo .price{
		color: var(--color-high-text);
		margin-right: 20px;
	}
	
	.goodsinfo .collect {
		position: relative;
	}
	
	.goodsinfo .collect::before {
		content: '';
		position: absolute;
		left: -15px;
		top: -1px;
		width: 14px;
		height: 14px;
		background: url(../assets/images/common/collect.svg) 0 0/13px 13px;
	}
</style>