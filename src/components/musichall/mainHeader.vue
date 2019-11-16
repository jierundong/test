<template>
    <div class="page-head">
      <!-- <h5>commom/TitleBar.vue</h5> -->
      <span class="s1">{{msg}}</span>
      <input @click="into" type="text" placeholder="搜索" class="holderinput">
      <div class="right-head">
         <div class="imgdiv">
             <img style="width:20px" :src="rightImg">
         </div>
      </div>
    </div>
</template>
<script>
export default {
    props:{
        msg:{default:""},
        rightImg:{default:""},
    },
    methods:{
        into(){
            this.$router.push('/search')
        }
    }
}
</script>
<style scoped>
.page-head{
    margin-top: 0%;
    margin-bottom: 10%;
    margin-left:0 ;
    display:flex;
    z-index: 999;
    width:100%;
    justify-content: space-between;
    align-items:center;
    height:48px;
    padding-left:7px;padding-right:7px;
    color:black;font-size:25px; 
    font-weight: 600
    }
.right-head{
    display:flex;
}
.imgdiv{
  display:flex;
  align-items: center;
  height: 28px;  
  margin-top: 33px;
  margin-left: -210px !important
}
input::-webkit-input-placeholder{text-align: center;}
.holderinput{
    border-radius: 11%
}
input{
    height: 25px;
    width:65%;
    margin-left: -10px;
    margin-top:35px;
    outline: none;
    font-size: 15px;
    padding: 5px
}
.s1{
    margin-top:33px;
    margin-left: 10px
}
</style>