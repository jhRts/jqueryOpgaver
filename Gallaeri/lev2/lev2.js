
/*
       gallaeriet er opbygget i lag (z-index)
       lev 2
       tilføet små billeder
  */
var images = $(".galleri").find("img");

$(images).each(function (i, e) {
    $(this).css("display", "none");

    /* lev 2 */
    $(this).addClass("item" + i); //giv alle billeder en class.
    imageNav(this);// smider 13 linjer kode ud i en function
    /* lev 2 */
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


/* lev 2 */
function imageNav(e) {
    var elm = $(e).clone(); // laver et kupi af billdet
    $(elm).on("click", function () { 
        var imgClass = $(this).attr("class"); // tager fadt i class
        var img = $(".images").find("." + imgClass); // find det stoer billde der matcher med class
        $(img).css({ "display": "block", "z-index": -1 });// gør billedet klar


        if ($(".activ").attr("class") != $(img).attr("class")) { // må ikke være det samme element
            $(".images").find(".activ").fadeOut("fast", function () { // fade-ud det aktive billede
                $(".activ").removeClass("activ"); // fjern class fra billedet
                $(img).addClass("activ").css({ "z-index": 0 }); // nye billede få en class og træder fream med z-index
            });
        }

    });
    $(elm).show().appendTo($(".imageNav"))
}
/* lev 2 */
