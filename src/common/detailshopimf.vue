<template>
	<div class="shopinfo" v-if="Object.keys(shops).length !==0">
		<div class="top">
			<img :src="shops.logo"/>
			<span class="title">{{shops.name}}</span>
		</div>
		<div class="shopmid">
			<div class="shopmiditem shopmidleft">
				<div class="infosells">
					<div class="sellscount">
						{{shops.sells | sellCountFilter}}
					</div>
					<div class="sellstext">总销量</div>
				</div>
				<div class="infogoods">
					<div class="goodscount">
						{{shops.goodscount}}
					</div>
					<div class="goodstext">全部宝贝</div>
				</div>
			</div>
			<div class="shopmiditem shopmidright">
				<table>
					<tr v-for="(item, index) in shops.score" :key="index">
						<td>{{item.name}}</td>
						<td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
						<td class="better" :class="{'better-more': item.isBetter}">
							<span>{{item.isBetter ? '高':'低'}}</span>
						</td>
					</tr>
				</table>
			</div>
		</div>
		<div class="shopbottom">
			<div class="entershop">进店逛逛</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"detailshopimf",
		props:{
			shops:{
				type: Object,
				default(){
					return []
				}
			}
		},
		filters: {
			sellCountFilter: function (value) {
				if (value < 10000) return value;
				return (value/10000).toFixed(1)+ '万'
			}
		}
	}
</script>

<style scoped="scoped">
	.shopinfo{
		padding: 25px 8px;
		border-bottom: 5px solid #f2f5f8;
		height: ;
	}
	.top{
		line-height: 45px;
		display: flex;
		align-items: center;
	}
	.top img{
		width: 45px;
		height: 45px;
		border-radius: 50%;
		border: 1px solid rgba(0,0,0,.1);
	}
	.top .title{
		margin-left: 10px;
		vertical-align: center;
	}
	.shopmid{
		margin-top: 15px;
		display: flex;
		align-items: center;
	}
	.shopmiditem{
		flex: 1;
	}
	.shopmidleft{
		display: flex;
		justify-content: space-evenly;
		color: #333;
		text-align: center;
		border-right: 1px solid rgba(0,0,0,.1);
	}
	.sellscount, .goodscount{
		font-size: 18px;
	}
	.sellstext, .goodstext{
		margin-top: 10px;
		font-size: 12px;
	}
	.shopmidright{
		font-size: 13px;
		color: #333;
	}
	.shopmidright table{
		width: 120px;
		margin-left: 30px;
	}
	.shopmidright table td{
		padding: 5px 0;
	}
	.shopmidright .score{
		color: #5ea732;
	}
	.shopmidright .score-better{
		color: #f13e3a;
	}
	.shopmidright .better span{
		background-color: #5ea732;
		color: #fff;
		text-align: center;
	}
	.shopmidright .better-more span{
		background-color: #f13e3a;
	}
	.shopbottom{
		text-align: center;
		margin-top: 20px;
	}
	
</style>
