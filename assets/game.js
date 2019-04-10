var gem1 = Math.floor(Math.random() * (10 - 1) + 1);
var gem2 = Math.floor(Math.random() * (10 - 1) + 1);
var gem3 = Math.floor(Math.random() * (10 - 1) + 1);
var gem4 = Math.floor(Math.random() * (10 - 1) + 1);
var ranNum = Math.floor(Math.random() * (40 - 1) + 1);
//var totalScore = undefined;
var value = ranNum;
var totalScore = 0;




$(document).ready(function () {


    $("#ranNum").html(ranNum)

    $("#gem1").click(function () {
        totalScore += gem1;
        $('#score').text(totalScore);
        $("#gem1").html(gem1);
    })

    $("#gem2").click(function () {
        totalScore += gem2;
        $('#score').text(totalScore);
        $("#gem2").html(gem2);
    });

    $("#gem3").click(function () {
        totalScore += gem3;
        $("#score").text(totalScore);
        $("#gem3").html(gem3);
    });

    $("#gem4").click(function () {
        totalScore += gem4;
        $("#score").text(totalScore)
        $("#gem4").html(gem4);
    });

  
    });

  if ( $("#score").text(totalScore) > (ranNum))
        console.log(" WIN");
   




//  if ($(totalScore) === $(ranNum) {
//         alert("WIN")
//     }

