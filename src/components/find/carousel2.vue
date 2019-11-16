<template>
    <div class="imgdiv2">
        <mt-swipe class="carousel" :auto="4000">
        <mt-swipe-item><img class="carousel5" :src="require('../../assets/carousel5.jpg')"></mt-swipe-item>
        <mt-swipe-item><img class="carousel6" :src="require('../../assets/carousel6.jpg')" alt=""></mt-swipe-item>
        <mt-swipe-item><img class="carousel7" :src="require('../../assets/carousel7.jpg')" alt=""></mt-swipe-item>
        <mt-swipe-item><img class="carousel8" :src="require('../../assets/carousel8.jpg')" alt=""></mt-swipe-item>
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
    height: 180px;
}
.carousel5,.carousel6,.carousel7,.carousel8{
    align-items: center;
    width:95%;
    height: 180px;  
}

</style>