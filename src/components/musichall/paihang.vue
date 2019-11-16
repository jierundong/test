<template>
<div class="main">
    <div class="page-head">
    <img @click="leftimg"  class="left-head" style="width:30px" :src="require('../../assets/arrowleft.png')">
    <span class="middle-head">排行榜</span>
    </div>
    <p class="phead">专辑销售量榜</p>
    <div class="d1">
        <div class="xiaoshou"> 
            <div>  
            <h3>TOP1-----大海</h3>
            <p class="p1">《大海》是台湾歌手张雨生的第四张个人专辑。内含的同名歌曲《大海》人们至今耳熟能详，同时也被舆论误导称为了所谓“最杰出”的代表作。</p>
            </div>
            <img  class="img" :src="require('../../assets/dahai.png')">
        </div>
    </div>
     <div class="d1">
        <div class="xiaoshou"> 
            <div>  
            <h3>TOP2-----吻别</h3>
            <p class="p1">《吻别》是由何启弘作词，殷文琦作曲，涂惠源编曲，张学友演唱的歌曲，收录在张学友1993年3月5日发行的同名专辑《吻别》中。</p>
            </div>
            <img  class="img" :src="require('../../assets/wenbie.png')">
        </div>
    </div>
     <div class="d1">
        <div class="xiaoshou"> 
            <div>  
            <h3>TOP3-----BadBoy</h3>
            <p class="p1">《BAD BOY》收录于1997年6月张惠妹发行的第二张个人同名专辑《BAD BOY》，由张雨生亲自为阿妹量身定做词曲，是阿妹早期经典歌曲之一。</p>
            </div>
            <img  class="img" :src="require('../../assets/badboy.png')">
        </div>
    </div>
     <div class="d1">
        <div class="xiaoshou"> 
            <div>  
            <h3>TOP4-----姐妹</h3>
            <p class="p1">《姐妹》是台湾歌手张惠妹在1996年12月13日出道发行的第一张专辑。由张雨生担当制作人，共收录10首歌曲</p>
            </div>
            <img  class="img" :src="require('../../assets/jiemei.png')">
        </div>
    </div>
     <div class="d1">
        <div class="xiaoshou"> 
            <div>  
            <h3>TOP5-----天天想你</h3>
            <p class="p1">《天天想你》是张雨生在1988年11月01日发行了出道之后的第一张个人专辑。整张专辑风格清新，也充分让雨生的自然真挚流露。</p>
            </div>
            <img  class="img" :src="require('../../assets/tiantian.png')">
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
    p{
        color: black;
        text-align: left;
        font-size: 20px;
        font-weight: 600
    }
    .xiaoshou{
        display: flex;
    }
    h3{
        color: black
    }
    .p1{
        font-size: 13px;
        margin-left: 2%;
        width: 200px
    }
    .main{
    background:#f1eded;
    }
    .d1{
        background: #e5e5e5;
        padding: 1%;
        margin-top: 4%
    }
    .phead{
        margin-left: 4%
    }
    .img{
        width:180px;
        height:150px;
        margin-top:5%;
        margin-left:2%
    }
</style>