
$(document).ready(function(){
  "use strict";

  $(".contact-form").submit(function(event){
    var $required = $(".required");
    var $requiredMessage = $(".required-message");
    var $fname = $("#fname");
    var $lname = $("#lname");
    var $email = $("#email");
    var $contactFormRequired = [$fname, $lname, $email];

    for(var i = 0; i < $contactFormRequired.length; i++){
      var reqField = $contactFormRequired[i].val();
      if(reqField === 0){
        event.preventDefault();
        $requiredMessage.removeClass("hide-required-message");
        $requiredMessage.addClass("show-required-message");
        $required.parent().addClass("required-styles");
      }
    } // close the for loop

  })// close the submit event
});
