<template>
  <div>
    <div class="head">
      <div class="top">
        <img @click="go()" class="imgleft" src="../../../static/imgs/left.png" alt>
        <span class="sweet">{{getfl.title}}</span>
      </div>
      <!-- 下拉按钮 -->
      <div class="bottom">
        <div @click="show3 = !show3" class="left">
          <span @click="chang3()">{{resF}}</span>
          <img class="bot2" :src="one" alt>
        </div>
        <div @click="show2 = !show2" class="center">
          <span @click="chang2()">{{resF2}}</span>
          <img class="bot2" :src="two" alt>
        </div>
        <div @click="show1 = !show1" class="right">
          <span @click="chang1()">筛选</span>
          <img class="bot2" :src="SHx" alt>
        </div>
      </div>
      <!-- 动画弹出框sll -->
      <el-collapse-transition v-if="left1">
        <div class="sll" v-show="show3">
          <!-- 左边获取收据的边框 -->
          <div class="left_canyi">
            <div @click="add(v)" class="aA" :key="i" v-for=" (v,i) in arrA">
              <i class="el-icon-suitcase-1 p1"></i>
              <span class="name">{{v.name}}</span>
              <span class="p3">{{v.count}}</span>
              <i v-if="i !=0" class="el-icon-arrow-right p4"></i>
            </div>
          </div>
          <!-- 右边弹出的详情框 -->
          <div class="right_canyi">
            <div class="righr1">
              <div @click="nme(v,i)" class="aA" :key="i" v-for="(v,i) in Zzzz">{{v}}</div>
            </div>
            <div class="righr2">
              <div class="Aa" :key="i" v-for="(v,i) in Zzz">{{v}}</div>
            </div>
          </div>
        </div>
      </el-collapse-transition>
      <!-- 排序下拉框 -->
      <el-collapse-transition v-if="left2">
        <div class="paixuWrap" v-show="show2">
          <div @click="addSUDY(i,v)" class="paixu" :key="i" v-for="(v,i) in PX">
            <i v-if="i==0" class="el-icon-sort"></i>
            <i v-if="i==1" class="el-icon-location-outline"></i>
            <i v-if="i==2" class="el-icon-potato-strips"></i>
            <i v-if="i==3" class="el-icon-s-cooperation"></i>
            <i v-if="i==4" class="el-icon-truck"></i>
            <i v-if="i==5" class="el-icon-star-off"></i>
            {{v}}
          </div>
        </div>
      </el-collapse-transition>
      <!-- 删选下拉框 -->
      <el-collapse-transition v-if="left3">
        <div class="xiala" v-show="show1">
          <!-- <div class="xiala"> -->
          <p class="First">配送方式</p>
          <div class="second">
            <i class="el-icon-position"></i>
            {{KD}}
          </div>
          <p class="third">商家属性(可以多选)</p>
          <div class="Fort">
            <p class="Fort_p" :key="i" v-for="(v,i) in Shangjia">
              <i :style="colo" v-if="i==0" :class="D1"></i>
              <i style="color:red" v-if="i==1" :class="D2"></i>
              <i style="color:red" v-if="i==2" :class="D3"></i>
              <i style="color:red" v-if="i==3" :class="D4"></i>
              <i style="color:red" v-if="i==4" :class="D5"></i>
              <i style="color:red" v-if="i==5" :class="D6"></i>
              <span @click="add2(i,v)">{{v}}</span>
            </p>
          </div>
          <div class="Five">
            <button @click="Nsure() " class="five_o">清空</button>
            <button @click="sure() " style="backgroundColor:green" class="five_T">确定</button>
          </div>
          <!-- </div> -->
        </div>
      </el-collapse-transition>
    </div>
    <!-- 中间部分 -->
    <div class="zhongjian">
      <ul v-if="shangpus.length > 0" id="bottom">
        <li @click="shangpu_li()" class="sp" :key="i" v-for="(v,i) in shangpus">
          <img class="sp_left" :src="'https://elm.cangdu.org/img/'+v.image_path" alt>
          <div class="sp_right">
            <div class="r_one">
              <div class="one_left">
                <span class="one_pinpai">品牌</span>
                <span class="one_name">{{v.name}}</span>
              </div>
              <div class="one_right">
                <span class="one_text" :key="i" v-for="(v,i) in v.supports">{{v.icon_name}}</span>
              </div>
            </div>
            <div class="r_two">
              <div class="two_left">
                <el-rate
                  class="two_pf"
                  v-model="v.rating"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                ></el-rate>
                <span class="two_num">月售{{v.recent_order_num}}单</span>
              </div>
              <div class="two_right">
                <span class="two_fn">{{v.delivery_mode.text}}</span>
                <span class="two_zsd">{{v.supports[1].name}}</span>
              </div>
            </div>
            <div class="r_three">
              <div class="three_left">
                <span class="three_qsf">￥{{v.float_minimum_order_amount}}起送</span>
                <span class="three_xx">/</span>
                <span class="three_psf">{{v.piecewise_agent_fee.tips}}</span>
              </div>
              <div class="three_right">
                <span class="three_jl">{{v.distance}}</span>
                <span class="three_xx2">/</span>
                <span class="three_sj">{{v.order_lead_time}}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
var nub;
import { Alert } from "element-ui";
export default {
  name: "sweet",
  data() {
    return {
      colo:{
        color:'red'
      },
      //烟波
      shangpus: [],
      Distance: [],
      NUB: "",
      //
      D1: "el-icon-help",
      D2: "el-icon-s-ticket",
      D3: "el-icon-s-flag",
      D4: "el-icon-s-data",
      D5: "el-icon-finished",
      D6: "el-icon-folder-opened",
      // Na: "甜品饮品",
      left1: false,
      left2: false,
      left3: false,
      show3: false,
      show2: false,
      show1: false,
      one: require("../../../static/imgs/bottom.png"),
      two: require("../../../static/imgs/b2.png"),
      SHx: require("../../../static/imgs/b1.png"),
      arrA: [],
      arrAa: {},
      Zzzz: [], //存储内容
      Zzz: [], //存储id
      PX: [
        "起送价最低",
        "配速速度最快",
        "评分最高",
        "智能排序",
        "距离最近",
        "销量最高"
      ],
      KD: "",
      Shangjia: "",
      // 中间部分
      CT: [],
      CTname: [],
      //分类接收的值
      resF: "分类",
      resF2: "排序"
    };
  },
  computed: {
    getfl(){
      return this.$store.state.spfl;
    }
  },
  created() {
    this.getintil();
    this.getpaixu();
    this.getjk();
    this.getshangjia();
    this.getCenter();
  },
  methods: {
    //商铺li添加点击事件
    shangpu_li(){
      alert("跳转")
    },
    getintil() {
      const api = "https://elm.cangdu.org/shopping/v2/restaurant/category";
      this.$http({
        url: api,
        method: "get",
        withCredentials: true
      }).then(res => {
        // console.log("餐单");
        // console.log(res.data);
        this.arrA = res.data;
        // for (var i = 0; i < res.data.length; i++) {
        //   this.arrAa = res.data[i];
        //   // console.log(res.data[i].sub_categories);
        //   console.log(res.data[i]);
        //   this.arrAa = res.data[i].sub_categories;
        //   for (var j = 0; j < res.data[i].sub_categories.length; j++) {
        //     // console.log(res.data[i].sub_categories[j])
        //   }
        // }
      });
    },
    getpaixu() {
      const api =
        "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&order_by";
      this.$http({
        url: api,
        method: "get",
        withCredentials: true
      }).then(res => {
        // console.log("排序");
        // console.log(res.data);
      });
    },
    add(v) {
      // alert(v.name);
      this.resF = v.name;
      // console.log(v);
      // console.log(v.id);
      // if(v==this.arrA[0].id){
      //   alert(1)
      // }
      var zzzz = [];
      var zzz = [];
      if (
        v.id == 207 ||
        v.id == 233 ||
        v.id == 206 ||
        v.id == 244 ||
        v.id == 220 ||
        v.id == 252 ||
        v.id == 248 ||
        v.id == 239
      ) {
        for (var i = 0; i < v.sub_categories.length; i++) {
          zzzz.push(v.sub_categories[i].name);
          zzz.push(v.sub_categories[i].count);
        }
        // console.log(zzzz);

        this.Zzzz = zzzz;
        //存储id
        this.Zzz = zzz;
        // console.log(zzz);
      }
    },
    //删选下拉框函数
    add2(i, v) {
      // alert(i);
      // console.log(v)
      this.colo.color='red'
      if (i == 0) {
        this.D1 = "el-icon-circle-check";
      } else if (i == 1) {
        this.D2 = "el-icon-circle-check";
      } else if (i == 2) {
        this.D3 = "el-icon-circle-check";
      } else if (i == 3) {
        this.D4 = "el-icon-circle-check";
      } else if (i == 4) {
        this.D5 = "el-icon-circle-check";
      } else if (i == 5) {
        this.D6 = "el-icon-circle-check";
      }
    },

    // 上下箭头图片点击事件
    chang3() {
      this.left1 = true;
      this.left2 = false;
      this.left3 = false;
      if (this.show3) {
        this.one = require("../../../static/imgs/bottom.png");
        this.show3 = !this.s;
      } else {
        this.one = require("../../../static/imgs/top.png");
      }
    },
    chang2() {
      this.left1 = false;
      this.left2 = true;
      this.left3 = false;
      if (this.show2) {
        this.two = require("../../../static/imgs/b2.png");
        this.show2 = !this.shoe2;
      } else {
        this.two = require("../../../static/imgs/t2.png");
      }
    },
    chang1() {
      this.left3 = true;
      this.left1 = false;
      this.left2 = false;
      if (this.show1) {
        this.SHx = require("../../../static/imgs/b1.png");
        this.show1 = !this.shoe1;
      } else {
        this.SHx = require("../../../static/imgs/t1.png");
      }
    },
    //获取派送接口
    getjk() {
      const api =
        "https://elm.cangdu.org/shopping/v1/restaurants/delivery_modes";
      this.$http({
        url: api,
        method: "get",
        withCredentials: true
      }).then(res => {
        //  console.log("配送");
        //  console.log(res.data[0]);
        this.KD = res.data[0].text;
      });
    },
    getshangjia() {
      const api =
        "https://elm.cangdu.org/shopping/v1/restaurants/activity_attributes";
      this.$http({
        url: api,
        method: "get",
        withCredentials: true
      }).then(res => {
        //  console.log("商家");
        //  console.log(res.data);
        var arrshangjia = [];
        for (var i = 0; i < res.data.length; i++) {
          arrshangjia.push(res.data[i].name);
        }
        // console.log(arrshangjia);
        this.Shangjia = arrshangjia;
      });
    },
    //中间部分大块数据
    getCenter(nub) {
      const api =
        "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&order_by=" +
        nub;
      this.$http({
        url: api,
        method: "get",
        withCredentials: true
      }).then(res => {
        // console.log("大数据");
        // console.log(res.data)
        this.shangpus = res.data;
      });
    },
    //标题名称
    nme(v, i) {
      var NN;
      NN = v;
      this.Na = NN;
      var nub = i;
      // alert(nub);
      this.addSUDY(i, v);
      this.left1 = false;
      this.left2 = false;
      this.left3 = false;
    },
    addSUDY(i, v) {
      nub = i;
      // alert(nub);
      this.resF2 = v;
      this.getCenter(nub); 
      this.left1 = false;
      this.left2 = false;
      this.left3 = false;
    },
    sure() {
      this.left1 = false;
      this.left2 = false;
      this.left3 = false;
    },
    Nsure() {
      this.D1 = "el-icon-help";
      (this.D2 = "el-icon-s-ticket"),
        (this.D3 = "el-icon-s-flag"),
        (this.D4 = "el-icon-s-data"),
        (this.D5 = "el-icon-finished"),
        (this.D6 = "el-icon-folder-opened");
    },
    go(){
          this.$router.back();
    }

  },

};
</script>
<style scoped>
.head {
  width: 100%;
  height: 0.8rem;
  background-color: blue;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
}
/* 图片和饮品字样 */
.top {
  height: 0.4rem;
  background-color: blue;
}
/* 分类、排序、筛选字样 */
.bottom {
  width: 100%;
  height: 0.4rem;
  background-color: white;
  display: flex;
  flex-wrap: nowrap;
}
.left,
.center,
.right {
  display: flex;
  /* border: 0.01rem solid red; */
  flex: 30%;
  justify-content: center;
  align-items: center;
}
.imgleft {
  height: 0.4rem;
  line-height: 0.4rem;
  color: white;
}
.sweet {
  /* border: 1px solid black; */
  height: 0.05rem;
  line-height: 0.05rem;
  font-size: 0.2rem;
  font-weight: bold;
  color: white;
  position: absolute;
  right: 40%;
  top: 20%;
  transform: transform(-40%, -20%);
}
/* 向上向下箭头图片 */
.bot2 {
  width: 0.1rem;
}
/* 弹出框里的左边div */
.sll {
  display: flex;
  justify-content: space-around;
  /* border: 2px solid saddlebrown; */
  height: 4.5rem;
  overflow: hidden;
  background-color: #fff;
}
/* 左边 */
.left_canyi {
  flex: 50%;
  /* height: 2rem; */
  /* background-color: green; */
}
.right_canyi {
  display: flex;
  flex: 50%;
  overflow: scroll;
}
.bottom_canyi {
  background-color: blue;
}
/* 遍历出arrA数组出来的name */
.aA,
.Aa {
  height: 0.5rem;
  font-size: 0.1rem;
  /* border: 0.01rem solid red; */
  padding-left: 0.15rem;
  display: flex;
  /* 下边为上下居中*/
  flex: 50%;
  align-items: center;
}
/* 最后一行为白色背景 */
.aA:nth-child(9) {
  background-color: #fff;
}
.name {
  flex: 40%;
  font-size: 0.15rem;
}
.p1 {
  flex: 15%;
  font-size: 0.2rem;
  /* color: salmon; */
}
.p4 {
  flex: 10%;
  font-size: 0.2rem;
}
.p3 {
  flex: 15%;
  background-color: rgba(128, 128, 128, 0.479);
  border-radius: 0.8rem;
  color: white;
  text-align: center;
  font-size: 0.15rem;
}
/* 排序框里的span */
.paixu_p3 {
  flex: 15%;
  background-color: rgba(128, 128, 128, 0.479);
  border-radius: 0.8rem;
  color: black;
  text-align: center;
  font-size: 0.15rem;
}
.paixuWrap {
  line-height: 0.5rem;
}
/* 排序弹出框 */
.paixu {
  /* border-bottom: 2px solid gainsboro; */
  height: 0.5rem;
  background-color: #fff;
}
/* 删选下拉框 */
.xiala {
  /* border: 2px dashed firebrick; */
  height: 4rem;
  background-color: #fff;
}
.First,
.second {
  border: 1px solid black;
  width: 1rem;
  padding: 0.1rem;
  margin-bottom: 0.2rem;
}
.third {
  border: 1px solid black;
  width: 2rem;
  padding: 0.1rem;
  margin-bottom: 0.1rem;
}
.Fort {
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
}
.Fort_p {
  flex: 30%;
  border: 1px solid black;
  text-align: center;
  width: 1rem;
  line-height: 0.5rem;
  height: 0.5rem;
}
.Five {
  display: flex;
  margin-top: 0.2rem;
  /* border: 3px solid gold; */
}
.Five .five_o,
.Five .five_T {
  /* border: 1px solid black; */
  margin: 0 0.05rem 0;
  height: 0.5rem;
  flex: 50%;
}

/* 中间的大部分 */
.zhongjian {
  margin-top: 0.8rem;
}
.sp {
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sp_left {
  width: 0.5rem;
  margin-left: 0.1rem;
}
.sp_right {
  width: 2.95rem;
  margin-right: 0.1rem;
}
.r_one {
  overflow: hidden;
}
.one_left {
  float: left;
}
.one_right {
  float: right;
}
.one_pinpai {
  font-size: 0.12rem;
  background-color: yellow;
}
.one_name {
  font-size: 0.15rem;
}
.one_text {
  font-size: 0.1rem;
  border: 0.05px solid grey;
  margin-left: 0.02rem;
}
.r_two {
  overflow: hidden;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
}
.two_left {
  float: left;
  overflow: hidden;
}
.two_right {
  float: right;
}
.two_pf {
  float: left;
}
.two_num {
  font-size: 0.1rem;
  float: left;
}
.two_fn {
  font-size: 0.1rem;
  background-color: blue;
  color: white;
}
.two_zsd {
  font-size: 0.1rem;
  color: blue;
}
.r_three {
  overflow: hidden;
}
.three_left {
  float: left;
}
.three_right {
  float: right;
}
.three_qsf {
  font-size: 0.1rem;
}
.three_xx {
  font-size: 0.1rem;
}
.three_psf {
  font-size: 0.1rem;
}
.three_jl {
  font-size: 0.1rem;
}
.three_xx2 {
  font-size: 0rem;
}
.three_sj {
  font-size: 0.1rem;
}
</style>
