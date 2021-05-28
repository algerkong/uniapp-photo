<template>
	<view>
		<swiper class="swiper" :indicator-dots="true" :duration="500">
			<swiper-item class="swiper-item" v-for="(item,index) in dynamicDetail.item.imgs" :key="item.id">
				<view class="img-page">
					<u-image :src="$baseurl + item.src" width="100%" :fade="true" mode="widthFix" :lazy-load="true" :loading-icon="loadingImg" />
				</view>
			</swiper-item>
		</swiper>
		<view class="small-list">
			<view class="img-page" v-for="(item,index) in dynamicDetail.item.imgs" :key="item.id">
				<u-image class="img" width="45rpx" height="45rpx" :src="$baseurl + item.src" mode="aspectFill" />
			</view>
		</view>
	</view>
</template>

<script>
	import datas from "@/utils/datas.js"
	export default {
		data() {
			return {
				loadingImg: '/static/loading.gif',
				dynamicDetail:{},
				dynamicList:[]
			};
		},
		onShow() {
			this.dynamicDetail = datas.dynamicDetail
			this.dynamicList = datas.dynamicList
		}
	}
</script>

<style lang="scss" scoped>
 .swiper{
	 width: 100vw;
	 height: 100vh;
	 background-color: #000000;
	 .swiper-item{
		 width: 100vw;
		 height: 100vh;
		.img-page{
			height: 100vh;
			display: flex;
			align-items: center;
		}
	 }
 }
 
 .small-list{
 		 width: 100vw;
 		 display: flex;
 		 justify-content: center;
 		 align-items: center;
 		 position: fixed;
 		 z-index: 999999;
 		 bottom: 100rpx;
 		 left: 0rpx;
		 .img-page{
			 width: 45rpx;
			 height: 45rpx;
			 margin-right: 20rpx;
			 &:last-child{
				 margin-right: 0;
			 }
		 }
 }
</style>
