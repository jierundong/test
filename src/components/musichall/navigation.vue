<template>
    <div>
       <mt-tabbar  v-model="active" class="imgstyle1" >
           <mt-tab-item id="nav">
               <img @click="singer" :src="require('../../assets/singer.png')">
               <p @click="singer">歌手</p>
            </mt-tab-item>
           <mt-tab-item id="nav1">
               <img @click="paihang" :src="require('../../assets/paihang.png')">
               <p @click="paihang">排行</p>
            </mt-tab-item>
           <mt-tab-item id="nav2">
               <img @click="musiclist" :src="require('../../assets/musiclist.png')">
               <p @click="musiclist">歌单</p>
            </mt-tab-item>  
            <mt-tab-item id="nav3">
                <img @click="hot" :src="require('../../assets/hot.png')">
                <p @click="hot">最热</p>
            </mt-tab-item>
        </mt-tabbar> 

        <div>
            <br>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            active:"nav"
        }
    },
    methods:{
        singer(){
           this.$router.push('/singer') 
        },
        paihang(){
           this.$router.push('/paihang') 
        },
        musiclist(){
           this.$router.push('/musiclist') 
        },
        hot(){
           this.$router.push('/hot') 
        }
    },
    components:{
      
    }  

}
</script>
<style scoped>
    .imgstyle1{
    background: #f1eded;
    width:100%;
    height: 80px;
    position: relative;
    margin-top: 10px;
    z-index: 1;
   
}
img{
    width: 40px;
    height: 40px;
}
.mint-tabbar>.mint-tab-item.is-selected{
background-color:transparent;
color:rgba(0, 0, 0, 0.829);


} 


</style>
