<!--  -->
<template>
<div >


     <Tabbar>
      <!-- activecolor 传入一个颜色改变字体颜色 -->
      <Tabbaritem title="首页" path='/home' activecolor=''>
      <img slot="item-icon" src="../assets/img/twotone/home.gif">
      <img slot="item-icon-active" src="../assets/img/twotone/flag.gif">
      <div slot="item-text" class="font">首页</div>
      </Tabbaritem>

      <Tabbaritem title="分类" path='/fenlei'>
      <img slot="item-icon" src="../assets/img/twotone/calendar.gif">
       <img slot="item-icon-active" src="../assets/img/twotone/chart.gif">
      <div slot="item-text" class="font">分类</div>
      </Tabbaritem>

      <Tabbaritem title="购物车" path='/cart'>
      <img slot="item-icon" src="../assets/img/twotone/cart.gif">
      <img slot="item-icon-active" src="../assets/img/twotone/edit.gif">
      <div slot="item-text" class="font">购物车</div>
      </Tabbaritem>

      <Tabbaritem title="我的" path='/my'>
      <img slot="item-icon" src="../assets/img/twotone/user.gif">
      <img slot="item-icon-active" src="../assets/img/twotone/favourite.gif">
      <div slot="item-text" class="font">我的</div>
      </Tabbaritem>
      </Tabbar>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Tabbar from './tabar/Tabbar';
import Tabbaritem from "./tabar/Tabbaritem";
export default {
    name:'MainTabbar',
//import引入的组件需要注入到对象中才能使用
components: {
    Tabbar,
    Tabbaritem
},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>


</style>