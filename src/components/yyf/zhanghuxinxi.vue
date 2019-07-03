<template>
  <div id="zhanghuxinxi">
    <div id="top_s">
      <img @click="back()" src="../../../static/imgs/back.png" />
      <span>账户信息</span>
    </div>
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <div id="center">
      <div id="touxiang">
        <span>头像</span>
        <img src="../../../static/imgs/youj.png" alt />
      </div>

      <div id="yonghuming" @click="xiugaiyonghuming()">
        <span>用户名</span>
        <span v-html="this.$store.state.username"></span>
        <img src="../../../static/imgs/youj.png" alt />
      </div>
      <div id="shouhuodizhi" @click="to()">
        <span>收货地址</span>
        <img src="../../../static/imgs/youj.png" alt />
      </div>
      <div id="zhanghaobangding">
        <span>账号绑定</span>
      </div>
      <div id="shouji" @click="qt()">
        <div id="shouji_l">
          <img src="../../../static/imgs/shouji.png" alt />
        </div>
        <span>手机</span>
        <img src="../../../static/imgs/youj.png" alt />
      </div>
      <div id="anquanshezhi">
        <span>安全设置</span>
      </div>
      <div id="denglumima">
        <span>登录密码</span>
        <img src="../../../static/imgs/youj.png" alt />
      </div>
      <div id="button" @click="tuichu()">退出登录</div>
    </div>
    <div id="tankuang" v-if="tishi">
      <img src="../../../static/imgs/tishi2.jpg" alt />
      <span>请在手机APP中设置</span>
      <p @click="qr()">确认</p>
    </div>

    <div id="tankuang2" v-if="tishi2">
      <img src="../../../static/imgs/tishi2.jpg" alt />
      <span>是否退出登陆</span>
      <p @click="zdd()">再等等</p>
      <p @click="shifoudenglu()">退出登录</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "zhanghuxinxi",
  data() {
    return {
      tishi: false,
      tishi2: false,
      imageUrl: "../../../static/imgs/touxiang-kong.png"
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    shifoudenglu(){
      this.$store.commit('shifoudeng');
      this.$router.push({ name: "myxiangqing" });
    },
    tuichu() {
      this.tishi2 = true;
    },
    // tcdl() {
    //   this.$router.push({ name: "myxiangqing" });
    //   this.$store.state.username="";
    //   this.$store.state.passworld="";
    // },
    zdd() {
      this.tishi2 = false;
    },
    getdata() {
      const api = "https://elm.cangdu.org/v1/user/" + this.$store.state.nameid;
      this.$http({
        url: api,
        method: "get",
        //用于表示用户代理是否应该在跨域请求情况下从其他域发送cookies--不使用缓存数据
        withCredentials: true
      }).then(res => {
        console.log(res);
        this.imageUrl = "https://elm.cangdu.org/img/" + res.data.avatar;
      });
    },
    qt() {
      this.tishi = true;
    },
    qr() {
      this.tishi = false;
    },
    back() {
      this.$router.go(-1);
    },
    xiugaiyonghuming() {
      this.$router.push({ name: "xiugaiyonghuming" });
    },
    to() {
      this.$router.push({ name: "bianjidizhi" });
    },
    // tuichu(){
    //     this.$router.push({ name: "myxiangqing" });
    // },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);

      var file = file.raw;
      var formdata1 = new FormData(); // 创建form对象
      formdata1.append("file", file, file.name); // 通过append向form对象添加数据,可以通过append继续添加数据
      //或formdata1.append('img',file);
      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      }; //添加请求头
      this.axios
        .post(
          `https://elm.cangdu.org/eus/v1/users/${this.$store.state.nameid}/avatar`,
          formdata1,
          config
        )
        .then(response => {
          //这里的/xapi/upimage为接口
          console.log(response.data);
        });
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>
<style scoped>
#tankuang2 {
  position: absolute;
  left: 0.1rem;
  top: 1.65rem;
  width: 3.55rem;
  height: 2.7rem;
  background-color: white;
  border-radius: 0.03rem;
  animation: 2s bounceIn;
}
#tankuang2 img {
  width: 1.25rem;
  margin-left: 1.15rem;
}
#tankuang2 span {
  font-size: 0.35rem;
  color: #333;
  position: absolute;
  left: 0.73rem;
  bottom: 0.9rem;
}
#tankuang2 > p {
  width: 1rem;
  height: 0.4rem;
  background-color: #c1c1c1;
  position: absolute;
  bottom: 0.2rem;
  text-align: center;
  line-height: 0.4rem;
  margin-top: 0.1rem;
  margin-left: 0.6rem;
  font-weight: 700;
  color: white;
  border-radius: 0.03rem;
}
#tankuang2 > p + p {
  width: 1rem;
  height: 0.4rem;
  background-color: #dd6b55;
  position: absolute;
  right: 0.6rem;
  bottom: 0.2rem;
  text-align: center;
  line-height: 0.4rem;
  margin-top: 0.1rem;
  font-weight: 700;
  color: white;
  border-radius: 0.03rem;
}
#zhanghuxinxi {
  width: 3.75rem;
  position: relative;
}
.avatar {
  width: 0.6rem;
  height: 0.6rem;
  z-index: 10;
  line-height: 0.8rem;
  position: absolute;
  right: 0.3rem;
  top: 0.65rem;
  border-radius: 50%;
}
#zhanghuxinxi {
  width: 3.75rem;
  position: relative;
}
#tankuang {
  position: absolute;
  left: 0.4rem;
  top: 1.85rem;
  width: 2.95rem;
  height: 1.9rem;
  background-color: white;
  border-radius: 0.03rem;
  animation: 2s bounceIn;
}
#tankuang img {
  width: 1.05rem;
  height: 1rem;
  margin-left: 0.95rem;
}
#tankuang span {
  font-size: 0.17rem;
  color: #333;
  position: absolute;
  left: 0.73rem;
  bottom: 0.6rem;
}
#tankuang p {
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

#top_s > img {
  display: block;
  width: 0.12rem;
  float: left;
  margin-left: 0.1rem;
  margin-top: 0.1rem;
}

#top_s > span {
  display: block;
  font-size: 0.25rem;
  font-weight: 900;
  color: white;
  padding: 0.1rem;
  text-align: center;
}
#center {
  width: 3.75rem;
  margin-top: -0.05rem;
}
#touxiang {
  width: 3.75rem;
  background-color: white;
  position: relative;
}
#touxiang > span {
  font-size: 0.17rem;
  color: #333;
  line-height: 0.8rem;
  margin-left: 0.1rem;
}
/* #touxiang>img{
                 width: 0.6rem;
                 line-height: 0.8rem;
                 position: absolute;
                 right: 0.3rem;
                 top: 0.1rem;
              } */
#touxiang > img {
  width: 0.1rem;
  color: rgb(216, 216, 216);
  position: absolute;
  right: 0.1rem;
  top: 0.3rem;
}
#yonghuming {
  width: 3.75rem;
  background-color: white;
  border-top: 0.01rem solid rgb(216, 216, 216);
  border-bottom: 0.01rem solid rgb(216, 216, 216);
  position: relative;
}
#yonghuming > span {
  font-size: 0.15rem;
  color: #333;
  line-height: 0.5rem;
  margin-left: 0.1rem;
}
#yonghuming > span + span {
  width: 0.6rem;
  line-height: 0.37rem;
  position: absolute;
  right: 0.6rem;
  top: 0.1rem;
  color: rgb(216, 216, 216);
}
#yonghuming > img {
  width: 0.1rem;
  color: rgb(216, 216, 216);
  position: absolute;
  right: 0.1rem;
  top: 0.2rem;
}
#shouhuodizhi {
  width: 3.75remm;
  position: relative;
  background-color: white;
}
#shouhuodizhi > span {
  font-size: 0.15rem;
  color: #333;
  line-height: 0.5rem;
  margin-left: 0.1rem;
}
#shouhuodizhi > img {
  width: 0.1rem;
  color: rgb(216, 216, 216);
  position: absolute;
  right: 0.1rem;
  top: 0.2rem;
}
#zhanghaobangding {
  width: 3.75remm;
  position: relative;
}
#zhanghaobangding > span {
  font-size: 0.15rem;
  color: #333;
  line-height: 0.3rem;
  margin-left: 0.1rem;
}
#shouji {
  width: 3.75remm;
  background-color: white;
  position: relative;
}
#shouji_l {
  width: 0.2rem;
  height: 0.3rem;
  background-color: #3190e8;
  border-radius: 0.03rem;
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
}
#shouji_l > img {
  height: 0.2rem;
  text-align: center;
  margin-top: 0.05rem;
  margin-left: 0.001rem;
}
#shouji > span {
  font-size: 0.15rem;
  color: #333;
  line-height: 0.5rem;
  margin-left: 0.4rem;
}
#shouji > img {
  width: 0.1rem;
  color: rgb(216, 216, 216);
  position: absolute;
  right: 0.1rem;
  top: 0.2rem;
}
#anquanshezhi {
  width: 3.75remm;
  position: relative;
}
#anquanshezhi > span {
  font-size: 0.15rem;
  color: #333;
  line-height: 0.3rem;
  margin-left: 0.1rem;
}
#denglumima {
  width: 3.75rem;
  background-color: white;
  border-top: 0.01rem solid rgb(216, 216, 216);
  border-bottom: 0.01rem solid rgb(216, 216, 216);
  position: relative;
}
#denglumima > span {
  font-size: 0.15rem;
  color: #333;
  line-height: 0.5rem;
  margin-left: 0.1rem;
}
#denglumima > img {
  width: 0.1rem;
  color: rgb(216, 216, 216);
  position: absolute;
  right: 0.1rem;
  top: 0.2rem;
}
#button {
  width: 3.55rem;
  height: 0.4rem;
  background-color: #d8584a;
  margin-top: 0.3rem;
  margin-left: 0.1rem;
  font-size: 0.15rem;
  color: #fff;
  border-radius: 0.1rem;
  text-align: center;
  line-height: 0.4rem;
}
</style>
