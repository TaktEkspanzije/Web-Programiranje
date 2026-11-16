
$(document).ready(function() {

    $(".kvadrat").draggable({
        revert: function(dropped) {
            return $(this).data("pogresno") === true || !dropped;
        },
        revertDuration: 300,

        start: function() {
            $(this).data("pogresno", false);
            $("#poruka").text("");
        }
    });

    $("#spremnikCrni").droppable({
        accept: ".kvadrat",
        classes: {
            "ui-droppable-hover": "aktivan"
        },

        drop: function(event, ui) {
            if (ui.draggable.attr("id") === "kvadratCrveni") {
                ui.draggable.data("pogresno", true);
                $("#poruka").text("Jesi ti dobro? 😂");
                return;
            }

            smjestiKvadrat(ui.draggable, this);
        }
    });

    $("#spremnikCrveni").droppable({
        accept: ".kvadrat",
        classes: {
            "ui-droppable-hover": "aktivan"
        },

        drop: function(event, ui) {
            if (ui.draggable.attr("id") === "kvadratCrni") {
                ui.draggable.data("pogresno", true);
                $("#poruka").text("Jesi ti dobro? 😂");
                return;
            }

            smjestiKvadrat(ui.draggable, this);
        }
    });

    function smjestiKvadrat(kvadrat, spremnik) {
        kvadrat.detach().css({
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            margin: "0"
        }).appendTo(spremnik);

        kvadrat.draggable("disable");

        $("#poruka").text("");
        provjeriBoje();
    }

    function provjeriBoje() {
        if (
            $("#spremnikCrni").has("#kvadratCrni").length > 0 &&
            $("#spremnikCrveni").has("#kvadratCrveni").length > 0
        ) {
            $("#poruka").text("Bravo care! Svaka čast. Osvježi stranicu za početak.");
        }
    }

});
