/**
 * Created by john on 2018/5/25.
 */
function placeholderSupport() {
    return 'placeholder' in document.createElement('input');
}
if(!placeholderSupport()) {
    $("[placeholder]").each(function(){
        var _this = $(this);
        _this.parent().append('<span class="placeholder" data-type="placeholder">' + _this.attr("placeholder") + '</span>');
        if(_this.val() != ""){
            _this.parent().find("span.placeholder").hide();
        }
        else{
            _this.parent().find("span.placeholder").show();
        }
    }).on("focus", function(){
        $(this).parent().find("span.placeholder").hide();
    }).on("blur", function(){
        var _this = $(this);
        if(_this.val() != ""){
            _this.parent().find("span.placeholder").hide();
        }
        else{
            _this.parent().find("span.placeholder").show();
        }
    });
    $("span.placeholder").on("click", function(){
        $(this).hide();
        $(this).siblings("[placeholder]").trigger("click");
        $(this).siblings("[placeholder]").trigger("focus");
    });
}