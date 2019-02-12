$("button").click(function(){
 var number1=    $(".number1").val();
 var number2=    $(".number2").val();
 var number3=    $(".number3").val();
 var calculated= parseInt(number3)*4;
 var fortune=    number1+" will have very long life, you will pass an object that you have been struggling with for years because you followed the "+number2+" flag around for "+calculated+" minutes which will lead you to a solution to your problem.This is how you aquire either riches,fame,glory, or peace.Or not, who know.You have the power to make your own future "+number1+".";
$("h1").text(fortune);
 console.log(fortune);
});