var gem1 = Math.floor(Math.random() * (10 - 1) + 1);
var gem2 = Math.floor(Math.random() * (10 - 1) + 1);
var gem3 = Math.floor(Math.random() * (10 - 1) + 1);
var gem4 = Math.floor(Math.random() * (10 - 1) + 1);
var ranNum = Math.floor(Math.random() * (40 - 1) + 1);
var totalScore = 0;
var win = 0;
var loss = 0;

function reset() {

    gem1 = Math.floor(Math.random() * (10 - 1) + 1);
    gem2 = Math.floor(Math.random() * (10 - 1) + 1);
    gem3 = Math.floor(Math.random() * (10 - 1) + 1);
    gem4 = Math.floor(Math.random() * (10 - 1) + 1);
    ranNum = Math.floor(Math.random() * (40 - 1) + 1);
    totalScore = 0;
    $("#ranNum").html(ranNum)

    $(".GEMS").html(gem1); // want to change backto orginal set

    $("#gem2").text(gem2);
    $("#gem3").text(gem3);
    $("#gem4").text(gem4);
    $("#score").text(totalScore);
    $("#wins").text(win);
    $("#losses").text(loss);
}

$(".reset").click(function () {
    reset()
});


$(document).ready(function () {

    $("#ranNum").html(ranNum)
    $("#score").text(totalScore);
    $("#wins").text(win);
    $("#losses").text(loss);

    $("#gem1").click(function () {
        totalScore += gem1;
        $('#score').text(totalScore);
        $("#gem1").text(gem1);
    })

    $("#gem2").click(function () {
        totalScore += gem2;
        $('#score').text(totalScore);
        $("#gem2").text(gem2);
    });

    $("#gem3").click(function () {
        totalScore += gem3;
        $("#score").text(totalScore);
        $("#gem3").text(gem3);
    });

    $("#gem4").click(function () {
        totalScore += gem4;
        $("#score").text(totalScore)
        $("#gem4").text(gem4);
    });




  

        function winner() {
            if (totalScore === ranNum)
                win++;
            $("#wins").html(win);
            alert("Win");
        }

        function loose() {
            if (totalScore >= ranNum) {
                loss++;
                $("#losses").html(loss);
                alert("Loose");
            }
        }

});
