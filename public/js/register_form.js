// When user clicks on the Register Page
$("#user-submit").on("click", function(event) {
    event.preventDefault();
  

    var newUser = {
      first_name: $("#first_name").val().trim(),
      last_name: $("#last_name").val().trim(),
      email: $("#email").val().trim(),
      password: $("#password").val().trim(),
      
    };
    console.log(newUser);
  
    // Javascript for the parents profile page
    $.post("/api/new", newUser)
      .then(function() {
  
        var row = $("<div>");
        row.addClass("newUser");
  
        row.append("<p>" +"Registered User:" + newUser.first_name + newUser.last_name + "</p>");
        row.append("<p>" + "Email" + newUser.email+ "</p>");
        $(".parent-area").prepend(row);
  
      });
  });
  