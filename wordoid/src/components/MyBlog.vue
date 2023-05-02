<template>
    <div class="blog">
        <img :src="image" alt="">

    </div>
</template>

<script>
export default{
    props:['title','description','image'],

}
</script>

<style scoped>
.blog{
    height: 100%;
    width: 17vw;
    margin-right: 2vw;
    border-radius: 10px;
}

.blog img{
    border-radius: 10px;
    width: 17vw;
    height: 100%;
    object-fit: cover;
}
</style>