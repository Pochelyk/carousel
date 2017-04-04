$(document).ready(function () {
    //  $("ul").append("<li>конец</li>");
    //  $("ul").prepend("<li>начало</li>");
    // $("li").remove(":first-child");
    // $("li").remove(":last-child");
    $(".star").on("click", function () {
        $("ul").prepend("<li>начало</li>");
    });
    $(".end").on("click", function () {
        $("ul").append("<li>конец</li>");
    });
    $(".poi").on("click", function () {
        $("li").remove(":first-child");
    });
    $(".elem").on("click", function () {
        $("li").remove(":last-child");
    });

    $(".frog").on("click",function(){

    })
})