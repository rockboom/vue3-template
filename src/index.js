import test from './src/test.js';
test();
console.log("require loaded success,require config");
require.config({
    baseUrl:'./',
    map:{
        '*':{
            'css':'lib/css.js'
        }
    },
    shim:{
        'style':['css!public/index.css']
    }
})
// require(['style'],function(style){
//     console.log('样式文件加载成功');
// })
require(['css!./public/index.css'], function (style) {
    console.log('样式文件加载成功');
})