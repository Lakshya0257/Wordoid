<template>
    <div class="comment">
        
            <img src="https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg" alt="">
        
        <div class="content">
            <h1>{{ username }}</h1>
            <p>{{ comment }}</p>
        </div>
    </div>
</template>

<script>
export default{
    props:['username','comment']
}
</script>

<style scoped>
.comment{
    width: 100%;
    margin-top: 4vh;
    display: flex;
    align-items: center;
}



.comment img{
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 20px;
    
}

.comment .content{
    display: flex;
    flex-direction: column;
}

.content h1{
    font-size: 1rem;
    margin-bottom: 10px;
}

.comment p{
    font-weight: 300;
    color: rgb(157, 157, 157);
}
</style>