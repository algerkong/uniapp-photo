<template>
	<view class="page">
		<u-navbar back-text="发布订单">
			<slot name="right">
				<view class="btnAdd"><u-button class="btn" @click="submit">发布</u-button></view>
			</slot>
		</u-navbar>
		<view class="input-page">
			<view class="title"><u-input v-model="order.title" type="text" placeholder="标题" /></view>
			<view class="title"><u-input maxlength="4" v-model="order.tag" type="text" placeholder="标签" /></view>
			<view class="title"><u-input v-model="order.price" type="number" placeholder="价格" /></view>
			<u-input class="title" v-model="orderIs" type="select" @click="isSelect = true" placeholder="选择类型" />
			<view class="content">
				<u-input class="content-input" v-model="order.content" type="textarea" maxlength="10000" placeholder="写下你的需求..." :clearable="false" />
			</view>
			<view class="img-page">
				<u-upload ref="uUpload" :action="action" :file-list="fileList" :formData="imgFormData" max-count="9" del-bg-color="#b5b5b5" :auto-upload="false"></u-upload>
			</view>
		</view>
		<u-select v-model="isSelect" :list="selectIs" @confirm="confirm"></u-select>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
import { addOrder } from '@/api/order.js';
export default {
	data() {
		return {
			order: {},
			action: '',
			fileList: [],
			tag: {
				id: '',
				name: '发布到'
			},
			tagimg: '',
			imgFormData: {
				userId: '',
				orderId: ''
			},
			isUp: false,
			orderIs:'发订单',
			isSelect:false,
			selectIs:[
				 {
					value: 0,
					label: '发订单'
				},
				{
					value: 1,
					label: '求订单'
				}
			]
		};
	},
	mounted() {
		this.isUp=false
		this.action = this.$baseurl + '/api/upload';
		let userId = uni.getStorageSync('user').id;
		this.order.userId = userId;
		this.order.status = 0
		this.imgFormData.userId = userId;
	},
	watch: {
		isUp(newIs, oldIs) {
			if (newIs) {
				uni.$emit('refreshOrder');
				uni.navigateBack()
			}
		}
	},
	methods: {
		confirm(e) {
			this.order.is = e[0].value
			this.orderIs = e[0].label
		},
		async submit() {
			if(this.order.title==""||this.order.title==null){
				this.$refs.uToast.show({
					title: "请输入标题",
					type: 'error',
					icon: true,
					position: "top"
				})
				return
			}
			if(this.order.content==""||this.order.content==null){
				this.$refs.uToast.show({
					title: "请输入内容",
					type: 'error',
					icon: true,
					position: "top"
				})
				return
			}
			
			if(this.order.is==null){
				this.order.is = 0
			}
			if (this.$refs.uUpload.lists.length == 0) {
				this.$refs.uToast.show({
					title: "请添加至少一张图片",
					type: 'error',
					icon: true,
					position: "top"
				})
				return
			}
			
			console.log(this.order,'this.order');
			
			await addOrder(this.order).then(res => {
				this.imgFormData.orderId = res.data.data.id;
				this.$refs.uUpload.upload();
				this.isUp = true;
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	min-height: 100vh;
	background-color: #f2f1f6;
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
	background-color: #ffffff;
	margin-bottom: 15rpx;
	padding: 15rpx 20rpx;
	display: flex;
	align-items: center;
	.tag-text {
		margin-left: 20rpx;
	}
	.icon {
		font-size: 30rpx;
		text-align: center;
		width: 50rpx;
		height: 50rpx;
		line-height: 50rpx;
		background-color: #f2f1f6;
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
	background-color: #ffffff;
	padding: 20rpx;

	.title {
		padding: 5rpx 15rpx !important;
		background-color: #f2f1f6;
		border-radius: 10rpx;
		margin-bottom: 30rpx;
	}

	.content {
		margin-top: 10rpx;

		.content-input {
			min-height: 300rpx;
		}
	}
}

.img-add {
	font-size: 70rpx;
	color: #65676b;
	display: flex;
	height: 217rpx;
	justify-content: center;
	align-items: center;
	background-color: #f2f1f6;
	width: 100%;
	border-radius: 10rpx;
}
</style>
