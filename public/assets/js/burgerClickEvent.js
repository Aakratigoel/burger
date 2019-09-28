$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      Burger_Name: $("#burgerId").val().trim(),
     Devoured:0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
 

  $(".devour_button").on("click", function(event) {
    event.preventDefault();
    console.log("Entered");
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      Devoured: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devour to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });