<template>
	<view class="page">
		<u-navbar>
			<slot>
				<view class="search-input">
					<input @keydown.enter="sendSearch" v-model="query.str" confirm-type="搜索" placeholder="搜索点什么吧..." />
				</view>
			</slot>
			<slot name="right">
				<view class="search-btn" @click="sendSearch">
					<u-icon name="search" />
				</view>
			</slot>
		</u-navbar>
		<scroll-view class="scroll-view" scroll-y style="height: 100%;width: 100%;" @scrolltolower="onreachBottom">

		<dynamic-item v-for="(item,index) in dynamicList" :dynamic="item"></dynamic-item>
		<view class="none-dynamic" v-if="dynamicList.length==0&&!loading">
			<image src="../../static/none.svg" mode=""></image>
			<view>没有搜索到动态</view>
		</view>
		<u-divider v-if="dynamicList.length > query.count-1" bg-color="#00000000">{{ loadStatus }}</u-divider>
		<view class="bottom">
			
		</view>
		</scroll-view>
		
		<u-mask :show="loading">
			<view class="warp">
				<u-loading mode="circle" size="50"></u-loading>
				<view class="text">搜索中...</view>
			</view>
		</u-mask>
	</view>
</template>

<script>
	import dynamicItem from '@/components/dynamic-item/dynamic-item.vue'
	import {
		getDynamic
	} from '@/api/dynamic.js'
	export default {
		components: {
			dynamicItem
		},
		data() {
			return {
				query: {
					str: '',
					page:1,
					count:5
				},
				loadStatus:'加载更多',
				dynamicList: [],
				loading:false
			};
		},
		onLoad(option) {
			this.query.str = option.search
			this.sendSearch()
		},
		methods: {
			sendSearch() {
				this.loading = true
				getDynamic(this.query).then(res => {
					this.dynamicList = res.data.data.list
					this.loading =false
				})
			},
			async onreachBottom() {
				this.loadStatus = '加载中...';
				if (this.loadStatus == '没有更多了') {
					return;
				}
				this.query.page += 1;
				await getDynamic(this.query).then(res => {
					let list = res.data.data.list
					if (list.length == 0) {
						this.query.page -= 1;
						this.loadStatus = '没有更多了';
						return;
					} else {
						this.loadStatus = '加载更多';
					}
					this.dynamicList = this.dynamicList.concat(list);
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		padding: 20rpx;
		box-sizing: border-box;
		background-color: #f9f9f9;
		height: 100vh;
	}
	
	.warp {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		flex-direction: column;
		.text{
			margin-top: 50rpx;
			color: #FFFFFF;
		}
	}

	.search-input {
		background-color: #f4f4f4;
		padding: 10rpx 15rpx;
		border-radius: 10rpx;
		color: #333;
		width: 586rpx;
	}

	.search-btn {
		font-size: 35rpx;
		text-align: center;
		width: 82rpx;
	}
	.none-dynamic{
		min-height: 80vh;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		font-size: 36rpx;
	}
</style>
