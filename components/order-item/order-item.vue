<template>
	<view @click="toOrder">
		<u-lazy-load threshold="800" :image="$baseurl+item.imgs[0].src"/>
		<view class="item-b">
			
			<view class="title">{{item.title}}</view>
			<view class="price-tag">
				<view class="price">￥{{item.price}}</view>
				<u-tag :text="item.tag" type="info" size="mini" />
			</view>
			<view class="user">
				<u-avatar class="avatar" size="60"  :src="$baseurl+ item.user.avatar"></u-avatar>
				<view class="content">
					<view class="name">{{item.user.nickName}}</view>
					<view class="time">{{$rTime(item.createdAt)}}</view>
				</view>
				<view class="is" :class="item.is==1?'is-0':'is-1'">
					{{item.is==1?'求':'发'}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"order-item",
		data() {
			return {
				
			};
		},
		props:{
			item:{
				type:Object,
				default:{}
			}
		},
		methods:{
			toOrder(){
				uni.navigateTo({
					url:'/pages/order/orderDetail/orderDetail?id='+this.item.id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.item-b{
		padding: 15rpx;
		.title{
			font-size: 30rpx;
		}
		.price-tag{
			display: flex;
			justify-content: space-between;
			margin-top: 10rpx;
			font-size: 26rpx;
			align-items: center;
			.price{
				color: #ff0000;
				font-weight: 600;
			}
		}
		.user{
			display: flex;
			font-size: 24rpx;
			align-items: center;
			border-top: 1rpx solid #F2F1F6;
			padding-top: 10rpx;
			margin-top: 10rpx;
			justify-content: space-between;
			.content{
				flex: 1;
			}
			.avatar{
				margin-right: 15rpx;
			}
			.time{
				color: #b3b5b9;
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
		}
	}
</style>
