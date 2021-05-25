<template>
	<view class="page">
		<view class="return" @click="returnPage">
			<u-image width="40rpx" mode="widthFix" :src="returnSrc"></u-image>
		</view>
		<view class="title">登录</view>
		<u-input class="input" v-model="username" type="text" clearable placeholder="请输入账号" />
		<u-input class="input" v-model="password" type="password" placeholder="请输入密码" />
		<view class="btn btn-login" @click="btnLogin">登录</view>
		<navigator url="../register/register">
			<view style="text-align: center; font-size: 30rpx;">没有账号?去注册</view>
		</navigator>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import {
		userLogin
	} from "@/api/user.js"
	export default {
		data() {
			return {
				username: '',
				password: '',
				returnSrc:'../../static/return.svg'
			};
		},
		methods: {
			returnPage(){
				uni.navigateBack()
			},
			btnLogin() {
				if(this.username==""||this.password==""){
					this.$refs.uToast.show({
						title: "请确认输入完整",
						type: 'error',
						icon: true,
						position: "top"
					})
					return
				}
				userLogin(this.username, this.password).then(res => {
					if (res.data.code != 200) {
						this.$refs.uToast.show({
							title: res.data.message,
							type: 'error',
							icon: true,
							position: "top"
						})
						return
					}
					
					uni.setStorageSync('token', res.data.token)
					this.$refs.uToast.show({
						title: res.data.message,
						type: 'success',
						icon: true,
						position: "top",
						url:"/pages/index/index"
					})
					
					console.log(res)


				}).catch(res => {
					console.log(res)
				})
			},
			toStart(){
				uni.redirectTo({
					url:'../start/start'
				})
			},
		}
	};
</script>

<style lang="scss">
	.page {
		padding: 20rpx;
		.return{
			margin-top: var(--status-bar-height);
			display: inline-block;
			padding: 20rpx 20rpx 0 0;
		}
		.title {
			font-size: 60rpx;
			letter-spacing: 20rpx;
			margin-top: 50rpx;
			margin-bottom: 60rpx;
		}

		.input {
			margin-bottom: 40rpx;
			border: 5rpx solid;
			border-color: $uni-text-color !important;
			border-radius: 8rpx !important;
			padding: 10rpx 20rpx !important;
		}

		.btn {
			box-sizing: border-box;
			border-radius: 10rpx;
			font-size: 40rpx;
			letter-spacing: 10rpx;
			text-align: center;
			padding: 15rpx 0;
			transition: ease-in 0.05s;
			margin-bottom: 40rpx;

			&:active {
				transform: scale(0.98);
			}
		}

		.btn-login {
			padding: 25rpx 0;
			background-color: #000000;
			color: #ffffff;
		}
	}
</style>
