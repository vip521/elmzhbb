<template>
<div id="one">
    <div id="yueshuoming">
        <div id="top" @click="back()">
					<img src="../../../static/imgs/back.png" />
					<span>余额问题</span>
		</div>
        <div id="center">
            <h3>Q1:使用余额的条件</h3>
            <p>为了保护账户安全，使用余额前必须先绑定手机号。</p>
            <h3>Q2:余额可以怎么用？</h3>
            <p>余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。</p>
            <h3>Q3:我要如何提现？</h3>
            <p>为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额。</p>
            <h3>Q4:为什么会提现失败</h3>
            <p>可能原因有：您的姓名、开户行、银行卡号等信息不匹配；您当日的提现次数和金额超过限制；您的账户存在异常，被风控拦截。</p>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:'yueshuoming',
    methods:{
        back(){
            this.$router.back();
        }
    }
}
</script>
<style scoped>
#one{
    height: 100vh;
    background-color: white;
}
#yueshuoming{
    width: 3.75rem;
    background-color: white;
}
#top {
				width: 3.75;
				overflow: hidden;
                background-color: #3190e8;
			}
			
			#top>img {
				display: block;
				width: 0.12rem;
				float: left;
				margin-left: 0.1rem;
				margin-top: 0.1rem
			}
			
			#top>span {
				display: block;
				font-size: 0.25rem;
                font-weight: 900;
				color: white;
				padding: 0.15rem; 
                text-align: center;
			}
            #center{
                width: 3.75rem;
            }
            #center>h3{
                color: #333;
                line-height: 0.5rem;
                margin-left:0.1rem;
            }
            #center>p{
                color: #666;
                 margin-left:0.1rem;
                 line-height: 0.2rem;
            }
</style>
