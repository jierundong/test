<template>
    <div> 
        <mt-tabbar fixed v-model="active" class="imgstyle4"> 
           <mt-tab-item id="my2nav"
           @click.native="changeState(0)">
               <div :focused="list[0].isSelect"></div>
               <p>推荐歌单</p>
            </mt-tab-item>
           <mt-tab-item id="my2nav1" @click.native="changeState(1)">
             <div :focused="list[1].isSelect">
            </div>  
               <p>我的歌单</p>
            </mt-tab-item>
        </mt-tabbar>
        <mt-tab-container v-model="active">
          <mt-tab-container-item id="my2nav">
              <mymessage1></mymessage1>
          </mt-tab-container-item>
          <mt-tab-container-item id="my2nav1">
              <mymessage2></mymessage2>
          </mt-tab-container-item>
        </mt-tab-container>
        <div>
            <br>
        </div>
    </div>
</template>
<script>
import mymessage1 from "./mymessage1.vue"
import mymessage2 from "./mymessage2.vue"
export default {
    data(){
        return{
            active:"my2nav",
            list:[
                {isSelect:true},//推荐歌单
                {isSelect:false},//我的歌单
            ]
        }
    },
    components:{
      "mymessage1":mymessage1,
      "mymessage2":mymessage2,
    },
    methods:{
    changeState(n){
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

    }


    } 

}
</script>
<style scoped>
    .imgstyle4{
    background: #f1eded;
    width:50%;
    height: 40px;
    position: relative;
    margin-top:-10px;
    z-index: 1;
    margin-left:2%
}
p{
    font-size: 16px
}
.mint-tabbar>.mint-tab-item{
color:#999999;
}
/*选中文字颜色*/ 
.mint-tabbar>.mint-tab-item.is-selected{
background-color:transparent;
font-weight: 600;
margin-bottom: 10%;
color:black;
} 


</style>
