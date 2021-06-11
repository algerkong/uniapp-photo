<template>
	<view class="page">
		<u-navbar back-text="动态">
			<template v-slot:right>
				<u-icon class="btnDel" @click="isDel = true" name="more-dot-fill"></u-icon>
			</template>
		</u-navbar>
		<view class="dynamic" v-if="dynamic">
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
					<input confirm-type="send" @keydown.enter="sendComment" v-model="commentValue"
						:adjust-position="false" auto-height placeholder="说点什么吧..." />
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
			<u-mask :show="loading">
				<view class="warp">
					<u-loading mode="circle" size="50"></u-loading>
				</view>
			</u-mask>
			<u-modal v-if="userId == dynamic.userId" v-model="isDel" :show-cancel-button="true" :content="content" @confirm="deleteDynamic"></u-modal>
			<u-toast ref="uToast" />
		</view>
		<view class="none-dynamic" v-else>
			<image src="../../static/none.svg" mode=""></image>
			<view>该动态不存在</view>
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
		getComment,
		getIdDynamic,
		delDynamic
	} from '@/api/dynamic.js'
	export default {
		data() {
			return {
				dynamic: {
					user: {
						avatar: ''
					},
					praises: [],
					comments: [],
				},
				imgStyle: {
					"padding": "0 10rpx 10rpx 0",
					"height": "216rpx"
				},
				imgStyle1: {
					"padding": "0 0 10rpx 0",
					"height": "216rpx"
				},
				is: false,
				imgs: [],
				commentValue: '',
				loading: false,
				userId:'',
				isDel:false,
				content:'你确定要删除此动态吗？'
			};
		},
		async onLoad(option) {
			let id = option.id
			this.loading = true
			//获取动态
			await getIdDynamic(id).then(res => {
				this.dynamic = res.data.body
			})
			
			if(this.dynamic == null){
				this.loading = false
				return
			}

			//将动态添加到历史记录中
			let dynamicHistoryList = uni.getStorageSync('history')
			if (!dynamicHistoryList.length) {
				dynamicHistoryList = []
			}
			dynamicHistoryList.push({
				data: this.dynamic,
				time: new Date()
			})
			uni.setStorage({
				key: 'history',
				data: dynamicHistoryList
			})

			//将图片遍历添加 点击显示大图时用
			this.dynamic.imgs.forEach(e => {
				this.imgs.push(this.$baseurl + e.src)
			})


			let userId = uni.getStorageSync('user').id
			this.userId = userId
			getIsPraise({
				userId: userId,
				dynamicId: this.dynamic.id
			}).then(res => {
				this.is = res.data.isPraise
			})
			this.loading = false
		},
		methods: {
			// 点击显示大图
			showImgs(index) {
				uni.previewImage({
					urls: this.imgs,
					current: index
				})
			},

			// 给动态点赞
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

			async deleteDynamic() {
				await delDynamic(this.dynamic.id).then(res => {
					 this.$refs.uToast.show({
						title: "删除成功",
						type: 'success',
						icon: true,
						position: "top"
					})
					this.del = false
				})
				uni.$emit('refreshData');
				uni.navigateBack()
			},

			// 发送评论
			sendComment() {
				if (this.commentValue == "")
					return
				let data = {
					userId: uni.getStorageSync('user').id,
					dynamicId: this.dynamic.id,
					content: this.commentValue
				}

				addComment(data).then(res => {
					getComment({
						id: this.dynamic.id
					}).then(res => {
						this.dynamic.comments = res.data.data
						this.commentValue = ""

					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.btnDel {
		margin-right: 30rpx;
	}
	.warp {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.dynamic {
		background-color: #FFFFFF;
		padding: 25rpx 0;
		margin-bottom: 20rpx;
		border-radius: 10rpx;
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

		.title {
			font-size: 36rpx;
			font-weight: 500;
		}
	}

	.num-page {
		display: flex;
		border: 15rpx solid #f0f3f8;
		border-left: none;
		border-right: none;
		padding: 25rpx;

		view:first-child {
			margin-right: 30rpx;
		}

		span {
			margin-left: 10rpx;
		}
	}

	.comment-list {
		padding: 0 25rpx;
	}

	.bottom {
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
		box-shadow: 0rpx -5rpx 5rpx #f3f6fa;

		.input {
			display: flex;
			padding: 0 20rpx;
			align-items: center;
			background-color: #f0f3f8;
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
