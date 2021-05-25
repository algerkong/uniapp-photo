<template>
	<view class="page"> 
		<u-image width="450rpx" :src="logo" class="logo" mode="widthFix"></u-image>

		<view class="bottom-page">
			<navigator hover-class="none" url="../login/login">
				<view class="btn btn-login" >
					登录
				</view>
			</navigator>
			
			<navigator hover-class="none" url="../register/register">
				<view class="btn btn-register" >
					注册
				</view>
			</navigator>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				logo:"../../static/photo.png"
			}
		},
		onLoad() {
			let token = uni.getStorageSync('token')
			if(token){
				uni.redirectTo({
					url:'../index/index'
				})
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.page{
		overflow: hidden;
		background-image: url("../../static/back.png");
		height: 100vh;
		background-size: cover;
		background-repeat: no-repeat;
		
	}
	.logo{
		position: fixed;
		top: 40%;
		left: 0;
		right: 0;
		margin: auto;
		z-index: 999;
	}
	
	.bottom-page{
		background-color: white;
		display: flex;
		width: 100vw;
		padding: 40rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		navigator{
			flex: 1;
			display: flex;
		}
		.btn{
			box-sizing: border-box;
			border-radius: 10rpx;
			
			font-size: 40rpx;
			letter-spacing: 10rpx;
			text-align: center;
			flex: 1;
			padding: 15rpx 0;
			font-weight: 600;
			transition: ease-in 0.05s ;
			&:active{
				transform: scale(0.98);
			}
		}
		.btn-login{
			border: 5rpx solid $uni-text-color;
		}
		.btn-register{
			background-color: #000000;
			color: #FFFFFF;
			margin-left: 20rpx;
		}
	}
	
</style>
