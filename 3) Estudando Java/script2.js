$(function(){
    $("#oi").click(function(){
        $("p").text("td bem?");
    });
    $("#l1").click(function(){
        $("#i1").css("display","inline-block");
        $("#i2").css("display","none");
        $("#i3").css("display","none");
    });

    $("#l2").click(function(){
        $("#i1").hide();
        $("#i2").show();
        $("#i3").css("display","none");
    });

    $("#l3").click(function(){
        $("#i1").hide();
        $("#i2").hide();
        $("#i3").show();
    });
})