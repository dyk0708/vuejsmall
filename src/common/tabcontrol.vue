<template>
	<div class="tabcontrol">
		<div v-for="(item, index) in title" class="tabconitem"
		:class="{act:currentindex === index}" @click="tabclick(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"tabcontrol",
		props:{
			title:{
				props:{
					type: Array,
					default() {
						return[]
					}
				}
			}
		},
		data() {
			return {
				currentindex : 0
			}
		},
		methods:{
			tabclick: function(index){
				this.currentindex = index;
				this.$emit('tabconclick',index)
			}
		}
	}
</script>

<style>
	.tabcontrol{
		display: flex;
		text-align: center;
		font-size: 15px;
		background-color: #fff;
	}
	.tabconitem{
		flex: 1;
		line-height: 40px;
		height: 40px;
	}
	.act{
		color: #FF8198;
		border-bottom: 3px solid #FF8198;
	}
	
</style>
