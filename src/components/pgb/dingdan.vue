<template>
  <div class="Dingdan">
    <div class="head">
      <div class="top">
        <img @click="go()" class="imgleft" src="../../../static/imgs/left.png" alt />
        <span class="dingdan">订单列表</span>
      </div>
    </div>
    <!-- //头像+再来一单 -->
    <div class="center">
      <img class="center_img" :src="'https://elm.cangdu.org/img/'+getddxq.dianpu.image_path" alt />
      <h1 class="center_p1">支付超时</h1>
      <p @click="again()" class="center_p2">再来一单</p>
    </div>
    <!-- 演示效果 -->
    <ul class="ul">
      <li class="li1">
        <div class="li_div">
          <img
            class="li_imgleft"
            :src="'https://elm.cangdu.org/img/'+getddxq.dianpu.image_path"
            alt
          />
          <h2>{{getddxq.dianpu.name}}</h2>
        </div>
        <img class="li_imgright" src="../../../static/imgs/right.png" alt />
      </li>
      <li :key="i" v-for="(v,i) in getddxq.caipin" class="li2">
        <span class="li2_span">{{v.name}}</span>
        <div class="li2_div">
          <span>X{{v.original_price}}</span>
          <span>￥{{v.price}}</span>
        </div>
      </li>
      <li class="li3">
        <span>配送费</span>
        <span>{{getddxq.dianpu.float_delivery_fee}}</span>
      </li>
      <li class="li3">
        <span>餐盒费</span>
        <span>{{getddxq.canhe}}</span>
      </li>
      <li class="li4">
        <span>实付{{getddxq.money+getddxq.canhe+getddxq.dianpu.float_delivery_fee}}</span>
      </li>
    </ul>
    <ul class="ul2">
      <h2>配送信息</h2>
      <li>送达时间:{{getddxq.dianpu.order_lead_time}}</li>
      <li>
        送货地址:{{getddxq.shenfen.name}}
        <span>{{getddxq.shenfen.phone}}</span>
      </li>
      <li>配送方式:{{getddxq.dianpu.delivery_mode.text}}</li>
    </ul>
    <ul class="ul3">
      <h2>订单信息</h2>
      <li>订单号:10449</li>
      <li>支付方式:在线支付</li>
      <li>下单时间:{{getddxq.shijian.nian}}-{{getddxq.shijian.yue}}-{{getddxq.shijian.ri}} {{getddxq.shijian.shi}}:{{getddxq.shijian.fen}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "dingdan",
  data() {
    return {
      imageUrl: ""
    };
  },
  methods: {
    //再来一单
    again() {
      this.$store.commit("dianpuadd", this.getddxq.dianpu);
      this.$router.push({ name: "dianpu" });
    },
    go() {
      this.$router.back();
    }
  },
  computed: {
    getddxq() {
      return this.$store.state.ddxq;
    }
  }
};
</script>
<style scoped>
.Dingdan {
  /* overflow: hidden; */
  overflow: scroll;
  overflow-y: hidden;
  overflow-x: hidden;
}
:-webkit-scrollbar {
  display: none;
}
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
  position: relative;
}
.imgleft {
  height: 0.4rem;
  line-height: 0.4rem;
  color: white;
}
.dingdan {
  height: 0.05rem;
  line-height: 0.05rem;
  font-size: 0.2rem;
  font-weight: bold;
  color: white;
  position: absolute;
  right: 40%;
  top: 40%;
  transform: transform(-40%, -40%);
}
/* 头像+再来一单 */
.center {
  margin-top: 0.4rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
}
.one {
  border: 1px solid black;
  overflow: hidden;
}
.center_img {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
}
.center_p2 {
  width: 0.8rem;
  height: 0.2rem;
  color: blue;
  text-align: center;
  line-height: 0.2rem;
  border: 1px solid blue;
}
/* ul部分 */
.ul {
  background-color: #fff;
  margin-top: 0.2rem;
}
.li1,
.li2,
.li3 {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
}
.li_div {
  display: flex;
  align-items: center;
}
.li_imgleft {
  width: 0.5rem;
  height: 0.5rem;
  margin: 0.05rem;
  padding: 0.1rem;
}
.li_imgright {
  width: 0.3rem;
}
.li2_span {
  height: 0.5rem;
  line-height: 0.5rem;
  width: 2rem;
  margin: 0.05rem;
}
.li3 span {
  height: 0.5rem;
  line-height: 0.5rem;
  margin: 0.05rem;
}
.li4 {
  height: 0.5rem;
  line-height: 0.5rem;
  color: orange;
  background-color: #fff;
}
.li4 span {
  float: right;
}
.ul2,
.ul3 {
  margin-top: 0.2rem;
  background-color: #fff;
}
.ul2 li,
.ul3 li {
  height: 0.5rem;
  line-height: 0.5rem;
  margin: 0.05rem;
  padding: 0.1rem;
}
.ul2 h2,
.ul3 h2 {
  height: 0.5rem;
  line-height: 0.5rem;
  margin: 0.05rem;
}
</style>
