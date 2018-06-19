$(document).ready(function() {

   $("#button").click(function(){
    var task = $("#tdl").val();

    if (task === ''){
      alert ('Please enter a task or goal')
    }
    else if(task ==='What has to get done?') {
      alert ('Please enter a task or goal')
    }
    else {
     $(".results").append("<li class ='new'>"+ task +"</li>")

     $("#tdl").val(" ");
    }

    var myNodelist = document.getElementsByTagName("LI");
        if (task !== ''){
         var span = document.createElement("SPAN");
         var txt = document.createTextNode("\u00D7");
         span.className = "close";
         span.appendChild(txt);
         myNodelist[myNodelist.length-1].appendChild(span);

        };

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
     })
   });

   $(function removeitem(){
      $(document).on("click", ".close", function(){
        var div = this.parentElement;
        div.style.display = "none";
      })
   });




});
