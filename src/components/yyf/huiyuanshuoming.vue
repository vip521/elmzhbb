<template>
    <div id="huiyuanshuoming">
        <div id="top_s">
					<img src="../../../static/imgs/back.png" />
					<span>我的</span>
		</div>
        <div id="center">
                <div id="center_nt">
                    尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化：
              购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。
              注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。
                </div>
                <h3>Q1:特权介绍</h3>
            <p>身份标识：饿了么会员服务有效期内，享有专属皇冠标识。</p>
            <p>减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。</p>
            <p>更多特权，敬请期待！</p>
            <h3>Q2:资费介绍</h3>
            <p>饿了么会员卡20元</p>
            <h3>Q3:使用说明</h3>
            <p>当用户满足以下任一条件，会员服务自动失效：</p>
            <p class="a">自绑定之日起超过31天；</p>
            <p class="a">在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</p>
            <h3>购卡说明</h3>
            <p>在线购买：饿了么App&gt;我的&gt;饿了么会员卡</p>
            <h3>温馨提示</h3>
            <p>用户在当前会员服务失效前，无法购买新卡。</p>
            <p>请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</p>
            </div>
    </div>
</template>
<script>
export default {
    name:'huiyuanshuoming'
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
            #center{
                width: 3.75rem;
                height: 100vh;
                background-color:white;
            }
            #center_nt{
                width: 2.5rem;
                margin-left: 0.625rem;
                padding-top: 0.15rem;
                color: #333;
                font-weight: 400;
            }
            h3{
                width: 3.55rem;
                margin-left: 0.1rem;
                font-weight: 700;
                margin-top: 0.2rem;
            }
            p{
                font-size: 0.14rem;
                width: 3.55rem;
                margin-left: 0.1rem;
                margin-top: 0.1rem;
            }
            .a{
                width: 3.25rem;
                margin-left: 0.5rem;
            }
</style>
