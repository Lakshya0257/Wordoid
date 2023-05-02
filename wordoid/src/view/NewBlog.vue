<template>
    <div class="main-div">
        <div class="left-section">
            <div class="blog-image">
                <input type="file" ref="imageInput" accept="image/*" @change="onImageInputChange" class="pickImage">
    <img :src="imagePreview">
            </div>
        </div>
        <div class="right-section">
            <input type="text" placeholder="Title of Blog" class="title" ref="title">
            <div class="divider"></div>
            <textarea placeholder="Start typing...." class="body" ref="des"></textarea>
            <div class="submit" @click="upload">
                <p>Upload</p>
            </div>
        </div>
    </div>
</template>

<script>
import  UserComment  from '../components/UserComment.vue';
import axios from 'axios';
import router from '../router/index';
export default{
    data() {
    return {
      imagePreview: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80'
    }
  },
    components:{
        UserComment
    },
    methods:{
        onImageInputChange() {
      const file = this.$refs.imageInput.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
    },

    upload(){
        console.log(this.$refs.title.value);
        console.log(this.$refs.des.value);
        const data={
            username:localStorage.getItem('username'),
            title:this.$refs.title.value,
            description:this.$refs.des.value,
            image:this.imagePreview
        }
        axios.post('http://localhost:3000/profile',data).then(response=>{
            console.log(response.data);
            router.push('/profile');

        }).catch(error=>{
            console.log(error);
        })
    }
    }

}
</script>

<style scoped>
.main-div{
  position: fixed;
  display: flex;
  top: 10vh;
  left: 10vw;
  right: 10vw;
  bottom: 10vh;
}

.main-div .left-section{
    display: flex;
    width: 100%;
    height: 100%;
    flex: 1.5;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}

.left-section .blog-image{
    width: 100%;
    height: 40%;
}

.left-section .heading{
    font-size: 1.5rem;
    margin-top: 2vh;
}

.blog-image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}
.main-div .right-section{
    height: 100%;
    width: 100%;
    display: flex;
    flex: 2;
    flex-direction: column;
    padding-left: 4vw;
    overflow-y: auto;
}

.right-section .title{
    font-size: 3rem;
    border: none;
    background-color: transparent;
}

.right-section .body{
    margin-top: 4vh;
    font-weight: 300;
    line-height: 30px;
    height: 100%;
    border: none;
    background-color: transparent;
}
.divider{
    margin-top: 15px;
    width: 8vw;
    height: 5px;
    background-color: rgb(0, 68, 255);
    border-radius: 10px;
}

.pickImage{
    margin-bottom: 20px;
}

.submit{
    cursor: pointer;
    width: 100px;
    height: 50px;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}

.submit p{
    font-weight: 300;
}
</style>