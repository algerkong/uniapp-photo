<template>
	<view class="page">
		<u-navbar back-text="发布动态">
			<template v-slot:right>
				<u-button class="btnAdd" @click="submit">发布</u-button>
			</template>
		</u-navbar>
		<view class="check-tag" @click="toTag">
			<view class="icon" v-if="tagimg == ''"><u-icon name="plus"></u-icon></view>
			<u-image v-else :src="tagimg" width="50" height="50" border-radius="10"></u-image>
			<view class="tag-text">{{ tag.name }}</view>
			<view class="text" v-if="tag.id == ''">
				选择合适的板块
				<u-icon name="arrow-right"></u-icon>
			</view>
		</view>
		<view class="input-page">
			<view class="title"><u-input v-model="dynamic.title" type="text" placeholder="标题" /></view>
			<view class="content">
				<u-input class="content-input" v-model="dynamic.content" type="textarea" maxlength="10000" placeholder="分享你此刻的想法..." :clearable="false" />
			</view>
			<view class="img-page">
				<u-upload ref="uUpload" :action="action" :file-list="fileList" :formData="imgFormData" max-count="9" del-bg-color="#b5b5b5" :auto-upload="false"></u-upload>
			</view>
		</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
import { addDynamic } from '@/api/dynamic.js';
export default {
	data() {
		return {
			dynamic: {},
			action: '',
			fileList: [],
			tag: {
				id: '',
				name: '发布到'
			},
			tagimg: '',
			imgFormData: {
				userId: '',
				dynamicId: ''
			},
			isUp: false
		};
	},
	mounted() {
		this.isUp = false;
		this.action = this.$baseurl + '/api/upload';
		let userId = uni.getStorageSync('user').id;
		this.dynamic.userId = userId;
		this.imgFormData.userId = userId;
	},
	watch: {
		isUp(newIs, oldIs) {
			if (newIs) {
				// let pages = getCurrentPages();
				// let prevPage = pages[pages.length - 2]; //上一页页面实例
				// // console.log(prevPage,"prevPage");
				// prevPage.onLoad();
				uni.$emit('refreshData');
				uni.navigateBack();
			}
		}
	},
	methods: {
		async submit() {
			if (this.tag.id != '') {
				this.dynamic.tagId = this.tag.id;
			}
			if (this.$refs.uUpload.lists.length == 0) {
				this.dynamic.isImg = 0;
			}
			if (this.dynamic.title == '' || this.dynamic.title == null) {
				this.$refs.uToast.show({
					title: '请输入标题',
					type: 'error',
					icon: true,
					position: 'top'
				});
				return;
			}
			if (this.dynamic.content == '' || this.dynamic.content == null) {
				this.$refs.uToast.show({
					title: '请输入内容',
					type: 'error',
					icon: true,
					position: 'top'
				});
				return;
			}
			await addDynamic(this.dynamic).then(res => {
				this.imgFormData.dynamicId = res.data.data.id;
				this.$refs.uUpload.upload();
				this.isUp = true;
			});
		},
		toTag() {
			uni.navigateTo({
				url: '/pages/tag/chooseTag/chooseTag'
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
	height: 60rpx;
	font-size: 28rpx;
	margin-right: 30rpx;
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
		padding: 5rpx 15rpx;
		background-color: #f2f1f6;
		border-radius: 10rpx;
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
