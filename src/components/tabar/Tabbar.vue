<!--  -->
<template>
<div>
  <div id='tabbar'>
  <slot></slot>
      </div>
  </div>
 
      <!-- 
    <div class='tabbar-item'>
      <img src="../../assets/img/twotone/home.gif">
      <div class="font">首页</div>
      </div>
    <div class='tabbar-item'>
       <img src="../../assets/img/twotone/calendar.gif">
      <div class="font">分类</div>
      </div>
    <div class='tabbar-item'>
      <img src="../../assets/img/twotone/cart.gif">
      <div class="font">购物车</div>
      </div>
    <div class='tabbar-item'>
      <img src="../../assets/img/twotone/user.gif">
      <div class="font">我的</div>
    
        
  </div> -->



</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
 
    name:'Tabbar',
//import引入的组件需要注入到对象中才能使用
components: {

},
data() {
//这里存放数据
    return {

    };
},

}
</script>
<style>
/* 动态引入css样式 */



</style>