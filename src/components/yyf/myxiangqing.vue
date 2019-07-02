<template>
    <div>
    <div id="my">
<div id="top">
				<div @click="back()" id="top_s">
					<img src="../../../static/imgs/back.png" />
					<span>我的</span>
				</div>
				<div id="top_x">
					<div id="center">
						<div id="touxiang">
							<img :src="imageUrl" />
						</div>
						<div id="dl" @click="login()">
							<span v-html="this.$store.state.username"></span>
							<span><img src="../../../static/imgs/shouji.png"/>暂无绑定手机号</span>
							<img src="../../../static/imgs/youjiantou.png" />
						</div>

					</div>
				</div>
			</div>
			<div id="zjbf">
				<div class="zjbfd">
					<ul class="zjbf_l">
						<li @click="mybalance()" class="zjbf_lo">
							<span class="zjbf_los">
							0.00
							<b>元</b>
						</span>
							<span class="zjbf_ltx">
							我的余额
						</span>
						</li>
						<li @click="myyouhui()" class="zjbf_lo youhui">
							<span class="zjbf_los">
								3
							<b>个</b>
						</span>
							<span class="zjbf_ltx">
							我的优惠
						</span>
						</li>
						<li class="zjbf_lo" @click="jifen()">
							<span class="zjbf_losl">
							0
							<b>分</b>
						</span>
							<span class="zjbf_ltx">
							我的积分
						</span>
						</li>
					</ul>
					</div>
					<div id="dingdanx">
						<div id="wddd" @click="dingdan()">
							<img src="../../../static/imgs/icon-.png" />
							<span>我的订单</span>
							<img src="../../../static/imgs/iconfontjiantou2.png" />
						</div>
						<div id="sj" @click="jifenshangcheng()">
							<img src="../../../static/imgs/商家.png" />
							<span>积分商城</span>
							<img src="../../../static/imgs/iconfontjiantou2.png" />
						</div>
						<div id="hyk" @click="huiyuanzhongxin()">
							<img src="../../../static/imgs/huangguan.png" />
							<span>饿了么会员卡</span>
							<img src="../../../static/imgs/iconfontjiantou2.png" />
						</div>
					</div>
					<div id="fwx">
						<div id="fwzx" @click="fuwuzhongxin()">
							<div></div>
							<span>
								服务中心
							</span>
							<img src="../../../static/imgs/iconfontjiantou2.png"/>
						</div>
						<div id="elm">
							<img src="../../../static/imgs/eliaomo.png"/>
							<span>下载饿了么APP</span>
							<img src="../../../static/imgs/iconfontjiantou2.png"/>
						</div>
					</div>
				</div>
</div>
    </div>
</template>
<script>
export default {
	name:'myxiangqing',
	data(){
		return{
			name:"",
			imageUrl:""
		}
	},
	created(){
		this.getdata();
	},
    methods:{
		back(){
			this.$router.back();
		},
		 getdata(){
            const api = "https://elm.cangdu.org/v1/user/"+this.$store.state.nameid;
            this.$http({
              url:api,
              method:'get',
              //用于表示用户代理是否应该在跨域请求情况下从其他域发送cookies--不使用缓存数据
              withCredentials:true
            }).then(res=>{
                console.log(res);
                this.imageUrl ="https://elm.cangdu.org/img/"+res.data.avatar;
            })
        },
		mybalance(){
			this.$router.push({name:"mybalance"});
		},
		myyouhui(){
			this.$router.push({name:"myyouhui"});
		},
		dingdan(){
			this.$router.push({name:"ddlb"});
		},
		login(){
			 this.$router.push({name:"zhanghuxinxi"});
		},
		jifen(){
			this.$router.push({name:"wodejifen"});
		},
		jifenshangcheng(){
			this.$router.push({name:"jifenshangcheng"});
		},
		huiyuanzhongxin(){
			this.$router.push({name:"huiyuanzhongxin"});
		},
		fuwuzhongxin(){
			this.$router.push({name:"fuwuzhongxin"});
		}
		
	}
}
</script>
<style scoped>
* {
				margin: 0;
				padding: 0;
			}
			
			#top {
				width: 3.75rem;
				background-color: #3190e8;
				position: relative;
			}
			
			#top_s {
				width: 3.75rem;
				overflow: hidden;
			}
			
			#top_s>img {
				display: block;
				width: 0.1rem;
				float: left;
				margin-left: 0.1rem;
				margin-top: 0.1rem
			}
			
			#top_s>span {
				display: block;
				font-size: 0.2rem;
				color: white;
				margin-left: 1.7rem;
				margin-top: 0.12rem;
			}
			
			#top_x {
				width: 3.75rem;
			}
			
			#center {
				padding: 0.2rem;
				position: relative;
			}
			
			#touxiang {
				width: 0.6rem;
				height: 0.6rem;
				border-radius: 50%;
				position: relative;
			} 
			
			#touxiang>img {
				width: 0.6rem;
				height: 0.6rem;
				position: absolute;
				top: 0.04rem;
				border-radius: 50%;
			}
			#dl>span {
				width: 2.5rem;
				font-size: 0.17rem;
				color: white;
				position: absolute;
				left: 1rem;
				top: 0.3rem;
			}
			
			#dl>span+span {
				font-size: 0.14rem;
				color: white;
				position: absolute;
				left: 0.95rem;
				top: 0.5rem;
			}
			
			#dl>span+span img {
				width: 0.2rem;
			}
			#dl>img{
				width: 0.2rem;
				position: absolute;
				right: 0.1rem;
				top: 0.55rem;
			}
			#zjbf {
				width: 100%;
				background-color: WhiteSmoke;
			}
			
			.zjbf_l {
				width: 100%;
				list-style-type: none;
				overflow: hidden;
				background-color: white;
			}
			
			.zjbf_lo {
				width: 1.24rem;
				height: 0.8rem;
				/*border: 1px solid red;*/
				float: left;
				position: relative;
				/*background-color: white;*/
			}
			
			.youhui {
				border-left: 1px solid #f1f1f1;;
				border-right: 1px solid #f1f1f1;;
			}
			
			.zjbf_los {
				font-size: 0.25rem;
				color: #f90;
				position: absolute;
				left: 0.3rem;
				top: 0.1rem;
			}
			
			.zjbf_los>b {
				font-size: 0.1rem;
				color: black;
			}
			
			.zjbf_ltx {
				font-size: 0.13rem;
				color: #666;
				position: absolute;
				left: 0.4rem;
				top: 0.5rem;
			}
			
			.zjbf_losl {
				font-size: 0.25rem;
				color: green;
				position: absolute;
				left: 0.3rem;
				top: 0.1rem;
			}
			
			.zjbf_losl>b {
				font-size: 0.1rem;
				color: black;
			}
			
			#dingdanx {
				width: 100%;
				margin-top: 0.1rem;
				
			}
			
			#wddd {
				width: 100%;
				height: 0.3rem;
				/*border: 1px solid red;*/
				position: relative;
				background-color: white;
			}
			
			#wddd>img {
				width: 0.4rem;
				position: absolute;
				left: 0.1rem;
				display: block;
			}
			
			#wddd>span {
				font-size: 0.2rem;
				position: absolute;
				left: 0.5rem;
				float: left;
				color: #666;
				line-height: 0.3rem;
			}
			
			#wddd>span+img {
				width: 0.2rem;
				position: absolute;
				left: 3.5rem;
				margin-top: 0.05rem;
			}
			
			#sj {
				background-color: white;
				width: 100%;
				height: 0.3rem;
				position: relative;
				border-top: 0.01rem solid #f1f1f1;;
				border-bottom: 0.01rem solid #f1f1f1;;
			}
			
			#sj>img {
				width: 0.2rem;
				position: absolute;
				left: 0.2rem;
				display: block;
				margin-top: 0.05rem;
			}
			
			#sj>span {
				font-size: 0.2rem;
				position: absolute;
				left: 0.5rem;
				float: left;
				line-height: 0.3rem;
				color: #666;
			}
			
			#sj>span+img {
				width: 0.2rem;
				position: absolute;
				left: 3.5rem;
				margin-top: 0.05rem;
			}
			
			#hyk {
				background-color: white;
				width: 100%;
				height: 0.3rem;
				position: relative;
				border-bottom: 1px solid #f1f1f1;
			}
			
			#hyk>img {
				width: 0.2rem;
				position: absolute;
				left: 0.2rem;
				display: block;
				margin-top: 0.05rem;
			}
			
			#hyk>span {
				font-size: 0.2rem;
				position: absolute;
				left: 0.5rem;
				float: left;
				line-height: 0.3rem;
				color: #666;
			}
			
			#hyk>span+img {
				width: 0.2rem;
				position: absolute;
				left: 3.5rem;
				margin-top: 0.05rem;
			}
			#fwx{
				width: 100%;
				margin-top:0.1rem;
			}
			#fwzx{
				width: 100%;
				height: 0.4rem;
				background-color: white;
				position: relative;
				border-bottom: 1px solid #f1f1f1;;
			}
			#fwzx>div{
				width: 0.2rem;
				height: 0.2rem;
				background-color:royalblue;
				border: 1px solid royalblue;
				position: absolute;
				left: 0.2rem;
				top: 0.1rem;
			}
			#fwzx>span{
				font-size: 0.2rem;
				position: absolute;
				left: 0.5rem;
				float: left;
				line-height: 0.4rem;
				color: #666;
			}
			#fwzx>img{
				width: 0.2rem;
				position: absolute;
				left: 3.5rem;
				margin-top: 0.05rem;
			}
			#elm{
				width: 100%;
				height: 0.4rem;
				background-color: white;
				position: relative;
			}
			#elm>img{
				width: 0.2rem;
				position: absolute;
				left: 0.2rem;
				top: 0.05rem;
				margin-top: 0.05rem;
			}
			#elm>span{
				font-size: 0.2rem;
				position: absolute;
				left: 0.5rem;
				float: left;
				line-height: 0.4rem;
				color: #666;
			}
			#elm>span+img{
				width: 0.2rem;
				position: absolute;
				left: 3.5rem;
				margin-top: 0.05rem;
			}
</style>
