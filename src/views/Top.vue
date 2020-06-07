<!--  -->
<template>
<div >
    <div class="top">
        <div class="top-item">
            <img src="assets/img/twotone/arrow-left.gif" alt="">
            </div>

        <div class="top-item">
            <input type="text" value="输入点什么吧...">
            </div>
        <div class="top-item">
            <img src="assets/img/twotone/cart.gif" alt="">
        </div>
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
.top{
    width: 100%;
    height: 30px;
    border-bottom: 1px pink solid;
    display: flex;
}
.top-item{
    flex: 1;
    margin: 0;
    text-align: center;
    line-height: 30px;

}
.top-item input{
    border: 1px solid;
    border-radius: 8px ;
    width: 270px;
    height: 69%;
}
.top-item img{
    margin-top: 3px;
    width: 25px;
    height: 25px;
}

</style>