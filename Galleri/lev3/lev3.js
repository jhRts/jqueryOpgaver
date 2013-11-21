/*
             gallaeriet er opbygget i lag (z-index)
             lev 3
             tilføet små billeder
        */
var images = $(".galleri").find("img");

$(images).each(function (i, e) {
    $(this).css("display", "none");

    $(this).addClass("item" + i);
    imageNav(this);
});

$(images).first().addClass("activ").css("display", "block");

$(".next").on("click", function () {
    var el = $(".images").find(".activ");
    if ($(el).is(":last-child")) {
        $(images).first().css({ "display": "block", "z-index": -1 })
    } else {
        $(el).next().css({ "display": "block", "z-index": -1 })
    }
    $(el).fadeOut("fast", function () {
        $(el).removeClass("activ");


        if ($(el).is(":last-child")) {
            $(images).first().addClass("activ").css({ "z-index": 0 });
        } else {
            $(el).next().addClass("activ").css({ "z-index": 0 });
        }
    });
});

$(".previous").on("click", function () {
    var el = $(".images").find(".activ");
    if ($(el).is(":first-child")) {
        $(images).last().css({ "display": "block", "z-index": -1 })
    } else {
        $(el).prev().css({ "display": "block", "z-index": -1 })
    }
    $(el).fadeOut("fast", function () {
        $(el).removeClass("activ");
        if ($(el).is(":first-child")) {
            $(images).last().addClass("activ").css({ "z-index": 0 });
        } else {
            $(el).prev().addClass("activ").css({ "z-index": 0 });
        }
    });
});

function imageNav(e) {
    console.log("imageNav")
    var elm = $(e).clone();
    $(elm).on("click", function () {

        var imgClass = $(this).attr("class");
        var img = $(".images").find("." + imgClass);
        $(img).css({ "display": "block", "z-index": -1 });

        if ($(".activ").attr("class") != $(img).attr("class")) { // må ikke være det samme element
            $(".images").find(".activ").fadeOut("fast", function () {
                $(".activ").removeClass("activ");
                $(img).addClass("activ").css({ "z-index": 0 });;
            });
        }

    });
    $(elm).show().appendTo($(".imageNav"))
}

/* lev 3 */
$(".popUdGalleri").on("click", function () { // klik på lille knap.
    var val = $(this).find("span").text(); // find text i knappen

    $(".galleriBg").css({ "width": window.innerWidth, "height": window.innerHeight }); // bg få en Width og Height
    if (val == "+") { // hvis val = + så skal der lukkes ned
        $(".galleri").addClass("popUp");
        $(".galleriBg").addClass("popUp");
        $(this).find("span").text("-");
    } else { // ellers pup ud
        $(".galleri").removeClass("popUp");
        $(".galleriBg").removeClass("popUp");
        $(this).find("span").text("+");
    }


});
/* lev 3 */

