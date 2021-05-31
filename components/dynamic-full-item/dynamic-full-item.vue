<template>
	<view>
		<swiper class="swiper-img" :current="currentImg" :duration="300" @change="changeSwiper">
			<swiper-item class="swiper-item" v-for="(item, index) in dynamic.imgs" :key="item.id">
				<view class="img-page" @click="showTopBottom">
					<!-- <u-image :src="$baseurl + item.src" width="100%" :fade="true" mode="widthFix" :lazy-load="true" :loading-icon="loadingImg" /> -->
					<movable-area scale-area>
						<movable-view direction="all" scale="true" scale-min="1" scale-max="4">
							<image :src="$baseurl + item.src"  mode="widthFix" :lazy-load="true" />
						</movable-view>
					</movable-area>
				</view>
			</swiper-item>
		</swiper>
		
		<view class="item-head" :class="isShowTopBottom?'':'item-head-null'">
			<view class="dynamic-user">
					<u-image  width="70rpx" height="70rpx" mode="aspectFill"
						:src="$baseurl + dynamic.user.avatar" shape="circle"></u-image>
					<view class="user-text">
						<view class="user-nickname">{{dynamic.user.nickName}}</view>
						<view class="user-name">@{{dynamic.user.username}}</view>
					</view>
					<view class="time">
						{{$rTime(dynamic.createdAt)}}
					</view>
			</view>
		</view>
		<view class="item-bottom" :class="isShowTopBottom?'':'item-bottom-null'">
			<view class="small-list-page">
				<view class="small-list" v-if="dynamic.imgs.length > 1">
					<view class="img-page" :class="imgIndex == index ? 'img-page-checked' : ''" v-for="(item, index) in dynamic.imgs" :key="item.id" @click="toImg(index)">
						<u-image class="img" width="46rpx" height="46rpx" border-radius="10rpx" :src="$baseurl + item.src" mode="aspectFill" />
					</view>
				</view>
			</view>
			
			<view class="dynamic-content">
				{{dynamic.content}}
			</view>
			<view class="btn-page">
				<view class="btn-item">
					<view><u-icon name="thumb-up" :color="isPraise?'#2979ff':''" ></u-icon></view>
					<view class="btn-num">{{dynamic.praises.length}}</view>
				</view>
				<view class="btn-item">
					<view><u-icon name="chat" @click="commentPage = true"></u-icon></view>
					<view class="btn-num">{{dynamic.comments.length}}</view>
				</view>
				<view class="btn-item">
					<view><u-icon name="zhuanfa"></u-icon></view>
					<view class="btn-num">分享</view>
				</view>
			</view>
		</view>
		<u-popup v-model="commentPage" mode="bottom" border-radius="14">
			<view class="content">
				<view class="title">
					评论
				</view>
				<view class="comment-list">
					<view class="comment-item" v-for="item in dynamic.comments">
						{{item.content}}
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import {getIsPraise} from '@/api/dynamic.js'
export default {
	name: 'dynamic-full-item',
	data() {
		return {
			imgIndex:0,
			currentImg:0,
			loadingImg: '/static/loading.gif',
			isShowTopBottom:true,
			commentPage:false
		};
	},
	props:{
		dynamic:{}
	},
	computed:{
		isPraise(){
			let userId = uni.getStorageSync('user').id
			getIsPraise({userId:userId,dynamicId:this.dynamic.id}).then(res=>{
				return res.data.isPraise
			})
		}
	},
	methods: {
		changeSwiper(e) {
			this.imgIndex = e.detail.current;
		},
		toImg(index) {
			this.currentImg = index;
		},
		showTopBottom(){
			this.isShowTopBottom = !this.isShowTopBottom
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
	
	
	.content{
		height: 60vh;
		padding: 30rpx;
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
	
	.item-head{
		width: 100vw;
		position: fixed;
		z-index: 9999;
		top: 0;
		left: 0rpx;
		color: #FFFFFF;
		padding: 30rpx;
		padding-bottom: 100rpx;
		transition: ease-in-out .3s;
		/* #ifndef H5 */
		padding-top: var(--status-bar-height);
		/* #endif */
		background: rgb(0,0,0);
		background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.1) 65%, rgba(0,0,0,0) 100%);
		.dynamic-user{
			display: flex;
			align-items: center;
			.user-text {
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
			.time{
				color: #d5d5d5;
			}
		}
	}
	
	.item-bottom{
		width: 100vw;
		position: fixed;
		z-index: 9999;
		bottom: 0;
		left: 0rpx;
		color: #FFFFFF;
		padding: 30rpx;
		transition: ease-in-out .3s;
		background: rgb(0,0,0);
		background: linear-gradient(360deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.1) 65%, rgba(0,0,0,0) 100%);
		height: 350rpx;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}
	
	
	.item-head-null{
		top: -200rpx;
	}
	
	.item-bottom-null{
		bottom: -200rpx;
	}
	
	
	.dynamic-content{
	}
	
	.btn-page{
		height: 60rpx;
		display: flex;
		justify-content: space-around;
		
		.u-icon{
			font-size: 40rpx;
		}
		.btn-item{
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			.btn-num{
				margin-top: 6rpx;
				font-size: 20rpx;
			}
		}
	}
	
	.small-list-page{
		min-height: 60rpx;
	}
	
	.small-list {
		display: flex;
		justify-content: center;
		align-items: center;
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
