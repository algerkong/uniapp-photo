<template>
	<view class="comment" @longpress="longTime" v-if="del">
		<view class="comment-head">
				<u-image width="60rpx" height="60rpx" mode="aspectFill" :src="$baseurl + user.avatar"
					shape="circle"></u-image>
				<view class="user-text">
					<view class="user-nickname">{{user.nickName}}</view>
				</view>
				<view class="time">
					{{$rTime(comment.createdAt)}}
				</view>
		</view>
		<view class="content">
			{{comment.content}}
		</view>
		<u-modal v-if="comment.userId == id" v-model="show" :show-cancel-button="true" :content="content" @confirm="deleteComment"></u-modal>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import {
		getIdUser
	} from '@/api/user.js'
	import {
		delComment
	} from '@/api/dynamic.js'
	export default {
		name:"comment-item",
		props:{
			comment:{
				type:Object,
				default:{}
			}
		},
		data() {
			return {
				user:{},
				show:false,
				content:"确定要删除评论吗",
				id:null,
				del:true
			};
		},
		mounted() {
			this.id = uni.getStorageSync('user').id
			getIdUser(this.comment.userId).then(res=>{
				this.user = res.data.data
			})
		},
		methods:{
			longTime(){
				this.show=true
			},
			deleteComment(){
				console.log("aaaaaaaaaaaa")
				delComment(this.comment.id).then(res=>{
					this.$refs.uToast.show({
						title: "删除成功",
						type: 'success',
						icon: true,
						position: "top"
					})
					
					this.del = false
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.comment{
		padding: 20rpx 0rpx;
		&:active{
			background-color: #E4E7ED;
		}
	}
.comment-head{
	display: flex;
	align-items: center;
	.user-text {
		margin-left: 20rpx;
		flex: 1;
	
		.user-nickname {
			font-size: 26rpx;
		}
	
		.user-name {
			font-size: 26rpx;
			color: $uni-text-color-grey;
		}
	}
	
	.time {
		font-size: 22rpx;
		color: #767676;
	}
}

.content{
	padding-left: 80rpx;
	font-size: 26rpx;
}
</style>
