<template>
	<view class="page">
		<view class="top"></view>
		<view class="title">发现</view>
		<view class="title-small">今日推荐</view>
		<view class="new-list">
			<swiper class="new-swiper">
				<swiper-item v-for="(item,index) in dayList" :key="item.id">
					<view class="new-item">
						<view class="new-img" @click="showImgs(index)">
							<u-image height="100%" mode="aspectFill" :src="$baseurl + item.imgs[0].src" />
						</view>
						<view class="new-user">
							<u-image width="70rpx" height="70rpx" mode="aspectFill" :src="$baseurl + item.user.avatar"
								shape="circle"></u-image>
							<view class="new-user-text">
								<view class="user-nickname">{{item.user.nickName}}</view>
								<view class="user-name">@{{item.user.username}}</view>
							</view>
							<view class="new-user-time">
								{{$rTime(item.createdAt)}}
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>


		<view class="img-list-title"> 最新动态 </view>
		<u-waterfall v-model="flowList" ref="uWaterfall">
			<template v-slot:left="{leftList}">
				<view class="demo-warter-l" v-for="(item, index) in leftList" :key="index" @click="toDynamicFull(item)">
					<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
					<u-lazy-load threshold="800" :image="$baseurl+item.item.imgs[0].src" :index="index"></u-lazy-load>
				</view>
			</template>
			<template v-slot:right="{rightList}">
				<view class="demo-warter-r" v-for="(item, index) in rightList" :key="index"
					@click="toDynamicFull(item)">
					<u-lazy-load threshold="800" :image="$baseurl+item.item.imgs[0].src" :index="index"></u-lazy-load>
				</view>
			</template>
		</u-waterfall>
		<u-loadmore :status="loadStatus" @loadmore="addRandomData"></u-loadmore>

		<u-no-network></u-no-network>
		<u-mask :show="loading">
			<view class="warp">
				<u-loading mode="circle" size="50"></u-loading>
			</view>
		</u-mask>

		<u-tabbar :list="$store.state.tabbar" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
	import {
		getDayDynamic,
		getImgList,
		getImgDynamic
	} from "@/api/home.js"

	import datas from "@/utils/datas.js"
	export default {
		data() {
			return {
				query: {
					page: 1,
					count: 10
				},
				dayList: null,

				loadStatus: 'loadmore',
				flowList: [],
				queryImg: {
					page: 0,
					count: 10
				},
				list: [],
				loading: false
				// tabbar:''
			}
		},
		onLoad() {

			console.log("user", uni.getStorageSync('user'))
			this.getList()
			// this.getImgList()
			this.addDynamicData();
			this.onReachBottom();



		},
		onShow() {
			if (datas.dynamicList.length > this.flowList.length) {
				this.flowList == datas.dynamicList
			}
		},
		computed: {},
		onReachBottom() {
			this.loadStatus = 'loading';
			// 模拟数据加载
			setTimeout(() => {
				this.addDynamicData();
				this.loadStatus = 'loadmore';
			}, 1000)
		},
		methods: {
			getList() {
				// this.loading = true
				getDayDynamic(this.query).then(res => {
					this.dayList = res.data.data.list

					// this.loading = false
				})
			},
			showImgs(index) {
				let urls = []
				this.dayList[index].imgs.forEach(e => {
					urls.push(this.$baseurl + e.src)
				})
				uni.previewImage({
					current: 0,
					urls: urls,
					indicator: "default",
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
			},

			//添加数据
			async addDynamicData() {
				this.queryImg.page += 1
				if (this.queryImg.page <= 50) {
					await this.getImgList()
					this.flowList = this.flowList.concat(this.list)
					//保存数据到公用函数中
					datas.dynamicList = this.flowList
					datas.dynamicQuery = this.queryImg
				} else {
					this.loadStatus = "nomore"
				}
				if (this.list.length == 0) {
					this.loadStatus = "nomore"
					this.queryImg.page -= 1
				}

			},
			async getImgList() {
				await getImgDynamic(this.queryImg).then(res => {
					// this.list = res.data.data.list
					let list = []
					res.data.data.list.forEach((item, index) => {
						list.push({
							item: item,
							index: this.flowList.length + index
						})
					})
					this.list = list

				})
			},
			toDynamicFull(item) {
				datas.dynamicDetail = item
				uni.navigateTo({
					url: "./dynamic-full/dynamic-full"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top {
		background-color: #f9f9f9;
		position: fixed;
		top: 0;
		left: 0;
		height: var(--status-bar-height);
		width: 100vw;
		z-index: 9999;
	}

	.warp {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.page {
		padding: 30rpx;
		background-color: #f9f9f9;

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

			.new-swiper {
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

		.img-list-title {
			font-size: 40rpx;
			font-weight: 600;
			margin: 50rpx 0 30rpx;
			letter-spacing: 5rpx;
		}

		.demo-warter-l {
			margin: 10rpx 10rpx 10rpx 0;
			background-color: #ffffff;
			position: relative;
		}

		.demo-warter-r {
			margin: 10rpx 0 10rpx 10rpx;
			background-color: #ffffff;
			position: relative;
		}

		.demo-image {
			width: 100%;
		}
	}
</style>
