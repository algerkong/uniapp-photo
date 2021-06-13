<template>
	<view class="page">
		<u-navbar back-text="订单">
			<template v-slot:right>
				<u-icon class="btnDel" @click="isDel = true" name="more-dot-fill"></u-icon>
			</template>
		</u-navbar>
		<view class="content" v-if="order">
			<view class="content-top">
				<u-image width="70rpx" height="70rpx" mode="aspectFill" :src="$baseurl + order.user.avatar" shape="circle"></u-image>
				<view class="user-text">
					<view class="user-nickname">{{ order.user.nickName }}</view>
					<view class="status">{{ $rTime(order.createdAt) }}</view>
				</view>
				<view class="is" :class="order.is==1?'is-0':'is-1'">
					{{order.is==1?'求':'发'}}
				</view>
			</view>
			
			<view class="detail">
				<view class="title">
					{{order.title}}
					<u-tag :text="order.tag" type="info" size="mini" />
				</view>
				<view class="price">
					￥{{order.price}}
				</view>
				<view class="content">
					{{order.content}}
				</view>
				<view class="img-list">
					<image class="img" v-for="(item,index) in order.imgs" :key="index" :src="$baseurl + item.src" mode="widthFix" @click="showImgs(index)"></image>
				</view>
			</view>
			<view class="btn-page" @click="receiveorder">
				<view class="btn">
					接收订单
				</view>
			</view>
		</view>
		<view class="none" v-else>
			<image src="../../../static/none.svg" mode=""></image>
			<view>该订单不存在</view>
		</view>
		<u-mask :show="loading">
			<view class="warp">
				<u-loading mode="circle" size="50"></u-loading>
			</view>
		</u-mask>
		<view class="bottom"></view>
	</view>
</template>

<script>
	import {getIdOrder} from '@/api/order.js'
	import {addReceiveorder} from '@/api/receiveorder.js'
export default {
	data() {
		return {
			order: null,
			orderId:null,
				loading: false,
		};
	},
	onLoad(option) {
		this.loading = true
		this.orderId = option.id
		getIdOrder(this.orderId).then(res=>{
			this.order = res.data.body
			this.loading = false
		})
	},
	methods:{
		showImgs(index){
			let urls = []
			this.order.imgs.forEach(e => {
				urls.push(this.$baseurl + e.src)
			})
			uni.previewImage({
				current: index,
				urls: urls,
				indicator: "number"
			})
		},
		receiveorder(){
			let data = {
				userId:uni.getStorageSync('user').id,
				orderId:this.order.id
			}
			addReceiveorder(data).then(res=>{
				console.log(res)
			})
		}
	}
};
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

.page {
}

.none {
	min-height: 80vh;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-size: 36rpx;
}
.content-top {
	padding: 25rpx;
	display: flex;
	align-items: center;

	.user-text {
		margin: 0 20rpx;

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
	
	.is{
		display: block;
		width: 50rpx;
		height: 50rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		color: #ffffff;
	}
	.is-1{
		background-color: #D55672;
	}
	.is-0{
		background-color: #0075A2;
	}

	.time {
		font-size: 22rpx;
		color: #767676;
	}
}
.detail{
	padding: 0 25rpx;
	font-size: 34rpx;
	.title{
		font-size: 36rpx;
		font-weight: 600;
	}
	.price{
		color: #f00;
		font-size: 40rpx;
		font-weight: 600;
		padding-top: 20rpx;
	}
	.content{
		padding-top: 20rpx;
	}
	.img{
		width: 100%;
		margin-top: 20rpx;
		border-radius: 15rpx;
		overflow: hidden;
	}
}

	.btn-page{
		background-color: #FFFFFF;
		padding: 20rpx 25rpx;
		height: 100rpx;
		display: flex;
		justify-content: space-around;
		width: 100vw;
		position: fixed;
		bottom: 0;
		left: 0;
		box-shadow: 0rpx -8rpx 10rpx #0000000a;
		.btn{
			background-color: #ed3f14;
			width: 100%;
			border-radius:50rpx ;
			text-align: center;
			line-height: 60rpx;
			color: #ffffff;
			transition: .2s;
			&:active{
				filter: brightness(80%);
			}
		}
	}
</style>
