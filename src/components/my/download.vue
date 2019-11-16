<template>
<div>
    <div class="page-head">
    <img @click="leftimg"  class="left-head" style="width:30px" :src="require('../../assets/arrowleft.png')">
    <span class="middle-head">本地歌曲</span>
    </div>  
    <div class="main">
        <div class="musiclist">
            <div>
            <p>和天一样高</p>
            <p class="p1">张雨生-天天想你</p>
            </div>
            <img style="width:25px;height:25px;margin-top:20px;margin-left:50%" :src="require('../../assets/play.png')">
            <img style="width:25px;height:25px;margin-top:20px;margin-left:5%" :src="require('../../assets/repeat.png')">
        </div>
        <div class="musiclist">
            <div>
            <p>我期待</p>
            <p class="p1">张雨生-卡拉OK台北我</p>
            </div>
            <img style="width:25px;height:25px;margin-top:20px;margin-left:40%" :src="require('../../assets/play.png')">
            <img style="width:25px;height:25px;margin-top:20px;margin-left:5%" :src="require('../../assets/repeat.png')">
        </div>
        <div class="musiclist">
            <div>
            <p>大海</p>
            <p class="p1">张雨生-大海</p>
            </div>
            <img style="width:25px;height:25px;margin-top:20px;margin-left:57.5%" :src="require('../../assets/play.png')">
            <img style="width:25px;height:25px;margin-top:20px;margin-left:5%" :src="require('../../assets/repeat.png')">
        </div>
        <div class="musiclist">
            <div>
            <p>我的未来不是梦</p>
            <p class="p1">张雨生-六个朋友</p>
            </div>
            <img style="width:25px;height:25px;margin-top:20px;margin-left:40.5%" :src="require('../../assets/play.png')">
            <img style="width:25px;height:25px;margin-top:20px;margin-left:5%" :src="require('../../assets/repeat.png')">
        </div>
        <div class="musiclist">
            <div>
            <p>天天想你</p>
            <p class="p1">张雨生-天天想你</p>
            </div>
            <img style="width:25px;height:25px;margin-top:20px;margin-left:50%" :src="require('../../assets/play.png')">
            <img style="width:25px;height:25px;margin-top:20px;margin-left:5%" :src="require('../../assets/repeat.png')">
        </div>
        <div class="musiclist">
            <div>
            <p>口是心非</p>
            <p class="p1">张雨生-口是心非</p>
            </div>
            <img style="width:25px;height:25px;margin-top:20px;margin-left:50%" :src="require('../../assets/play.png')">
            <img style="width:25px;height:25px;margin-top:20px;margin-left:5%" :src="require('../../assets/repeat.png')">
        </div>
        <div class="musiclist">
            <div>
            <p>还是朋友</p>
            <p class="p1">张雨生-还是朋友</p>
            </div>
            <img style="width:25px;height:25px;margin-top:20px;margin-left:50%" :src="require('../../assets/play.png')">
            <img style="width:25px;height:25px;margin-top:20px;margin-left:5%" :src="require('../../assets/repeat.png')">
        </div>
        <div class="musiclist">
            <div>
            <p>玫瑰的名字</p>
            <p class="p1">张雨生-口是心非</p>
            </div>
            <img style="width:25px;height:25px;margin-top:20px;margin-left:50%" :src="require('../../assets/play.png')">
            <img style="width:25px;height:25px;margin-top:20px;margin-left:5%" :src="require('../../assets/repeat.png')">
        </div>
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
        margin-left: 32%
    }
    .main{
       background:#f1eded;
       margin-top: -5%;
       padding-left:3% ;
       padding-right:3%; 
    }
    p{
        color: black;
        text-align: left;
        font-size: 18px;
    }
    .musiclist{
        display: flex;
    }
    .p1{
        margin-top:-15%;
        color: #999;
        font-size: 13px
    }
</style>