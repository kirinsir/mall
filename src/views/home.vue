<!--  -->
<template>
<div >
首页
<div class="item">
<!-- <div class="item-lito" v-for="i in num" :key="i">{{i}}</div> -->

</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    num:50
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},

}
</script>
<style scoped>
.item{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    top:30px;
    bottom: 49px;
    
}
.item .item-lito{
    
    width: 80px;
    height: 75px;
    margin:4px;
    border: 1px black solid;
    
    line-height: 75px;
    text-align: center;
    border-radius: 9px;
    box-shadow: 1px 3px 3px #ccc ;
}

</style>