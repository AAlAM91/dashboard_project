$(document).ready(function(){
    $(".toggle_sideBar").on("click" , function(){
        $([".side_bar" , ".content_area"]).toggleClass("toggle");
        $(this).find(".fa-angle-double-left").toggleClass("rotate")
    });
    // toggle links
    $(".slideLinks").on("click" , function(){
        $(this).next(".subMenu").slideToggle();
        $(this).find(".fa-angle-right").toggleClass("down");
    });
    // Show setting side 
    $('.setting_toggle').on("click" , function(){
        $(this).find("i").toggleClass("fa-spin");
        $(this).parent().toggleClass("showSetting")
    });
    var colorsTable = [];
    $(".color_list li").on("click" , function(){
        colorsTable.push($(this).data("color"))
        console.log(colorsTable.join(" "));
    });
    $(".color_list li").on("click" , function(){
        $("body").removeClass(colorsTable.join(" ")).addClass($(this).data("color"));
        $(this).addClass("active").siblings().removeClass('active');
    });
});