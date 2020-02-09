<template>
	<div>
		<swiper class="detswiper">
			<swiperitem v-for="item in topImages">
				<img :src="item"/>
			</swiperitem>
		</swiper>
	</div>
</template>

<script>
	import swiper from 'common/swiper.vue'
	import swiperitem from 'common/swiperitem.vue';
	
	export default {
		name:"detailswiper",
		components:{
			swiper,
			swiperitem
		},
		props:{
			topImages:{
				type: Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.detswiper{
		height: 300px;
	}
</style>
