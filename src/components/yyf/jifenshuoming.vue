<template>
    <div id="jifenshuoming">
				<div id="top_s" @click="back()">
					<img src="../../../static/imgs/back.png" />
					<span>积分问题</span>
				</div>
                <div id="center">
            <h4>Q1:怎么获得积分</h4>
            <p>在线支付的订单将获得订单积分奖励：</p>
            <p>积分将在用户完成评价后获得。</p>
            <p>可获得积分=订单金额×10(即1元=10点积分)。</p>
            <p>订单金额指实际付款金额，不包括活动优惠金额。</p>
            <p>每位用户每天最多可获得2000积分，体验商家的订单和评价不会增加积分。</p>
            <h4>Q2:积分用来作什么</h4>
            <p>可以在积分商城兑换各种礼品</p>
            <h4>Q3:礼品兑换很多天了还没有收到，该怎么办</h4>
            <p>礼品从兑换日起，3个工作日(周末不算)内处理发货，发货后，通常会在3个工作日左右送达</p>
            <h4>Q4:礼品兑换中的手机充值卡兑换，怎么样进行充值，充值之前会和我电话确认吗</h4>
            <p>不会，手机充值卡兑换，是直接充值到您填写的手机号上，充值之前不会和您电话确认，所以您在填写电话的时候，请确认电话是否正确。</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'jifenshuoming',
    methods:{
        back(){
            this.$router.back();
        }
    }
}
</script>
<style scoped>
#jifenshuoming{
    width: 3.75rem;
    height: 100vh;
    background-color: white;
}
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
            }
            #center>h4{
                color: #333;
                line-height: 0.5rem;
                margin-left:0.1rem;
            }
            #center>p{
                color: #666;
                 margin-left:0.1rem;
                 line-height: 0.2rem;
                 font-size: 0.17rem;
            }
</style>
