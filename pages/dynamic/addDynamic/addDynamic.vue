<template>
	<view class="page">
		<u-navbar back-text="发布动态">
			<slot name="right">
				<view class="btnAdd">
					<u-button class="btn">发布</u-button>
				</view>
			</slot>
		</u-navbar>
		<view class="check-tag">
			<view class="icon">
				<u-icon name="plus"></u-icon>
			</view>
			<view class="text">发布到合适的板块<u-icon name="arrow-right"></u-icon>
			</view>
		</view>
		<view class="input-page">
			<view class="title">
				<u-input v-model="dynamic.title" type="text" placeholder="标题" />
			</view>
			<view class="content">
				<u-input class="content-input" v-model="dynamic.title" type="textarea" maxlength="10000"
					placeholder="分享你此刻的想法..." :clearable="false" />
			</view>
			<view class="img-page">
				<!-- <u-grid :col="3" :border="false">
					
					<u-grid-item :custom-style="(index+1)%3!=0?imgStyle:imgStyle1" v-for="(item, index) in dynamic.imgs"
						:index="index" :key="index">
						<image class="img" @click.stop="showImgs(index)" :src="$baseurl + item.src" mode="aspectFill">
						</image>
					</u-grid-item>
					<u-grid-item :custom-style="(index+1)%3!=0?imgStyle:imgStyle1" v-if="imgList.length<9">
						<view class="img-add">
							<u-icon name="plus"></u-icon>
						</view>
					</u-grid-item>
				</u-grid> -->
				<u-upload :action="action" :file-list="fileList" max-count="9" del-bg-color="#b5b5b5" ></u-upload>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		addDynamic
	} from '@/api/dynamic.js'
	export default {
		data() {
			return {
				dynamic: {

				},
				action:'',
				fileList:[],
				imgList:[],
				imgStyle: {
					"padding": "0 10rpx 10rpx 0",
					"height": "216rpx"
				},
				imgStyle1: {
					"padding": "0 0 10rpx 0",
					"height": "216rpx"
				},
			};
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		min-height: 100vh;
		background-color: #F2F1F6;
	}

	.btnAdd {
		flex: 1;

		.btn {
			float: right;
			height: 60rpx;
			font-size: 28rpx;
			margin-right: 30rpx;
		}
	}

	.img {
		width: 100% !important;
		height: 217rpx !important;
		border-radius: 10rpx;
		overflow: hidden;
	}

	.check-tag {
		background-color: #FFFFFF;
		margin-bottom: 15rpx;
		padding: 15rpx 20rpx;
		display: flex;

		.icon {
			font-size: 30rpx;
			text-align: center;
			width: 50rpx;
			height: 50rpx;
			line-height: 50rpx;
			background-color: #F2F1F6;
			border-radius: 10rpx;
			display: inline-block;
		}

		.text {
			flex: 1;
			text-align: right;
			font-size: 24rpx;
			line-height: 50rpx;
		}
	}

	.input-page {
		background-color: #FFFFFF;
		padding: 20rpx 30rpx;

		.title {
			padding: 5rpx 15rpx;
			background-color: #F2F1F6;
			border-radius: 10rpx;
		}

		.content {
			margin-top: 10rpx;

			.content-input {
				height: 300rpx;
			}
		}
	}
	
	.img-add{
		font-size: 70rpx;
		color: #65676b;
		display: flex;
		height: 217rpx;
		justify-content: center;
		align-items: center;
		background-color: #F2F1F6;
		width: 100%;
		border-radius: 10rpx;
	}
</style>
