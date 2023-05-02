<script >
import Header from './basic_layout/Header.vue';
import BottomNav from './basic_layout/BottomNav.vue';
export default{
  components:{
        Header,
        BottomNav
    
  },
}

</script>

<template>
  <Header></Header>
  <RouterView></RouterView>
  <BottomNav></BottomNav>
</template>

<style>

button{
  cursor: pointer;
  border: none;
  background-color: transparent;
}
</style>
