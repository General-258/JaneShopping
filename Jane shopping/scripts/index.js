//搜索框文字效果
$(function(){
    $("#inputSearch").focus(function(){    //光标激活
        $(this).addClass("focus");     //添加focus样式
        if($(this).val()==this.defaultValue){      //如果值为初始值
            $(this).val(" ");          //将值置为空
        }
    }).blur(function(){                //光标丢失
        $(this).removeClass("focus");  //去除focus样式
        if($(this).val()==' '){          //如果值为空
            $(this).val(this.defaultValue);    //将值设为初始值
        }
    }).keyup(function(e){       //添加键盘事件
        if(e.which==13){
            alert('回车提交表单！');
        }
    })
});
//导航效果
$(function(){
    $("#nav li").hover(function(){   //鼠标移入
        $(this).find(".jnNav").show() ;   //显示
    },function(){         //鼠标移出
        $(this).find(".jnNav").hide();   //隐藏
    });
});
//热销效果
$(function(){
    $(".jnCatainfo .promoted").append('<s class="hot"></s>');//给热销商品加上效果
});
//广告图效果
$(function(){
    var $imgrolls=$("#jnImageroll div a");  //获取到图片下的文字的父元素
    $imgrolls.css("opticy","0.7");           //设置透明度
    var len=$imgrolls.length;                //获取到它的长度
    var index=0;            //定义变量并初始化
    var adTimer=null;        //定义变量并初始化
    $imgrolls.mouseover(function(){        //加上鼠标移入事件
        index =$imgrolls.index(this);      //将被鼠标移入的元素的索引值赋给index
        showImg(index);             //将索引值传递给函数showImg作为参数
    }).eq(0).mouseover();//显示初始化
    $("#jnImageroll").hover(function(){   //加上光标悬停事件
        if(adTimer){          //判断语句
            clearInterval(adTimer);    //终止函数
        }
    },function(){
        adTimer=setInterval(function(){   //定时函数
            showImg(index);     //调用showTmg（index）函数
            index++;         //每调用一次就加1
            if(index==len){index=0;}   //如果等于文字父元素数组的长度，将index置为0重新开始
        },5000);           //时间间隔设为5秒
    }).trigger(mouseleave);  //切换样式，触发mouseleave函数
    function showImg(index){   //showImg函数
        var $rollobj=$("#jnImageroll");   //获取元素
        var $rolllist=$rollobj.find("div a");    //获取获取到的元素中的a元素
        var newhref=$rolllist.eq(index).attr("href");  //获取a元素的索引值和href属性
        $("#JS_imgWrap").attr("href",newhref).find("img").eq(index).stop(true,true).fadeIn().siblings().fadeOut();
        //设置元素的属性并利用元素的索引值将未执行完的动画清空显示，同辈元素隐藏
        $rolllist.removeClass("chos").css("opacity","0.7").eq(index).addClass("chos").css("opacity","1");
        //设置文字下面的字体的样式
    }
});
// 超链接文字提示

//品牌活动横向滚动效果
/*$(function(){
    $("#jnBrandTab li a").click(function(){
        $(this).parent().addClass("chos").siblings().removeClass("chos");
        var idx=$("#jnBrandTab li a").index(this);
        showBrandList(idx);
        return false;
    }).eq(0).click();
    function showBrandList(index){
        var $rollobj=$("#jnBrandList");
        var rollWidth=$rollobj.find("li").outerWidth();
        rollWidth=rollWidth * 4;
        $rollobj.stop(true,false).animate({left:-rollWidth*index},1000);
    }
});*/