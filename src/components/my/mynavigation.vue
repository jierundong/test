<template>
    <div>
        <mt-tab-container v-model="active">
          <mt-tab-container-item id="mynav">
          </mt-tab-container-item>
        </mt-tab-container>
       <mt-tabbar  v-model="active" class="imgstyle3" >
           <mt-tab-item id="mynav">
               <img @click="like" :src="require('../../assets/like.png')">
               <p @click="like">喜欢</p>
            </mt-tab-item>
           <mt-tab-item id="mynav1">
               <img @click="recently" :src="require('../../assets/recently.png')">
               <p @click="recently">最近</p>
            </mt-tab-item>
           <mt-tab-item id="mynav2">
               <img @click="download" :src="require('../../assets/download.png')">
               <p @click="download">本地</p>
            </mt-tab-item>  
            <mt-tab-item id="mynav3">
                <img @click="follow" :src="require('../../assets/follow.png')">
                <p @click="follow">关注</p>
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
            active:"mynav"
        }
    },
    components:{
       
    },
    methods:{
        like(){
            this.$router.push('/like')
        },
        recently(){
            this.$router.push('/recently')
        },
        download(){
            this.$router.push('/download')
        },
        follow(){
            this.$router.push('/follow')
        }
    }  

}
</script>
<style scoped>
    .imgstyle3{
    background: #f1eded;
    width:100%;
    height: 80px;
    position: relative;
    margin-top: 25px;
    z-index: 1;
   
}
img{
    width: 30px;
    height: 30px;
}
.mint-tabbar>.mint-tab-item.is-selected{
background-color:transparent;
color:rgba(0, 0, 0, 0.829);


} 


</style>