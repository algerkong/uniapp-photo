<template>
	<view class="page">
		<view class="title">发现</view>
		<view class="title-small">今日推荐</view>
		<view class="new-list">
			<swiper class="new-swiper" >
				<swiper-item  v-for="(item,index) in dayList" :key="item.id">
					<view class="new-item">
						<view class="new-img" @click="showImgs(index)">
							<u-image height="100%" mode="aspectFill" :src="$baseurl + item.imgs[0].src" />
						</view>
						<view class="new-user">
							<u-image  width="70rpx" height="70rpx" mode="aspectFill"
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
		
		
		<view class="img-list-title"> 最新动态 </view>
		<u-waterfall v-model="flowList" ref="uWaterfall">
			<template v-slot:left="{leftList}">
				<view class="demo-warter-l" v-for="(item, index) in leftList" :key="index" @click="toDynamicFull(item,index,true)">
					<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
					<u-lazy-load threshold="800"  :image="$baseurl+item.imgs[0].src" :index="index" ></u-lazy-load>
				</view>
			</template>
			<template v-slot:right="{rightList}">
				<view class="demo-warter-r" v-for="(item, index) in rightList" :key="index" @click="toDynamicFull(item,index,false)">
					<u-lazy-load threshold="800"  :image="$baseurl+item.imgs[0].src" :index="index"></u-lazy-load>
				</view>
			</template>
		</u-waterfall>
		<u-loadmore :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
		
		<u-tabbar :list="tabbar"></u-tabbar>
		<u-no-network></u-no-network>
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
				list: []
				// tabbar:''
			}
		},
		onLoad() {
			this.getList()
			// this.getImgList()
			this.addDynamicData();
			this.onReachBottom();
		},
		computed: {
			tabbar() {
				return this.$store.state.tabbar
			}
		},
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
			},
			
			//添加数据
			async addDynamicData() {
				this.queryImg.page +=1
				if(this.queryImg.page <= 50){
					await this.getImgList()
					this.flowList = this.flowList.concat(this.list)
					//保存数据到公用函数中
					datas.dynamicList = this.flowList
				}else{
					this.loadStatus="nomore"
				}
				if(this.list.length == 0){
					this.loadStatus="nomore"
				}
				
			},
			async getImgList(){
				await getImgDynamic(this.queryImg).then(res=>{
					this.list = res.data.data.list
				})
			},
			toDynamicFull(item,index,is){
				let num = 0
				if(is){
					num = index*2
				}else{
					num = index*2+1
				}
				datas.dynamicDetail = {
					index:num,
					item:item
				}
				
				uni.navigateTo({
					url:"./dynamic-full/dynamic-full"
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
		
		.img-list-title{
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
