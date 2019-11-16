<template>
    <div class="imgdiv2">
        <mt-swipe class="carousel" :auto="4000">
        <mt-swipe-item><img class="carousel1" :src="require('../../assets/carousel1.jpg')"></mt-swipe-item>
        <mt-swipe-item><img class="carousel2" :src="require('../../assets/carousel2.jpg')" alt=""></mt-swipe-item>
        <mt-swipe-item><img class="carousel3" :src="require('../../assets/carousel3.jpg')" alt=""></mt-swipe-item>
        <mt-swipe-item><img class="carousel4" :src="require('../../assets/carousel4.jpg')" alt=""></mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
import "mint-ui/lib/style.css"
export default {
    
}
</script>
<style scoped>
    .carousel{
    
    margin-left: 10px;
    width:95%;
    height: 130px;
}
.carousel1,.carousel2,.carousel3,.carousel4{
    align-items: center;
    width:95%;
    height: 130px;  
}

</style>