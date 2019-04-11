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

    var win = 0;
    var loss = 0; 
    $("#ranNum").html(ranNum)
    $("#score").text(totalScore);
    $(".GEMS").show("");
}



function checkScore(){
    if (totalScore === ranNum){ 
        win++;
    $("#wins").html(win);
    $("message").html("WINNER!!!!!")
    $(".GEMS").prop("disabled", );
    
    reset();
}

    else if (totalScore > ranNum) {
        loss++;
    $("#losses").html(loss);
    $("message").text("YOU LOOSE!!!!!")
    alert("LOOOSSS!");
    $(".GEMS").prop("disabled", true);
    reset();
    
    }
}



$(document).ready(function () {

    $("#ranNum").html(ranNum)
    $("#score").text(totalScore);
    $("#wins").text(win);
    $("#losses").text(loss);


    $(".reset").click(function () {
        reset()
        $("#message").text("");
        $(".GEMS").prop("disabled", false);
    });

    $("#gem1").click(function () {
        totalScore += gem1;
        $('#score').text(totalScore);
        $("#gem1").text(gem1);
        checkScore();
    })

    $("#gem2").click(function () {
        totalScore += gem2;
        $('#score').text(totalScore);
        $("#gem2").text(gem2);
        checkScore();
    });

    $("#gem3").click(function () {
        totalScore += gem3;
        $("#score").text(totalScore);
        $("#gem3").text(gem3);
        checkScore();
    });

    $("#gem4").click(function () {
        totalScore += gem4;
        $("#score").text(totalScore)
        $("#gem4").text(gem4);
        checkScore();
    });


    
});
