<template>
<div>
    <h1>找回密码</h1>
    <mt-field label="电话号" placeholder="请输入电话号" type="tel" v-model="phone"></mt-field>
    <mt-button  class="b2" type="default" size="large" @click="Get">获取密码</mt-button>
    <mt-button  class="b1" type="default" size="large" @click="re">取消</mt-button>
</div>
</template>
<script>
    export default {
      data(){
    return {
        phone:"" 
    }
},methods:{
        Get(){
           var phone=/^1[3456789]\d{9}$/;
           var ph=this.phone;
           console.log(ph)
           if(phone.test(ph)==false){
               this.$messagebox("消息","电话格式不正确");  
                return
           }
           //通过电话号找回密码
           var url = "search2";
           var obj = {phone:ph};
           console.log(obj)
           this.axios.get(url,{params:obj}).then(res=>{
           console.log(res);
           console.log(ph)
             if(res.data.length==1){
                this.$messagebox("消息","您的密码是"+"             "+res.data[0].upwd);
                this.$router.push('/login')
             }else{
            //跳转Product组件 //9:47
                this.$messagebox("消息","电话号未注册"); 
             }
           });
           },
           re(){
               this.$router.push('/login')
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