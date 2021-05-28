<template>
	<view class="wrap">
		<u-waterfall v-model="flowList" ref="uWaterfall">
			<template v-slot:left="{leftList}">
				<view class="demo-warter" v-for="(item, index) in leftList" :key="index">
					<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
					<u-lazy-load threshold="-450"  :image="$baseurl+item.src" :index="index"></u-lazy-load>
				</view>
			</template>
			<template v-slot:right="{rightList}">
				<view class="demo-warter" v-for="(item, index) in rightList" :key="index">
					<u-lazy-load threshold="-450"  :image="$baseurl+item.src" :index="index"></u-lazy-load>
				</view>
			</template>
		</u-waterfall>
		<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
		<u-tabbar :list="tabbar"></u-tabbar>
	</view>
</template>

<script>
	import {
		getImgList
	} from "@/api/home.js"
	export default {
		data() {
			return {
				loadStatus: 'loadmore',
				flowList: [],
				query: {
					page: 0,
					count: 20
				},
				list: []
			}
		},
		computed: {
			tabbar() {
				return this.$store.state.tabbar
			}
		},
		onLoad() {
			this.addRandomData();
			
		},
		onReachBottom() {
			this.loadStatus = 'loading';
			// 模拟数据加载
			setTimeout(() => {
				this.addRandomData();
				this.loadStatus = 'loadmore';
			}, 1000)
		},
		methods: {
			async addRandomData() {
				this.query.page +=1
				await this.getImg()
				this.flowList = this.flowList.concat(this.list)
			},
			async getImg(){
				await getImgList(this.query).then(res=>{
					this.list = res.data.data.list
				})
			},
			remove(id) {
				this.$refs.uWaterfall.remove(id);
			},
			clear() {
				this.$refs.uWaterfall.clear();
			}
		}
	}
</script>

<style>
	/* page不能写带scope的style标签中，否则无效 */
	page {
		background-color: rgb(240, 240, 240);
	}
</style>

<style lang="scss" scoped>
	.demo-warter {
		margin: 10rpx;
		background-color: #ffffff;
		position: relative;
	}
	
	.demo-image {
		width: 100%;
	}
</style>