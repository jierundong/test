<template>
<div class="main">
    <div class="page-head">
    <img @click="leftimg"  class="left-head" style="width:30px" :src="require('../../assets/arrowleft.png')">
    <span class="middle-head">热门</span>
    </div>  
    <div class="imgdiv2">
        <mt-swipe class="carousel" :auto="4000">
        <mt-swipe-item><img class="carousel9" :src="require('../../assets/carousel9.jpg')"></mt-swipe-item>
        <mt-swipe-item><img class="carousel10" :src="require('../../assets/carousel10.jpg')" alt=""></mt-swipe-item>
        <mt-swipe-item><img class="carousel11" :src="require('../../assets/carousel11.jpg')" alt=""></mt-swipe-item>
        <mt-swipe-item><img class="carousel12" :src="require('../../assets/carousel12.jpg')" alt=""></mt-swipe-item>
        </mt-swipe>
    </div>
    <p>热门节目</p>
     <div class="video">
            <video :src="require('../../assets/x.mp4')" controls loop muted=“muted”></video>
            <video :src="require('../../assets/x.mp4')" controls loop muted=“muted”></video>
            </div>
            <div class="video">
            <video :src="require('../../assets/x.mp4')" controls loop muted=“muted”></video>
            <video :src="require('../../assets/x.mp4')" controls loop muted=“muted”></video>
            </div>
            <div class="video">
            <video :src="require('../../assets/x.mp4')" controls loop muted=“muted”></video>
            <video :src="require('../../assets/x.mp4')" controls loop muted=“muted”></video>
    </div>
</div>
</template>
<script>
import "mint-ui/lib/style.css"
    export default {
      methods:{
          leftimg(){
              this.$router.push('/main')
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
    .middle-head{
        margin-left: 34%
    }
    p{
        color: black;
        text-align: left;
        font-size: 16px;
        text-align: center;
        font-weight: 600
    }
    .carousel{
    width:100%;
    height: 180px;
}
.carousel9,.carousel10,.carousel11,.carousel12{
    align-items: center;
    width:95%;
    height: 180px;  
}
 video{
    width: 43%;
    height: 200px;
    margin-right: 7%
}
.video{
    
    display: flex;
    margin-top: -5%;
    margin-bottom: 15%;
    margin-left: 5%;
    
    z-index: 2;
}
</style>