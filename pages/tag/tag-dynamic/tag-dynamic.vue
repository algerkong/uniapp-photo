<template>
	<scroll-view class="scroll-view" scroll-y style="height: 100%;width: 100%;" @scrolltolower="onreachBottom">
		<dynamic-item v-for="(item, index) in dynamicList" :dynamic="item" :key="item.id"></dynamic-item>
		<u-divider v-if="dynamicList.length > query.count-1" bg-color="#00000000">{{ loadStatus }}</u-divider>
		<view class="bottom"></view>
	</scroll-view>
</template>

<script>
import { getTagList, getTagDynamic } from '@/api/tag.js';
import dynamicItem from '@/components/dynamic-item/dynamic-item.vue';
export default {
	data() {
		return {
			dynamicList: [],
			loadStatus: '加载更多',
			query: {
				page: 1,
				count: 5
			}
		};
	},
	components: {
		dynamicItem
	},
	props: {
		id: {
			type: String,
			default: ''
		}
	},
	mounted() {
		this.show();
	},
	methods: {
		async show() {
			let body = {
				tagId: this.id
			};
			this.query = {
				page: 1,
				count: 5
			}
			await getTagDynamic(this.query, body).then(res => {
				this.dynamicList = res.data.body;
				uni.stopPullDownRefresh();
			});
		},
		// scroll-view到底部加载更多
		async onreachBottom() {
			this.loadStatus = '加载中...';
			let body = {
				tagId: this.id
			};
			if (this.loadStatus == '没有更多了') {
				return;
			}
			this.query.page += 1;
			await getTagDynamic(this.query, body).then(res => {
				let list = res.data.body;
				if (list.length == 0) {
					this.query.page -= 1;
					this.loadStatus = '没有更多了';
					return;
				} else {
					this.loadStatus = '加载更多';
				}
				this.dynamicList = this.dynamicList.concat(list);
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.scroll-view {
	width: 100vw;
	height: 100%;
	padding: 20rpx;
	padding-bottom: 0;
	box-sizing: border-box;
	background-color: #f2f1f6;
}
</style>
