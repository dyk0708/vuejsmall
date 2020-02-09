<template>
	<homehead class="detailhead">
		<div slot="left" class="detailleft" @click="backclick">
			<img src="../assets/images/common/back.svg"/>
		</div>
		<div slot="center" class="detailcen">
			<div v-for="(item,index) in detailtit" @click="cenclick(index)"
			class="detailitem" :class="{act:detailindex === index}">
				<span>{{item}}</span>
			</div>
		</div>
	</homehead>
</template>

<script>
	import homehead from 'common/homehead.vue'
	
	export default {
		name:"detailhead",
		components:{
			homehead
		},
		data(){
			return {
				detailtit: ['商品','参数','评论','推荐'],
				detailindex: 0
			}
		},
		
		methods:{
			cenclick(index){
				return this.detailindex = index
			},
			backclick(){
				this.$router.back()
			}
		}
	}
</script>

<style scoped="scoped">
	.detailhead{
		height: 44px;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 1;
		background-color: #FFFFFF;
	}
	.detailcen{
		display: flex;
		text-align: center;
	}
	.detailleft img{
		width: 20px;
		height: 20px;
		margin-top: 13px;
	}
	.detailitem{
		flex: 1;
		font-size: 14px;
	}
	.act{
		color: #FF8198;
		border-bottom: 0px solid #FFFFFF;
	}
</style>
