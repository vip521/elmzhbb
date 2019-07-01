<template>
    <div>
      <div class="head">
          <div class="top">
              <img @click="go()" class="imgleft" src="../../../static/imgs/left.png" alt="">
              <span class="sosuo">搜索</span>
          </div>
          <div class="btn">
            <input @click="btn()" class="btn1" v-model="context"  type="text" placeholder="请输入商家或美食名称">
            <span v-if="show" @click="dell()" class="el-icon-close sp"></span>
            <p class="btn2" @click="add()">提交</p>
          </div>
      </div>
      <div class="yincang" v-if="opcity" >
          <p class="S_hist">搜索历史</p>
         <ul class="oll">
             <span >商家</span>
              <li @click="shangpin_li()" :key="i" v-for="(v,i) in arrA">
              <img :src="'//elm.cangdu.org/img/'+v.image_path" alt="">
              <div class="all_p">
              <p class="p1">{{v.name}}</p>
              <p class="p1">{{"月售"+ v.recent_order_num+ "单"}}</p>
              <p class="p1">{{v.float_minimum_order_amount+"元起送/"+"距离"+v.distance}}</p>
              </div>
             
              </li>
         </ul>
        <div v-if= "shoo" :key="i" v-for="(v,i) in arrB" class="shoo">
        <span  class="sp_1" >{{v}}</span>
        <span   @click="del(i)" class="el-icon-close sp  sp_2"></span>
         </div>
      <!-- 清空历史记录 -->
        <div class="clean" @click="dellall()">清空历史记录</div>
      </div>
      </div>   
</template>
<script>
var arr = [];
export default {
    name:"sosuo",
    data(){
        return{
        count:"",//倒计时
        img:false,
        opcity:false,
        dataa:"",
        context:"",
        arrA:arr,
        arrB:[],
        //nub接收一下a
        nub:"",
        show:false,
        shoo:false
        }
    },
    created(){
        this.add2();
    },
    methods:{
    //搜索出来的商品的li的点击事件
    shangpin_li(){
        alert("跳转")
    },
    go(){
      this.$router.back();             
        },
    //提交按钮
    add(){
        if(!this.context ==""){
        this.opcity=true;
        this.shoo=false;
        var c = this.context;       
        arr.unshift(c);
        this.arrB=localStorage [""] = arr;
        // console.log(localStorage.length);
        // console.log(arr)
        const api ="https://elm.cangdu.org/v4/restaurants?geohash=31.22967,121.4762&keyword="+c;
        this.$http({
        url: api,
        method: "get",
        withCredentials: true
        }).then(res=>{
        console.log("搜索");
        console.log(res.data);
        this.arrA=res.data;
        })
        }
        
        },
    //删除
    del(a) {
        arr.splice(a,1);
        this.nub=a;
        },
    dellall(nub){
         arr.splice(nub);
         this.opcity=false;
    },
    add2(){
        const api ="https://elm.cangdu.org/v2/pois/31.22967,121.4762";
        this.$http({
        url: api,
        method: "get",
        withCredentials: true
        }).then(res=>{
        console.log("经纬度");
        console.log(res.data);
        })
    },
    // 输入框
    btn(){
        this.show = true;
    },
    dell(){
        this.context ="";
        this.arrA = [];
        this.shoo=true;
    }
    }
}
</script>
<style scoped>
.head {
  width: 100%;
  height: 0.8rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
}
.top {
  height: 0.4rem;
  background-color: blue;
}
.imgleft {
  height: 0.4rem;
  line-height: 0.4rem;
  color: white;
}
.sosuo {
  height: 0.05rem;
  line-height: 0.05rem;
  font-size: 0.2rem;
  font-weight: bold;
  color: white;
  position: absolute;
  right: 45%;
  top: 20%;
  transform: transform(-45%, -20%);
}
.btn{
    display: flex;
    margin-top:0.1rem; 
    height: 0.4rem;
    line-height: 0.4rem;
    background-color: #fff;
}
.btn1{
    flex:70%;
    font-size: 0.15rem;
    margin-left:0.1rem; 
    padding: 0.1rem;
    background-color:rgba(128, 128, 128, 0.219);
}
.btn2{
   flex:30%;
   padding-left:0.05rem;
   font-size: 0.15rem;
   text-align: center;
   background-color: blue;
   color: white;
   margin: 0 0.1rem 0; 
}
.S_hist{
    width: 0.7rem;
    margin-left: 0.1rem;
    margin-top:1rem; 
}
.clean{
     margin-top: 0.15rem;
     height: 0.4rem;
     font-size: 0.2rem;
     text-align: center;
     line-height: 0.4rem;
     background-color: #fff;
}
.oll{
    margin-top:0.1rem ;
}
.oll li{
    display: flex;
    border: 0.1px solid gainsboro;
    height: 1rem;
    color: black;
    padding:  0.1rem;
    margin-bottom:0.05rem;
}
.oll li img{
    width: 0.8rem;
}
.all_p{
    display: flex;
    flex-direction: column;
    align-items: flex-start;

}
.oll li p{
    flex: 90%;
}
.sp{
    flex: 10%;
    line-height: 0.4rem;
    color: red;
    background-color:rgba(128, 128, 128, 0.219);
}
.shoo{
    border-bottom: 1px solid black;
    background-color: #fff;
    height: 0.4rem;
    line-height: 0.4rem;
    padding:0.05rem;
    margin-bottom:0.05rem;
}
.sp_1{
     font-size: 0.2rem;
}
.sp_2{
    float: right;
    background-color: #fff;
}
.img123{
    width: 0.5rem;
    border-radius: 50%;
    margin-top: 3rem;
    margin-left: 1.5rem;
    animation: bounceInDown infinite 1s;
}
</style>
