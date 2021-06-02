<template>
	<view class="wrap">
		
		<u-tabbar :list="tabbar" :mid-button="true" @change="change"></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		computed: {
			tabbar() {
				return this.$store.state.tabbar
			}
		},
		onShow() {
			// uni.navigateTo({
			// 	url:"/pages/start/start"
			// })
		},
		methods: {
			change(e){
				console.log(e,"啊啊啊啊")
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>