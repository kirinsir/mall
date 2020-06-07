<template>
  <div id="app">
   <!-- <Tabbar>
     <Tabbaritem></Tabbaritem>
   </Tabbar> -->
   <MainTabbar></MainTabbar>
    
    <router-view/>
  </div>
</template>
<script>
// 给路劲起别名 在项目根目录下建立 vue.config.js文件，然后配置路径别名即可
import Test from 'components/Test';
import Tabbar from 'components/tabar/Tabbar'
import Tabbaritem from 'components/tabar/Tabbaritem'
import MainTabbar from 'components/MainTabbar';
export default {
  components:{
    Test,MainTabbar
  }
}
</script>

<style>
@import 'assets/css/base.css';
/* @import 'assets/css/base.css'; */
</style>
