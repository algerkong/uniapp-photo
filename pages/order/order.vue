<template>
	<view class="page">
		<u-navbar :is-back="false">
			<slot>
				<view class="search-input">
					<input @keydown.enter="sendSearch" v-model="query.str" confirm-type="搜索" placeholder="搜索点什么吧..." />
				</view>
			</slot>
		</u-navbar>
		<u-swiper :list="bannerList" height="350" :effect3d="true" indicator-pos="bottomRight" border-radius="10"></u-swiper>
		<view class="img-list-title"> 最新订单 </view>
		<u-waterfall v-model="flowList" ref="uWaterfall">
			<template v-slot:left="{leftList}">
				<view class="demo-warter-l" v-for="(item, index) in leftList" :key="index" @click="toOrder(item)"
					v-if="item.imgs[0]">
					<order-item :item="item"></order-item>
				</view>
			</template>
			<template v-slot:right="{rightList}">
				<view class="demo-warter-r" v-for="(item, index) in rightList" :key="index" @click="toOrder(item)"
					v-if="item.imgs[0]">
					<order-item :item="item"></order-item>
				</view>
			</template>
		</u-waterfall>
		<view class="bottom"></view>
		<u-loadmore :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
		<u-no-network></u-no-network>
		<view class="bottom"></view>
		<u-tabbar :list="$store.state.tabbar" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
	import {
		getOrder
	} from '@/api/order.js';
	import api from '@/api/api.js'
	import orderItem from '@/components/order-item/order-item.vue'
	export default {
		data() {
			return {
				query: {
					page: 0,
					count: 8
				},
				flowList: [],
				loadStatus: 'loadmore',
				bannerList:[],
				bannerPage:{
					page:1,
					count:5
				}
			};
		},
		components:{
			orderItem
		},
		onLoad() {
			this.getList()
			this.getBanner()
			let that = this
			uni.$on('refreshOrder', () => {
				this.$refs.uWaterfall.clear();
				that.query = {
					page: 0,
					count: 8
				}
				that.flowList = []
				that.query.page += 1
				getOrder(that.query).then(res => {
					that.flowList = that.flowList.concat(res.data.data.list)
					
					that.loadStatus = 'loadmore'
					if (res.data.data.list.length == 0) {
						that.loadStatus = "nomore"
						that.query.page -= 1
					}
				})
			})
		},
		async onReachBottom() {
			this.loadStatus = 'loading';
			// 数据加载
			await this.addRandomData();
			this.loadStatus = 'loadmore';
		},
		methods: {
			addRandomData() {
				this.loadStatus = 'loading'
				this.getList()
			},
			getBanner(){
				api.getData('/api/banner',this.bannerPage).then(res=>{
					res.data.data.list.forEach(e=>{
						this.bannerList.push(this.$baseurl + e.src)
					})
				})
			},
			getList() {
				this.query.page += 1
				getOrder(this.query).then(res => {
					this.flowList = this.flowList.concat(res.data.data.list)
					this.loadStatus = 'loadmore'
					if (res.data.data.list.length == 0) {
						this.loadStatus = "nomore"
						this.query.page -= 1
					}
				})
			},
			toOrder() {

			}
		}
	}
</script>

<style lang="scss">
	.page {
		padding: 20rpx;
		background-color: #F2F1F6;
	}


	.search-input {
		flex: 1;
		background-color: #f4f4f4;
		padding: 10rpx 15rpx;
		border-radius: 10rpx;
		color: #333;
		width: 586rpx;
		margin: 20rpx;
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
		overflow: hidden;
		border-radius: 10rpx !important;
	}

	.demo-warter-r {
		margin: 10rpx 0 10rpx 10rpx;
		background-color: #ffffff;
		position: relative;
		overflow: hidden;
		border-radius: 10rpx !important;
	}
</style>
