 const path=require('path');
 
 
 const { override, fixBabelImports,addWebpackResolve,addPostcssPlugins,addWebpackAlias,addDecoratorsLegacy  } = require('customize-cra');


 module.exports = override(
     //做按需加载用的
   fixBabelImports('import', {
     libraryName: 'antd-mobile',
     libraryDirectory: 'es',
     style: 'css',
   }),
   //配置扩展名
   addWebpackResolve({
    extensions: [".js", ".json",".jsx"]
   }),
   //做适配用
   addPostcssPlugins([require("postcss-px2rem")({ remUnit: 37.5 })]),
   //路径别名
   addWebpackAlias({
    "@": path.resolve(__dirname, 'src/'),
    "@img": path.resolve(__dirname, 'src/assets/images'),
    "@utils": path.resolve(__dirname, 'src/utils'),
   }),
   //添加修饰器
   addDecoratorsLegacy()
 );