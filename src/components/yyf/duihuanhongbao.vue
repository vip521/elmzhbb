<template>
    <div>
        <div id="top_s" @click="back()">
					<img src="../../../static/imgs/back.png" />
					<span>兑换红包</span>
				</div>
                <div id="input">
                    <input id="inp1" type="text" placeholder="请输入兑换码">
                    <!-- <input id="inp2" type="text" placeholder="验证码"> -->
                    <div id="yzm">
            <input id="yzm_l" v-model="codeNumber" placeholder="验证码" type="text">
            <div id="yzm_r">
            <img class="img_p" :src="code&&code" alt="">
            <div class="changYzm">
            <p>看不清 </p>
            <p class="img_b" @click="getcode()">换一张</p>              
            </div> 
            </div> 
            </div>
            </div>
                <div id="duihuan">兑换</div>
    </div>
</template>
<script>
export default {
    name:'duihuanhongbao',
     data(){
        return{
            code:"",//存储验证码,64位图片
            codeNumber:""//输入框的值-验证码
        }
    },
     created(){
        //获取验证码
        this.getcode();
    },
     methods:{
         getcode(){
            const api = "https://elm.cangdu.org/v1/captchas";
            this.$http({
              url:api,
              method:'post',
              //用于表示用户代理是否应该在跨域请求情况下从其他域发送cookies--不使用缓存数据
              withCredentials:true
            }).then(res=>{
                console.log("验证码");
                console.log(res);
                this.code =res.data.code;
            })
        },
        back(){
            this.$router.back();
        }
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
            #input{
                width: 3.75rem;
                margin-top: 0.15rem;
            }
            #inp1{
                width: 3.45rem;
                height: 0.5rem;
                color: #666;
                border-radius: 0.03rem;
                  margin-left: 0.1rem;
                  padding-left:  0.1rem;
                  font-size: 0.15rem;
                  font-weight: 700;
            }
             
            #yzm{
                width: 3.55rem;
                height: 0.5rem;
                margin-left: 0.1rem;
                margin-top: 0.15rem;
                border-radius: 0.03rem;
                /* border: 1px solid red; */
            }
            #yzm_l{
                width: 2rem;
                height: 0.5rem;
                color: #666;
                border-radius: 0.03rem;
                padding-left: 0.1rem;
                font-size: 0.15rem;
                font-weight: 700;
                background-color: white;
                border-radius: 0.03rem;
            }
            #yzm_r{
                width: 1.35rem;
                background-color:white;
                height: 0.5rem;
                float: right;
                border-radius: 0.03rem;
            }
            .img_p{
                width: 0.8rem;
                height: 0.3rem;
                margin-left: 0.05rem;
                margin-top: 0.1rem;

            }
            .changYzm{
                width: 0.45rem;
                height: 0.3rem;
                margin-top: 0.1rem;
                float: right;
            }
            .changYzm p{
                font-size: 0.03rem;
            }
            .changYzm>p+p{
                font-size: 0.03rem;
                margin-top: 0.05rem;
                color: #3b95e9;
            }
            #duihuan{
                width: 3.55rem;
                height: 0.4rem;
                border-radius: 0.03rem;
                background-color:  #4cd964;
                margin-left: 0.1rem;
                margin-top: 0.15rem;
                text-align: center;
                line-height: 0.4rem;
                color: white;
            } 
</style>
