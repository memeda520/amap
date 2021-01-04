<template>
  <div class="index">
      <div id="container"></div> 
  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';


export default {
  data() {
    return {
      map:{}
    }
  },
  mounted() {
    this.init()
  },
  methods: {
      init(){
        this.map = new AMap.Map('container', {
          viewMode: '3D', // 默认使用 2D 模式，如果希望使用带有俯仰角的 3D 模式，请设置 viewMode: '3D',
          zoom:11, //初始化地图层级
          center: [116.397428, 39.90923] //初始化地图中心点
        });
        this.map.on("complete", ()=>{
           this.$message.success("地图加载完成！");  
        });
      }
  },
}
</script>

<style lang="scss">
.index{
  width: 100%;
  height: 100%;
  #container{
    width: 100%;
    height: 100%;
  }
}
</style>