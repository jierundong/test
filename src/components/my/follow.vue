<template>
    <div>
        <div class="page-head">
        <img @click="leftimg"  class="left-head" style="width:30px" :src="require('../../assets/arrowleft.png')">
        <span class="middle-head">最新动态</span>
        </div>
        <div class="main">
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
        <div class="video">
            <video :src="require('../../assets/x.mp4')" controls loop muted=“muted”></video>
            <video :src="require('../../assets/x.mp4')" controls loop muted=“muted”></video>
        </div>
        <div class="video">
            <video :src="require('../../assets/x.mp4')" controls loop></video>
            <video :src="require('../../assets/x.mp4')" controls loop></video>
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
        margin-left: 32%;
        
    }
    .main{
       background:#f1eded;
       margin-top: 20%;
       padding-left:3% ;
       padding-right:3%; 
    }
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
</style>
