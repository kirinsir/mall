<!--  -->
<template>

  <div class='tabbar-item' @click='itemclick'>
      <!-- 前面传入了两份图片，一份激活的，一份未激活的，通过if来判断显示哪份 -->
      <div v-if="isactive"> <slot name="item-icon"></slot> </div>
      <div v-else> <slot name="item-icon-active"></slot></div>
    
    <!-- 通过绑定class来动态改变文字的颜色 -->

  <!-- <div :class="{active:isactive}"> 默认绑定属性-->
      <!-- 动态绑定属性 -->
      <div :style="isactivecolor">
    <slot name="item-text"></slot>
  </div>


  </div>
 

</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    // 单个子组件
    name:'Tabbaritem',
//import引入的组件需要注入到对象中才能使用
components: {},
props:{
    path:String,
    activecolor:{
        type:String,
        default:'red'
    }
},
data() {
//这里存放数据
return {
    
};
},
//监听属性 类似于data概念
computed: {
    // 放入计算属性，如果当前的和父组件点击后传过来的path是一样的，那么就改变isactive 的值，
    // 因为文字和图片都是用if来判断isactive的值是否为真，那么就可以解决点击后图片改变，文字变红的需求了
    isactive(){
        return this.$route.path.indexOf(this.path) !== -1
    },
    isactivecolor(){
        // 判断当前是否处于活跃状态，如果活跃，就改变属性
        return this.isactive ? {color:this.activecolor} : {}
        // 定义了属性之后就完成了高度的封装，颜色都是由外部决定的，可以传入颜色试试
    },
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    itemclick(){
        // 判断要跳转的路由和当前路由是否一致，
        // 可以简写为 if (this.$route.path===this.path)return; 然后接上跳转就可以了
        
        if (this.$route.path===this.path){
            return;
        }else{
        this.$router.replace(this.path)
        }
        

        // 方案二，捕捉错误
        // this.$router.replace(this.path).catch(err=>'错误了')
        
    },
},
}

</script>
<style>
@import '../../assets/css/base.css'
</style>