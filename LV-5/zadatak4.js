
$(document).ready(function() {

    // Gumb ZELENA
    $("#zelena").click(function() {

        $("ul").first().addClass("zelena");

    });


    // Slike - crni obrub kada je miš iznad slike
    $(".slike img").mouseenter(function() {

        $(this).addClass("crni-obrub");

    });

    $(".slike img").mouseleave(function() {

        $(this).removeClass("crni-obrub");

    });


    // Klikom na sliku ona nestaje
    $(".slike img").click(function() {

        $(this).hide();

    });


    // Gumb Abrakadabra
    let slikeSkrivene = false;

    $("#abrakadabra").click(function() {

        // Prekidanje animacija koje su u tijeku
        $(".slike img").stop(true, true);

        if (slikeSkrivene == false) {

            // Prva slika brzo nestaje
            $(".slike img").eq(0).fadeOut("fast");

            // Druga slika sporo nestaje
            $(".slike img").eq(1).fadeOut("slow");

            // Treća slika nestaje tijekom 5 sekundi
            $(".slike img").eq(2).fadeOut(4800);

            slikeSkrivene = true;

        } else {

            // Ponovno prikazivanje svih slika
            $(".slike img").show();

            slikeSkrivene = false;

        }

    });

});
