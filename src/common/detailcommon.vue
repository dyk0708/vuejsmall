<template>
	<div class="common" v-if="Object.keys(detailcommon).length !==0">
		<div class="head">
			<div class="headtitle">用户评价</div>
			<div class="more">
				更多<i class="arrowright"></i>
			</div>
		</div>
		<div class="user">
			<img :src="detailcommon.user.avatar"/>
			<span>{{detailcommon.user.uname}}</span>
		</div>
		<div class="usercommon">
			<p>{{detailcommon.content}}</p>
			<div class="other">
				<span class="date">{{detailcommon.created | showdate}}</span>
				<span>{{detailcommon.style}}</span>
			</div>
			<div class="img">
				<img :src="item" v-for="(item, index) in detailcommon.images" :key="index"/>
			</div>
		</div>
	</div>
</template>

<script>
	import {formadate} from '../components/date.js'
	
	export default {
		name:"detailcommon",
		props:{
			detailcommon:{
				type:Object,
				default(){
					return []
				}
			}
		},
		filters:{
			showdate: function(value){
				const date = new Date(value * 1000)
				return formadate (date, 'yyyy-MM-dd')
			}
		}
	}
</script>

<style scoped="scoped">
	.common{
		padding: 5px 12px;
		color: #333;
		border-bottom: 5px solid #f2f5f8;
	}
	.head{
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid rgba(0,0,0,.1);
	}
	.headtitle{
		float: left;
		font-size: 15px;
	}
	.more{
		float: right;
		margin-right: 10px;
		font-size: 13px;
	}
	.user{
		padding: 10px 0 5px;
	}
	.user img{
		width: 42px;
		height: 42px;
		border-radius: 50%;
	}
	.user span{
		position: relative;
		font-size: 15px;
		top: -15px;
		margin-left: 10px;
	}
	.usercommon{
		padding: 0 5px 15px;
	}
	.usercommon p{
		font-size: 14px;
		color: #777;
		line-height: 1.5;
	}
	.usercommon .other{
		font-size: 12px;
		color: #999;
		margin-top: 10px;
	}
	.usercommon .date {
		margin-right: 8px;
	}
	.img{
		margin-top: 10px;
	}
	.img img{
		width: 70px;
		height: 70px;
		margin-right: 5px;
	}
</style>
