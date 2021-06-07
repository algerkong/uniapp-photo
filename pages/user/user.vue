<template>
	<view class="page">
		<view class="top" @click="toEdit">
			<u-avatar :src="$baseurl+ user.avatar"></u-avatar>
			<view class="nick-name">{{user.nickName}}</view>
		</view>
		<view class="back">
			<view class="user-count">
				<view class="count-item" @click="toUserDynamic">
					<view class="count">{{dynamic.count}}</view>
					<view class="text">动态</view>
				</view>
				<view class="count-item">
					<view class="count">{{comment.count}}</view>
					<view class="text">评论</view>
				</view>
			</view>
		</view>

		<view class="back">
			<view class="title">
				<view class="text">浏览历史</view>
				<view class="more" @click="toMore">
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="history-list">
				<view class="history-item" v-for="item in historyList" v-if="item.data.user" @click="toDynamic(item)">
					<u-avatar size="60" :src="$baseurl + item.data.user.avatar"></u-avatar>
					<view class="content">
						<view class="user-top">
							<view class="name">{{item.data.user.nickName}}</view>
							<view class="time">{{$rTime(item.time)}}</view>
						</view>
						<view class="title">{{item.data.title}}</view>
					</view>
				</view>
			</view>
		</view>

		<view>
			<u-button @click="show = true">退出登陆</u-button>
		</view>
		<view class="bottom"></view>
		<u-modal v-model="show" :content="content" :show-cancel-button="true" @confirm="logout"></u-modal>
		<u-tabbar :list="$store.state.tabbar" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
	import datas from "@/utils/datas.js"
	import {
		getUserDynamic,
		getUserComment
	} from '@/api/user.js'
	export default {
		data() {
			return {
				user: null,
				historyList: null,
				queryDynamic: {
					page: 1,
					count: 0
				},
				queryComment: {
					page: 1,
					count: 0,
					userId: ''
				},
				dynamic: {
					count: 0,
					list: []
				},
				comment: {
					count: 0,
					list: []
				},
				show: false,
				content: '确定要退出登录吗'
			};
		},
		onShow() {
			this.user = uni.getStorageSync('user')
			try {
				this.historyList = uni.getStorageSync('history').reverse().splice(0,8)
			} catch (e) {
				//TODO handle the exception

			}
			this.queryComment.userId = this.user.id
			getUserDynamic(this.queryDynamic, this.user.id).then(res => {
				this.dynamic.count = res.data.total
				this.dynamic.list = res.data.body
			})
			getUserComment(this.queryComment).then(res => {
				this.comment.count = res.data.data.total
				this.comment.list = res.data.data.list
			})


			console.log(this.historyList, "aaaaaaaaaaaaaaaaaa")
		},
		methods: {
			toDynamic(item) {
				console.log(item)
				uni.navigateTo({
					url:"/pages/dynamic/dynamic?id="+item.data.id
				})
			},
			toUserDynamic(){
				uni.navigateTo({
					url:"/pages/user/userDynamic/userDynamic?userId="+this.user.id
				})
			},
			toMore() {
				uni.navigateTo({
					url: "/pages/user/historyDynamic/historyDynamic"
				})
			},
			logout() {
				uni.clearStorageSync()
				uni.reLaunch({
					url: "/pages/start/start"
				})
			},
			toEdit(){
				uni.navigateTo({
					url:'/pages/user/userEdit/userEdit'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>

	.page {
		padding-top: var(--status-bar-height);
		background-color: #F2F1F6;
		min-height: 100vh;
	}

	.top {
		display: flex;
		align-items: center;
		padding: 50rpx 0 0;
		font-size: 36rpx;
		font-weight: 600;
		margin: 0 20rpx 20rpx;

		.nick-name {
			margin-left: 20rpx;
		}
	}

	.back {
		margin: 0 20rpx 20rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
		padding: 15rpx 20rpx;
	}

	.user-count {
		display: flex;
		justify-content: space-around;
		align-items: center;

		.count-item {
			text-align: center;

			.count {
				font-size: 36rpx;
				font-weight: 600;
			}

			.text {
				font-size: 24rpx;
				color: #858486;
			}
		}
	}
	
	
	.title {
		display: flex;
		justify-content: space-between;
	
		.text {
			font-size: 30rpx;
			font-weight: 600;
			margin-bottom: 10rpx;
		}
	
		.more {
			flex: 1;
			text-align: right;
		}
	}
	
	.history-list {
		.history-item {
			display: flex;
			align-items: center;
			padding: 10rpx 10rpx;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			transition: .3s;
	
			&:active {
				filter: brightness(80%);
			}
	
			.content {
				display: flex;
				flex: 1;
				margin-left: 20rpx;
				flex-direction: column;
				justify-content: space-between;
	
				.title {
					color: #858486;
					font-size: 24rpx;
				}
	
				.user-top {
					display: flex;
					justify-content: space-between;
					align-items: center;
	
					.name {
						font-size: 32rpx;
					}
	
					.time {
						font-size: 24rpx;
						color: #858486;
					}
				}
			}
		}
	}
	
</style>
