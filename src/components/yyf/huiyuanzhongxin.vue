<template>
    <div id="huiyuanzhongxin">
        <div id="top_s" @click="back()">
					<img src="../../../static/imgs/back.png" />
					<span>会员中心</span>
		 </div>
		 <div id="top">
			 <p>为账户<span v-html="this.$store.state.username"></span>购买会员</p>
		 </div>
		 <div id="center">
			 <div id="center_t">
				 <span>会员特权</span>
				 <span @click="huiyuanshuoming()">会员说明</span>
				 <img src="../../../static/imgs/youj.png" alt="">
			 </div>
			 <div id="center_c">
				 <img src="../../../static/imgs/s.jpg" alt="">
				 <div id="wz">
					 <p>减免配送费</p>
					 <p>每月减免30单，每日可减免3单，每单最高减4元</p>
					 <p>蜂鸟专送专享</p>
				 </div>
			 </div>
			 <div id="center_b">
				 <img src="../../../static/imgs/w.jpg" alt="">
				 <div id="wz2">
					 <p>减免配送费</p>
					 <p>每月减免30单，每日可减免3单，每单最高减4元</p>
					 <p>蜂鸟专送专享</p>
				 </div>
			 </div>
		 </div>
		 <div id="kthy">
			 <p>开通会员</p>
			 <div>
				 1个月<span>￥20</span>  
				 <div @click="zaixianzhifu()" id="gm">购买</div>
			 </div>
		 </div>
		 <div class="duihuanhuiyuan" @click="duihuanhuiyuan()">
			 <div class="n">
			 <span>兑换会员</span>
			 <span>使用卡号卡密</span>
			 <img src="../../../static/imgs/youj.png" alt="">
			 </div>
		 </div>
		  <div class="duihuanhuiyuan" @click="goumaijilu()">
			 <div class="n">
			 <span>购买记录</span>
			 <span id="kfp">开发票</span>
			 <img src="../../../static/imgs/youj.png" alt="">
			 </div>
		 </div>
    </div>
</template>
<script>
export default {
	name:'huiyuanzhongxin',
	methods:{
		huiyuanshuoming(){
			this.$router.push({name:"huiyuanshuoming"});
		},
		zaixianzhifu(){
			this.$router.push({name:"zaixianzhifu"});
		},
		back(){
			this.$router.back();
		},
		duihuanhuiyuan(){
			this.$router.push({name:"duihuanhuiyuan"});
		},
		goumaijilu(){
			this.$router.push({name:"goumaijilu"});
		}
	}
}
</script>
<style scoped>
#top_s {
				width: 3.75rem;
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
				font-size: 0.22rem;
                font-weight: 900;
				color: white;
				padding: 0.1rem; 
                text-align: center;
            }
			#top{
				width: 3.75rem;
				height: 0.5rem;
			}
			#top p{
				font-size: 0.15rem;
				color: #666;
				line-height: 0.5rem;
				margin-left: 0.15rem;
			}
			#top span{
				font-size: 0.15rem;
				color: black;
				font-weight: 800;
			}
			#center{
				width: 3.75rem;
				background-color: white;
			}
			#center_t{
				width: 3.75rem;
				height: 0.4rem;
				position: relative;
			}
			#center_t>span{
				font-size: 0.18rem;
				line-height: 0.4rem;
				font-weight: 200;
				margin-left: 0.1rem;
			}
			#center_t>span+span{
				font-size: 0.15rem;
				line-height: 0.4rem;
				font-weight: 200;
				color: #999;
				position: absolute;
				right: 0.2rem;
			}
			#center_t>img{
				width: 0.07rem;
				line-height: 0.4rem;
				position: absolute;
				right: 0.1rem;
				top: 0.15rem;
			}
			#center_c{
				width: 3.65rem;
				margin-left: 0.1rem;
				border-top: 0.01rem solid #f5f5f5;
				border-bottom: 0.01rem solid #f5f5f5;
				padding-top:  0.15rem; 
				padding-bottom:  0.15rem; 
			}
			#center_c img{
				width: 0.4rem;
				float: left;
			}
			#wz{
				margin-left: 0.5rem;
			}
			#wz>p:nth-child(1){
				font-size: 0.17rem;
				
			}
			#wz>p:nth-child(2){
				color: #999;
				font-size: 0.1rem;
				margin-top: 0.05rem;
			}
			#wz>p:nth-child(3){
				color: #999;
				font-size: 0.1rem;
				margin-top: 0.05rem;
			}
			#center_b{
				width: 3.65rem;
				margin-left: 0.1rem;
				padding-top:  0.15rem; 
				padding-bottom:  0.15rem; 
			}
			#center_b img{
				width: 0.4rem;
				float: left;
			}
			#wz2{
				margin-left: 0.5rem;
			}
			#wz2>p:nth-child(1){
				font-size: 0.17rem;
				
			}
			#wz2>p:nth-child(2){
				color: #999;
				font-size: 0.1rem;
				margin-top: 0.05rem;
			}
			#wz2>p:nth-child(3){
				color: #999;
				font-size: 0.1rem;
				margin-top: 0.05rem;
			}
			#kthy{
				width: 3.75rem;
				background-color: white;
				margin-top: 0.1rem;
				margin-bottom: 0.1rem;
			}
			#kthy>p{
				width: 3.65rem;
				font-size: 0.18rem;
				font-weight: 200;
				height: 0.4rem;
				line-height: 0.4rem;
				margin-left: 0.1rem;
			}
			#kthy>div{
				border-top: 0.01rem solid #f5f5f5;
				width: 3.65rem;
				height: 0.55rem;
				line-height: 0.55rem;
				margin-left: 0.1rem;
				font-size: 0.18rem;
			}
			#kthy>div span{
				color: #f60;
				font-weight: 700;
			}
			#gm{
				font-size: 0.18rem;
				color: #f60;
				width: 0.6rem;
				height: 0.25rem;
				border: 0.01rem solid #f60;
				border-radius: 0.03rem;
				text-align: center;
				line-height: 0.25rem;
				float: right;
				margin-top: 0.15rem;
				margin-right: 0.1rem;
			}
			.duihuanhuiyuan{
				width: 3.75rem;
				background-color:white;
				margin-bottom: 0.1rem;
			}
			.n{
				width: 3.65rem;
				margin-left: 0.1rem;
			}
			.n>span{
				width: 3.65rem;
				font-size: 0.18rem;
				font-weight: 200;
				height: 0.4rem;
				line-height: 0.4rem;
				margin-left: 0.1rem;
			}
			.n>span+span{
				width: 3.65rem;
				font-size: 0.15rem;
				font-weight: 200;
				height: 0.4rem;
				line-height: 0.4rem;
				color: #999;
				margin-left: 1.65rem;
			}
			.n>img{
				width: 0.07rem;
				float: right;
				margin-right: 0.1rem;
				margin-top: 0.15rem;
			}
			#kfp{
				margin-left: 2.1rem;
			}
</style>
