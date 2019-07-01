<template>
    <div id="daijinquan">
        <div id="top">
            <span @click="djqsm()"> 
                <div id="wenhao">?</div>
                商家代金券说明
            </span>
        </div>
        <div id="center">
            <img src="../../../static/imgs/sjdjq.png" alt="">
            <p>无法使用代金券</p>
            <p>非客户端或客户端版本过低</p>
            <div @click="xiazai()">下载或者升级客户端</div>
        </div>
    </div>
</template>
<script>
export default {
    name:'daijinquan',
    methods:{
        djqsm(){
            this.$router.push({name:"daijinquansm"});
        },
        xiazai(){
            this.$router.push({name:"xiazai"});
        }
    }
}
</script>
<style scoped>
#daijinquan{
    width: 3.75rem;
    position: relative;
}
#top{
    width: 3.65rem;
    position: relative;
}
#wenhao{
    width: 0.15rem;
    height: 0.15rem;
    background-color: #3190e8;
    border-radius: 50%;
    color: white;
    text-align: center;
    position: absolute;
    top: 0.01rem;
    right: 1.1rem;
}
#top>span{
    font-size: 0.15rem;
    float: right;
    color: #3190e8;
    position: absolute;
    top: 0.15rem;
    right: 0;
}
#center{
    width: 3.75rem;
    /* margin-top:2rem; */
    position: absolute;
    top: 1.6rem;
}
#center>img{
    width: 1.4rem;
    margin-left: 1.175rem;
}
#center>p{
    margin-top: 0.1rem;
    font-size: 0.17rem;
    color: #666;
    text-align: center;
}
#center>p+p{
    margin-top: 0.07rem;
    font-size: 0.14rem;
    color: #999;
    text-align: center;
}
#center>div{
    width: 1.5rem;
    height: 0.3rem;
    line-height: 0.3rem;
    border-radius: 0.03rem;
    background-color:  #56d176;
    font-size: 0.16rem;
    text-align: center;
    color: white;
    margin-left: 1.125rem;
    margin-top: 0.1rem;
}
</style>
