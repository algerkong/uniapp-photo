<template>
	<view class="page">
		<u-navbar back-text="用户动态"></u-navbar>
		<scroll-view class="scroll-view" scroll-y style="height: 100%;width: 100%;" @scrolltolower="onreachBottom">

			<dynamic-item v-for="(item,index) in dynamicList" :dynamic="item"></dynamic-item>
			<view class="none-dynamic" v-if="dynamicList.length==0&&!loading">
				<image src="../../../static/none.svg" mode=""></image>
				<view>该用户没有动态</view>
			</view>
			<u-divider v-if="dynamicList.length > query.count-1" bg-color="#00000000">{{ loadStatus }}</u-divider>
			<view class="bottom"></view>
		</scroll-view>

		<u-mask :show="loading">
			<view class="warp">
				<u-loading mode="circle" size="50"></u-loading>
				<view class="text">加载中...</view>
			</view>
		</u-mask>
	</view>
</template>

<script>
	import dynamicItem from '@/components/dynamic-item/dynamic-item.vue'
	import {
		getUserDynamic
	} from '@/api/user.js'
	export default {
		components: {
			dynamicItem
		},
		data() {
			return {
				query: {
					page: 1,
					count: 5
				},
				loadStatus: '加载更多',
				dynamicList: [],
				loading: false
			};
		},
		onLoad(option) {
			this.userId = option.userId
			console.log(this.userId,"userid");
			this.getDynamic()
			
		},
		methods: {
			getDynamic(id) {
				this.loading = true
				getUserDynamic(this.query, this.userId).then(res => {
					this.dynamicList = res.data.body
					this.loading = false
					console.log(res,"aaaaaaaaaaaaaaaaaaaaa");
				})
			},
			async onreachBottom() {
				this.loadStatus = '加载中...';
				if (this.loadStatus == '没有更多了') {
					return;
				}
				this.query.page += 1;
				await getUserDynamic(this.query, this.userId).then(res => {
					let list = res.data.body
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
		padding: 0 20rpx;
		box-sizing: border-box;
		background-color: #f9f9f9;
		min-height: 100vh;
	}

	.warp {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		flex-direction: column;

		.text {
			color: #FFFFFF;
		}
	}


	.none-dynamic {
		min-height: 80vh;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		font-size: 36rpx;
	}
</style>
