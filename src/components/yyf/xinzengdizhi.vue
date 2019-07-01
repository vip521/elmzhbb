<template>
    <div id="xinzengdizhi">
         <div id="top_s">
		<img @click="back()" src="../../../static/imgs/back.png" />
		<span>新增地址</span>
		</div>
        <div id="center">
            <input v-model="xingming" type="text"  placeholder="请填写你的姓名">
             <input @click="sousuodizhi()" v-model="dizhi" type="text" placeholder="小区/写字楼/学校等">
              <input v-model="xxdizhi" type="text"  placeholder="请填写详细送餐地址">
               <input v-model="phone" type="text"  placeholder="请填写能够联系到您的手机号">
                <input v-model="byphone" id="last"  type="text" placeholder="备用联系电话(选填)">
        </div>
        <div id="anniu" @click="xzdz()">
            新增地址
        </div>
    </div>
</template>
<script>
export default {
    name:'xinzengdizhi',
    data() {
        return {
            xingming:"",
            dizhi:"",
            xxdizhi:"",
            phone:"",
            byphone:"",
            datas:""

        }
    },
    methods:{
        xzdz(){
            if(this.xingming.length==0||this.dizhi.length==0||this.xxdizhi.length==0||this.phone.length==0){
                alert("请按要求填写信息");
                return;
            }
            this.$router.push({name:"bianjidizhi"});
            const api = "https://elm.cangdu.org/v1/users/"+this.$store.state.nameid+"/addresses";
            this.$http({
              url:api,
              method:'post',
              //用于表示用户代理是否应该在跨域请求情况下从其他域发送cookies--不使用缓存数据
              withCredentials:true,
              data:{
            name:this.xingming,
            address:this.dizhi,
            address_detail:this.xxdizhi,
            phone:this.phone,
            phone_bk:this.byphone,
            sex :1,
            tag_type:2,
            tag:"2",
            geohash :this.$store.state.shdz
              }
            }).then(res=>{
                console.log("成功");
                console.log(res.data);
                this.datas =res.data;
            })
        },
        back(){
            this.$router.go(-1);
        },
        sousuodizhi(){
            this.$router.push({name:"sousuodizhi"});
        },
         abc(){
            this.dizhi = this.$store.state.map;
        }
    },
    computed: {
       get(){
           return this.$store.state.obj.xingming
       },

    },
    created() {
        this.abc();
    },
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
            #center{
                width: 3.75rem;
                background-color: white;
                margin-top: 0.1rem;
            }
            #center input{
                width: 3.45rem;
                height: 0.3rem;
                margin-top: 0.1rem;
                margin-left: 0.1rem;
                border: 0.01rem solid #ddd;
                background-color:  #f2f2f2;
                border-radius: 0.03rem;
                padding-left: 0.1rem;
            }
            #last{
                margin-bottom:0.1rem;
            }
            #anniu{
                width: 3.55rem;
                height: 0.4rem;
                background-color:LimeGreen;
                border-radius: 0.03rem;
                margin-left: 0.1rem;
                text-align: center;
                line-height: 0.4rem;
                margin-top: 0.2rem;
                color: white;
                opacity: 0.8;
                font-size: 0.15rem;
                font-weight: 700;
            }
</style>
