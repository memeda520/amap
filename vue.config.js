module.exports = {
    publicPath: './',
    assetsDir: 'static',
    productionSourceMap: false,
    outputDir:'dist',
    css: {
      // css预设器配置项
      loaderOptions: {
      sass: {
        additionalData:`@import "./src/assets/css/Curreny.scss";`
      }
    }
    },
}