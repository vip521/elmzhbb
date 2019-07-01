<template>
    <div id="daijinquansm">
				<div id="top_s" @click="back()">
					<img src="../../../static/imgs/back.png" />
					<span>代金券说明</span>
				</div>
                <div id="center">
            <h4>Q1:什么是商家代金券</h4>
            <p>商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。</p>
            <h4>Q2:怎么获得商家代金券</h4>
            <p>进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。</p>
            <p>「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。</p>
            <h4>Q3:商家代金券使用条件</h4>
            <p>商家代金券仅限在指定商家使用</p>
            <p>商家代金券仅限在线支付使用</p>
            <p>每个订单只能使用一张商家代金券，不可与其他代金券叠加使用</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'daijinquansm',
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
