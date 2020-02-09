<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import bscroll from 'better-scroll'
	
	export default {
		name:"scroll",
		props:{
			probeType:{
				type: Number,
				default: 0
			},
			pullUpLoad:{
				type: Boolean,
				default:false
			}
		},
		data(){
			return{
				scroll: null,
			}
		},
		mounted(){
			//创建BSCROLL对象
			this.scroll = new bscroll(this.$refs.wrapper, {
				click: true,
				probeType: this.probeType,		//监听滚动的位置
				pullUpLoad: this.pullUpLoad		//监听是否到了底部
			})
			//监听滚动位置
			this.scroll.on('scroll', (position) => {
				this.$emit('scrollpos',position)
			})
			//监听上拉事件
			this.scroll.on('pullingUp', () => {
				this.$emit('pullup')
			})
			
			//返回最上层
			this.scroll.scrollTo(0, 0)
		}
	}
</script>

<style>
</style>
