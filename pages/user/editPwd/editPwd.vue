<template>
	<view class="page">
		<u-navbar back-text="修改密码"></u-navbar>

		<u-input class="input" v-model="password.oldText" type="password" placeholder="原密码" />
		<u-input class="input" v-model="password.newText1" type="password" placeholder="新密码" />
		<u-input class="input" v-model="password.newText2" type="password" placeholder="确认密码" />
		<u-button class="button" :ripple="true" ripple-bg-color="#999999" @click="show = true" type="primary" >确认修改</u-button>
		<u-modal v-model="show" :content="content" :show-cancel-button="true" @confirm="submit"></u-modal>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import {
		editUser
	} from '@/api/user.js'
	export default {
		data() {
			return {
				user: null,
				password: {
					oldText: '',
					newText1: '',
					newText2: ''
				},
				content: '你确认修改密码吗？',
				show: false
			};
		},
		created() {
			this.user = uni.getStorageSync('user')
		},
		methods: {
			submit() {
				if (this.password.oldText != this.user.password) {
					this.$refs.uToast.show({
						title: '原密码错误',
						position: 'top',
						type: 'error'
					})

					return
				}
				if (this.password.newText1 != this.password.newText2) {
					this.$refs.uToast.show({
						title: '新密码输入不一致',
						position: 'top',
						type: 'error'
					})
					return
				}

				let user = {
					password: this.password.newText2
				}
				editUser(this.user.id, user).then(res => {
					uni.clearStorageSync();
					this.$refs.uToast.show({
						title: '密码修改成功',
						position: 'top',
						type: 'success',
						url: '/pages/start/start'
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		padding: 30rpx;
		padding-top: var(--status-bar-height);
		background-color: #F2F1F6;
		min-height: 100vh;
	}

	.input {
		margin-top: 30rpx;
		background-color: #FFFFFF;
		padding: 0 20rpx !important;
		border-radius: 10rpx;
		overflow: hidden;
	}
	
	.button{
		margin-top: 30rpx;
	}
</style>
