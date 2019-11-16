<template>
    <div>
        <div class="page-head">
          <img @click="leftimg"  class="left-head" style="width:30px" :src="require('../../assets/arrowleft.png')">
          <span class="middle-head">歌手</span>
          <img @click="left"  class="right-head" style="width:23px" :src="require('../../assets/search2.png')">
        </div>
        <div class="singer">
            <div class="singer-head">
            <p>常听歌手</p><p>关注歌手</p>
            </div>
            <div>
                <!-- <img src="" alt=""> -->
            </div>
            <div class="navigation">
            <mt-badge size="small" color="#31C27C">全部</mt-badge>
            <mt-badge size="small" color="#fff"><span>内地</span></mt-badge>
            <mt-badge size="small" color="#fff"><span>港台</span></mt-badge>
            <mt-badge size="small" color="#fff"><span>欧美</span></mt-badge>
            <mt-badge size="small" color="#fff"><span>日本</span></mt-badge>
            <mt-badge size="small" color="#fff"><span>韩国</span></mt-badge>
            </div><br>
            <div class="navigation1">
            <mt-badge size="small" color="#31C27C">全部</mt-badge>
            <mt-badge class="b1" size="small" color="#fff"><span class="span1">男</span></mt-badge>
            <mt-badge class="b2" size="small" color="#fff"><span class="span1">女</span></mt-badge>
            <mt-badge size="small" color="#fff"><span>组合</span></mt-badge>
            </div><br>
            <div class="navigation2">
            <mt-badge size="small" color="#31C27C">全部</mt-badge>
            <mt-badge size="small" color="#fff"><span>流行</span></mt-badge>
            <mt-badge size="small" color="#fff"><span>嘻哈</span></mt-badge>
            <mt-badge size="small" color="#fff"><span>摇滚</span></mt-badge>
            <mt-badge size="small" color="#fff"><span>电子</span></mt-badge>
            <mt-badge size="small" color="#fff"><span>民谣</span></mt-badge>
            </div><br>
            <p class="p2">热</p>
            <div class="singerlist">
                <div class="singerimg1">
                </div>
                <p class="p1">张雨生</p>
                <mt-badge class="guanzhu" size="small" color="#fff">+关注</mt-badge>
            </div>
            <div class="singerlist">
                <div class="singerimg2">
                </div>
                <p class="p1">张国荣</p>
                <mt-badge class="guanzhu" size="small" color="#fff">+关注</mt-badge>
            </div>
            <div class="singerlist">
                <div class="singerimg3">
                </div>
                <p class="p1">黄家驹</p>
                <mt-badge class="guanzhu" size="small" color="#fff">+关注</mt-badge>
            </div>
            <div class="singerlist">
                <div class="singerimg4">
                </div>
                <p class="p1">张学友</p>
                <mt-badge class="guanzhu" size="small" color="#fff">+关注</mt-badge>
            </div>
            <div class="singerlist">
                <div class="singerimg5">
                </div>
                <p class="p1">诸葛亮</p>
                <mt-badge class="guanzhu" size="small" color="#fff">+关注</mt-badge>
            </div>
            <div class="singerlist">
                <div class="singerimg6">
                </div>
                <p class="p1">王朗</p>
                <mt-badge class="guanzhu1" size="small" color="#fff">+关注</mt-badge>
            </div>
            <div class="singerlist">
                <div class="singerimg5">
                </div>
                <p class="p1">诸葛亮</p>
                <mt-badge class="guanzhu" size="small" color="#fff">+关注</mt-badge>
            </div>
            <div class="singerlist">
                <div class="singerimg5">
                </div>
                <p class="p1">诸葛亮</p>
                <mt-badge class="guanzhu" size="small" color="#fff">+关注</mt-badge>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
      methods:{
          leftimg(){
              this.$router.push('/main')
          },
          left(){
              this.$router.push('/search')
          }
      }
    }
</script>
<style scoped>
    .page-head{
    margin-top: -10%;
    margin-bottom: 10%;
    margin-left:0 ;
    display:flex;
    z-index: 999;
    width:100%;
    align-items:center;
    height:48px;
    padding-left:7px;padding-right:7px;
    color:black;font-size:20px; 
    font-weight: 600
    }
    .left-head{
       margin-right: 35%
    }
    .middle-head{
       margin-right: 35%
    }
    .singer{
        margin-top:-5%;
        background:#f1eded;
    }
    .singer-head{
        display: flex;
        justify-content: space-around;
        margin-bottom: 4%
    }
    span{
        color: black;
    }
    .navigation,.navigation2{
        display: flex;
        justify-content: space-around
    }
    .navigation1{
        width:60%;
        display: flex;
       justify-content: space-around
       
    }
    .span1{
        text-align: center
    }
    .b1{
        width: 7%;
    }
    .b2{
        width: 7%;
    }
    p{
        font-size: 10px;
        color: #999
    }
    .p2{
        font-size: 10px;
        margin-left: -85%;
        
    }
    .singerimg1{
        margin-left: 2%;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-image:url("../../assets/baoge1.jpg");
		background-size:cover;
		background-repeat:no-repeat;
        z-index: 20;
    }
    .singerimg2{
        margin-left: 2%;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-image:url("../../assets/gege.png");
		background-size:cover;
		background-repeat:no-repeat;
        z-index: 20;
    }
    .singerimg3{
        margin-left: 2%;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-image:url("../../assets/jiaju.png");
		background-size:cover;
		background-repeat:no-repeat;
        z-index: 20;
    }
    .singerimg4{
        margin-left: 2%;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-image:url("../../assets/xueyou.png");
		background-size:cover;
		background-repeat:no-repeat;
        z-index: 20;
    }
    .singerimg5{
        margin-left: 2%;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-image:url("../../assets/zhugeliang.png");
		background-size:cover;
		background-repeat:no-repeat;
        z-index: 20;
    }
    .singerimg6{
        margin-left: 2%;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-image:url("../../assets/wanglang.png");
		background-size:cover;
		background-repeat:no-repeat;
        z-index: 20;
    }
    .singerlist{
        display: flex;
        margin-bottom: 5%
    }
    .p1{
        margin-top: 4%;
        margin-left: 2%;
        font-size: 14px;
        color:black
    }
    .guanzhu{
        margin-left: 55%;
        margin-top: 4%;
        height: 19px
    }
    .guanzhu1{
        margin-left: 59%;
        margin-top: 4%;
        height: 19px
    }
   
</style>