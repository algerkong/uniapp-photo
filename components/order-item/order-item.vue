<template>
	<view>
		<u-lazy-load threshold="800" :image="$baseurl+item.imgs[0].src" :index="index"/>
		<view class="item-b">
			<view class="title">{{item.title}}</view>
			<view class="price-tag">
				<view class="price">￥{{item.price}}</view>
				<u-tag :text="item.tag" type="info" size="mini" />
			</view>
			<view class="user">
				<u-avatar class="avatar" size="60"  :src="$baseurl+ item.user.avatar"></u-avatar>
				<view>
					<view class="name">{{item.user.nickName}}</view>
					<view class="time">{{$rTime(item.createdAt)}}</view>
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
			.avatar{
				margin-right: 15rpx;
			}
			.time{
				color: #b3b5b9;
			}
		}
	}
</style>
