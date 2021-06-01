<template>
	<view>
		<u-tabbar :list="tabbar"></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		computed: {
			tabbar() {
				return this.$store.state.tabbar
			}
		},
	}
</script>

<style lang="scss">

</style>
