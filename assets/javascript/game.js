var gem1 = Math.floor(Math.random() * (12 - 1) + 1);
var gem2 = Math.floor(Math.random() * (12 - 1) + 1);
var gem3 = Math.floor(Math.random() * (12 - 1) + 1);
var gem4 = Math.floor(Math.random() * (12 - 1) + 1);
var ranNum = Math.floor(Math.random() * (120 - 19) + 19);
var totalScore = 0;
var win = 0;
var loss = 0;


function reset() {
    var gem1 = Math.floor(Math.random() * (12 - 1) + 1);
    var gem2 = Math.floor(Math.random() * (12 - 1) + 1);
    var gem3 = Math.floor(Math.random() * (12 - 1) + 1);
    var gem4 = Math.floor(Math.random() * (12 - 1) + 1);
    var ranNum = Math.floor(Math.random() * (120 - 19) + 19);
    totalScore = 0;
    $("#ranNum").html(ranNum);
    $("#score").text(totalScore);
    $("#ranBox").text("");
}


function checkScore() {
    if (totalScore === ranNum) {
        win++;
        $("#wins").html(win);
        alert(" YOU WIN!! ")
        $("#wins").html(win);
        reset();
    } else if (totalScore > ranNum) {
        loss++;
        $("#losses").html(loss);
        alert("You LOOSE!");
        reset();
    }
}

// function getBtnValue(){
//     var stringValue = $(this).val(); // this?? 
//     return parseInt(stringValue);
// }

$(document).ready(function () {

    $("#ranNum").html(ranNum);
    $("#score").text(totalScore);
    $("#wins").text(win);
    $("#losses").text(loss);


    $(".reset").click(function () {
        reset()
        $("#message").text("");
    });

  
});
$("#gem1").click(function () {
    totalScore += gem1;
    $('#score').text(totalScore);
    $("#ranBox").text(gem1);
    checkScore();
})

$("#gem2").click(function () {
    totalScore += gem2;
    $('#score').text(totalScore);
    $("#ranBox").text(gem2);
    checkScore();
});

$("#gem3").click(function () {
    totalScore += gem3;
    $("#score").text(totalScore);
    $("#ranBox").text(gem3);
    checkScore();
});

$("#gem4").click(function () {
    totalScore += gem4;
    $("#score").text(totalScore)
    $("#ranBox").text(gem4);
    checkScore();
});



