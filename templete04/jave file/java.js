//navbar's functions
$(window).on("load",function()
{
    if($(window).scrollTop()<=50)
    {
        $("nav").css("background","#f8f9fa00");
    }
    else
    {
        $("nav").css("background","#141313");
    }
});
$(window).on("scroll",function()
{
    if($(window).scrollTop()<=50)
    {
        $("nav").css("background","#f8f9fa00");
    }
    else
    {
        $("nav").css("background","#141313");
    }
});
//alert message for form
$("button").on("click",function()
{
    if($("#name").val()==="")
    {
        $("#name-alert").fadeIn(0);
    }
    else
    {
        $("#name-alert").fadeOut(0);
    }
    if($("#email").val()==="")
    {
        $("#email-alert").fadeIn(0);
    }
    else
    {
        $("#email-alert").fadeOut(0);
    }
    if($("#phone").val()==="")
    {
        $("#phone-alert").fadeIn(0);
    }
    else
    {
        $("#phone-alert").fadeOut(0);
    }
    if($("#message").val()==="")
    {
        $("#message-alert").fadeIn(0);
    }
    else
    {
        $("#message-alert").fadeOut(0);
    }
});
$("#name").on("focus",function()
{
    $("#name-alert").fadeOut(0);
});
$("#email").on("focus",function()
{
    $("#email-alert").fadeOut(0);
});
$("#phone").on("focus",function()
{
    $("#phone-alert").fadeOut(0);
});
$("#message").on("focus",function()
{
    $("#message-alert").fadeOut(0);
});