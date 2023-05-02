<template>
    <div class="main-div">
        <div class="left-section">
            <div class="blog-image">
                <img :src="img" alt="">
            </div>
            <p class="heading">Comments</p>
            <div class="comment-section">
                <UserComment v-for="comment in comments" :username="comment['username']" :comment="comment['comment']"></UserComment>
            </div>
            <div class="add-comment">
                <input type="text" placeholder="Send new comment" ref="userComment">
                <p @click="postComment">Send</p>
            </div>
        </div>
        <div class="right-section">
            <h1>{{ blogTitle }}</h1>
            <div class="divider"></div>
            <p>{{ des }}</p>
        </div>
    </div>
    <UsernameDialog
      v-if="isDialogVisible"
      @submit="onDialogSubmit"
      @cancel="onDialogCancel"
    ></UsernameDialog>
</template>

<script>
import  UserComment  from '../components/UserComment.vue';
import axios from 'axios';
import UsernameDialog from '../components/UsernameDialog.vue';
export default{
    props: ['img', 'blogTitle', 'des'],
    data(){
        return{
            comments:[],
            id:'',
            img:'',
            blogTitle:'',
            des:'',
            isDialogVisible:false
        }
    },
    components:{
        UserComment,
        UsernameDialog
    },
    created(){
        this.img= this.$store.getters.getData.img;
        this.blogTitle= this.$store.getters.getData.blogTitle;
        this.des= this.$store.getters.getData.des;
        // this.title=this.$route.params.blogTitle;
        // this.description=this.$route.params.des;
        // this.image=this.$route.params.img;
        this.id=this.$route.params.id;

        axios.get(`http://localhost:3000/blog/${this.id}`).then(response=>{
            this.comments=response.data.data.comment;
        }).catch(error=>{
            console.log(error);
        })

    },
    methods:{
        postComment(){
            if(localStorage.getItem('username')===null){
                this.isDialogVisible=true;
            }else{
                const data={
                username:localStorage.getItem('username'),
                comment: this.$refs.userComment.value
            }
            this.comments.push(data)
            axios.post(`http://localhost:3000/blog/${this.id}`,data).then(response=>{
                this.$refs.userComment.value='';
                this.refreshComments;
        }).catch(error=>{
            console.log(error);
        })
            }
            
        },

        onDialogSubmit(value) {
      alert("Username: " + value);
      localStorage.setItem("username", value);
      this.isDialogVisible = false;
    },
    onDialogCancel() {
      this.isDialogVisible = false;
    },

        refreshComments(){
            console.log('refreshing')
            axios.get(`http://localhost:3000/blog/${this.id}`).then(response=>{
                console.log(response.data);
            this.comments=response.data.data.comment;
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

.left-section .comment-section{
    height: 60%;
    width: 100%;
    overflow-y: auto;
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

.right-section h1{
    font-size: 3rem;
}

.right-section p{
    margin-top: 4vh;
    font-weight: 300;
    line-height: 30px;
}
.divider{
    margin-top: 15px;
    width: 8vw;
    height: 5px;
    background-color: rgb(0, 68, 255);
    border-radius: 10px;
}



.left-section .add-comment{
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 8vh;
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.886);
}

.add-comment input{
    margin-left: 1vw;
    border: none;
    background-color: transparent;
    height: 100%;
    width: 100%;
}

.add-comment p{
    margin-right: 1vw;
    cursor: pointer;
    color: blue;
}
</style>