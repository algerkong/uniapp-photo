<template>
	<view class="page">
		<u-navbar back-text="选择标签"></u-navbar>
		<view class="tag-list">
			<view class="tag-item" v-for="(item, index) in list" :key="item.id" @click="back(item,'https://picsum.photos/200?random=' + index)">
				<u-image :src="'https://picsum.photos/200?random=' + index" width="80" height="80" border-radius="10"></u-image>
				<view class="tag-text">{{ item.name }}</view>
				<view class=""><u-icon name="arrow-right"></u-icon></view>
			</view>
		</view>
	</view>
</template>

<script>
import { getTagList } from '@/api/tag.js';
export default {
	data() {
		return {
			list: []
		};
	},
	mounted() {
		getTagList().then(res => {
			this.list = res.data.data.list;
		});
	},
	methods: {
		back(item,img) {
			let pages = getCurrentPages();
			let prevPage = pages[pages.length - 2]; //上一页页面实例
			prevPage.$vm.tag = item;
			prevPage.$vm.tagimg = img
			
			console.log(img)
			uni.navigateBack({
				delta: 1
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

.tag-list {
	background-color: #ffffff;
	border-radius: 10rpx;
	margin: 20rpx;
	overflow: hidden;
	.tag-item {
		padding: 20rpx;
		background-color: #ffffff;
		transition: 0.3s;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #65676b;
		&:active {
			filter: brightness(80%);
		}

		.tag-text {
			flex: 1;
			font-size: 34rpx;
			margin-left: 20rpx;
			color: #333333;
		}
	}
}
</style>
