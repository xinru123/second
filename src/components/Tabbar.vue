<template>

<div class="tabbar">

   <div v-for="(item,index) of items" :class='[item.cls,{on:index === idx}]' @click="$router.push(item.push)">
     <img  :src="index===idx?item.iconSelect:item.icon" alt="图片"> 
     <p :class="['colorChange',{on:index===idx}]">{{item.name}}</p>
   </div>

</div>

</template>

<script>
import liulan_1 from "../assets/liulan_1.png";
import liulan from "../assets/liulan.png";

import heart_1 from "../assets/heart_1.png";
import heart from "../assets/heart.png";

import leaf_1 from "../assets/leaf_1.png";
import leaf from "../assets/leaf.png";

import message_1 from "../assets/message_1.png";
import message from "../assets/message.png";

import usear_1 from "../assets/usear_1.png";
import usear from "../assets/usear.png";

export default {
  props: ["idx"],
  data() {
    return {
      items: [
        {
          cls: "liulan",
          name: "浏览",
          push: "/liulan",
          icon: liulan_1,
          iconSelect: liulan
        },
        {
          cls: "xinyuan",
          name: "心愿单",
          push: "/xinyuan",
          icon: heart_1,
          iconSelect: heart
        },
        {
          cls: "story",
          name: "故事",
          push: "/story",
          icon: leaf_1,
          iconSelect: leaf
        },
        {
          cls: "message",
          name: "收件箱",
          push: "/message",
          icon: message_1,
          iconSelect: message
        },
        {
          cls: "mine",
          name: "我的",
          push: "/mine",
          icon: usear_1,
          iconSelect: usear
        }
      ]
    }
  }
  
}
</script>
<style>
.tabbar {
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  height: 4rem;
  background-color: #ffffff;
  width: 100%;
  /* border-top: 1px solid #cccccc; */
  box-shadow: 0 -1px 0 #eeeeee;
}

div {
  flex: 1;
  font-size: 16px;
}

div img {
  width: 24px;
  height: 24px;
  margin-top: 5px;
}

div p {
  color: #777888;
  margin-bottom: 5px;
  margin-top: 5px;
}
.on {
  color: palevioletred;
}
</style>
