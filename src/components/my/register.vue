<template>
<div>
    <h1>注册</h1>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="uname"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" v-model="upwd"></mt-field>
    <mt-field label="电话号" placeholder="请输入电话号" type="tel" v-model="phone"></mt-field>
    <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
    <mt-button  class="b2" type="default" size="large" @click="register">注册</mt-button>
    <mt-button  class="b1" type="default" size="large" @click="re">返回</mt-button>
</div>
</template>
<script>
    export default {
      data(){
    return {
        uname:"",
        upwd:"",
        phone:"",
        email:""
    }
},methods:{
        register(){
           var ureg=/^[a-z0-9\u4e00-\u9fa5]{2,12}$/i;
           var preg=/^[a-z0-9]{3,12}$/i;
           var phone=/^1[3456789]\d{9}$/;
           var email=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
           var u=this.uname;
           var p=this.upwd;
           var ph=this.phone;
           var e=this.email;
        //    console.log(u)
        //    console.log(p)
        //    console.log(ph)
        //    console.log(e)
           if(ureg.test(u)==false){
               this.$messagebox("消息","用户名格式不正确");
               return
           }
           if(preg.test(p)==false){
               this.$messagebox("消息","密码格式不正确");  
                return
           }
           if(phone.test(ph)==false){
               this.$messagebox("消息","电话格式不正确");  
                return
           }
           if(email.test(e)==false){
               this.$messagebox("消息","邮箱格式不正确");  
                return
           }
           //验证用户名和电话号是否可用
           var url = "search";
           var obj = {uname:u,phone:ph};
           console.log(obj)
           this.axios.get(url,{params:obj}).then(res=>{
                console.log(res);
                console.log(u)
                console.log(ph)
             if(res.data.length==1){
                this.$messagebox("消息","用户名或者电话号已经被占用");
                // this.$router.push("/register");
                return
             }else{
                 //用户名或者密码可用,才请求注册
            this.axios.post('register',this.qs.stringify(          {uname:this.uname,upwd:this.upwd,email:this.email,phone:this.phone})).then((res)=>{
                console.log(res);
                console.log(u)
                console.log(res.data);
             if(res.data.code==1){
                this.$messagebox("消息","注册成功");
                this.$router.push("/login");
             }
            });
                
                
             }
           });


            
           },
           re(){
                this.$router.push('/login');
           }
        } 
    }
    
</script>
<style scoped>    
.b1{
    background: rgb(207, 204, 204);
    color: #666;
}
.b2{
    background: #31C27C;
    color: white;
}
h1{
    color: #666
}
</style>