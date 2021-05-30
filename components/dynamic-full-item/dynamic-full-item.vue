<template>
	<view>
		<swiper class="swiper-img" :current="currentImg" :duration="300" @change="changeSwiper">
			<swiper-item class="swiper-item" v-for="(item, index) in dynamic.imgs" :key="item.id">
				<view class="img-page">
					<!-- <u-image :src="$baseurl + item.src" width="100%" :fade="true" mode="widthFix" :lazy-load="true" :loading-icon="loadingImg" /> -->
					<movable-area scale-area>
						<movable-view direction="all" scale="true" scale-min="1" scale-max="4">
							<u-image :src="$baseurl + item.src" width="100%" :fade="true" mode="widthFix" :lazy-load="true" :loading-icon="loadingImg" />
						</movable-view>
					</movable-area>
				</view>
			</swiper-item>
		</swiper>
		<view class="small-list" v-if="dynamic.imgs.length > 1">
			<view class="img-page" :class="imgIndex == index ? 'img-page-checked' : ''" v-for="(item, index) in dynamic.imgs" :key="item.id" @click="toImg(index)">
				<u-image class="img" width="46rpx" height="46rpx" border-radius="10rpx" :src="$baseurl + item.src" mode="aspectFill" />
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'dynamic-full-item',
	data() {
		return {
			imgIndex:0,
			currentImg:0,
			loadingImg: '/static/loading.gif',
		};
	},
	props:{
		dynamic:{}
	},
	methods: {
		changeSwiper(e) {
			this.imgIndex = e.detail.current;
		},
		toImg(index) {
			this.currentImg = index;
		}
	}
};
</script>

<style lang="scss" scoped>
	movable-view {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
	
	movable-area {
		height: 100%;
		width: 100%;
		position: fixed;
		overflow: hidden;
	}
	
	movable-view image {
		width: 100%;
	}
	
	uni-image>img{
		z-index: -1 !important;
	}
	
	
	
	
	.swiper-img {
		width: 100vw;
		height: 100vh;
		background-color: #000000;
		&>.swiper-item {
			width: 100vw;
			height: 100vh;
			.img-page {
				height: 100vh;
				display: flex;
				align-items: center;
			}
		}
	}
	
	.small-list {
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		z-index: 999999;
		bottom: 100rpx;
		left: 0rpx;
		.img-page {
			display: inline-block;
			margin-right: 20rpx;
			border: 2rpx solid #c2c2c2;
			transition: ease-in .2s; 
			border-radius: 11rpx;
			&:last-child {
				margin-right: 0;
			}
		}
		.img-page-checked{
			transform: scale(1.2);
			border: 4rpx solid #ffffff;
		}
	}
	
</style>
