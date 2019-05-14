// ==UserScript==
// @name         快捷百度
// @version      1.51
// @homepage     https://greasyfork.org/zh-CN/scripts/37058
// @match        *://*/*
// @description  快捷打开百度搜索弹窗页面
// @grant        unsafeWindow
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// @require      https://hanlei525.github.io/layui-v2.4.3/layui/layui.all.js
// @icon         http://music.sonimei.cn/favicon.ico
// @run-at       document-end
// @namespace
// ==/UserScript==
(function() {
    'use strict';
    // Your code here...
    // @require      https://res.layui.com/layui/dist/css/layui.css?t=1554901098009
    const ele = class{
        constructro(){
            //this.e = e;
        }
        linkCSS(path){
            if(!path || path.length === 0){
                throw new Error('argument "path" is required !');
            }
            let head = document.getElementsByTagName('head')[0];
            let link = document.createElement('link');
            link.href = path;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            head.appendChild(link);
        }
        showIframe(option){
            var index = layer.open({
                type: 2,//弹窗的类型--0(信息框，默认)1(页面层)2(iframe层)3(加载层)4(tips层)
                title: option.title||false,
                closeBtn: 1,
                shade:[1, 'transparent'],//弹层外区域。默认是0.3透明度的黑色背景（'#000'）,shade:0表示不显示遮罩,透明度和颜色都可以设置
                shadeClose:option.shadeClose||false,//默认：false/如果你的shade是存在的，那么你可以设定shadeClose来控制点击弹层外区域关闭。
                id:option.id||20181029,//位置ID，key值
                maxmin: option.maxmin||false,//禁止缩放------最大最小化
                fixed:false,//固定,默认true
                resize: false,//禁止弹窗拉伸-----是否允许拉伸
                scrollbar: true,//禁止主页面滚动----是否允许浏览器出现滚动条
                area:option.area||[($(window).width()-16)+"px",($(window).height()-8)+"px"],//弹窗的宽高//在默认状态下，layer是宽高都自适应的
                zIndex:19891014,//默认19891014，打开弹窗的折叠层数
                move:option.move||false,//拖拽，默认标题区域，可以自定义拖拽元素，false表示不能拖拽
                //offset:["8px","8px"],//不设置的时候，默认全屏居中//设置下，left top两个属性值
                anim:5,//弹出来的动画-----目前支持0-6
                isOutAnim:false,//3.0.3新增的属性，关闭时的动画
                content: option.url,
                success: function(layero, index){//成功打开弹窗的回调
                },
                cancel: function(index, layero){//关闭弹窗的回调函数
                    layer.close(index);
                    window.event.returnValue = false; //兼容IE
                    return false;
                }
            });
        }
        reduceEle(){
            //debugger;
            const id = "scroll_ele_id";
            const htmlStr = `<div style="cursor:pointer;position:fixed;width:40px;height:40px;line-height:40px;right:20px;text-align:center;bottom:20px;background-color:#080807;border-radius: 15%;" id="${id}">
                                 <span style="color:white;display:inline-block;width:100%;height:100%">百度</span>
                             </div>`;
            $("body").append(htmlStr);
            let option={
                id: 20181109,
                title:'百度',
                url:'https://www.baidu.com',
                shadeClose:true,
                move:true,
                maxmin:true,
                area:["1200px",$(window).height()-300+"px"]
            };
            $("#scroll_ele_id").click(()=>{
                this.showIframe(option);
            });
        }
        googleTrs(){
            //debugger;
            const id = "google_ele_id";
            const htmlStr = `<div style="cursor:pointer;position:fixed;width:40px;height:40px;line-height:40px;right:20px;text-align:center;top:20px;background-color:#080807;border-radius: 15%;" id="${id}">
                                 <span style="color:white;display:inline-block;width:100%;height:100%">Google</span>
                             </div>`;
            $("body").append(htmlStr);
            let option={
                id: 20181109,
                title:'谷歌翻译',
                url:'https://translate.google.cn',
                shadeClose:true,
                move:true,
                maxmin:true,
                //area:["800px",$(window).height()-300+"px"]
            };
            $("#google_ele_id").click(()=>{
                this.showIframe(option);
            });
        }
    };
    let newEle1 = new ele();
    //引入layui.css
    newEle1.linkCSS("https://res.layui.com/layui/dist/css/modules/layer/default/layer.css?v=3.1.1");
    newEle1.linkCSS("https://res.layui.com/layui/dist/css/layui.css?t=1554901098009");
    newEle1.linkCSS("https://res.layui.com/layui/dist/css/modules/code.css");
    newEle1.linkCSS("https://res.layui.com/layui/dist/css/layui.css?t=1554901098009");
    newEle1.reduceEle();
    //newEle1.googleTrs();
})();
