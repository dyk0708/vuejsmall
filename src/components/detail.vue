<template>
	<div id="detail">
		<detailhead></detailhead>
		<scroll class="content" ref="scroll">
			<detailswiper :top-images="topimages"></detailswiper>
			<detailimf :goods="goods"></detailimf>
			<detailshopimf :shops="shops"></detailshopimf>
			<detailinfo :detailinfo="detailinfo" @imageload="imageload"></detailinfo>
			<detailparams :goodsparam="goodsparam"></detailparams>
			<detailcommon :detailcommon="detailcommon"></detailcommon>
			<detaillist :rec="rec"></detaillist>
			
			
		</scroll>
	</div>
</template>

<script>
	import detailhead from '../common/detailhead.vue'
	import detailswiper from '../common/detailswiper.vue'
	import detailimf from '../common/detailimf.vue'
	import detailshopimf from '../common/detailshopimf.vue'
	import detailinfo from '../common/detailinfo.vue'
	import detailparams from '../common/detailparams.vue'
	import detailcommon from '../common/detailcommon.vue'
	
	import scroll from '../common/scroll/scroll.vue'
	import detaillist from '../common/detaillist.vue'
	
	import {getdetails,goods,shops,goodsparam,getRecommend} from "../network/detail.js";
	
	export default {
		name:"detail",
		components:{
			detailhead,
			detailswiper,
			detailimf,
			detailshopimf,
			scroll,
			detailinfo,
			detailparams,
			detailcommon,
			detaillist
		},
		data(){
			return {
				iid: null,
				topimages: [],
				goods: {},
				shops: {},
				detailinfo: {},
				goodsparam: {},
				detailcommon: {},
				rec: []
			}
		},
		created(){
			//保存传进来的iid
			this.iid = this.$route.params.iid
			
			//根据iid获得数据 
			getdetails(this.iid).then(res => {
				//获取轮播图数据
				this.topimages = res.result.itemInfo.topImages
				//获取商品信息数据
				this.goods = new goods(res.result.itemInfo,
				res.result.columns, res.result.shopInfo.services)
				//获取商家信息
				this.shops = new shops(res.result.shopInfo)
				//获取商品详细信息
				this.detailinfo = res.result.detailInfo
				//获取商品参数
				this.goodsparam = new goodsparam(res.result.itemParams.info, res.result.itemParams.rule)
				//获取评论数据
				if (res.result.rate.cRate !== 0){
					this.detailcommon = res.result.rate.list[0]
				}
			})
			getRecommend().then(res => {
				this.rec = res.data.list
				console.log(res)
			})
			this.$bus.$on('imgload', () => {
				this.$refs.scroll.scroll.refresh()  //监听图片是否加载完成，如完成就刷新better-scroll
			})
		},
		methods:{
			imageload(){
				this.$refs.scroll.scroll.refresh()
			}
		}
	}
</script>

<style scoped="scoped">
	#detail{
		position: relative;
		z-index: 1;
		background-color: #FFFFFF;
		height: 100vh;

	}
	.content{
		overflow: hidden;
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
	}
</style>
