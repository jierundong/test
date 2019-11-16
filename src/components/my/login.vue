<template>
<div class="main">
    <h1>登录</h1>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="uname"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" v-model="upwd"></mt-field>
    <mt-button class="b2" type="default" size="large" @click="login">登录</mt-button>
    <mt-button class="b1" type="default" size="large" @click="re">取消</mt-button>
    <div class="ds"><span @click="forget">忘记密码</span><span @click="register">无法登录?立即注册</span></div>
</div>
</template>
<script>
import register from "./register"
import updateupwd from "./updateupwd"
    export default {
      data(){
    return {
        uname:"",
        upwd:"",
    }
},methods:{
        login(){
           var ureg=/^[a-z0-9]{3,12}$/i;
           var preg=/^[a-z0-9]{3,12}$/i;
           var u=this.uname;
           var p=this.upwd;
        //    console.log(u)
        //    console.log(p)
           if(ureg.test(u)==false){
               this.$messagebox("消息","用户名格式不正确");
               return
           }
           if(preg.test(p)==false){
               this.$messagebox("消息","密码格式不正确");  
                return
           }
           var url = "login";
           var obj = {uname:u,upwd:p};
           console.log(obj)
           this.axios.get(
           url,
           {params:obj}
           ).then(res=>{
           console.log(res);
           console.log(u)
           console.log(res.data.code);
             if(res.data.code<0){
                this.$messagebox("消息","用户名或密码有误");
             }else{
            //跳转Product组件 //9:47
                this.$messagebox("消息","登录成功");
                this.$router.push("/main");
                
             }
           });
           

           },
           re(){
                this.$router.push('/main');
           },
           register(){
                this.$router.push('/register');
           },
           forget(){
               this.$router.push('/updateupwd')
           }
        },
        components:{
        "register":register,
        "updateupwd":updateupwd
    }   
    }
    
</script>
<style scoped>    
.b1{
    background: rgb(207, 204, 204);
    color: #666;
    margin-bottom: 5%
}
.b2{
    background: #31C27C;
    color: white;
}
.ds{
    display:flex;
    justify-content: space-between
}
h1{
    color: #666
}

</style>