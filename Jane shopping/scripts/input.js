$(function(){
    $("#inputSearch").focus(function(){
        $(this).addClass("focus");
        if($(this).val()==this.defaultValue){
            $(this).val(" ");
        }
    }).blur(function(){
        $(this).removeClass("focus");
        if($(this).val()==' '){
            $(this).val(this.defaultValue);
        }
    }).keyup(function(e){
        if(e.which==13){
            alert('�س��ύ����');
        }
    })
});
$(function(){
    $("#nav li").hover(function(){
        $(this).find(".jnNav").show() ;
    },function(){
        $(this).find(".jnNav").hide();
    });
});