var gem1 = Math.floor(Math.random() * (10 - 1) + 1);
var gem2 = Math.floor(Math.random() * (10 - 1) + 1);
var gem3 = Math.floor(Math.random() * (10 - 1) + 1);
var gem4 = Math.floor(Math.random() * (10 - 1) + 1);
var ranNum = Math.floor(Math.random() * (40 - 1) + 1);
//var totalScore = undefined;
var value = ranNum;



$(document).ready(function () {
    $("#ranNum").html(ranNum) // WORKS 

    
    $("#gem1").click(function () {
       $('#score').text(totalScore); 
      for(var i=0; i < ranNum; i++){
        var totalScore= parseInt($('#gem1').text());
        totalScore.add("gem1+gem2");
        totalScore + gem1; // this works!!ADD THE VALUE ONLY ONCE THOUGH
        
        $("#score").html(totalScore)
        $("#gem1").html(gem1);
        }
        //var value = gem1.value++1;
        // if (gem1 >=1 )
        // totalScore ++ ;
        //    $('#score').text(parseInt($('#score').text()) 
        //         + parseInt($(this).data('gem1')));
        // });
        //  })
    });  
    $("#gem2").click(function () {
        $('#score').text(totalScore); 
        for(var i=0; i < ranNum; i++){
          var totalScore= parseInt($('#gem2').text());
          totalScore + gem2;
            $("#score").html(totalScore)
            $("#gem2").html(gem2);
           // if (gem2 >= 1)
             //   totalScore++;
           // console.log("EEE");
        }
        });
    
        $("#gem3").click(function () {
            $("#score").html(totalScore)
            $("#gem3").html(gem3);
            if (gem3 >= 3)
                totalScore++;
            console.log("LL");
        });
        $("#gem4").click(function () {
            $("#score").html(totalScore)
            $("#gem4").html(gem4);
            if (gem3 >= 4)
                totalScore++;
            console.log("OOO");
        });
    
    });
