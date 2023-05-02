<template>
  <Loading :loading="isLoading"></Loading>
  <div class="homepage">
    <h1>Explore</h1>
    <div class="divider"></div>
    <div class="blogs">
      <PublicBlog
        v-for="blog in allBlogs"
        :image="blog['image']"
        :title="blog['title']"
        :description="blog['description']"
        :user="blog['username']"
        @click="
          blogDetail(
            blog['image'],
            blog['title'],
            blog['description'],
            blog['_id']
          )
        "
      ></PublicBlog>
    </div>
  </div>
</template>

<script>
import PublicBlog from "../components/PublicBlog.vue";
import axios from "axios";
import store from "../../store/store";
import Loading from "../utils/Loading.vue";
export default {
  data() {
    return {
      allBlogs: [],
      isLoading:false
    };
  },
  components: {
    PublicBlog,
    Loading
},
  created() {
    this.isLoading=true;
    axios
      .get("http://localhost:3000/blog")
      .then((response) => {
        this.allBlogs = response.data.data.allBlogs;
        this.isLoading=false;
      })
      .catch((error) => {
        this.isLoading=false;
        console.log(error);
      });
  },
  methods: {
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
  },
};
</script>

<style scoped>
.homepage {
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 10vh;
  left: 15vw;
  right: 15vw;
  bottom: 10vh;
}
h1 {
  font-size: 4rem;
  letter-spacing: 0.4rem;
  color: white;
}
.divider {
  margin-top: 15px;
  width: 8vw;
  height: 8px;
  background-color: rgb(0, 68, 255);
  border-radius: 10px;
}

.blogs {
  position: fixed;
  overflow-y: auto;
  top: 24vh;
  right: 15vw;
  left: 15vw;
  column-gap: 2vw;
  row-gap: 2vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  bottom: 10vh;
}
</style>
