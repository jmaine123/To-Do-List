$(document).ready(function() {

   $("#button").click(function(){
    var task = $("#tdl").val();
     $(".results").append("<li class ='new'>"+ task + "</li>")
     $("#tdl").val(" ");
   });

       // Get the input field
    var input = document.getElementById("tdl");

    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function(event) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Trigger the button element with a click
        document.getElementById("button").click();
      }
    });

   $(function checked() {
     $(document).on("click", ".new", function(){
       $(this).toggleClass('check')
     });

   });




});
