 <template>
    <div   class="main">
        <mt-tab-container v-model="active">
          <mt-tab-container-item id="tab">
            <mainheader msg="音乐馆" :rightImg="require('../../assets/search.png')"></mainheader>
            <carousel></carousel>
            <navigation></navigation>
            <p>最新专辑</p>
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
            <p>精选视频</p>
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
          </mt-tab-container-item> 
          <mt-tab-container-item id="tab1">
              <mainheader msg="发现" :rightImg="require('../../assets/search.png')"></mainheader>
              <carousel2></carousel2>
              <findcarousel></findcarousel>
          </mt-tab-container-item> 
          <mt-tab-container-item id="tab2">
              <mainheader msg="我的" :rightImg="require('../../assets/search.png')"></mainheader>
              <mt-button type="default" @click="go"><div id=div><img id="img" :src="require('../../assets/myheader.png')" >立即登录</div></mt-button>
              <mynavigation></mynavigation>
              <mynavigation2></mynavigation2>
          </mt-tab-container-item> 
        </mt-tab-container>
        <mt-tabbar fixed v-model="active" class="imgstyle"> 
           <mt-tab-item id="tab"
           @click.native="changeState(0)">
               <tabbaricon class="t1" :focused="list[0].isSelect"
                   :selectedImage="require('../../assets/music2.png')"
                   :normalImage="require('../../assets/music1.png')">
               </tabbaricon>
               音乐馆
            </mt-tab-item>
           <mt-tab-item id="tab1" @click.native="changeState(1)">
             <tabbaricon class="t1" :focused="list[1].isSelect" :selectedImage="require('../../assets/find2.png')" :normalImage="require('../../assets/find1.png')">
            </tabbaricon>  
               发现
            </mt-tab-item>
           <mt-tab-item id="tab2" @click.native="changeState(2)">
            <tabbaricon class="t1" :focused="list[2].isSelect" :selectedImage="require('../../assets/my2.png')" :normalImage="require('../../assets/my1.png')">
            </tabbaricon>              
               我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
import mainHeader from "./mainHeader.vue"
import TabbarIcon from "./TabbarIcon.vue"
import carousel from "./carousel.vue"
import carousel2 from "../find/carousel2.vue"
import navigation from "./navigation.vue"
import findcarousel from "../find/findcarousel.vue"
import mynavigation from "../my/mynavigation.vue"
import mynavigation2 from "../my/mynavigation2.vue"
import login from "../my/login"
export default {
    data(){
        return{
            //保存当前显示子面板id
            active:"tab",
            //创建数组保存tabbar状态
            list:[
                {isSelect:true},//音乐馆
                {isSelect:false},//发现
                {isSelect:false},//我的
            ]
        }
    },
    methods:{
    changeState(n){
  // 将数据放在当前组件的数据内
       
      //函数功能:将当前参数下标
      //对应数组值修改true其它修改false
      //1:创建循环,循环数组中内容
      for(var i=0;i<this.list.length;i++){
       //2:判断如果循环下标与n相等 20
       if(n==i){
        //3:当前下标元素true 10:22
        this.list[i].isSelect=true;
       }else{
        //4:其它元素修改false
        this.list[i].isSelect=false;
       }
       
      }
    },
    go() {
        this.$router.push('/login');//要跳转的界面
    }


    },
    components:{
        "mainheader":mainHeader,
        "tabbaricon":TabbarIcon,
        "carousel":carousel,
        "carousel2":carousel2,
        "navigation":navigation,
        "findcarousel":findcarousel,
        "mynavigation":mynavigation,
        "mynavigation2":mynavigation2,
        "login":login
    }  
}
</script>
<style scoped>
/*1:修改tabbar中默认 灰和选中 绿*/
/* 文字颜色*/
/*默认文字颜色*/
.main{
    background:#f1eded;
    margin-top:-12%;
    height: 100%;
    z-index: -1;
    
}
.mint-tabbar>.mint-tab-item{
    color:#999999;
}
/*选中文字颜色*/ 
.mint-tabbar>.mint-tab-item.is-selected{
background-color:transparent;
color:#31C27C;
} 

.imgstyle{
    display:flex;
    justify-content:  space-around;
    position: fixed;
    bottom:0;
    background: white;
    z-index: 999;
    width:100%;
    height: 70px;
}
.t1{
    margin-bottom:3%
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
p{
    font-size:20px;
    text-align: left;
    color: black;
    margin-left: 5%;
    margin-top: -2%;
    font-weight: 600
}
button{
    background: #31C27C;
    color: white;
    font-size: 17px;
    width: 40%;
    height: 40px;
    border-radius: 11%;
    border: none;
    outline: none;
    text-align: center;
    align-items: center
}
#div{
    display: flex;
    justify-content: center
}
#img{
    width: 18px;
    height: 18px;
    margin-right: 10px;
    margin-top: 3px
}


</style>