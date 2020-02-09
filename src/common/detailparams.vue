<template>
	<div class="paraminfo" v-if="Object.keys(goodsparam).length !==0">
		<table v-for="(table, index) in goodsparam.sizes"
				class="infosize" :key='index'>
			<tr v-for="(tr, indey) in table" :key="indey">
				<td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
			</tr>
		</table>
		<table class="infoparam">
			<tr v-for="(info, index) in goodsparam.infos">
				<td class="infoparamkey">{{info.key}}</td>
				<td class="infoparamvalue">{{info.value}}</td>
			</tr>
		</table>
		<div class="infoimg" v-if="goodsparam.image.length !== 0">
			<img :src="goodsparam.image"/>
		</div>
	</div>
</template>

<script>
	export default {
		name:"detailparams",
		props:{
			goodsparam:{
				type:Object,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.paraminfo{
		padding: 20px 15px;
		font-size: 14px;
		border-bottom: 5px solid #f2f5f8;
	}
	.paraminfo table{
		width: 100%;
		border-collapse: collapse;
	}
	.paraminfo table tr{
		height: 42px;
	}
	.paraminfo table tr td{
		border-bottom: 1px solid rgba(100,100,100,.1);
	}
	.infoparamkey{
		width: 95px;
	}
	.infoparam{
		border-top: 1px solid rgba(0,0,0,.1);
	}
	.infoparamvalue{
		color: #eb4868;
	}
	.infoimg img {
		width: 100%;
	}
</style>
