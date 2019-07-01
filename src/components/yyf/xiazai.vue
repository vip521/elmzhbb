<template>
    <div id="xiazai">
        <div id="top_s" @click="back()">
					<img src="../../../static/imgs/back.png" />
					<span>下载</span>
				</div>
                <div id="center">
                    <img src="../../../static/imgs/eliaomo.png" alt="">
                    <p>下载饿了么APP</p>
                    <div>下载</div>
                </div>

    </div>
</template>
<script>
export default {
    name:'xiazai',
    methods:{
        back(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
#xiazai{
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
            #center img{
                margin-top:0.2rem;
                width: 2rem;
                margin-left: 0.875rem;
            }
             #center p{
                 font-size: 0.185rem;
                 margin-top: 0.1rem;
                 margin-bottom: 0.2rem;
                 color: #666;
                 text-align: center;
             }
             #center div{
                 width: 3.35rem;
                 height: 0.43rem;
                 background-color:  #4cd964;
                 margin-left: 0.2rem;
                 border-radius: 0.03rem;
                 text-align: center;
                 line-height: 0.43rem;
                 color: white;
             }
</style>
