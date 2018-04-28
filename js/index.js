$(function () {
    console.log("123");
    $("body").on("mousewheel", function (e) {
        var scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
        if (scrollTop > 300) {
            $(".kyy-box").css("margin-top", "82px")
            $(".head").css({
                "position": "fixed",
                "top": "0",
                "z-index": 999,
                "width": "100%"
            })
        } else {
            $(".kyy-box").css("margin-top", "0")
            $(".head").css({
                "position": "relative",
                "z-index": 999,
                "width": "",
            })
        }
    })
    $(".search-a").on("mouseover", function (e) {
        $(".search-a").css({
           "width":"150px",
           "transition":"all ease 1s",
       })
    }).on("mouseleave",function(){
        $(".search-a").css({
            "width":"55px",
            "transition":"all ease 1s",
        })
    })
})