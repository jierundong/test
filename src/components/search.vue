<template>
<div class="main">
    <div class="page-head">
      <img @click="left" style="width:30px;height:30px" :src="require('../assets/arrowleft.png')">
      <img  style="width:23px;height:23px;margin-left:15px;z-index:1000"  :src="require('../assets/search.png')">
      <input @click="search" v-model="keywords" type="text" placeholder="搜索音乐、视频、歌单、歌手" class="holderinput" id="put" autofocus="autofocus" >
      <div class="right-head">
         <div class="imgdiv">
            <img  style="width:30px;height:30px;margin-left:-70px" :src="require('../assets/sounds.png')">
         </div>
      </div>
      
      
    </div>
    <div id="div">
        <p class="p0">搜索</p>
        <div class="div3"><img  style="width:24px;height:24px;margin-left:5%;" :src="require('../assets/search.png')"><p class="s0"></p><br></div>
        <div class="div3"><img  style="width:24px;height:24px;margin-left:5%;" :src="require('../assets/search.png')"><p class="s0">32432</p><br></div>
        <div class="div3"><img  style="width:24px;height:24px;margin-left:5%;" :src="require('../assets/search.png')"><p class="s0">32432</p><br></div>
        <div class="div3"><img  style="width:24px;height:24px;margin-left:5%;" :src="require('../assets/search.png')"><p class="s0">32432</p><br></div>
        <div class="div3"><img  style="width:24px;height:24px;margin-left:5%;" :src="require('../assets/search.png')"><p class="s0">32432</p><br></div>
        <div class="div3"><img  style="width:24px;height:24px;margin-left:5%;" :src="require('../assets/search.png')"><p class="s0">32432</p><br></div>
        <div class="div3"><img  style="width:24px;height:24px;margin-left:5%;" :src="require('../assets/search.png')"><p class="s0">32432</p><br></div>
        <div class="div3"><img  style="width:24px;height:24px;margin-left:5%;" :src="require('../assets/search.png')"><p class="s0">32432</p><br></div>
        <div class="div3"><img  style="width:24px;height:24px;margin-left:5%;" :src="require('../assets/search.png')"><p class="s0">32432</p><br></div>
        <div class="div3"><img  style="width:24px;height:24px;margin-left:5%;" :src="require('../assets/search.png')"><p class="s0">32432</p><br></div>
    </div>
    <div id="div2">
    <p style="text-align:left;font-size:15px;color:black;font-weight:600">热门搜索</p>
            <div class="navigation">
            <mt-badge size="small" color="#fff"><span>我期待</span></mt-badge>
            <mt-badge size="small" color="#fff"><span>我的未来不是梦</span></mt-badge>
            <mt-badge size="small" color="#fff"><span>天天想你</span></mt-badge>
            </div><br>
            <div style="margin-left:-16px" class="navigation">
            <mt-badge size="small" color="#fff"><span >童话镇</span></mt-badge>
            <mt-badge size="small" color="#fff"><span >张雨生</span></mt-badge>
            <mt-badge size="small" color="#fff"><span>大海</span></mt-badge>
            </div><br>
            <div style="margin-left:-8px" class="navigation">
            <mt-badge size="small" color="#fff"><span>遇见</span></mt-badge>
            <mt-badge size="small" color="#fff"><span>消愁</span></mt-badge>
            <mt-badge size="small" color="#fff"><span>像我我这样的人</span></mt-badge>
            </div><br>
    <p style="text-align:left;font-size:15px;color:black;font-weight:600">历史搜索</p>
        <div class="navigation">
            <mt-badge size="small" color="#fff"><span>我期待</span></mt-badge>
            <mt-badge size="small" color="#fff"><span>我的未来不是梦</span></mt-badge>
            <mt-badge size="small" color="#fff"><span>天天想你</span></mt-badge>
        </div><br>
        <div style="margin-left:-16px" class="navigation">
            <mt-badge size="small" color="#fff"><span  >童话镇</span></mt-badge>
            <mt-badge size="small" color="#fff"><span >张雨生</span></mt-badge>
            <mt-badge size="small" color="#fff"><span>大海</span></mt-badge>
            </div><br>
        <div style="margin-left:-8px" class="navigation">
            <mt-badge size="small" color="#fff"><span>遇见</span></mt-badge>
            <mt-badge size="small" color="#fff"><span>消愁</span></mt-badge>
            <mt-badge size="small" color="#fff"><span>像我我这样的人</span></mt-badge>
        </div><br> 
        </div> 
    </div>
</template>
<script>
// https://c.y.qq.com/soso/fcgi-bin/client_search_cp?aggr=1&cr=1&flag_qc=0&p=1&n=30&w=%E6%88%91%E6%9C%9F%E5%BE%85"
export default {
    data(){
        return{keywords:""}
    },
    methods:{
       left(){
           this.$router.push('/main')
       },
       search(){
           
           var put1=document.getElementById("put");
              var div1=document.getElementById("div");
              var pCollection= div.getElementsByTagName("p");
              var div2=document.getElementById("div2");
              var k=this.keywords;
          if(this.keywords.trim()!==""){
                put1.onkeyup=function(){
                     div1.style.display="block"
                     div2.style.display="none"
                
                    for(var i=1;i<=10;i++){
                         pCollection[i].innerHTML=put1.value;
                
              
                }
                
                        
 }
              console.log(`搜索${this.keywords}相关的内容...`)
          }
         else{
              put1.onkeyup=function(){
            //  var div1=document.getElementById("div");
            //  var div2=document.getElementById("div2");
              div2.style.display="block";
                div1.style.display="none";
              }
          }
          
       }
    },
       watch:{
       keywords(){
          this.search();
      }
       }
}
</script>
<style scoped>
.main{
    background:#f1eded; 
    margin-top: -10%;
    padding: 3%;
    height: 1000px
}
.page-head{
    
    margin-bottom: 10%;
    margin-left:0 ;
    display:flex;
    /* z-index: 999; */
    width:100%;
    justify-content: space-between;
    align-items:center;
    height:48px;
    /* padding-left:7px;padding-right:7px; */
    color:black;font-size:25px; 
    font-weight: 600
    }
.imgdiv{
  align-items: center;
  height: 28px;  ;
}
input::-webkit-input-placeholder{text-align: center;}
.holderinput{
    border-radius: 11%
}
input{
    height: 22px;
    width:60%;
    margin-left: -45px;
    margin-top:0px;
    outline: none;
    font-size: 15px;
    padding: 5px;
    padding-left: 35px;
    padding-right: 35px;
   
    
}
.s1{
    margin-top:33px;
    margin-left: 10px
}
span{
        color: black;
    }
    .navigation{
        display: flex;
        justify-content: space-around
    }
    p{
        font-size: 10px;
        color: #999
    }
    #div{
        width: 100%;
        height: 700px;
        display: none;
        text-align: left;       
    }
    .p0{
        font-size: 16px;
        color: #31C27C;
        
    }
    .s0{
        margin-top: -8%;
        margin-left: 20%;
        font-size: 18px;
        color: black;
        width: 100%;
    }
    .div3{
       width: 92%;
       height: 40px;
       margin-right:5%;
       white-space:nowrap;
       overflow-x:hidden;
    }
</style>