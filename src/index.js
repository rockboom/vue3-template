import test from './src/test.js';
test();
console.log("require loaded success,require config");
require.config({
    baseUrl:'./',
    map:{
        '*':{
            'css':'lib/css.js',
        }
    },
    paths:{
        // 'vue': 'node_modules/vue/dist/vue.runtime.global',
        // 'vue': 'node_modules/vue/dist/vue',
        'vue':'lib/vue'
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

require(['./src/main.js'], function (Main) {
    console.log('Main', Main);
})
// require(['vue'], function (Vue) {
//     console.log('vue', Vue.createApp);
// })
// setTimeout(()=>{
//     require(['vue', './src/main.js'], function (Vue, Main) {
//         console.log('vue', Vue.createApp);
//         console.log('Main', Main);
//     })
// },3000 )
