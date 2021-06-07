<template>
	<view class="page">
		<u-navbar back-text="浏览历史"></u-navbar>
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
</template>

<script>
	export default {
		data() {
			return {
				historyList: null,
			};
		},
		onShow() {
			this.historyList = uni.getStorageSync('history').reverse()
		},
		methods:{
			toDynamic(item){
				uni.navigateTo({
					url:"/pages/dynamic/dynamic?id="+item.data.id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.history-list{
		background-color: #FFFFFF;
		border-radius: 10rpx;
		.history-item{
			display: flex;
			align-items: center;
			padding: 10rpx 20rpx;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			transition: .3s;
			&:active{
				filter: brightness(80%);
			}
			.content{
				display: flex;
				flex: 1;
				margin-left: 20rpx;
				flex-direction: column;
				justify-content: space-between;
				.title{
					color: #858486;
					font-size: 24rpx;
				}
				.user-top{
					display: flex;
					justify-content: space-between;
					align-items: center;
					.name{
						font-size: 32rpx;
					}
					.time{
						font-size: 24rpx;
						color: #858486;
					}
				}
			}
		}
	}
	.page {
		background-color: #F2F1F6;
		min-height: 100vh;
		padding: 20rpx;
	}
</style>
