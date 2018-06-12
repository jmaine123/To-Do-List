$(document).ready(function() {

   $("#button").click(function(){
     var task = $("#tdl").val();
     $(".results").append("<li class ='new'>"+ task + "</li>")
     $("#tdl").val(" ");

  for (i = 0; i <= $(".results .new").length; i++){

    var results = $(".results .new")
        console.log(results[0])
    $(results[i]).id = [i];
    console.log(results[i].id)
    }
   });




   $(function checked() {
     $(".results").click(function(){
       $(this).toggleClass('check')
     });

   });




});
