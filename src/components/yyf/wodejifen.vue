<template>
    <div id="mybalance">
        <div id="top">
				<div id="top_s" @click="back()">
					<img src="../../../static/imgs/back.png" />
					<span>我的积分</span>
				</div>
                <div id="top_c">
				    <div id="top_ct">
                        <span>当前积分</span>
                        <a @click="jifenshuoming()">
                           <div id="wenhao">?</div>
                           <span>积分说明</span>
                        </a>
                    </div>
                    <div id="top_cc">
                        0
                        <span>分</span>
                    </div>
                    <div id="top_cb">积分兑换商品</div>
                </div>
			</div>
            <div id="center">
                <div id="center_t">
                    最近30天积分记录
                </div>
                <div id="center_b">
                        最近30天无积分记录
                </div>
                <p>快去下单赚取大量积分吧</p>
            </div>
    </div>
</template>
<script>
export default {
    name:'wodejifen',
    methods:{
jifenshuoming(){
   this.$router.push({name:"jifenshuoming"});
},
back(){
     this.$router.back();
}
    }
}
</script>
<style scoped>
* {
				margin: 0;
				padding: 0;
			}
			#mybalance{
                width: 3.75rem;
            }
			#top {
				width: 3.75rem;
                height: 2.5rem;
				background-color: #3190e8;
				position: relative;
			}
			
			#top_s {
				width: 100%;
				overflow: hidden;
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
				font-size: 0.25rem;
                font-weight: 900;
				color: white;
				padding: 0.15rem; 
                text-align: center;
			}
			#top_c{
                width: 3.55rem;
                height: 1.7rem;
                margin-left: 0.1rem;
                 background-color: white;
                 border-radius: 0.1rem;
            }
            #top_ct{
                width: 3.55rem;
                position: relative;
                margin-top: 0.1rem;
            }
            #top_ct>span{
                color: #666;
                font-size: 0.05rem;
                margin-left: 0.05rem;
                margin-top: 0.1rem;
            }
            #top_ct>a div{
                font-size: 0.15rem;
                display: inline-block;
                width: 0.2rem;
                height: 0.2rem;
                background-color:#3190e8;
                border-radius: 50%;
                text-align: center;
                margin-left: 2rem; 
                margin-top: 0.1rem;
            } 
            #top_ct>a span{
                font-size: 0.1rem;
                color: #3190e8;
            }
            #top_cc{
                font-size: 0.4rem;
                margin-left: 0.1rem;
            }
             #top_cc>span{
                 font-size: 0.1rem;
             }
             #top_cb{
                 width: 3.35rem;
                 height: 0.5rem;
                 font-size: 0.185rem;
                 line-height: 0.5rem;
                 color: white;
                 background-color: #ccc;
                 margin-top: 0.3rem;
                 margin-left: 0.1rem;
                 border-radius: 0.1rem;
                 text-align: center;
                 line-height: 0.5rem;
                 background-color: #fe6d47;
             }
             #center{
                 width: 3.75rem;
                 position: relative;
             }
             #center_t{
                 width: 3.75rem;
                 height: 0.5rem;
                  color: #999;
                 line-height: 0.5rem;
                 /* margin-left: 0.1rem; */
                 font-size: 0.1rem;
             }
             #center_b{
                 width: 3.75rem;
                 height: 0.5rem;
                 text-align: center;
                 color:  #666;
                 font-size: 0.185rem;
                 margin-top: 20vh;
             }
             #center p{
                 width: 3.75rem;
                 font-size: 0.1rem;
                 text-align: center;
                 position: absolute;
                 top: 32vh;
                 color: #999;
             }
</style>
