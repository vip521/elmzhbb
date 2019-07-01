<template>
    <div id="hongbao">
        <div id="over">
            <div id="top">
                <span id="top_l">有<span>3</span>个红包即将到期</span>
                <div>
                <div id="wenhao">?</div>
                <span id="top_r">红包说明</span>
                </div>
            </div>


            <ul>
                <li :key="i" v-for="(v,i) in datas">
            <div id="wai" >
            <div id="one">
                <div id="left">
                     <span>￥</span>
                    <span>{{v.amount.toFixed(1)}}</span>
                    <p>{{v.description_map.sum_condition}}</p>
                </div>
                <div id="center">
                    <div id="p">
                        <p>{{v.name}}</p>
                        <p>{{v.description_map.validity_periods}}</p>
                        <p>{{v.description_map.phone}}</p>
                    </div>
                </div>
                 <div id="right">
                        {{v.description_map.validity_delta}}
                    </div>
            </div>
            </div>
            </li> 
</ul>
            <p id="ts">限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</p>
            <p id="lshb">查看历史红包 ></p>
        </div>
        <div id="db">
            <span @click="duihuanhongbao()">兑换红包</span>
            <span @click="tuijianyoujiang()">推荐有奖</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'sousuo',
    data(){
        return {
            datas:""
        }
    },
    created(){
        this.getcode();
    },
    methods:{
        duihuanhongbao(){
             this.$router.push({name:"duihuanhongbao"});
        },
        tuijianyoujiang(){
             this.$router.push({name:"tuijianyoujiang"});
        },
         getcode(){
            const api = "https://elm.cangdu.org/promotion/v2/users/1/hongbaos?limit=20&offset=0";
            this.$http({
              url:api,
              method:'get',
              //用于表示用户代理是否应该在跨域请求情况下从其他域发送cookies--不使用缓存数据
              withCredentials:true
            }).then(res=>{
                console.log("成功");
                console.log(res);
                console.log(res.data.length)
                this.datas =res.data;
                // this.changdu =res.data.length;
            })
        },
    }
}
</script>
<style scoped>
#top{
    width: 3.55rem;
    height: 0.5rem;
    margin-left: 0.1rem;
    position: relative;
}
#top_l{
    font-size: 0.15rem;
    color: #666;
    line-height: 0.5rem;
}
#top_l span{
    color: red;
    line-height: 0.5rem;
}
#wenhao{
    width: 0.15rem;
    height: 0.15rem;
    background-color:  #3190e8;
    text-align: center;
    border-radius: 50%;
    position: absolute;
    right: 0.65rem;
    top: 0.15rem;
}
#top_r{
     font-size: 0.15rem;
    color: #3190e8;
    line-height: 0.5rem;
    position: absolute;
    right: 0rem;
    top: 0rem;
}
#wai{
    width: 3.5rem;
    height: 0.9rem;
    border-top: 0.05rem solid red;
    margin-left: 0.1rem;
    border-radius: 0.07rem;
    background-color: white;
    margin-bottom: 0.1rem;
}
#one{
    width: 3.45rem;
    /* height: 2rem; */
    border-top: 0.03rem dashed red;
    margin-left: 0.1rem;
    border-radius: 0.03rem;
    position: relative;
}
#left{
    width: 0.8rem;
    height: 0.7rem;
    margin-left: 0.1rem;
    margin-top: 0.1rem;
    border-right: 0.01rem dashed black;
}
#left>span{
    font-size:0.1rem;
    color: red;
    margin-left: left 0.1rem;
    margin-top: 0.05rem;
    font-weight: 900;
}
#left>p{
    font-size: 0.01rem;
    margin-top: 0.07rem;
    color: #999;
}
#left span:nth-child(2){
font-size:0.35rem;
font-weight: 500;
}
#p{
    position: absolute;
    right:0.5rem;
    top: 0.17rem;
    width:1.8rem;
    height: 0.1rem;
}
#p p:nth-child(1){
    font-size: 0.175rem;
    height: 0.2rem;
    opacity: 0.7;
}
#p p:nth-child(2){
    font-size: 0.01rem;
    color: #999;
    height: 0.15rem;
}
#p p:nth-child(3){
    font-size: 0.01rem;
    color: #999;
    height: 0.15rem;
}
#right{
    font-size: 0.175rem;
    color: red;
    position: absolute;
    right: 0.1rem;
    top: 0.2rem;
}
#wai2{
    margin-top: 0.1rem;
    width: 3.5rem;
    height: 0.9rem;
    border-top: 0.05rem solid red;
    margin-left: 0.1rem;
    border-radius: 0.07rem;
    background-color: white;
}
#wai3{
    margin-top: 0.1rem;
    width: 3.5rem;
    height: 0.9rem;
    border-top: 0.05rem solid red;
    margin-left: 0.1rem;
    border-radius: 0.07rem;
    background-color: white;
}
#ts{
    width: 3.35rem;
    margin-top: 0.2rem;
    margin-left: 0.2rem;
    font-size: 0.02rem;
    color: #999;
}
#lshb{
    width: 3.75rem;
    margin-top: 0.2rem;
    text-align: center; 
    color: #999;
    font-size: 0.03rem;
}
#db{
    width: 3.75rem;
    height: 0.5rem;
    background-color: white;
    display: flex;
    position: absolute;
    bottom: 0;
}
#db>span:nth-child(1){
width: 1.87rem;
line-height: 0.5rem;
border-right: 0.0001rem solid WhiteSmoke;
float: left;
text-align: center;
}
#db>span:nth-child(2){
width: 1.87rem;
float: left;
text-align: center;
line-height: 0.5rem;
}
</style>
