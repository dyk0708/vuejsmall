<template>
	<div id="home">
		<homehead class="home-head">
			<div slot="center"><p>购物街</p></div>
		</homehead>
		
		<tabcontrol :title="['流行','新款','精选']"
		class="tabcon" @tabconclick="tabconclick" 
		ref="tabcontrola"  v-show="showtabcontrol">
		</tabcontrol>
		
		<scroll class="content" 
		ref="scroll" 		
		:probe-type="3" 	:pull-up-load="true"
		@scrollpos="contentscroll"	@pullup="loadmore">
			<swiper>
				<swiperitem v-for="item in banners">
					<a :href="item.link">
						<img :src="item.image" alt="" @load="swiperload"/>
					</a>
				</swiperitem>
			</swiper>
			<tuijian :recommends="recommends"></tuijian>
			<feature ></feature>
			<tabcontrol :title="['流行','新款','精选']" 
			 @tabconclick="tabconclick" ref="tabcontrolb">
			</tabcontrol>
			<goodlist :goods="goods[firsttype].list"></goodlist>
		</scroll>
		<backtop @click.native="backtopclick" v-show="btopshow">
		</backtop>
		
	</div>
</template>

<script>
	import homehead from 'common/homehead.vue'
	
	import {gethomemultidata,gethomegoods} from "network/home";
	
	import swiper from 'common/swiper.vue';
	import swiperitem from 'common/swiperitem.vue';
	
	import tuijian from 'common/tuijian.vue';
	
	import feature from '../common/feature.vue';
	
	import tabcontrol from '../common/tabcontrol.vue'
	
	import goodlist from '../common/goodlist.vue'
	
	import scroll from '../common/scroll/scroll.vue'
	import backtop from '../common/backtop.vue'

		
	export default{
		name:"home",
		components:{
			homehead,
			swiper,
			swiperitem,
			tuijian,
			feature,
			tabcontrol,
			goodlist,
			scroll,
			backtop
		},
		data() {
			return {
				banners: [],
				recommends: [],
				goods:{
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'sell':{page:0,list:[]},
				},
				firsttype: 'pop',  
				btopshow: false,
				showtabcontrol: false,
				settop: 0,
				savey: 0
			}
		},
		computed:{
			activated(){
				this.$refs.scroll.scrollTo(0, this.savey, 0)
				this.$refs.scroll.refresh()
			},
			deactivated(){
				this.savey = this.$refs.scroll.scroll.y
			}
		},
		created() {
			//请求轮播图数据
			this.gethomemultidata()
			
			//请求商品数据
			this.gethomegoods('pop');
			this.gethomegoods('new');
			this.gethomegoods('sell');
			
			//监听图片数据加载完成
			this.$bus.$on('imgload', () => {
				this.$refs.scroll.scroll.refresh()  //监听图片是否加载完成，如完成就刷新better-scroll
			})
			
		},
		methods:{
			tabconclick(index){				//tabcontrol的跳转
				switch(index){
					case 0:
					this.firsttype = 'pop'
					break
					case 1:
					this.firsttype = 'new'
					break
					case 2:
					this.firsttype = 'sell'
					break
				}
				this.$refs.tabcontrola.currentindex = index;
				this.$refs.tabcontrolb.currentindex = index;
			},
			
			backtopclick(){			//点击按钮返回最上方的方法
				this.$refs.scroll.scroll.scrollTo(0, 0, 500)
			},
			
			contentscroll(position){	
				//返回最上方按钮的显示和隐藏
				this.btopshow = (-position.y) >1000
				//tabcontrol的显示
				this.showtabcontrol = (-position.y) > this.settop
			},
			
			loadmore(){				//加载更多
				this.gethomegoods(this.firsttype)
			},
			
			swiperload(){	//监听加载完tabcontrol上面所有的图片离顶部的距离
				this.settop = this.$refs.tabcontrolb.$el.offsetTop
			},
			
			
			gethomemultidata() {		//请求轮播图的数据和推荐的数据的方法
				gethomemultidata().then(res => {
					this.banners = res.data.banner.list;
					this.recommends = res.data.recommend.list;
				})
			},
			gethomegoods(type) {		//请求商品信息的方法
				const page = this.goods[type].page + 1
				gethomegoods(type,page).then(res => {
					this.goods[type].list.push(...res.data.list)
					this.goods[type].page += 1
					
					this.$refs.scroll.scroll.finishPullUp() //完成一次加载后保存
				})
			}
		},
	}
</script>

<style scoped>
	.home-head{
		background-color: var(--color-tint);
		
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 1;
	}
	.home-head p{
		color: #FFFFFF;
	}
	#home{
		margin-top: 44px;
		height: 100vh;
	}
	.tabcon{
		position: sticky;
		top: 44px;
		z-index: 1;
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
