var gem1 = Math.floor(Math.random() * (12 - 1) + 1);
var gem2 = Math.floor(Math.random() * (12 - 1) + 1);
var gem3 = Math.floor(Math.random() * (12 - 1) + 1);
var gem4 = Math.floor(Math.random() * (12 - 1) + 1);
var ranNum = Math.floor(Math.random() * (120 - 19) + 19);
var totalScore = 0;
var win = 0;
var loss = 0;


function reset() {
    gem1 = Math.floor(Math.random() * (12 - 1) + 1);
    gem2 = Math.floor(Math.random() * (12 - 1) + 1);
    gem3 = Math.floor(Math.random() * (12 - 1) + 1);
    gem4 = Math.floor(Math.random() * (12 - 1) + 1);
    ranNum = Math.floor(Math.random() * (120 - 19) + 19);
    totalScore = 0;
    $("#ranNum").html(ranNum);
    $("#score").text(totalScore);
    $("#ranBox").text("");
    // $("#gem1").val(gem1).text(gem1); //   this?? 
    // $("#gem2").val(gem2).text(gem2);
    // $("#gem3").val(gem3).text(gem3);
    // $("#gem4").val(gem4).text(gem4);
}


function checkScore() {
    if (totalScore === ranNum) {
        win++;
        $("#wins").html(win);
        alert(" YOU WIN!! ");
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


    // $(".reset").click(function () {
    //     reset()
    //     $("#message").text("");
    // });

    // $(".GEMS").on("click", function () { \\this not working??? 
    //     var value = getBtnValue(this);
    //     totalScore += value;
    //     $("#score").text(totalScore);
    //     $(this).text(value);
    //     checkScore();
    // });

    // var counter = 0;
    // $(".clickers").click(function () {
    //     var clickedBtn = $(this);
    //     var valueInBtn = clickedBtn.attr("value");

    //     if (valueInBtn === "a") {
    //         counter += 5;
    //     } else if (valueInBtn === "b") {
    //         counter += 2;
    //     } else if (valueInBtn === "c") {
    //         counter += 1;
    //     }

    //     $("#counter").text(counter);
    //     clickedBtn.attr("disabled", true);
    // })

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


