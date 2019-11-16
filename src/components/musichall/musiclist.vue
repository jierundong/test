<template>
<div class="main">
    <div class="page-head">
    <img @click="leftimg"  class="left-head" style="width:30px" :src="require('../../assets/arrowleft.png')">
    <span class="middle-head">歌单</span>
    </div>  
    <p>专区</p>
        <div class="musiclist"> 
            <img :src="require('../../assets/musiclist1.jpg')"><img :src="require('../../assets/musiclist2.jpg')">
        </div>
        <div class="musiclist"> 
            <img :src="require('../../assets/musiclist3.jpg')"><img :src="require('../../assets/musiclist4.jpg')">
        </div>
        <div class="musiclist"> 
            <img :src="require('../../assets/musiclist5.jpg')"><img :src="require('../../assets/musiclist6.jpg')">
        </div>
        <div class="musiclist"> 
            <img :src="require('../../assets/musiclist7.jpg')"><img :src="require('../../assets/musiclist8.jpg')">
        </div>
        <div class="musiclist"> 
            <img :src="require('../../assets/musiclist9.jpg')"><img :src="require('../../assets/musiclist10.jpg')">
        </div>  
  
</div>
</template>
<script>
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
        font-size: 20px;
        font-weight: 600
    }
    .musiclist{
        display: flex;
        justify-content: space-around;
        margin-bottom: 10%
    }
    .musiclist>img{
       width: 45%;
       height: 40%
    }

</style>