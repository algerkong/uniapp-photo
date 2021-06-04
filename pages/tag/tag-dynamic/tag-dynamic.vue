<template>
	<view class="page">
			<dynamic-item v-for="(item,index) in dynamicList" :dynamic="item"></dynamic-item>
			<view class="bottom"></view>
	</view>
</template>

<script>
	import {
		getTagList,
		getTagDynamic
	} from '@/api/tag.js'
	import dynamicItem from '@/components/dynamic-item/dynamic-item.vue'
	export default {
		data() {
			return {
				dynamicList: [],
				query: {
					page: 1,
					count: 20
				}
			};
		},
		components: {
			dynamicItem
		},
		props: {
			id: {
				type: String,
				default: ""
			},
		},
		mounted() {
			let body = {
				tagId: this.id
			}
			getTagDynamic(this.query, body).then(res => {
				this.dynamicList = res.data.body
			})
		},
		methods: {
			// scroll-view到底部加载更多
			onreachBottom() {

			}
		}
	}
</script>

<style lang="scss" scoped>
	.page{
		width: 100vw;
		padding: 20rpx;
		box-sizing: border-box;
		background-color: #F2F1F6;
	}
	
	
</style>
