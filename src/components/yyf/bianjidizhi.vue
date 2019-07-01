<template>
    <div id="bianjidizhi">
        <div id="top_s">
		<img @click="back()" src="../../../static/imgs/back.png" />
		<span>编辑地址</span>
        <span id="bj">编辑</span>
		</div>
        <div id="center"></div>
        <!-- <div > -->
            <ul id="xinzengdizhi">
                <li @click="dele(i)" v-for="(v,i) in datas" :key="i">{{v.address}}
                    <p>{{v.phone}}</p>
                </li>
            </ul>
        <!-- </div> -->
        <div id="xzdz" @click="go()">
            <p>新增地址</p>
            <img src="../../../static/imgs/youj.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name:'bianjidizhi',
    data(){
        return {
            datas:[]
        }
    },
    created(){
        this.aaa();
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        go(){
             this.$router.push({name:"xinzengdizhi"});
        },
        aaa() {
     const api = "https://elm.cangdu.org/v1/users/"+this.$store.state.nameid+"/addresses";
            this.$http({
              url:api,
              method:'get',
              //用于表示用户代理是否应该在跨域请求情况下从其他域发送cookies--不使用缓存数据
              withCredentials:true,
             
            }).then(res=>{
                console.log(res.data);
                this.datas =res.data;
            })
    },
     dele(i) {
     const api = "https://elm.cangdu.org/v1/users/"+this.$store.state.nameid+"/addresses/"+this.datas[i].id;
            this.$http({
              url:api,
              method:'DELETE',
              //用于表示用户代理是否应该在跨域请求情况下从其他域发送cookies--不使用缓存数据
              withCredentials:true,
             
            }).then(res=>{
                console.log(res.data);
                
            })
            this.datas.splice(i,1);
    },
    }
}
</script>
<style scoped>
#xinzengdizhi{
    width: 3.75rem;
    height: 0.45rem;
    background-color: #fff;
}
#xinzengdizhi>li{
    color:  #333;
    font-size: 0.15rem;
    margin-top: 0.1rem;
    margin-left: 0.1rem;
}
#xinzengdizhi>li>p{
    width: 3.65rem;
    margin-top: 0.1rem;
}
#top_s {
				width: 3.75rem;
				overflow: hidden;
                background-color: #3190e8;
                position: relative;
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
				font-size: 0.2rem;
                font-weight: 900;
				color: white;
				padding: 0.1rem; 
                text-align: center;
			}
            #top_s>span+span{
                font-size: 0.15rem;
                position: absolute;
                right: 0.05rem;
                top: 0.05rem;
                font-weight:400;
                color: white;
            }
            #center{
                width: 3.75rem;
                height: 0.1rem;
                border-bottom: 0.01rem solid  #d9d9d9;
            }
            #xzdz{
                width: 3.75rem;
                height: 0.4rem;
                background-color: white;
                line-height: 0.4rem;
                margin-top: 0.1rem;
                position: relative;
            }
             #xzdz>p{
                 display: block;
                 font-size: 0.17rem;
                 font-weight: 100;
                 color:  #333;
                 margin-left: 0.1rem;
             }
              #xzdz>img{
                 width: 0.1rem;
                 position: absolute;
                 right: 0.1rem;
                 top: 0.1rem;
             } 
</style>
