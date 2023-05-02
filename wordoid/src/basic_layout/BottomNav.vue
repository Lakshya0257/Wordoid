<template>
  <div>
    <RouterLink to="/">
      <button>
        <p>Home</p>
      </button>
    </RouterLink>
    
      <button @click="profile">
        <p>Profile</p>
      </button>
    
    
      <button @click="newBlog">
        <p>Add New</p>
      </button>
    <button @click="login">
      <p>Login</p>
    </button>
    <UsernameDialog
      v-if="isDialogVisible"
      @submit="onDialogSubmit"
      @cancel="onDialogCancel"
    ></UsernameDialog>
  </div>
</template>

<script>
import UsernameDialog from "../components/UsernameDialog.vue";
export default {
  data() {
    return {
      isDialogVisible: false,
    };
  },
  components: {
    UsernameDialog,
  },
  methods: {
    login() {
      if (localStorage.getItem("username") === null) {
        this.isDialogVisible = true;
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
    profile(){
      if (localStorage.getItem("username") === null) {
        this.isDialogVisible = true;
      }else{
        this.$router.push({
          name:'profile'
        })
      }
    },
    newBlog(){
      if (localStorage.getItem("username") === null) {
        this.isDialogVisible = true;
      }else{
        this.$router.push({
          name:'new'
        })
      }
    },

  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: end;

  position: fixed;
  bottom: 2vh;
  right: 6vw;
  left: 0;
}

button {
  margin-left: 3vw;
}

p {
  font-size: 1rem;
  font-weight: 100;
}
</style>
