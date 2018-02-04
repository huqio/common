
//回到顶部
$(window).scroll(function(){
    var top= $(document).scrollTop();
    if(top<200){
        $(".backtop").css({"display":"none"})
    }
    else{
        $(".backtop").css({"display":"block"})
    }
})
$(".backtop").on('click', function() {
    $("html,body").animate({scrollTop:0}, 0);
});

//自动触发点击事件
$(".tabs ul li").eq(eq).trigger("click");

//自动监听滚动条的高度
window.onscroll= function(){
    //变量t是滚动条滚动时，距离顶部的距离
    var h = document.documentElement.scrollTop||document.body.scrollTop;
    console.log(h);
}


//获取参数，根据获取url中的参数演化而来的,只需在str最前面插入一个"?"的字符串即可
var str = "app_id=58game_sso_api&timestamp=1499749974000&sign=6dcdcd9a84cfe9a5bffab711005590c1"
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
    //这里是为测试给大家看的以下两行
    //测试开始
    var ur="?app_id=58game_sso_api&timestamp=1499749974000&sign=6dcdcd9a84cfe9a5bffab711005590c1"; //真实环境下删除
    var r = ur.substr(1).match(reg);//真实环境下删除
    //测试结束，
    //真实环境下请用下面一句。
    //var r = window.location.search.substr(1).match(reg); //真实环境请用这句
    if (r!=null) return (r[2]); return null;
}
console.log("获取sign值为："+GetQueryString("sign")+"<br>");
console.log("获取app_id值为："+GetQueryString("app_id")+"<br>");
console.log("获取timestamp值为："+GetQueryString("timestamp"));

//正则匹配  1561/2235
console.log(window.location.href);
console.log(typeof window.location.href);
var str="http://www.dqr2015.com/mood_detail/1561/2235"
document.write(str.lastIndexOf("/") + "<br />")
var reg=/\d{1,10}\/\d{1,10}/;
console.log(str.match(reg)[0]); //第一种
console.log(str.slice("35"));//第二种

//数据格式
Object {phone: "13211112222", sex: "男", name: "王某", teamList: Array(4), userId: "Localhost_nuCoZOrUMIo0"}
name:"王某"
phone:"13211112222"
sex:"男"
teamList:Array(4)
userId:"Localhost_nuCoZOrUMIo0"

 //动态设置option的选项
 $("#investigatorSex option[value='"+data.sex+"']").attr("selected","selected")
   
  //动态创建option的选项
   -for(var i=0;i<data.teamList.length;i++){
       var new_option = "<option value="+data.teamList[i].name+">"+data.teamList[i].name+"</option>";
        console.log(new_option);
         $("#teamName").append(new_option);
     }

 //js异常捕获之 try catch   可以判断该页面是在app内还是在app外，以便于执行不同的操作，前提条件需要安卓和ios写一个共同的js然后调用。

      function tst()
       {
           try
           { 
               alllert("asdf");  //可能出错的代码写在try里面
               //var i = 1;
               //i = "sss";
           }
           catch(msg)
           {
               /*for(var p in msg){
                document.writeln(msg[p]);
                }*/
               //上面可以遍历错误
               if(msg instanceof EvalError){
                   //如果非法调用了eval()函数，则会抛出EvalError的异常。
                   alert("EvalError");
               }else if(msg instanceof ReferenceError){
                   //从字面的意思应该是调用了错误的引用，此例子是执行到了本步。
                   alert("ReferenceError");
               }else if(msg instanceof RangeError){
                   //数值超出了范围
                   alert("RangeError");
               }else if(msg instanceof SyntaxError){
                   //语法错误，错误发生在eval()，
                   alert("SyntaxError");
               }else if(msg instanceof TypeError){
                   //变量类型不是预期的
                   alert("TypeError");
               }else if(msg instanceof URIError){
                   //错误发生在encodeURI()或decodeURI()中
                   alert("URIError");
               }
           }
       }
       tst()
//异常捕获之 window.onerror
    window.onerror= function (e) {
        if(e){
            alert(e)
        }
    }
    a();


   
//判断ios还是安卓
$(function () {
    var u = navigator.userAgent, app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
        alert("安卓机！")
    }
    if (isIOS) {
        alert("苹果果机！")
    }
});
//layer 嵌套iframe 依赖layer.js 和jq
   layer.open({
                type: 2,
                title: '上传活动提议封面图',
                shadeClose: true,
                shade: false,
                maxmin: false, //开启最大化最小化按钮
                area: ['100%', '100%'],
                content: './ima_up/index.html',
            });
//layer 弹层销毁后执行事件
  layer.open({
                skin:"demo-class",
                title:"提示",
                content:"报送成功",
                end: function(){window.location.href="./index.html"}
              });

 //layer询问删除、确认层
         layer.open({
                    skin:"demo-class",
                    content: '您确认提交？',
                    btn: ['确认', '取消'],
                    shadeClose: false,
                    yes: function(){
                        layer.open({content: '确认', time: 1});
                        $.ajax({
                            url:"http://192.168.31.248:7070/AXGY_OP/debug",
                            type:"post",
                            data:{"title":$(".title_top").val(),"src":$(".src").val(),"mark":str0,"data":str3},
                            success: function (data) {
                                console.log(data);
                                layer.open({
                                    skin:"demo-class",
                                    title:"提示",
                                    content:"提交成功"
                                })
                            }
                        })

                    }, no: function(){
                        layer.open({content: '您选择了取消', time: 1});
                    }
                });


// layer 的iframe弹出后执行完某个操作后在关闭iframe 
   
        parent.layer.closeAll()
// iframe 子操作父
    
   window.parent.$(".src").attr("value",data.data.url)


//判断textarea输入框不为空
function isTextAreaNull(){
    var str=document.getElementById("desc").value.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+$)/g, "");
    if(str==""){
        layer.open({
            skin:"demo-class",
            title:"提示",
            content:"输入错误",
        })
    }else{

    }
}

//将base64的data:image/png;base64,前缀去掉
    var data = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUg..........."
    var data = data.substring(data.indexOf(",") + 1)
    
 
//密码明文和密文之间的切换显示 即动态去改变input的输入类型
    var img =document.querySelector("img");
    var password = document.getElementById("password");
    var btn =   document.querySelector("button");
    console.log(img);
    var isopen=true;
    img.onclick= function () {

        if(isopen){
            this.src="images/eyesopen.png";
            password.setAttribute("type","text")
        }
        else{
            this.src="images/eyesclose.png";
            password.setAttribute("type","password")
        }
        isopen=!isopen;
    }
    password.onblur= function () {

        var val =this.value;
        console.log(val);
        var regchildname=/[\u4e00-\u9fa5]{1,}$/;
        console.log(regchildname.test(val));
        if(regchildname.test(val)){
            layer.open({
                skin:"demo-class",
                title:"提示",
                content:"请不要输入中文",
            })
            btn.disabled = "disabled"
        }
        else{
            btn.disabled = false;
        }
    }
    
    
 //input框禁止输入空格
    <input type="text" name="userName" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;">

 //判断多选框是否被选中
     $('input[name="mark"]').is(':checked') 返回的是布尔值

  // H5 API 本地图片上传预览 获取图片的宽高  
    $("li").on("click", function () {
            var index = $(this).index();
            console.log(index);
            $(".file").eq(index).on("change", function () {
                // 获取第一个文件信息
                var fileData = this.files[0];
                //读取图片数据
                var reader = new FileReader();
                reader.readAsDataURL(fileData);
                reader.onload = function (e) {
                    var data = e.target.result;
                    //加载图片获取图片真实宽度和高度
                    var image = new Image();
                    image.onload=function(){
                        var width = image.width;
                        var height = image.height;
                        console.log(width);
                        console.log(height);
                    };
                    image.src= data;
                    $("#editable li:eq("+(index)+")").find(".img").attr("src",this.result);
                    var datas = data.substring(data.indexOf(",") + 1)
                    $.ajax({
                        url:"http://192.168.31.248:7070/AXGY_OP/uploadImage",
                        data:{"image":datas,"fileName":"",},
                        type:"post",
                        success: function (data) {
                            console.log(data);
                            console.log(data.data.url);
                            console.log(typeof data.data.url);
                            $("#editable li:eq("+(index)+")").find(".img").attr("src",data.data.url);
                        }
                    })
                };
            })
        })
    
   
 // 拖拽排序 设置拖动区域 带删除        父元素id名   
  var editableList = Sortable.create(editable, {
            sort:"true",
            animation: 150, 
            handle: '.my-handle', //设置可拖拽区域 class类名
            filter: '.js-remove', //删除class类名
            onFilter: function (evt) {
                var el = editableList.closest(evt.item); // get dragged item
                 //console.log(typeof el);
                //console.log(evt.item);
                //console.log(evt.item.children);
                //console.log(evt.item.children[1]);
                //console.log(evt.item.children[1].currentSrc);  //当前的图片路径
                //console.log(evt.item.children[5].innerHTML);  //当前的文本内容
                //删除时候判断该行有没有内容  有则提示是否确认删除 
                if(evt.item.children[1].currentSrc != "" || evt.item.children[5].innerHTML != ""){
                    layer.open({
                        skin:"demo-class",
                        content: '确认删除？',
                        btn: ['确认', '取消'],
                        shadeClose: false,
                        yes: function(){
                            layer.open({content: '确认', time: 1});
                            el && el.parentNode.removeChild(el);  //删除该行
                        }, no: function(){
                            layer.open({content: '您选择了取消', time: 1});
                        }
                    })
                }
                //没有则直接删除  
                else{ 
                    el && el.parentNode.removeChild(el);  //删除该行
                }
            }
        });

 //删除数组指定的内容的项
    Array.prototype.indexOf = function (val) {
        for(var i = 0; i < this.length; i++){
            if(this[i] == val){return i;}
        }
        return -1;
    }
    Array.prototype.remove = function (val) {
        var index = this.indexOf(val);
        if(index > -1){this.splice(index,1);}
    }
    var arr= [1,2,3,4,5]
    arr.remove(1);
 
//删除数组中的undefined 项
     var arr= [1,2,undefined,4,5,undefined];
     var b = [];
     for(var i=0;i<arr.length;i++){
            if(typeof(arr[i])!='undefined'){
                b.push(arr[i]);
            }
       }
       console.log(b); [1,2,4,5]

 //去重
 //定义一个新的数组
     var arr = [1,2,3,1,2,4,3]
     var s = [];
     //遍历数组
      for(var i = 0;i<arr.length;i++){
            if(s.indexOf(arr[i]) == -1){  //判断在s数组中是否存在，不存在则push到s数组中
                s.push(arr[i]);
            }
       }
        console.log(s) [1,2,3,4]
    
 //tabs结构转化  .具体结构详见微信公众号里面的markdown
    function tabstostring(data){
        //先循环data对象
        $.each(data, function (i,v) {
            //先循环 然后再创建数组
            var arr = [];
            //再循环data对象的tabs
            $.each(v.tabs,function(i,v){
                //console.log(v.name);
                //将标签名添加到数组里面
                arr[i] = v.name ;
            })
            //数组转字符串用 " | " 连接
            var str = arr.join(" | ");
            // 替换原始数据的tabs内容
            v.tabs = str
        })
        return data
    }
   
 //检测图片地址 是不是http开头的(七牛地址) 如果是表示图片上传成功 否则没有
    function regSrc(){
        var bool;
        $.each( $(".hidden_data li:gt(0)").children("img"), function (i, v) {
            console.log(i);
            console.log(v);
            console.log(v.src);
            console.log(typeof v.src);
            var reg =new RegExp("http");
            for(var s=0;s<=i;s++){
                if(reg.test(v.src)){
                   bool =true;
                }
                else{
                    bool =false;
                }
                console.log(bool);
            }
        })
        return bool
    }
    bool =  regSrc();//调用 返回一个bool值
    if( bool == false ){
                layer.open({
                    skin:"demo-class",
                    title:"提示",
                    content:"图片正在上传，请耐心等待"
                })
                return
      }    
//去掉url中的参数
function getDocumentUrl(){
    return location.protocol+'//'+location.host+location.pathname;
}
var shareUrl = getDocumentUrl();

function GetQueryString(name) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                var r = window.location.search.substr(1).match(reg);  //获取url中"?"符后的字符串并正则匹配
                var context = "";
                if (r != null)
                    context = r[2];
                reg = null;
                r = null;
                return context == null || context == "" || context == "undefined" ? "" : context;
            }
            //pc和手机浏览器获取userId
            var userId=GetQueryString("userId");
            //微信浏览器获取openid
            var openid=GetQueryString("openid");
        //手机打开，切到手机页面
        var u = navigator.userAgent;
        if(u.indexOf('Android') > -1 || u.indexOf('iPhone') > -1 || u.indexOf('iPad') > -1) {
            //跳到手机链接
            //手机端浏览器检查useid
            //微信端检查openid
                //微信浏览器
                var ua = window.navigator.userAgent.toLowerCase();
                if(ua.match(/MicroMessenger/i) == 'micromessenger'){
                   if(openid == ""){
                       window.location.href = './login.html';
                   }
                }
                //手机非微信浏览器
                else if(userId == ""){
                     window.location.href = './login.html';
                }
        }
        //电脑端
        else if (userId == ""){
            window.location.href = './login.html';
        }
        else{

        }

   // 小数点后两位百分比
    function Percentage(number1, number2) {
         return (Math.round(number1 / number2 * 10000) / 100.00 + "%");
     }

  自调函数
  downLoading: function (a, arr) {
    //a表示的是第几张图片，arr表示剩下的图片数组；
    var that = this;
    //当数组的长度为0时，表示所有图片已经下载完
    if (arr.length == 0) {
      //下载完成后初始化数据
      that.setData({
        picList: that.resetList
      })
      wx.showModal({
        title: '提示',
        content: '下载完成',
      })
      return;
    }
    console.log(a);
    const downloadTask = wx.downloadFile({
      url: arr[0].poriginal, //仅为示例，并非真实的资源
      success: function (res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        console.log(res);
        if (res.statusCode == 200) {
          //保存图片到本地相册
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success(res) {
              console.log(res);
              //删除数组中已下载的图片
              arr.splice(0, 1);
              //对应数组中的下标；
              a++
              that.downLoading(a, arr);
            }
          })
        }
      }
    })
    if (wx.canIUse("downloadTask.onProgressUpdate")) {
      downloadTask.onProgressUpdate((res) => {
        console.log('下载进度', res.progress);
        //下载图片所对应的在picList中的位置
        var num = that.tempArr[a].idx;
        // 更新该图片的下载进度，
        that.data.picList[num].progress = parseInt(res.progress);
        //当下载进度为100时及下载完成，隐藏该图片的进度文字
        if (res.progress == 100) {
          that.data.picList[num].mengchen = false;
        }
        that.setData({
          picList: that.data.picList
        })
      })
    }
  },

/*让文字和标签的大小随着屏幕的尺寸做变话 等比缩放*/
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=640){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
//时间转换 年/月/日
function dateConvert(dateStr){
    var da = Number(dateStr);
    da = new Date(da);
    var year = da.getFullYear();
    var month = da.getMonth()+1;
    var date = da.getDate();
    var hour = da.getHours();
    var minute = da.getMinutes() < 10 ? "0" + da.getMinutes() : da.getMinutes() ;
    month = month < 10 ? "0" +month : month ;
    date = date < 10 ? "0" + date : date ;
    return [year,month,date].join('-');
}
//时间转换 月/日 时/分
function dateConverts(dateStr){
    var da = Number(dateStr);
    da = new Date(da);
    var year = da.getFullYear();
    var month = da.getMonth()+1;
    var date = da.getDate();
    var hour = da.getHours();
    var minute = da.getMinutes() < 10 ? "0" + da.getMinutes() : da.getMinutes() ;
    var second =da.getSeconds() <10 ?"0"+ da.getSeconds() : da.getSeconds();
    month = month < 10 ? "0" +month : month ;
    date = date < 10 ? "0" + date : date ;
    return [month,date].join('/')+" "+hour+":"+minute;
}

//获取参数
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);  //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r != null)
        context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
}

/**
 * 下载
 */
function download() {

    //判断访问终端
    var browser={
        versions:function(){
            var u = navigator.userAgent,
                app = navigator.appVersion;
            return {
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
                iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
                weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
                qq: u.match(/\sQQ/i) == " qq" //是否QQ
            };
        }(),
        language:(navigator.browserLanguage || navigator.language).toLowerCase()
    };

    var u = navigator.userAgent.toLowerCase();
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) ||(u.indexOf('iPhone') > -1) || (u.indexOf('Mac') > -1) || (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) ; //ios终端
    var isWeiXin = u.match(/MicroMessenger/i) == "micromessenger";

    if(isiOS){
        $("#iframe1").attr("src", ios_url);
    }else if(isWeiXin && (!isiOS)){
        window.location.href = yingyongbaoUrl;
    }else  if(isAndroid){
        $("#iframe1").attr("src", android_url);
    }else{
        //$("#iframe1").attr("src", android_url);
    }
};

// ================================= MY B ====================================
/**
 * 获取对象内部文本
 */
function getInnerText(element) {
    if (typeof element.innerText === "string") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}
/**
 * 设置元素内部文本
 */
function setInnerText(element, content) {
    if (typeof element.innerText === "string") {
        element.innerText = content;
    } else {
        element.textContent = content;
    }
}

/**
 * 冒泡排序---从小到大（从大到小只需改变if判断条件的大于改为小于）
 */
function bubbling(arr) {
    // 需要比较arr.length趟
    for (var i = 0; i < arr.length; i++) {
        // 需要比较arr.length - 1 次
        for (var j = 0; j < arr.length - 1; j++) {
            //
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

/**
 * 冒泡排序（优化版）---从小到大（从大到小只需改变if判断条件的大于改为小于）
 */
function bubbling(arr) {    // bubbling 冒泡
    for (var i = 0; i < arr.length - 1; i++) {
        // 假设是排好的数组
        var flag = true;
        // -i 是为了优化次数，每趟排完就可以少比较一个
        for (var j = 0; j < arr.length - 1 - i; j++) {
            // 不满足就交换相邻两个数组的值的位置
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                // 执行这里面的代码了就说明不是拍好的数组
                flag = false;
            }
        }
        // 如果是拍好的数组那么就不用在遍历了，直接跳出
        if (flag) {
            break;
        }
    }
    return arr;
}
// 用系统自带的排序方法
//例子：
//var arr = [4,5,3,8,9,1,6];
//// 1.从小到大
//arr.sort(function(a,b){
//    return (a-b);
//});
//// 2.从大到小
//arr.sort(function(a,b){
//    return -(a-b);
//});

/**
 * 获取下一个兄弟选择器（兼容封装）
 */
function getNextElement(element) {
    // 如果支持这个获取方法就返回这个方法
    // 不支持就是没这个属性，这个属性就为undefined,判断结果就是false
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        //nextSibling 浏览器都兼容
        var next = element.nextSibling;
        // 如果有下一个兄弟节点，并且这个节点不是元素节点就继续找
        // 当为属性节点是，就不满足条件，就调出，并返回这个元素节点
        while (next && next.nodeType !== 1) {
            next = next.nextSibling;
        }
        return next;
    }
}

/**
 * 获取上一个兄弟选择器（兼容封装）
 */
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var perv = element.previousSibling;
        while (perv && 1 !== perv.nodeType) {
            perv = perv.previousSibling;
        }
        return perv;
    }
}

/**
 * 获取第一个子元素（兼容封装）
 */
function firstElement(element) {
    // 如果有这个方法就用这个方法
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var el = element.firstChild;
        // 如果这个节点存在并且不是元素节点，就一直找下一个节点，如果找到了元素节点，就不满足条件，就跳出，返回的就是这个找到的第一个子元素节点
        while (el && el.nodeType !== 1) {
            el = el.nextSibling;
        }
        return el;
    }
}

/**
 * 获取某元素下类名匹配的元素（兼容封装）
 * element // 获取的元素
 * className // 类名
 */
function getElementClassName(element, className) {
    // 如果支持这个方法就用这个方法
    // 没有这个方法就为判断结果就为false
    if (element.getElementsByClassName) {
        return element.getElementsByClassName(className)
    } else {
        // 用于存放某元素下匹配类名的元素
        var filterArr = [];
        // 获取某元素下所有的元素
        var elements = element.getElementsByTagName("*");
        for (var i = 0; i < elements; i++) {
            // 某元素下所有的元素的类名有这个类名就添加到数组
            if (elements[i].className.indexof(className) !== -1) {
                filterArr.push(elements[i]);
            }
        }
        return filterArr;
    }
}

/**
 * 匀速动画（只能左右移动，target大于leader向左，target小于leader向右）
 * element // 获取的元素(这个元素需要定位)
 * target  // 目标的位置（正值）
 */
function animate(element, target) {
    // 用定时器先清定时器（防止多次触发定时器）
    clearInterval(element.timer);
    function fn() {
        // 当前位置（element需定位）
        var leader = element.offsetLeft;
        // 步长
        var step = 10;
        // 判断步长为正还是为负（是为了向左走还是向右走）
        step = leader < target ? step : -step;
        // 如果目标位置大于步长则正常按步长运动
        // 如果目标位置小于步长则手动将元素移动到目标位置（防止“抽风），并且清除定时器
        if (Math.abs(target - leader) >= Math.abs(step)) {
            var leader = leader + step;
            element.style.left = leader + "px";
        } else {
            leader = target;
            element.style.left = leader + "px";
            clearInterval(element.timer);
        }
    }

    // 定时器传函数的引用是为了提高效率，不用每次循环都在内存中开辟一片空间存放这个函数
    element.timer = setInterval(fn, 15);
}

/*
 *缓动动画
 *element 是元素
 *obj 是对象{attr:target}，对象里面可以写多个符合要求的键值对
 *fn 动画函数执行完后执行的函数
 */
//把 任意对象(obj) 的 任意数值属性 改变为 任意的目标值(缓动动画终极版，增加透明度属性和层级属性)
function animate(element, obj, fn) {
    clearInterval(element.timer);
    element.timer = setInterval(function () {
        var flag = true;
        for (var k in obj) {
            if (k === "opacity") {//opacity要特殊处理
                //opacity没有单位 参与运算自动转换成数值 所以不用parsetInt
                //取值范围 0-1 0.1 0.33 33 为了让以前的计算公式生效 要扩大100倍
                var leader = getStyle(element, k) * 100;
                var target = obj[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                element.style[k] = leader / 100;//opacity没有单位
            } else if (k === "zIndex") {
                element.style.zIndex = obj[k];//层级不需要渐变 直接设置即可
            } else {
                var leader = parseInt(getStyle(element, k)) || 0;
                var target = obj[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                element.style[k] = leader + "px";
            }
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(element.timer);
            if (typeof fn === "function") {
                fn();
            }
            ;
        }
    }, 15);
}

/**
 * 获取元素 属性 的值（兼容封装）
 * element  // 元素
 * attr     // 属性（可计算的属性）
 */
function getStyle(element, attr) {
    // 如果有这个方法就用这个方法获取
    if (window.getComputedStyle) {
        return window.getComputedStyle(element, null)[attr];
    } else {
        // 此方法支持IE678
      return element.currentStyle[attr];
    }
}

/**
 * crollTop（页面卷去的高度）和scollLeft（页面卷去左边的宽度）（兼容封装）
 * @returns {{top: number, left: number}}
 */
// 一般配合onscroll事件
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    }
}

/**
 * clientWidth（可视宽度）和clientHeight（可视高度）（兼容封装）
 * @returns {{width: number, height: number}}
 */
// 一般配合onresize事件
function client(){
    return {
        // 浏览器窗口可视的宽度
        "width": window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        // 浏览器窗口页面的可视高度
        "height": window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0,
    }
}

/**
 * 求出数组的最小值和最小值的索引
 * @param arr
 * @returns {{}}
 */
function getMin(arr){
    // 创建一个对象用于存放最小值和最小值的索引
    var min = {};
    // 假设数组最小值索引
    min.index = 0;
    // 假设数组最小值
    min.value = arr[min.index];
    for (var i = 0; i < arr.length; i++) {
        if(min.value>arr[i]){
            min.value = arr[i];
            min.index = i;
        }
    }
    // 返回这个对象
    return min;
}

/**
 * event事件及event属性兼容性集合
 * @type {{getEvent: Function, getPageX: Function, getPageY: Function, stopPropagation: Function, getTarget: Function}}
 */
var eventUtil = {
    //谷歌浏览器 即支持传参的形式 有支持属性的形式
    //FF 只支持 传参的方式
    //IE678只支持         window.event这种方式
    getEvent: function (event) {
        return event || window.event;
    },
    //获取鼠标在页面上的X位置
    getPageX: function (event) {
        return event.pageX || event.clientX + document.documentElement.scrollLeft;
    },
    //获取鼠标在页面上的Y位置
    getPageY: function (event) {
        return event.pageY || event.clientY + document.documentElement.scrollTop;
    },
    //阻止冒泡兼容写法
    //event.stopPropagation();//正常浏览器
    //event.cancelBubble = true;//IE678
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    // 事件目标的兼容写法
    getTarget: function (event) {
        return event.target || event.srcElement;
    }
};

// 防止选中文本（onmousemove事件中用过）
//window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

/**
 * Object.create()兼容封装  // 创建的对象的特点：继承自括号里穿的对象
 * @param obj
 * @returns {*}
 */
function createWithObject ( obj ) {
    // 先判断系统是否支持原生的方法,如果支持则使用原生方法
    if ( Object.create ) {
        return Object.create( obj );
    } else {
        function F() {}
        F.prototype = obj;
        return new F();
    }
}

/**
 * 兼容低版本浏览器支持proto
 * @param instance
 * @returns {Object|Function|Mongo.Collection|number}
 * @private
 */
function __getProto__(instance){
    return instance.constructor.prototype;
}

/**
 * 将匹配到的所有邮箱的用户名替换成 a***** 的形式的邮箱显示方式   // 例：a**@qq.com;
 * @param str
 * @returns {string|void|XML|*}
 * @constructor
 */
function EmailNameChange(str) {
    // 参数s为提取的邮箱字符串，g1为提取的用户名字符串，g2为提取的邮箱@后面的字符串，g3为点和后面的字符串
    return str.replace( /(\w+)@(\w+(\.\w+)+)/g, function ( s, g1, g2, g3 ) {

        // 将用户名 变成 a***** 的形式
        var first = g1.charAt( 0 );
        var start = [];
        // 不带第一个字符应该长度减一个“*”
        for ( var i = 0; i < g1.length - 1; i++ ) {
            start.push( '*' );
        }
        // 返回这个拼接的邮箱
        return first + start.join('') + '@' + g2;
    })
}

/**
 * 封装trim方法
 * @param str
 * @returns {*}
 */
function trim(str){
    if(str.trim){
        return str.trim();
    }else {
        var str = str.replace(/^\s+|\s+$/g,"");
        return str;
    }
    
}

/**
 * [ajax description]
 * @param  {[type]}   url      [description]
 * @param  {[type]}   type     [description]
 * @param  {[type]}   param    [description]
 * @param  {[type]}   dataType [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
function ajax(url,type,param,dataType,callback){
    var xhr = null;
    // 实例化一个http请求对象（兼容写法）
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        // ie6支持
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    // get请求参数传在url的 ？后面，如果param里面有汉字需将parame的字符串用encode转码
    if(type == 'get'){
        url += "?" + param;
    }
    // 准备发送
    xhr.open(type,url,true);

    var data = null;
    if(type == 'post'){
        data = param;
        // post请求需要设置请求头
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    }
    // 发送
    // post请求参数在这里传递，并且不需要转码
    // get请求为null
    xhr.send(data);

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                var data = xhr.responseText;
                if(dataType == 'json'){
                    data = JSON.parse(data);
                }
                callback(data);
            }
        }
    }
}

/**
 * ajax（传参为对象的方式）
 */
function ajax(obj){
    // 默认参数
    var defaults = {
        type : 'get',
        data : {},
        url : '#',
        dataType : 'text',
        async : true,
        success : function(data){console.log(data)}
    }
    // 处理形参，传递参数的时候就覆盖默认参数，不传递就使用默认参数
    for(var key in obj){
        defaults[key] = obj[key];
    }
    // 1、创建XMLHttpRequest对象
    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    // 把对象形式的参数转化为字符串形式的参数
    /*
     {username:'zhangsan','password':123}
     转换为
     username=zhangsan&password=123
     */
    var param = '';
    for(var attr in obj.data){
        param += attr + '=' + obj.data[attr] + '&';
    }
    if(param){
        param = param.substring(0,param.length - 1);
    }
    // 处理get请求参数并且处理中文乱码问题
    if(defaults.type == 'get'){
        defaults.url += '?' + encodeURI(param);
    }
    // 2、准备发送（设置发送的参数）
    xhr.open(defaults.type,defaults.url,defaults.async);
    // 处理post请求参数并且设置请求头信息（必须设置）
    var data = null;
    if(defaults.type == 'post'){
        data = param;
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    }
    // 3、执行发送动作
    xhr.send(data);
    // 处理同步请求，不会调用回调函数
    if(!defaults.async){
        if(defaults.dataType == 'json'){
            return JSON.parse(xhr.responseText);
        }else{
            return xhr.responseText;
        }
    }
    // 4、指定回调函数（处理服务器响应数据）
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                var data = xhr.responseText;
                if(defaults.dataType == 'json'){
                    // data = eval("("+ data +")");
                    data = JSON.parse(data);
                }
                defaults.success(data);
            }
        }
    }

}

// 处理弧度与角度的计算
function toAngle ( radian ) {
    return radian * 180 / Math.PI; 
}
function toRadian ( angle ) {
    return angle * Math.PI / 180;
}

// 生成n - m 的随机数
function rnd(n, m) {
    return Math.floor(Math.random() * (m - n) + n);
};

// 获取url地址的键对应的值
function getQueryString(key) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var result = window.location.search.substr(1).match(reg);
    return result ? decodeURIComponent(result[2]) : null;
}

// 分页基本显示逻辑
function showPages(page, total) {
  var str = page + '';
  for (var i = 1; i <= 3; i++) {
      if (page - i > 1) {
          str = page - i + ' ' + str;
      }
      if (page + i < total) {
          str = str + ' ' + (page + i);
      }
  }
  if (page - 4 > 1) {
      str = '... ' + str;
  }
  if (page > 1) {
      str = '上一页 ' + 1 + ' ' + str;
  }
  if (page + 4 < total) {
      str = str + ' ...';
  }
  if (page < total) {
      str = str + ' ' + total + ' 下一页';
  }
  return str;
}
// 测试打印
var total = 12;  
for (var i = 1; i <= total; i++) {  
    var ret = showPages(i, total);
    console.log(ret);
}
// 分页基本代码（html标签不完整）参考
function showPageCommon(config) {  
    return function (page, total) {
        var str = '<a class="' + config.color + '">' + page + '</a>';
        for (var i = 1; i <= 3; i++) {
            if (page - i > 1) {
                str = '<a>' + (page - i) + '</a> ' + str;
            }
            if (page + i < total) {
                str = str + ' ' + '<a>' + (page + i) + '</a>';
            }
        }
        if (page - 4 > 1) {
            str = '... ' + str;
        }
        if (page > 1) {
            str = '上一页 ' + 1 + ' ' + str;
        }
        if (page + 4 < total) {
            str = str + ' ...';
        }
        if (page < total) {
            str = str + ' ' + total + ' 下一页';
        }
        return str;
    }
}
var showPages = showPageCommon({  
    color: 'red'
});
// 测试打印
var total = 12;  
for (var i = 1; i <= total; i++) {  
    var ret = showPages(i, total);
    console.log(ret);
    document.getElementsByTagName('div')[i].innerHTML = ret;
}
// ================================= MY E ====================================
