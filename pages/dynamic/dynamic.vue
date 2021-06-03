<template>
	<view class="page">
		<u-navbar back-text="动态"></u-navbar>
		<view class="dynamic">
			<view class="dynamic-top">
				<u-image width="70rpx" height="70rpx" mode="aspectFill" :src="$baseurl + dynamic.user.avatar"
					shape="circle"></u-image>
				<view class="user-text">
					<view class="user-nickname">{{dynamic.user.nickName}}</view>
					<view class="status">{{$rTime(dynamic.createdAt)}}</view>
				</view>
			</view>
			<view class="dynamic-content">
				<div class="title">{{dynamic.title}}</div>
				<div class="content">{{dynamic.content}}</div>
			</view>
			<view v-if="dynamic.imgs" class="img-list">
				<u-grid :col="dynamic.imgs.length%3==0||dynamic.imgs.length>4?'3':'2'" :border="false">
					<u-grid-item :custom-style="(index+1)%3!=0?imgStyle:imgStyle1" v-for="(item, index) in dynamic.imgs"
						:index="index" :key="index">
						<image class="img" @click.stop="showImgs(index)" :src="$baseurl + item.src" mode="aspectFill">
						</image>
					</u-grid-item>
				</u-grid>
			</view>

			<view class="num-page">
				<view>赞<span>{{dynamic.praises.length}}</span></view>
				<view>回复<span>{{dynamic.comments.length}}</span></view>
			</view>

			<view class="comment-list">
				<view class="comment-item" v-for="item in dynamic.comments">
					<comment-item :comment="item"></comment-item>
				</view>
			</view>
			
			<view class="bottom"></view>

			<view class="dynamic-btn">
				<view class="input">
					<input confirm-type="send" @keydown.enter="sendComment"  v-model="commentValue" :adjust-position="false" auto-height placeholder="说点什么吧..." />
				</view>
				<view class="btn-item">
					<view @click.stop="praiseDynamic">
						<u-icon name="thumb-up" :color="!is?'#2979ff':''"></u-icon>
						<span>{{dynamic.praises.length}}</span>
					</view>
				</view>
				<view class="btn-item">
					<view>
						<u-icon name="chat"></u-icon>
						<span>{{dynamic.comments.length}}</span>
					</view>
				</view>
				<view class="btn-item">
					<view>
						<u-icon name="zhuanfa"></u-icon>
						<span>分享</span>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import datas from "@/utils/datas.js"
	import commentItem from '@/components/comment-item/comment-item.vue'
	import {
		getIsPraise,
		giveLike,
		addComment,
		getComment
	} from '@/api/dynamic.js'
	export default {
		data() {
			return {
				dynamic: {},
				imgStyle: {
					"padding": "0 10rpx 10rpx 0",
					"height": "400rpx"
				},
				imgStyle1: {
					"padding": "0 0 10rpx 0",
					"height": "400rpx"
				},
				is: false,
				imgs: [],
				commentValue:''
			};
		},
		mounted() {
			this.dynamic = datas.dynamicDetail
			
			let dynamicHistoryList = uni.getStorageSync('history')
			if(!dynamicHistoryList.length){
				dynamicHistoryList = []
			}
			dynamicHistoryList.push({data:this.dynamic,time:new Date()})
			uni.setStorage({
				key:'history',
				data:dynamicHistoryList
			})

			this.dynamic.imgs.forEach(e => {
				this.imgs.push(this.$baseurl + e.src)
			})

			let userId = uni.getStorageSync('user').id
			getIsPraise({
				userId: userId,
				dynamicId: this.dynamic.id
			}).then(res => {
				this.is = res.data.isPraise
			})
		},
		methods: {
			showImgs(index) {
				uni.previewImage({
					urls: this.imgs,
					current: index
				})
			},
			praiseDynamic() {
				let data = {
					userId: uni.getStorageSync('user').id,
					dynamicId: this.dynamic.id
				}
				giveLike(data).then(res => {
					if (res.data.code == 200) {
						this.is = false
						this.dynamic.praises.push('aaa')
					} else if (res.data.code == 201) {
						this.is = true
						this.dynamic.praises.pop()
					}
				})
			},
			sendComment() {
				if(this.commentValue == "")
				return
				let data = {
					userId: uni.getStorageSync('user').id,
					dynamicId: this.dynamic.id,
					content: this.commentValue
				}
				
				console.log("id",data)
				
				addComment(data).then(res => {
					getComment({id:this.dynamic.id}).then(res => {
						console.log(res, "发送成功")
						this.dynamic.comments = res.data.data
						this.commentValue = ""
						
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.dynamic {
		background-color: #FFFFFF;
		padding: 25rpx 0;
		margin-bottom: 20rpx;
		border-radius: 10rpx;
	}

	.img-list {
		overflow: hidden;
		margin-top: 20rpx;
		padding: 0 25rpx;
		.img {
			width: 100% !important;
			height: 217rpx !important;
			border-radius: 10rpx;
			overflow: hidden;
		}
	}


	.dynamic-top {
		padding: 0 25rpx;
		display: flex;
		align-items: center;

		.user-text {
			margin-left: 20rpx;
			flex: 1;

			.user-nickname {
				font-size: 26rpx;
			}

			.status {
				font-size: 20rpx;
				color: #949494;
			}

			.user-name {
				font-size: 26rpx;
				color: $uni-text-color-grey;
			}
		}

		.time {
			font-size: 22rpx;
			color: #767676;
		}
	}
	

	.dynamic-content {
		padding: 0 25rpx;
		margin-top: 20rpx;
		.title{
			font-size: 36rpx;
			font-weight: 500;
		}
	}
	
	.num-page{
		display: flex;
		border:15rpx solid #f0f3f8 ;
		border-left: none;
		border-right: none;
		padding: 25rpx;
		view:first-child{
			margin-right: 30rpx;
		}
		span{
			margin-left: 10rpx;
		}
	}
	
	.comment-list{
		padding: 0 25rpx;
	}
	
	.bottom{
		height: 100rpx;
	}

	.dynamic-btn {
		background-color: #FFFFFF;
		padding: 20rpx 25rpx;
		height: 100rpx;
		display: flex;
		justify-content: space-around;
		width: 100vw;
		position: fixed;
		bottom: 0;
		left: 0;
		box-shadow: 0rpx -5rpx 5rpx #f3f6fa ;
		.input{
			display: flex;
			padding: 0 20rpx;
			align-items: center;
			background-color:#f0f3f8 ;
			border-radius: 10rpx;
			flex: 2;
			
		}

		.btn-item {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			font-size: 30rpx;
			color: #949494;

			span {
				margin-left: 15rpx;
			}
		}
	}
</style>
