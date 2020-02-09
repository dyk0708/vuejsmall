<template>
	<div class="rec">
		<div v-for="item in recommends" class="rec-item">
			<a :href="item.link">
				<img :src="item.image"/>
				<div>{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		name:"tuijian",
		props:{
			recommends:{
				type: Array,
				default(){
					return[]
				}
			}
		}
	}
</script>

<style>
	.rec {
		display: flex;
		width: 100%;
		text-align: center;
		padding: 10px 0 25px;
		border-bottom: 8px solid #eee;
	}
	.rec-item{
		flex: 1;
	}
	.rec img {
		width: 65px;
		height: 65px;
		margin-bottom: 10px;
	}
</style>
