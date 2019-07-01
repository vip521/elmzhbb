<template>
    <div id="zaixianzhifu">
        <div id="top_s" @click="back()">
					<img src="../../../static/imgs/back.png" />
					<span>在线支付</span>
		 </div>
         <div id="center">
      <div id="pay">
      <p>支付剩余时间</p>
      <!-- 倒计时 -->
      <p>00:{{minute}}:{{second}}</p>
    </div>
    </div>
         <div id="center_x">
             选择支付方式
         </div>
         <div id="bottom">
             <div id="bottom_s">
                 <img src="../../../static/imgs/zfb.jpg" alt="">
                 <span>支付宝</span>
                 <img @click="aaa()" v-if="xz==false" src="../../../static/imgs/wxz.png" alt="">
                 <img @click="aaa()" v-if="xz==true" src="../../../static/imgs/xz.png" alt="">
             </div>
             <div id="bottom_x">
                 <img src="../../../static/imgs/wxzf.jpg" alt="">
                 <span>微信</span>
                 <img @click="bbb()" v-if="xy==true" src="../../../static/imgs/xz.png" alt="">
                 <img @click="bbb()" v-if="xy==false" src="../../../static/imgs/wxz.png" alt="">
             </div>
         </div>
         <div id="yes" @click="qt()">确认支付</div>
         <div id="tankuang" v-if="tishi">
            <img src="../../../static/imgs/tishi2.jpg" alt="">
            <p>当前环境无法支付，请打开官方APP进行付款</p>
            <p @click="qr()">确认</p>
        </div>

        <div id="tankuang" v-if="jl">
            <img src="../../../static/imgs/tishi2.jpg" alt="">
            <p id="gb">暂不开放支付功能</p>
            <p @click="gb()">确认</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'zaixianzhifu',
    data(){
        return {
            minutes: 15,
            seconds: 0,
            xz:true,
            xy:false,
            tishi:false,
            jl:true
        }
    },
    created(){
        this.num();
        this.add();
        // this.gb();
    },
    methods:{
        gb(){
             this.jl=false;
        },
        qt(){
             this.tishi=true;
        }
        ,
        qr(){
            this.$router.push({name:"dingdan"});
        },
        aaa(){
            this.xz = true;
            this.xy = false;
        },
        bbb(){
            this.xy = true;
            this.xz = false;
        },
        back(){
            this.$router.back();
        },
        num: function(n) {
      return n < 10 ? "0" + n : "" + n;
    },
    add: function() {
      var _this = this;
      var time = window.setInterval(function() {
        if (_this.seconds === 0 && _this.minutes !== 0) {
          _this.seconds = 59;
          _this.minutes -= 1;
        } else if (_this.minutes === 0 && _this.seconds === 0) {
          // _this.outshow = true;
          _this.seconds = 0;
          window.clearInterval(time);
        } else {
          _this.seconds -= 1;
        }
      }, 1000);
    },




    },
    computed: {
    second: function() {
      return this.num(this.seconds);
    },
    minute: function() {
      return this.num(this.minutes);
    }
  },
  watch: {
    second: {
      handler(newVal) {
        this.num(newVal);
      }
    },
    minute: {
      handler(newVal) {
        this.num(newVal);
      }
    }


}
};






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
                height: 1.5rem;
                background-color: white;
                position: relative;
            }
            #pay p:nth-child(1) {
  font-size: 0.15rem;
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
}
#pay p:nth-child(2) {
  font-size: 0.38rem;
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
}
#center_x{
    width: 3.55rem;
    height: 0.4rem;
    font-size: 0.15rem;
    margin-left: 0.1rem;
    color: #666;
    line-height: 0.4rem;
}
            #bottom{
                width: 3.75rem;
                background-color: white;
            }
            #bottom_s{
                width: 3.55rem;
                margin-left: 0.2rem;
                height: 0.75rem;
                position: relative;
                
            }
            #bottom_s>img{
                width: 0.45rem;
                border-radius: 50%;
                margin-top: 0.15rem;
            }
            #bottom_s>span{
                font-size: 0.18rem;
                color:  #666;
                margin-left: 0.1rem;
                position: absolute;
                top: 0.3rem;
            }
            #bottom_s>span+img{
                width: 0.25rem;
                float: right;
                margin-right: 0.1rem;
                margin-top: 0.25rem;
            }
            #bottom_x{
               width: 3.55rem;
                margin-left: 0.2rem;
                height: 0.75rem;
                position: relative;
                border-top: 0.01rem solid  #f5f5f5;
            }
            #bottom_x>img{
                width: 0.45rem;
                border-radius: 50%;
                margin-top: 0.15rem;
            }
             #bottom_x>span{
                font-size: 0.18rem;
                color:  #666;
                margin-left: 0.1rem;
                position: absolute;
                top: 0.3rem;
            }
             #bottom_x>span+img{
                width: 0.25rem;
                float: right;
                margin-right: 0.1rem;
                margin-top: 0.25rem;
            }
            #yes{
                width: 3.55rem;
                margin-left: 0.1rem;
                height: 0.4rem;
                background-color: #4cd964;
                text-align: center;
                line-height: 0.4rem;
                margin-top: 0.1rem;
                border-radius: 0.03rem;
                font-weight: 600;
                color: white;
            }
            #tankuang{
    position: absolute;
    left: 0.4rem;
    top: 1.9rem;
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
#tankuang p{
    width: 2.75rem;
    font-size: 0.17rem;
    color:#333;
    position: absolute;
    left: 0.1rem; 
    bottom: 0.6rem;
}
#tankuang>p+p{
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
#gb{
    text-align: center;
}
</style>
