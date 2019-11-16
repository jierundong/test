<template>
<div>
         <div class="video">
            <video :src="require('../../assets/x.mp4')" controls loop muted=“muted”></video>
            <video :src="require('../../assets/x.mp4')" controls loop muted=“muted”></video>
        </div>
        <div class="video">
            <video :src="require('../../assets/x.mp4')" controls loop muted=“muted”></video>
            <video :src="require('../../assets/x.mp4')" controls loop muted=“muted”></video>
        </div>
</div>
</template>
<script>
    export default {
      
    }
</script>
<style scoped>
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