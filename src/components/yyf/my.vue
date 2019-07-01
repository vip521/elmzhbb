<template>
  <div id="my">
    <div id="button">
      <div @click="one()" id="waimai">
        <img v-if="t==true" src="../../../static/imgs/homeT.png" />
        <img v-if="t==false" src="../../../static/imgs/homeF.png" alt />
        <span>外卖</span>
      </div>
      <div @click="two()" id="sousuo">
        <img v-if="tr == true" src="../../../static/imgs/zhinanzhen1.png" alt />
        <img v-if="tr==false" src="../../../static/imgs/zhinanzhen.png" />
        <span>搜索</span>
      </div>
      <div @click="three()" id="dingdan">
        <img v-if="tru==true" src="../../../static/imgs/icon-1.png" />
        <img v-if="tru==false" src="../../../static/imgs/icon-.png" />
        <span>订单</span>
      </div>
      <div @click="four()" id="wode">
        <img v-if="trua==false" src="../../../static/imgs/touxiang2.png" />
        <img v-if="trua==true" src="../../../static/imgs/touxiang1.png" alt />
        <span>我的</span>
      </div>
      <!-- <div @click="one()" class="one">
        <img v-if="t==false" src="../../../static/imgs/waimai.png" alt />
        <img v-if="t==true" src="../../../static/imgs/waimai1.png" alt />
        <p>外卖</p>
      </div>
      <div @click="two()" class="one">
        <img v-if="tr==false" src="../../../static/imgs/sousuo.png" alt />
        <img v-if="tr==true" src="../../../static/imgs/sousuo1.png" alt />
        <p>搜索</p>
      </div>
      <div @click="three()" class="one">
        <img v-if="tru==false" src="../../../static/imgs/icon-.png" alt />
        <img v-if="tru==true" src="../../../static/imgs/icon-1.png" alt />
        <p>订单</p>
      </div>
      <div @click="four()" class="one">
        <img v-if="true==false" src="../../../static/imgs/wode.png" alt />
        <img v-if="true==true" src="../../../static/imgs/wode1.png" alt />
        <p>我的</p>
      </div>-->
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "my",
  data() {
    return {
      t: false,
      tr: false,
      tru: false,
      trua: true
    };
  },
  methods: {
    one() {
      this.t = true;
      this.tr = false;
      this.tru = false;
      this.trua = false;
        this.$router.push({name:"waimai"});
    },
    two() {
      this.t = false;
      this.tr = true;
      this.tru = false;
      this.trua = false;
        this.$router.push({name:"sosuo"});
    },
    three() {
      this.t = false;
      this.tr = false;
      this.tru = true;
      this.trua = false;
        this.$router.push({name:"ddlb"});
    },
    four() {
      this.t = false;
      this.tr = false;
      this.tru = false;
      this.trua = true;
        this.$router.push({name:"myxiangqing"});
    }
  }
};
</script>
<style scoped>
/* .one{
	width: 25%;
	height: 0.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.one img{
	width: 0.2rem;
}
.one p{
	font-size: 0.15rem;
} */
#button {
  width: 100%;
  height: 0.5rem;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  background-color: white;
  z-index: 3;
}
#waimai {
  width: 0.94rem;
  flex-direction: row;
  position: relative;
}
#waimai > img {
  width: 0.3rem;
  text-align: center;
  position: absolute;
  left: 0.35rem;
  bottom: 0.2rem;
}
#waimai > span {
  font-size: 0.15rem;
  position: absolute;
  left: 0.35rem;
  bottom: 0.05rem;
  color: #666;
}
#sousuo {
  width: 0.94rem;
  /*border: 1px solid red;*/
  flex-direction: row;
  position: relative;
}
#sousuo > img {
  width: 0.23rem;
  text-align: center;
  position: absolute;
  left: 0.35rem;
  bottom: 0.25rem;
}
#sousuo > span {
  font-size: 0.15rem;
  position: absolute;
  left: 0.32rem;
  bottom: 0.05rem;
  color: #666;
}
#dingdan {
  width: 0.94rem;
  /*border: 1px solid red;*/
  flex-direction: row;
  position: relative;
}
#dingdan > img {
  width: 0.33rem;
  text-align: center;
  position: absolute;
  left: 0.35rem;
  bottom: 0.22rem;
}
#dingdan > span {
  font-size: 0.15rem;
  position: absolute;
  left: 0.35rem;
  bottom: 0.05rem;
  color: #666;
}
#wode {
  width: 0.94rem;
  /*border: 1px solid red;*/
  flex-direction: row;
  position: relative;
}
#wode > img {
  width: 0.2rem;
  text-align: center;
  position: absolute;
  left: 0.35rem;
  bottom: 0.25rem;
}
#wode > span {
  font-size: 0.15rem;
  position: absolute;
  left: 0.3rem;
  bottom: 0.05rem;
  color: #666;
}
</style>
