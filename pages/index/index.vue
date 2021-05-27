<template>
	<view class="page">
		<view class="title">发现</view>
		<view class="title-small">今日推荐</view>
		<view class="new-list">
			<swiper class="new-swiper" >
				<swiper-item  v-for="(item,index) in dayList" :key="item.id">
					<view class="new-item">
						<view class="new-img" @click="showImgs(index)">
							<u-image height="100%" mode="heightFix" :src="$baseurl + item.imgs[0].src" />
						</view>
						<view class="new-user">
							<u-image  width="70rpx" height="70rpx" mode="heightFix"
								:src="$baseurl + item.user.avatar" shape="circle"></u-image>
							<view class="new-user-text">
								<view class="user-nickname">{{item.user.nickName}}</view>
								<view class="user-name">@{{item.user.username}}</view>
							</view>
							<view class="new-user-time">
								{{item.createdAt}}
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<u-tabbar :list="tabbar"></u-tabbar>
		<u-no-network></u-no-network>
	</view>
</template>

<script>
	import {
		getDayDynamic
	} from "@/api/home.js"
	export default {
		data() {
			return {
				query: {
					page: 1,
					count: 10
				},
				dayList: null,
				// tabbar:''
			}
		},
		onLoad() {
			this.getList()
		},
		computed: {
			tabbar() {
				return this.$store.state.tabbar
			}
		},
		methods: {
			getList() {
				getDayDynamic(this.query).then(res => {
					this.dayList = res.data.data.list
					console.log(this.dayList)

					console.log(this.dayList[0].imgs[0].src)
				})
			},
			showImgs(index) {
				let urls = []
				this.dayList[index].imgs.forEach(e => {
					urls.push(this.$baseurl+e.src)
				})
				uni.previewImage({
					current:0,
					urls: urls,
					indicator:"default",
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.page {
		padding: 30rpx;

		.title {
			padding-top: 20rpx;
			margin-top: var(--status-bar-height);
			font-size: 60rpx;
			letter-spacing: 10rpx;
			margin-bottom: 40rpx;
		}

		.title-small {
			font-size: 30rpx;
			letter-spacing: 5rpx;
			font-weight: 700;
			margin-bottom: 30rpx;
		}

		.new-list {
			.scroll-view_H {
				height: 1000rpx;
			}

			.new-swiper{
				height: 800rpx;
			}

			.new-item {
				width: 690rpx;
				float: left;

				.new-img {
					width: 100%;
					height: 700rpx;
					overflow: hidden;
					display: flex;
					align-items: center;
				}

				.new-user {
					display: flex;
					height: 100rpx;
					align-items: center;

					.new-user-text {
						margin-left: 20rpx;
						flex: 1;

						.user-nickname {
							font-size: 30rpx;
							font-weight: 600;
						}

						.user-name {
							font-size: 24rpx;
							color: $uni-text-color-grey;
						}
					}

				}
			}
		}
	}
</style>
