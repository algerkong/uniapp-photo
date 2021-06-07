<template>
	<view class="page">
		<u-navbar back-text="个人信息">
			<slot name="right">
				<view class="btnAdd">
					<u-button class="btn" @click="submit">修改</u-button>
				</view>
			</slot>
		</u-navbar>
		<view class="avatar"  @click="chooseAvatar">
			<u-avatar :src="$baseurl+ user.avatar" mode="square" size="120"></u-avatar>
		</view>

		<u-input class="input user" v-model="user.username" type="text" :disabled="true" />
		<u-input class="input" v-model="user.nickName" type="text" placeholder="输入昵称" />
		<u-input class="input" v-model="gender.label" type="select" @click="isSelect = true" placeholder="选择性别" />
		<u-button class="input button" :ripple="true" ripple-bg-color="#999999" @click="toPwd">修改密码</u-button>

		<u-select v-model="isSelect" :list="selectGender" @confirm="confirm"></u-select>
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
				isSelect: false,
				gender: '',
				selectGender: [{
					value: 1,
					label: '男'
				}, {
					value: 0,
					label: '女'
				}]
			};
		},
		created() {
			this.user = uni.getStorageSync('user')
			if (this.user.gender == 0) {
				this.gender = {
					label: '女',
					value: 0
				}
			} else {
				this.gender = {
					label: '男',
					value: 1
				}
			}
			let that = this
			// 监听从裁剪页发布的事件，获得裁剪结果
			uni.$on('uAvatarCropper', path => {
				this.avatar = path;
				uni.uploadFile({
					url: this.$baseurl + '/api/upload',
					filePath: path,
					complete: (res) => {
						let data = JSON.parse(res.data)
						that.user.avatar = data.data.file
					}
				});
			})
		},
		methods: {
			confirm(e) {
				this.gender = e[0]
			},
			submit() {
				let user = {
					nickName: this.user.nickName,
					gender: this.gender.value,
					avatar:this.user.avatar
				}
				editUser(this.user.id,user).then(res=>{
					uni.setStorageSync('user',this.user)
				})
			},
			chooseAvatar() {
				uni.navigateTo({
					url:'/uview-ui/components/u-avatar-cropper/u-avatar-cropper?destWidth=300&rectWidth=200&fileType=jpg'
				})
			},
			toPwd(){
				uni.navigateTo({
					url:'/pages/user/editPwd/editPwd'
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


	.nick-name {
		margin-left: 20rpx;
	}

	.btnAdd {
		flex: 1;

		.btn {
			float: right;
			height: 60rpx;
			font-size: 28rpx;
			margin-right: 30rpx;
		}
	}

	.input {
		margin-bottom: 30rpx;
		background-color: #FFFFFF;
		padding: 0 20rpx !important;
		border-radius: 10rpx;
		overflow: hidden;
	}

	.user {
		background-color: #E4E7ED;
	}

	.avatar {
		display: flex;
		justify-content: center;
		margin: 30rpx;
		min-width: 50vw;
	}
</style>
