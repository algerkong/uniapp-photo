<template>
	<view class="page">
		<view class="title">发现</view>
		<view class="title-small">今日推荐</view>
		<view class="new-list">
			
			 <scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
			                    <view class="new-page">
									<view class="new-item" v-for="item in 10">
										<u-image width="100%" mode="widthFix" src="../../static/p1.png"></u-image>
										<view class="new-user">
											<u-image width="70rpx" height="70rpx" mode="widthFix" src="../../static/p2.png" shape="circle"></u-image>
											<view class="new-user-text">
												<view class="user-nickname">刘俊杰</view>
												<view class="user-name">@algerkong</view>
											</view>
										</view>
									</view>
								</view>
			                </scroll-view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			
		},
		methods: {

		}
	}
</script>

<style lang="scss">
.page{
	padding: 30rpx;
	.title{
		padding-top: 20rpx;
		margin-top: var(--status-bar-height);
		font-size: 60rpx;
		letter-spacing: 10rpx;
		margin-bottom: 40rpx;
	}
	.title-small{
		font-size: 30rpx;
		letter-spacing: 5rpx;
		font-weight: 700;
		margin-bottom: 30rpx;
	}
	.new-list{
		.scroll-view_H{
			height: 800rpx;
		}
		.new-page{
			display: flex;
			width: 6900rpx;
		}
		.new-item{
			width: 690rpx;
			float: left;
			.new-user{
				display: flex;
				height: 100rpx;
				align-items: center;
				.new-user-text{
					margin-left: 20rpx;
					.user-nickname{
						font-size: 30rpx;
						font-weight: 600;
					}
					.user-name{
						font-size: 24rpx;
						color: $uni-text-color-grey;
					}
				}
				
			}
		}
	}
}
</style>
