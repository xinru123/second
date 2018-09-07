<template>
  <div id="app">
    <tabbar :idx="0"></tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Tabbar from "./components/Tabbar.vue";
// import Top from "./components/Top.vue";

export default {
  components: {
    tabbar: Tabbar,
    // top: Top
  }
};
</script>














<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
