$(function () { 
    "use strict";
    
    $(function () {
        $(".headline").animate({
            "marginTop": "160px"
        }, 2200, "swing");
    });
    
    $(function () {
        $(".subtitle")
            .animate({"marginTop": "-15px"}, 2200, "swing")
            .animate({"opacity": 1}, 1500);
    });
    

    $(function () {
        $(".bgimage")
            .animate({"opacity": "1"}, 1000)
            .animate({"opacity": "0.5"}, 1700)
            .animate({"opacity": "1"}, 1200);
    });

    $(function () {
        $("#arrow")
            .animate({"opacity": "1"}, 2000)
            .animate({"marginTop": "300px"}, 2000)
            .animate({"marginTop": "325px"}, 1000)
            .animate({"marginTop": "300px"}, 1000)
            .animate({"marginTop": "325px"}, 1000)
            .animate({"opacity": "0"}, 2000);
    });
});
