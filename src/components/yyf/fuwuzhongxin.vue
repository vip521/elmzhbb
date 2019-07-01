<template>
    <div id="fuwuzhongxin">
        <div id="top_s" @click="back()">
					<img src="../../../static/imgs/back.png" />
					<span>服务中心</span>
				</div>
        <div id="top">
            <div id="top_l">
                <img src="../../../static/imgs/kefu.png" alt="">
                <p>在线客服</p>
            </div>
            <div id="top_r">
                <img src="../../../static/imgs/dianhua.png" alt="">
                <p>在线客服</p>
            </div>
        </div>
        <div id="wenti">
            <span>热门问题</span>
        </div> 

            <div @click="servicede1()" id="rule">
                <p id="rulep">{{explain.supervipCaption}}</p>
                <img id="rimg1" src="../../../static/imgs/right.png" alt="">
            </div>
            
            <div @click="servicede2()" id="rule">
                <p id="rulep">{{explain.signCaption}}</p>
                <img id="rimg1" src="../../../static/imgs/right.png" alt="">
            </div>

            <div @click="servicede3()" id="rule">
                <p id="rulep">{{explain.rankCaption}}</p>
                <img id="rimg1" src="../../../static/imgs/right.png" alt="">
            </div>

            <div @click="servicede4()" id="rule">
                <p id="rulep">{{explain.pointtextCaption}}</p>
                <img id="rimg1" src="../../../static/imgs/right.png" alt="">
            </div>

            <div @click="servicede5()" id="rule">
                <p id="rulep">{{explain.phototutorialCaption}}</p>
                <img id="rimg1" src="../../../static/imgs/right.png" alt="">
            </div>

            <div @click="servicede6()" id="rule">
                <p id="rulep">{{explain.paymentCaption}}</p>
                <img id="rimg1" src="../../../static/imgs/right.png" alt="">
            </div>

            <div @click="servicede7()" id="rule">
                <p id="rulep">{{explain.otherCaption}}</p>
                <img id="rimg1" src="../../../static/imgs/right.png" alt="">
            </div>

            <div @click="servicede8()"  id="rule">
                <p id="rulep">{{explain.ontimeCaption}}</p>
                <img id="rimg1" src="../../../static/imgs/right.png" alt="">
            </div>

            <div @click="servicede9()" id="rule">
                <p id="rulep">{{explain.memberTimesCaption}}</p>
                <img id="rimg1" src="../../../static/imgs/right.png" alt="">
            </div>

            <!-- <div id="rule">
                <p id="rulep">{{explain.memberPartCutCaption}}</p>
                <img id="rimg1" src="../../assets/right.png" alt="">
            </div> -->
            
            <!-- <div id="rule">
                <p id="rulep">{{explain.memberFullCutCaption}}</p>
                <img id="rimg1" src="../../assets/right.png" alt="">
            </div> -->

            <!-- <div id="rule">
                <p id="rulep">{{explain.memberCaption}}</p>
                <img id="rimg1" src="../../assets/right.png" alt="">
            </div> -->

             <div @click="servicede10()" id="rule">
                <p id="rulep">{{explain.hongbaoCaption}}</p>
                <img id="rimg1" src="../../../static/imgs/right.png" alt="">
            </div>

            <div @click="servicede11()" id="rule">
                <p id="rulep">{{explain.freshmanCaption}}</p>
                <img id="rimg1" src="../../../static/imgs/right.png" alt="">
            </div>

            <div @click="servicede12()" id="rule">
                <p id="rulep">{{explain.forgotCaption}}</p>
                <img id="rimg1" src="../../../static/imgs/right.png" alt="">
            </div>

            <div @click="servicede13()" id="rule">
                <p id="rulep">{{explain.discountCaption}}</p>
                <img id="rimg1" src="../../../static/imgs/right.png" alt="">
            </div>

            <div @click="servicede14()" id="rule">
                <p id="rulep">{{explain.disclaimerCaption}}</p>
                <img id="rimg1" src="../../../static/imgs/right.png" alt="">
            </div>

            <div @click="servicede15()" id="rule">
                <p id="rulep">{{explain.couponCaption}}</p>
                <img id="rimg1" src="../../../static/imgs/right.png" alt="">
            </div>

             <div @click="servicede16()" id="rule">
                <p id="rulep">{{explain.businessCaption}}</p>
                <img id="rimg1" src="../../../static/imgs/right.png" alt="">
            </div>

            <div @click="servicede17()" id="rule">
                <p id="rulep">{{explain.balanceCaption}}</p>
                <img id="rimg1" src="../../../static/imgs/right.png" alt="">
            </div>

            <div @click="servicede18()" id="rule">
                <p id="rulep">{{explain.awesomeRestaurantCaption}}</p>
                <img id="rimg1" src="../../../static/imgs/right.png" alt="">
            </div>

            <div @click="servicede19()" id="rule">
                <p id="rulep">{{explain.anonymousBuyCaption}}</p>
                <img id="rimg1" src="../../../static/imgs/right.png" alt="">
            </div>

            <div @click="servicede20()" id="rule">
                <p id="rulep">{{explain.activityCaption}}</p>
                <img id="rimg1" src="../../../static/imgs/right.png" alt="">
            </div>

    </div>
</template>
<script>
export default {
    name:"fuwuzhongxin",
    data(){
        return {
         explain:"",
        }
    },
    created() {
        this.getproblem();
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        getproblem(){
            const api = "https://elm.cangdu.org/v3/profile/explain";
            this.$http({
                 url:api,
                method:"get",
            }).then(res=>{
                console.log(res)
                this.explain=res.data;
                
            })
        },
        servicede1(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.supervipContent,
                 B:b,
                    title:this.explain.supervipCaption},
            })
        },
        servicede2(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.signContent,
                 B:b,
                    title:this.explain.signCaption},
            })
        },
        servicede3(){
            var b = true;
            this.$router.push({
                name:"servicede",
                 query:{data:this.explain.rankContent,
                  B:b,
                    title:this.explain.rankCaption},
            })
        },
        servicede4(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.pointtextContent,
                 B:b,
                    title:this.explain.pointtextCaption},
            })
        },
        servicede5(){
            var a = 1;
            var b = false;
            var str = this.explain.phototutorialContent;
            var arr = [];
            var reg1 = /\([^\)]+\)/g;
            str.replace(reg1, function(s,value) {
//          alert(value); // value 就是 123456
            var s2 = s.substring(1,s.length-1);
            arr.push(s2);//所有图片的路径
       })
       var str2 = this.explain.phototutorialContent;
       var arr2 = [];
    var reg2 = /#{2}[^\<]+(。|~)/g;
    str.replace(reg2, function(s,value) {
//  console.log(s);
//  console.log(value);
    var s3 = s.substring(2,s.length-2);
    console.log(s3);
    
    arr2.push(s3);//所有图片的路径
    
    
       })
            this.$router.push({
                name:"servicede",              
                query:{data:arr,
                    datas:arr2,
                    A:a,
                    B:b,
                    title:this.explain.phototutorialCaption},
            })
            console.log(this.explain.phototutorialContent);
             
        },
        servicede6(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.paymentContent,
                 B:b,
                    title:this.explain.paymentCaption},
            })
        },
        servicede7(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.otherContent,
                 B:b,
                    title:this.explain.otherCaption},
            })
        },
        servicede8(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.ontimeContent,
                 B:b,
                    title:this.explain.ontimeCaption},
            })
        },
        servicede9(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.memberTimesContent,
                 B:b,
                    title:this.explain.memberTimesCaption},
            })
        },
        servicede10(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.hongbaoContent,
                 B:b,
                    title:this.explain.hongbaoCaption},
            })
        },
        servicede11(){
            var b = true;
            this.$router.push({
                name:"servicede",
                 query:{data:this.explain.freshmanContent,
                 B:b,
                    title:this.explain.freshmanCaption},
            })
        },
        servicede12(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.forgotContent,
                 B:b,
                    title:this.explain.forgotCaption},
            })
        },
        servicede13(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.discountContent,
                B:b,
                title:this.explain.discountCaption
                    },
            })
        },
        servicede14(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.disclaimerContent,
                 B:b,
                    title:this.explain.disclaimerCaption},
            })
        },
        servicede15(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.couponContent,
                 B:b,
                    title:this.explain.couponCaption},
            })
        },
        servicede16(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.businessContent,
                 B:b,
                    title:this.explain.businessCaption},
            })
        },
        servicede17(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.balanceContent,
                 B:b,
                    title:this.explain.balanceCaption},
            })
        },
        servicede18(){
            var b = true;
            this.$router.push({
                name:"servicede",
                 query:{data:this.explain.awesomeRestaurantContent,
                 B:b,
                    title:this.explain.awesomeRestaurantCaption},
            })
        },
        servicede19(){
            var str = this.explain.anonymousBuyContent;
//  var arr = [];
    var arr = "";
    var reg1 = /\([^\)]+\)/g;
    str.replace(reg1, function(s,value) {
//  console.log(s);
//  console.log(value);
    var s2 = s.substring(1,s.length-1);
    console.log(s2);
    
//  arr.push(s2);//所有图片的路径
    arr = s2;
    
       })
            
            var b = false;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.anonymousBuyContent,
                 B:b,
                 data:arr,
                    title:this.explain.anonymousBuyCaption},
            })
        },
        servicede20(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.activityContent,
                 B:b,
                    title:this.explain.activityCaption},
            })
        },
    }
}
</script>
<style scoped>

#fuwuzhongxin{
    width: 3.75rem;
    height: 100vh;
    background-color: #fff;
    /* position: relative; */
}
#top_s {
				width: 3.75rem;
				overflow: hidden;
                background-color: #3190e8;
                /* position: fixed; */
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
            #top{
                width: 3.75rem;
                border-bottom: 0.01rem solid #f5f5f5;
            }
            #top_l{
                width: 1.87rem;
                border-right: 0.01rem solid #f5f5f5;
            }
             #top_l img{
                 width: 0.3rem;
                 margin-left: 0.785rem;
                 margin-top: 0.2rem;
             }
             #top_l p{
                 font-size: 0.15rem;
                 color: #666;
                  text-align: center;
                 margin-top: 0.1rem;
                 padding-bottom: 0.2rem;
             }
              #top_r{
                width: 1.87rem;
                float: right;
                position: relative;
            }
             #top_r img{
                 width: 0.3rem;
                 position: absolute;
                 right: 0.785rem;
                 top: -0.8rem;
             }
             #top_r p{
                 font-size: 0.15rem;
                 color: #666;
                 text-align: center;
                 position: absolute;
                 right: 0.6rem;
                 top: -0.35rem;
                 padding-bottom: 0.2rem;
             }
             #wenti{
                 width: 3.75rem;
                 height: 0.6rem;
                 border-top: 0.01rem solid #f5f5f5;
                 border-bottom: 0.01rem solid #f5f5f5;
             }
             #wenti span{
                 width: 3.65rem;
                 font-size: 0.18rem;
                 line-height: 0.6rem;
                 margin-left: 0.1rem;
                 color: #333;
             } 
#rule{
    width: 3.75rem;
    height: 0.5rem;
    line-height: 0.5rem;
    background-color: white;
    position: relative;
    border-top: 0.01rem solid #f5f5f5;
}
#rulep{
    display: inline-block;
    /* width: 3.75rem; */
    height: 0.5rem;
    /* background-color: white; */
    margin-left: 0.1rem;
    /* line-height: 0.3rem; */
    border-bottom: 1px solid rgb(243, 243, 243)
}
#rimg1{
    position: absolute;
    top: 0.2rem;
    right: 0.1rem;

}
</style>
