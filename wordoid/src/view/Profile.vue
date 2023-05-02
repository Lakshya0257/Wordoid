<template>
    <Loading :loading="isLoading"></Loading>
<div class="blogs">
    <h1>My<br>Blogs</h1>
    <div class="divider"></div>
    <div class="my-blogs">
        <div class="transparent"></div>
        <div class="blog-row">
            <MyBlog  v-for="blog in blogs" :title="blog['title']" :description="blog['description']" :image="blog['image']" @click="
          blogDetail(
            blog['image'],
            blog['title'],
            blog['description'],
            blog['_id']
          )
        "></MyBlog>
        </div>
        <RouterLink to="/new">
            <div class="add-new">
            <p>+ Add New</p>
    </div>
        </RouterLink>
    
        
    </div>
</div>
</template>


<script>
import MyBlog from '../components/MyBlog.vue'
import axios from 'axios'
import store from '../../store/store'
import Loading from '../utils/Loading.vue'
export default{
    
    data(){
        return{
            blogs:[],
            isLoading:false
        }
        
    },
    components:{
    MyBlog,
    Loading
},
    created(){
        this.isLoading=true;
        const data={
            username:localStorage.getItem('username')
        };
        console.log(data);
        axios.get('http://localhost:3000/profile',{
      params: data
    }).then(response=>{
        console.log(response.data.data.data);
        this.blogs=response.data.data.data;
        this.isLoading=false;
        }).catch(error=>{
            console.log(error);
            this.isLoading=false;
        })
    },
    methods:{
        blogDetail(image, title, description, id) {
      const jsonMap = {
        img: image,
        blogTitle: title,
        des: description,
      }
      store.dispatch('setData', jsonMap);
      this.$router.push({
        name: "blog",
        params: {
          id: id,
        },
      });
    },
    }

}
</script>

<style scoped>
.blogs{
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 10vh;
    left: 15vw;
    right: 15vw;
    bottom: 10vh;
}

.blogs h1{
    font-size: 4rem;
    letter-spacing: .4rem;
}

.blogs .divider{
    margin-top: 15px;
    width: 5vw;
    height: 10px;
    background-color: rgb(0, 68, 255);
    border-radius: 10px;
}
.blogs .my-blogs{
    position: relative;
    
    
    margin-top: 5vh;
    height: 100%;
    width: 100%;
}

.my-blogs ,.blog-row{
    position: absolute;
    bottom: 0;
    top: 0;
    right: 18vw;
    left: 0;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
}

.my-blogs .transparent{
    z-index: 1;
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    width: 15vw;
    background-image: linear-gradient(to right, black , rgba(255, 0, 0, 0));
}

.my-blogs .add-new{
    cursor: pointer;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
    bottom: 0;
    top: 0;
    width: 15vw;
    margin-right: 2vw;
    border-radius: 10px;
    border: solid rgb(0, 68, 255) 1px;
}

.add-new p{
    color: rgb(0, 68, 255);
}

</style>