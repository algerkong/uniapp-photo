<script>
	export default {
		onLaunch: function() {
			const token = uni.getStorageSync('token');
			if (!token) {
				uni.reLaunch({
					url:'pages/start/start'
				})
			}
			// uni.hideTabBar()
		},
		onShow: function() {
			console.log('App Show')
			uni.hideTabBar({success(res) {
				console.log(res,'hide')
			}})
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "./uview-ui/index.scss";
	
	.bottom{
		height: 150rpx;
	}
</style>
