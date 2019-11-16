<template>
    <div> 
        <mt-tabbar fixed v-model="active" class="imgstyle2"> 
           <mt-tab-item id="findnav"
           @click.native="changeState(0)">
               <div :focused="list[0].isSelect"></div>
               <p>精选</p>
            </mt-tab-item>
           <mt-tab-item id="findnav1" @click.native="changeState(1)">
             <div :focused="list[1].isSelect">
            </div>  
               <p>视频</p>
            </mt-tab-item>
           <mt-tab-item id="findnav2" @click.native="changeState(2)">
            <div :focused="list[2].isSelect">
            </div>              
               <p>文章</p>
            </mt-tab-item>
        </mt-tabbar>
        <mt-tab-container v-model="active">
          <mt-tab-container-item id="findnav">
              <message></message>
          </mt-tab-container-item>
          <mt-tab-container-item id="findnav1">
              <message1></message1>
          </mt-tab-container-item>
          <mt-tab-container-item id="findnav2">
              <message2></message2>
          </mt-tab-container-item>
        </mt-tab-container>
        <div>
            <br>
        </div>
    </div>
</template>
<script>
import message from "./message.vue"
import message1 from "./message1.vue"
import message2 from "./message2.vue"
export default {
    data(){
        return{
            active:"findnav",
            list:[
                {isSelect:true},//精选
                {isSelect:false},//视频
                {isSelect:false},//文章
            ]
        }
    },
    components:{
      "message":message,
      "message1":message1,
      "message2":message2
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
    .imgstyle2{
    background: #f1eded;
    width:50%;
    height: 40px;
    position: relative;
    margin-top: 10px;
    z-index: 1;
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
font-size: 26px;
font-weight: 600;
margin-bottom: 10%;
color:black;
} 


</style>
