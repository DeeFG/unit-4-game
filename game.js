var gem1 = Math.floor(Math.random() * (10 - 1) + 1 );
var gem2 = Math.floor(Math.random() * (10 - 1) + 1 );
var gem3 = Math.floor(Math.random() * (10 - 1) + 1 );
var gem4 = Math.floor(Math.random() * (10 - 1) + 1 );
var ranNum = Math.floor(Math.random() * (40 - 1) + 1 );
clickScore = 0;
totalScore =0;


$(document).ready(function () {
    $("#gem1").click(function () {
        $("#score").html(totalScore)
        // diplay score
        $("#gem1").html(gem1);
        if (gem1 >=1 )
        totalScore ++ ;
        console.log("HH");
        
    });

    $("#gem2").click(function () {
        $("#score").html(totalScore)
        $("#gem2").html(gem2);
        if (gem1 >=2 )
        totalScore ++ ;
        console.log("EEE");
    });
    $("#gem3").click(function () {
        $("#score").html(totalScore)
        $("#gem3").html(gem3);
        if (gem1 >=3 )
        totalScore ++ ;
        console.log("LL");
    });
    $("#gem4").click(function () {
        $("#score").html(totalScore)
        $("#gem4").html(gem4);
        if (gem1 >=4 )
        totalScore ++ ;
        console.log("OOO");
    });
});
