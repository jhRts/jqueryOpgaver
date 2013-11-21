/*
       gallaeriet er opbygget i lag (z-index)
  */
var images = $(".galleri").find("img"); // tag fadt i alle billeder

$(images).each(function () {
    $(this).css("display", "none"); // skjul alle billeder
});
$(images).first().addClass("activ").css("display", "block");// find det første billede, giv den en class og vis den elemented

// vis næste billede
$(".next").on("click", function () {
    var el = $(".images").find(".activ");

    if ($(el).is(":last-child")) { // Har det sidste billede?
        // Find det første billede og gør den klar til at skal vises
        $(images).first().css({ "display": "block", "z-index": -1 })
    } else {
        // Find det næste billede og gør den klar til at skal vises
        $(el).next().css({ "display": "block", "z-index": -1 })
    }
    $(el).fadeOut("fast", function () {
        // når billede er færdig med at blive vist (callback)
        // fjern class fra billedet
        $(el).removeClass("activ");

        if ($(el).is(":last-child")) {
            // hvis billedet er det sidste, så find den første og vis.
            $(images).first().addClass("activ").css({ "z-index": 0 });
        } else {
            // vis det neste billede
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
