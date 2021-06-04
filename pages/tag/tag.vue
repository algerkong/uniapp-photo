<template>
	<view class="page">
		<view class="btn-search" >
			<view class="search">
				<input @keydown.enter="sendSearch" v-model="value" confirm-type="搜索"  placeholder="搜索点什么吧..." />
			</view>
		</view>
		<view>
			<u-tabs-swiper ref="uTabs" :list="list" active-color="#333" :current="current" @change="tabsChange"
				:active-item-style="activeItem" :is-scroll="false" swiperWidth="750"></u-tabs-swiper>
		</view>
		<swiper class="swiper" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item class="swiper-item" v-for="(item, index) in list" :key="index">
				<scroll-view scroll-y style="height: 100%;width: 100%;" @scroll="onreachBottom">
					<tag-dynamic :id="item.id"></tag-dynamic>
				</scroll-view>
			</swiper-item>
		</swiper>

		<u-tabbar :list="$store.state.tabbar" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
	import {
		getTagList,
		getTagDynamic
	} from '@/api/tag.js'
	import tagDynamic from './tag-dynamic/tag-dynamic.vue'
	export default {
		components: {
			tagDynamic
		},
		data() {
			return {
				activeItem: {
					// "background":"#000"
				},
				list: [],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				value:''
			};
		},
		mounted() {
			getTagList().then(res => {
				this.list = res.data.data.list
			})
		},
		computed: {},
		methods: {
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			onreachBottom() {
			
			},
			toSearch(){
				uni.navigateTo({
					url:"/pages/search/search"
				})
			},
			sendSearch(){
				let that = this
				uni.navigateTo({
					url:"/pages/search/search?search="+this.value,
					success() {
						that.value = ""
					}
				})
			}			
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		padding-top: --status-bar-height;
		height: 100vh !important;
		background-color: #F2F1F6;
	}

	.swiper {
		height: calc(100vh - 80rpx - 180rpx);
	}

	.swiper-item {
		height: calc(100vh - 80rpx - 180rpx);
	}
	.btn-search{
		background-color: #FFFFFF;
		padding: 10rpx 20rpx;
		color: #333;
		.search{
			border-radius: 10rpx;
			padding: 10rpx 15rpx;
			background-color:#F2F1F6;
		}
	}
</style>
