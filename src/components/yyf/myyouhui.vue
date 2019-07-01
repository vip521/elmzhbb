<template>
    <div id="myyouhui">
        <div id="top_s" @click="back()">
					<img src="../../../static/imgs/back.png" />
					<span>我的优惠</span>
				</div>
				<div id="hb">
					<router-link :to="{name:'hongbao'}"><span>红包</span></router-link>
					<router-link :to="{name:'daijinquan'}"><span>商家代金券</span></router-link>
					<!-- <router-link to=""> </router-link> -->
				</div>
				<router-view></router-view>
    </div>
	
</template>
<script>
export default {
	name:'myyouhui',
	data(){
		return{
			show:false
		}
	},
	methods:{
		back(){
			this.$router.back();
		}
	}
}
</script>
<style scoped>
#top_s {
				width: 3.75rem;
				height: 0.5rem;
				overflow: hidden;
                background-color: #3190e8;
			}
			
			#top_s>img {
				display: block;
				width: 0.12rem;
				float: left;
				margin-left: 0.1rem;
				margin-top: 0.1rem
			}
			
			#top_s>span {
				display: block;
				font-size: 0.185rem;
                font-weight: 900;
				color: white;
				/* padding: 0.1rem;  */
				text-align: center;
				line-height: 0.5rem;
			}
			#hb{
				width: 3.75rem;
				height: 0.5rem;
				background-color: white;
			}
			#hb span{
				width: 1.875rem;
				float: left;
				font-size: 0.165rem;
				text-align: center;
				line-height: 0.5rem;
				color: black;
				border-bottom-color: #3190e8;
				border-bottom: 0.01rem;
			}
</style>
