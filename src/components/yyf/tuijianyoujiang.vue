<template>
    <div id="tuijianyoujiang">
         <div id="top_s" @click="back()">
					<img src="../../../static/imgs/back.png" />
					<span>推荐有奖</span>
		 </div>
         <div id="tp">
             <img src="../../../static/imgs/activity.png" alt="">
         </div>
         <div id="yq">
             <div @click="tc()" id="yq_l"><img src="../../../static/imgs/wx.png" alt=""><p>邀请微信好友</p></div>
             <div @click="tc()" id="yq_c"><img src="../../../static/imgs/qq.png" alt=""><p>邀请QQ好友</p></div>
             <div @click="tc()" id="yq_r"><img src="../../../static/imgs/ewm.png" alt=""><p>面对面邀请</p></div>
         </div>
         <div id="center">
             <div id="center_l">
                 <p>累计收益</p>
                 <p><span>0</span>元</p>
             </div>
              <div id="center_r">
                 <p>成功邀请</p>
                 <p><span>0</span>人</p>
             </div>
         </div>
         <div id="symx">收益明细</div>
         <div id="bottom">
             <img src="../../../static/imgs/qb.png" alt="">
             <p>还不赶紧去邀请好友</p>
         </div>
         <!-- 弹窗 -->
         <div id="tankuang" v-if="tishi">
            <img src="../../../static/imgs/tishi2.jpg" alt="">
            <span>请在手机APP中设置</span>
            <p @click="qr()">确认</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'tuijianyoujiang',
    data(){
        return {
            tishi:false
        }
    },
    methods:{
         tc(){
             this.tishi=true;
        }
        ,
         qr(){
            this.tishi=false;
        },
        back(){
             this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
#tankuang{
    position: absolute;
    left: 0.4rem;
    top: 1.85rem;
    width: 2.95rem;
    height: 1.9rem;
    background-color: white;
    border-radius: 0.03rem;
    animation: 2s  bounceIn;
}
#tankuang img{
 width: 1.05rem;
 height: 1rem;
 margin-left:0.95rem; 
}
#tankuang span{
    font-size: 0.17rem;
    color:#333;
    position: absolute;
    left: 0.73rem; 
    bottom: 0.6rem;
}
#tankuang p{
    width: 2.95rem;
    height: 0.4rem;
    background-color: #4cd964;
    position: absolute;
    bottom: 0;
    text-align: center;
    line-height: 0.4rem;
    margin-top: 0.1rem;
    font-weight: 700;
    color: white;
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
            #tp{
                width: 3.75rem;
            }
            #tp img{
                width: 3.75rem;
                height: 2.3rem;
            }
            #yq{
                width: 3.75rem;
                margin-top: 0.05rem;
                background-color: white;
            }
            #yq>div{
                width: 1.25rem;
                float: left;
                 background-color: white;
            }
            #yq_l img{
                width: 0.5rem;
                margin-left: 0.375rem;
                margin-top: 0.2rem;
            }
            #yq_l p{
                font-size: 0.1rem;
                text-align: center;
                margin-top: 0.05rem;
                padding-bottom: 0.25rem;
            }
             #yq_c img{
                width: 0.5rem;
                margin-left: 0.375rem;
                margin-top: 0.2rem;
            }
            #yq_c p{
                font-size: 0.1rem;
                text-align: center;
                margin-top: 0.05rem;
                padding-bottom: 0.25rem;
            }
             #yq_r img{
                width: 0.5rem;
                margin-left: 0.375rem;
                margin-top: 0.2rem;
            }
            #yq_r p{
                font-size: 0.1rem;
                text-align: center;
                margin-top: 0.05rem;
                padding-bottom: 0.25rem;
            }
            #center{
                width: 3.75rem;
            }
            #center_l{
                margin-top: 0.2rem;
                width: 1.86rem;
                border-right:  0.01rem solid black;
                float: left;
            }
            #center_l>p{
                font-size: 0.1rem;
                text-align: center;
            }
            #center_l>p span{
                font-size: 0.2rem;
                color:#ff5633;
                font-weight: 800;
            }
             #center_r{
                margin-top: 0.2rem;
                width: 1.87rem;
                float: left;
            }
            #center_r>p{
                font-size: 0.1rem;
                text-align: center;
            }
            #center_r>p span{
                font-size: 0.2rem;
                color:#666;
                font-weight: 800;
            }
            #symx{
                font-size: 0.1rem;
                text-align: center;
                margin-top: 1.9rem;
            }
            #bottom{
                width: 3.75rem;
                margin-top: 0.2rem;
            }
            #bottom>img{
                width: 0.3rem;
                margin-left: 1.725rem;
            }
            #bottom p{
                font-size: 0.1rem;
                color: #999;
                text-align: center;
                margin-top: 0.1rem;
            }
</style>
