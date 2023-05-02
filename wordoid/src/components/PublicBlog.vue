<template>
    <div class="blog">
        <img :src="image" alt="">
        <div class="transparent">
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
            <div class="user-info">
                <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
                <p>{{ user }}</p>
            </div>
        </div>

    </div>
</template>

<script>
export default{
    props:['image','title','description','user']
}
</script>

<style scoped>
.blog{
    position: relative;
    display: flex;
    height: 40vh;
    border-radius: 10px;
}


.blog img{
    display: flex;
    width: 100%;
    height: 40vh;
    border-radius: 10px;
    object-fit: cover;
}

.blog .transparent{
    position: absolute;
    display: flex;
    justify-content: end;
    flex-direction: column;
    padding: 2% 10%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.732));
}

.transparent p{
    overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
    font-weight: 300;
    font-size: 1rem;
}
.transparent h1{
    margin-bottom: 1vh;
    overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
    font-size: 1.7rem;
}

.transparent .user-info{
    margin-top: 2vh;
    width: 100%;
    display: flex;
    align-items: center;
}

.user-info img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
}
</style>