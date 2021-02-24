console.log("require loaded success,require config");
require.config({
    baseUrl:'./',
    map:{
        '*':{
            'css':'lib/css.js',
        }
    },
    paths:{
        'vue':'lib/vue'
    },
    shim:{
        'style':['css!public/index.css']
    }
})

require(['css!./public/index.css'], function (style) {
    console.log('样式文件加载成功');
})

require(['./src/main.js'], function (Main) {
    console.log('项目启动');
})
