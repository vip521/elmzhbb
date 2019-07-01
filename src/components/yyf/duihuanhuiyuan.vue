<template>
    <div id="duihuanhuiyuan">
       <div id="top_s" @click="back()">
					<img src="../../../static/imgs/back.png" />
					<span>兑换会员</span>
		</div> 
		<div id="top">
			成功兑换后将关联到当前帐号:<span v-html="this.$store.state.username"></span>
		</div>
		<div id="center">
			<input type="text" placeholder="请输入10位卡号">
			<input id="center_x" type="text" placeholder="请输入6位卡密">
		</div>
		<div id="yes">兑换</div>
		<p id="a">———温馨提示———</p>
		<div id="bottom">
			
			<p>新兑换的会员服务，权益以「会员说明」为准。</p>
			<p>月卡：30次减免配送费</p>
			<p>季卡：90次减免配送费</p>
			<p>年卡：360次减免配送费</p>
			<p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
		</div>
    </div>
</template>
<script>
export default {
    name:'duihuanhuiyuan',
    methods:{
        back(){
			this.$router.back();
		},
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
				color: #666;
				width: 3.6rem;
				height: 0.4rem;
				line-height: 0.4rem;
				margin-left: 0.15rem;
				font-size: 0.16rem;
			}
			#top span{
				font-weight: 700;
				color: black;
			}
			#center{
				width: 3.75rem;
			}
			#center input{
				width: 3.65rem;
				height: 0.5rem;
				font-size: 0.17rem;
				padding-left: 0.1rem;
			}
			#center_x{
				border-top: 0.01rem solid #f5f5f5;
			}
			#yes{
				width: 3.55rem;
				height: 0.4rem;
				color: white;
				text-align: center;
				line-height: 0.4rem;
				margin-top: 0.2rem;
				border-radius: 0.03rem;
				background-color: #4cd964;
				margin-left: 0.1rem;
			}
			#bottom{
				width: 3.45rem;
				margin-left: 0.3rem;
				font-size: 0.13rem;
				color:  #aaa;
			}
			#bottom>p{
				margin-top: 0.05rem;
			}
			#a{
				text-align: center;
				padding-top: 0.2rem;
				padding-bottom: 0.2rem;
				font-size: 0.15rem;
				text-align: center;
				color:  #aaa;
			}
</style>
