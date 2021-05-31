<template>
	<view>
		
		<swiper :duration="500" vertical class="verticalSwiper" :current="currentDynamic">
			<swiper-item class="swiper-item" v-for="(dynamic,dynamicIndex) in dynamicList">
				<view>
					<dynamic-full-item :dynamic="dynamic"></dynamic-full-item>
				</view>
			</swiper-item>
		</swiper>
		
	
	</view>
</template>

<script>
import datas from '@/utils/datas.js';
import dynamicFullItem from '@/components/dynamic-full-item/dynamic-full-item.vue'
import {
		getDayDynamic,
		getImgList,
		getImgDynamic
	} from "@/api/home.js"
export default {
	data() {
		return {
			
			dynamicDetail: {},
			dynamicList: [],
			imgIndex:0,
			currentImg:0,
			currentDynamic:0,
			queryImg:{},
			index:0
		};
	},
	components:{
		dynamicFullItem
	},
	onShow() {
		this.dynamicDetail = datas.dynamicDetail;
		this.dynamicList = datas.dynamicList;
		this.queryImg = datas.dynamicQuery;
		this.currentDynamic = datas.dynamicDetail.index
		this.index = datas.dynamicDetail.index
		
		setTimeout(()=>{
			uni.setNavigationBarColor({
			    frontColor: '#ffffff',
			    animation: {
			        duration: 400,
			        timingFunc: 'easeIn'
			    }
			})
		},1000)
	},
	watch:{
	},
	methods:{
		changeSwiper(e){
			this.imgIndex = e.detail.current
		},
		toImg(index){
			this.currentImg = index
		},
		// changeVerticalSwiper(e){
		// 	let current = e.detail.current
			
		// 	console.log(current,"current")
		// 	if(current-2<=0){
		// 		current = 2
		// 	}
			// this.dynamicList = datas.dynamicList.slice(current-2,current+2)
			
		// 	console.log(this.dynamicList,"this.dynamicList",this.dynamicList.length)
		// }
	}
};
</script>

<style lang="scss" scoped>
movable-view {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
}

movable-area {
	height: 100%;
	width: 100%;
	position: fixed;
	overflow: hidden;
}

movable-view image {
	width: 100%;
}

uni-image>img{
	z-index: -1 !important;
}


.verticalSwiper{
	height: 100vh;
	width: 100vw;
	&>.swiper-item{
		height: 100vh;
		width: 100vw;
	}
}




.swiper-img {
	width: 100vw;
	height: 100vh;
	background-color: #000000;
	&>.swiper-item {
		width: 100vw;
		height: 100vh;
		.img-page {
			height: 100vh;
			display: flex;
			align-items: center;
		}
	}
}

.small-list {
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	z-index: 999999;
	bottom: 100rpx;
	left: 0rpx;
	.img-page {
		display: inline-block;
		margin-right: 20rpx;
		border: 2rpx solid #c2c2c2;
		transition: ease-in .2s; 
		border-radius: 11rpx;
		&:last-child {
			margin-right: 0;
		}
	}
	.img-page-checked{
		transform: scale(1.2);
		border: 4rpx solid #ffffff;
	}
}


</style>
