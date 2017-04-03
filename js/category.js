/**
 * @author: Caden
 * @Date: 11/6 0006 14:13
 */

$(function () {
    $(".detail div").html($(".categories ul li:eq(0) a").html());


    $("aside.categories ul li").bind("click", function () {
        $("aside.categories ul li a").removeClass("current");

        $(this).children("a").addClass("current");

        // console.log($(this).index() * 47);

        $(this).parents(".categories").animate({"scrollTop": $(this).index() * 47}, 400);

        $(".contents").animate({"scrollTop": 0}, 0);

        $(".detail div").html($(this).find("a").html());

    });


});