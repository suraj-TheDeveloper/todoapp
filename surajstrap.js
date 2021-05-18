$(document).ready(function(){
    $("#nav").click(function(){
        $(".collapse").toggle(2000);
    });
});
$(document).ready(function(){
    $(document).ready(function(){
        $(".fade-header").fadeOut(1000);
        $(".fade-header").fadeIn(6000);
    });
});
$(document).ready(function(){
    $("input").focusin(function(){
        $(this).css("box-shadow", "0px 0px 5px 5px lightblue");
    });
    $("input").focusout(function(){
       $(this).css("box-shadow", "none");
    });
});

