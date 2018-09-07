<template>
<div>
<top></top>  
<br>
<p>我是磕碜的首页</p>

<router-view></router-view> 
</div>   
</template>
<script>
import Top from "./Top.vue";
export default {
    components: {
    // tabbar: Tabbar,
    top: Top
  }
};
</script>

   