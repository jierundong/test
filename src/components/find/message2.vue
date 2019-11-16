<template>
<div>
    <div class="head"><div class="headimg" ></div><span class="s1">宝哥</span></div>  
    <div class="body">
        <div>
       <p>宝哥真帅，高音华人最高，唱作俱佳的大师级音乐人
       宝哥真帅，高音华人最高，唱作俱佳的大师级音乐人
       宝哥真帅，高音华人最高，唱作俱佳的大师级音乐人</p>
        </div>
       <img class="rightimg" :src="require('../../assets/baoge2.jpg')" alt="">
    </div>
    <div class="foot"><span>最新推荐</span><img class="foot1img" :src="require('../../assets/discuss.png')" alt=""><img class="foot2img" :src="require('../../assets/good.png')" alt=""><img class="foot3img" :src="require('../../assets/more.png')" alt=""></div>

    <div class="head"><div class="headimg" ></div><span class="s1">飞机</span></div>  
    <div class="body">
        <div>
       <p>宝哥真帅，高音华人最高，唱作俱佳的大师级音乐人
       宝哥真帅，高音华人最高，唱作俱佳的大师级音乐人
       宝哥真帅，高音华人最高，唱作俱佳的大师级音乐人</p>
        </div>
       <img class="rightimg" :src="require('../../assets/baoge2.jpg')" alt="">
    </div>
    <div class="foot"><span>最新推荐</span><img class="foot1img" :src="require('../../assets/discuss.png')" alt=""><img class="foot2img" :src="require('../../assets/good.png')" alt=""><img class="foot3img" :src="require('../../assets/more.png')" alt=""></div>

    <div class="head"><div class="headimg" ></div><span class="s1">林志炫</span></div>  
    <div class="body">
        <div>
       <p>宝哥真帅，高音华人最高，唱作俱佳的大师级音乐人
       宝哥真帅，高音华人最高，唱作俱佳的大师级音乐人
       宝哥真帅，高音华人最高，唱作俱佳的大师级音乐人</p>
        </div>
       <img class="rightimg" :src="require('../../assets/baoge2.jpg')" alt="">
    </div>
    <div class="foot"><span>最新推荐</span><img class="foot1img" :src="require('../../assets/discuss.png')" alt=""><img class="foot2img" :src="require('../../assets/good.png')" alt=""><img class="foot3img" :src="require('../../assets/more.png')" alt=""></div>
   
</div>
</template>
<script>
    export default {
      
    }
</script>
<style scoped>
   video{
    width: 43%;
    height: 200px;
    margin-right: 7%
    }
    .video{
    
    display: flex;
    margin-top: -15%;
    margin-bottom: 15%;
    margin-left: 5%;
    
    z-index: 2;
    } 
    .head,.body,.foot{
        display: flex
    }
    .head{
        margin-top: 10%
    }
    .headimg{
        margin-left: 2%;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-image:url("../../assets/baoge1.jpg");
		background-size:cover;
		background-repeat:no-repeat;
        z-index: 20;
    }
    .s1{
        margin-top: 4%;
        margin-left: 2%
    }
    .rightimg{
        width: 40%;
        height: 30%;
        margin-left: 2%
    }
    p{
        font-size: 6px;
        margin-left: 4%;
        text-align: start
    }
    .foot{
        display: flex;
        margin-top: 5%
    }
    span{
        font-size: 5px;
        margin-left: 4%;  
        color: #999
    }
    .foot1img{
        width: 20px;
        height: 20px;
        margin-left: 50%
    }
    .foot2img{
         width: 22px;
        height: 22px;
        margin-left: 5%
    }
    .foot3img{
         width: 20px;
        height: 20px;
        margin-left: 5%
    }
    

</style>