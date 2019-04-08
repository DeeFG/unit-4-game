var gem1 = Math.floor(Math.random() * 10);
var gem2 = Math.floor(Math.random() * 10);
var gem3 = Math.floor(Math.random() * 10);
var gem4 = Math.floor(Math.random() * 10);
var ranNum = Math.floor(Math.random() * 40);


$(document).ready(function () {
    $("#gem1").click(function () {
        $("#gem1").html(gem1);
    });
    $("#gem2").click(function () {
        $("#gem2").html(gem2);
    });
    $("#gem3").click(function () {
        $("#gem3").html(gem3);
    });
    $("#gem4").click(function () {
        $("#gem4").html(gem4);
    });
});
