<template>
	<view class="page">
		<view class="return" @click="returnPage">
			<u-image width="40rpx" mode="widthFix" :src="returnSrc"></u-image>
		</view>
		<view class="title">注册</view>
		<u-input class="input" v-model="user.nickName" type="text" clearable placeholder="请输入昵称" />
		<u-input class="input" v-model="user.username" type="text" clearable placeholder="请输入账号" />
		<u-input class="input" v-model="user.password" type="password" placeholder="请输入密码" />
		<u-input class="input" v-model="password1" type="password" placeholder="确认密码" />
		<view class="btn btn-login" @click="btnRegister">注册</view>
		<navigator url="../login/login">
			<view style="text-align: center; font-size: 30rpx;">已有账号?去登录</view>
		</navigator>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import {
		userLogin,
		addUser
	} from "@/api/user.js"
	export default {
		data() {
			return {
				user:{
					username:'',
					password:'',
					nickName:''
				},
				password1:'',
				returnSrc:'../../static/return.svg'
			};
		},
		methods: {
			returnPage(){
				uni.navigateBack()
			},
			btnRegister() {
				if(this.user.username==""||this.user.password==""||this.password1==""||this.user.nickName==""){
					let title = "请确认输入完整"
					this.$refs.uToast.show({
						title: title,
						type: 'error',
						icon: true,
						position: "top"
					})
					return
				}
				
				if(this.user.password!=this.password1){
					let title = "密码输入不一致"
					this.$refs.uToast.show({
						title: title,
						type: 'error',
						icon: true,
						position: "top"
					})
					return
				}
				addUser(this.user).then(res => {
					if (res.data.code != 200) {
						this.$refs.uToast.show({
							title: res.data.message,
							type: 'error',
							icon: true,
							position: "top"
						})
						return
					}
					
					this.$refs.uToast.show({
						title: res.data.message,
						type: 'success',
						icon: true,
						position: "top",
						url: '/pages/login/login'
					})
					console.log(res)
				}).catch(res => {
					console.log(res)
				})
			}
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
