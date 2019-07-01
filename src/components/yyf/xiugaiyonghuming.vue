<template>
    <div id="xiugaiyonghuming">
        <div id="top_s">
		<img @click="back()" src="../../../static/imgs/back.png" />
		<span>修改用户名</span>
		</div>
        <input v-model="username" type="text" placeholder="输入用户名">
        <p>用户名只能修改一次(5-24字符之间)</p>
        <div id="button" @click="yes()">确认修改</div>
    </div>
</template>
<script>
export default {
    name:'xiugaiyonghuming',
    data(){
        return{
            username:""
        }
    },
    methods:{
         back(){
             this.$router.go(-1);
        },
        yes(){
            this.$store.commit("aaa",this.username);
            this.$router.go(-1);
        }
    }
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
            input{
                width: 3.55rem;
                height: 0.4rem;
                margin-left: 0.1rem;
                margin-top: 0.1rem;
                border: 1px solid #ddd;
                border-radius: 0.02rem;
                font-size: 0.2rem;
                color: #333;
                line-height: 0.4rem;
                background-color: rgb(243,243,243);
            }
            p{
                width: 3.55rem;
                padding: 0.1rem;
                color: #666;
                font-size: 0.1rem;
            }
            #button{
                width: 3.55rem;
                height: 0.5rem;
                margin-left: 0.1rem;
                margin-top: 0.1rem;
                background-color: #3190e8 ;
                border-radius: 0.01rem;
                color:rgb(217,217,217);
                font-size: 0.18rem;
                text-align: center;
                line-height: 0.5rem;
            }
</style>
