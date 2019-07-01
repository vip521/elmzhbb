<template>
    <div id="goumaijilu">
       <div id="top_s" @click="back()">
					<img src="../../../static/imgs/back.png" />
					<span>兑换会员</span>
		</div> 
        <img src="../../../static/imgs/jl.png" alt="">
        <p>
            没有购买记录
        </p>
    </div>
</template>
<script>
export default {
    name:'goumaijilu',
    methods:{
        back(){
			this.$router.back();
		},
    }
}
</script>
<style scoped>
#goumaijilu{
    width: 3.75rem;
    height: 100vh;
    background-color: #fff;
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
             #goumaijilu>img{
                width:2rem;
                margin-top: 1.5rem;
                margin-left: 0.875rem;
            }
            #goumaijilu>p{
                color: #999;
                text-align: center;
                font-size: 0.15rem;
                margin-top: 0.2rem;
            }
			
</style>
