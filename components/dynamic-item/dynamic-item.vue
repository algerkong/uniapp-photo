<template>
	<view class="dynamic" @click="toDynamic">
		<view class="dynamic-top">
			<u-image width="70rpx" height="70rpx" mode="aspectFill" :src="$baseurl + dynamic.user.avatar"
				shape="circle"></u-image>
			<view class="user-text">
				<view class="user-nickname">{{dynamic.user.nickName}}</view>
				<view class="status">{{getStatus}}</view>
			</view>
			<view class="time">
				{{$rTime(dynamic.createdAt)}}
			</view>
		</view>
		<view class="dynamic-content">
			{{dynamic.content}}
		</view>
		<view v-if="dynamic.imgs" class="img-list">
			<u-grid :col="dynamic.imgs.length%3==0||dynamic.imgs.length>4?'3':'2'" :border="false">
				<u-grid-item :custom-style="(index+1)%3!=0?imgStyle:imgStyle1" v-for="(item, index) in dynamic.imgs"
					:index="index" :key="index">
					<image class="img"  @click.stop="showImgs(index)" :src="$baseurl + item.src" mode="aspectFill" ></image>
				</u-grid-item>
			</u-grid>
		</view>
		
		<view class="dynamic-btn">
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
</template>

<script>
	import datas from "@/utils/datas.js"
	import {
		getIsPraise,
		giveLike,
		addComment,
		getComment
	} from '@/api/dynamic.js'
	export default {
		name: "dynamic-item",
		data() {
			return {
				imgs:[],
				imgStyle: {
					"padding": "0 10rpx 10rpx 0",
					"height": "400rpx"
				},
				imgStyle1:{
					"padding": "0 0 10rpx 0",
					"height": "400rpx"
				},
				is:false
			};
		},
		props: {
			dynamic: {
				type: Object,
				default: {}
			}
		},
		mounted() {
			this.dynamic.imgs.forEach(e=>{
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
		computed: {
			getStatus() {
				switch (this.dynamic.status) {
					case 1:
						return "来自今日推荐"
					case 2:
						return "来自编辑推荐"
					default:
						return "动态"
				}
			}
		},
		methods:{
			showImgs(index){
				uni.previewImage({
					urls:this.imgs,
					current:index
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
			toDynamic(){
				datas.dynamicDetail = this.dynamic
				uni.navigateTo({
					url:"/pages/dynamic/dynamic"
				})
			}
		}
	}
</script>
<style>
	.u-grid-item-box {
		padding: 0 !important;
	}
</style>
<style lang="scss" scoped>
	.dynamic {
		background-color: #FFFFFF;
		padding: 15rpx;
		margin-bottom: 20rpx;
		border-radius: 10rpx;
		box-shadow: 0rpx 5rpx 10rpx #eee;
	}

	.img-list {
		overflow: hidden;
		margin-top: 20rpx;
		.img {
			width: 100% !important;
			height: 217rpx !important;
			border-radius: 10rpx;
			overflow: hidden;
		}
	}


	.dynamic-top {
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
		margin-top: 20rpx;
	}
	
	.dynamic-btn{
		height: 60rpx;
		display: flex;
		justify-content: space-around;
		
		.btn-item {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			font-size: 30rpx;
			color:  #949494;
			span{
				margin-left: 15rpx;
			}
		}
	}
</style>
