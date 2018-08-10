
/* Javascript */
// Hamburger dropdown
var navButton = document.querySelector(".navigation-menu-button img");

if (navButton.addEventListener) {
   navButton.addEventListener("click", function() {
      var nav = document.querySelector(".sitenavigation ul");
      if (nav.style.display === "block") {
         nav.style.display = "";

      } else {
         nav.style.display = "block";

      }
   }, false);
}

// Go to top Button 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// validate form
function validateForm(){
    var validatefirst = document.forms["myForm"]["firstname"].value;
    var validatelast = document.forms["myForm"]["lastname"].value;

    if(validatefirst = "" || validatelast == ""){
        alert("Please fill in the name")
        return false;
    }


}

function validateForm() {
    var x = document.forms["myForm"]["firstname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

/* JQuery */
// fotrama image slider
$(document).ready(function() {
    // All <a href ="">
    $("a").on('click', function(event) {


        if (this.hash !== "") {

            event.preventDefault();

            // Store hash
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
})


$('a').on('click', function(){
    $('a').removeClass('selected');
    $(this).addClass('selected');
});



