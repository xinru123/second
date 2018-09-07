<template>
   <div class="top">
     <div class="top-bar">
       <i :class=""></i>
       <span>头部</span>
     </div>
  </div>  
</template>
<script>
export default {};
</script>
<style>
.top{
height: 4rem;
width: 100%;
box-sizing: border-box;
position:fixed;
top: 0;
left: 0;
padding-top:15px;
}

.top-bar {
 margin: 0 auto;
 width:87%;
 height: 45px;
 box-shadow:2px 2px 3px #cccccc;
 border: 1px solid #dddddd;
 text-align: center;
 line-height: 45px;
}
</style>
