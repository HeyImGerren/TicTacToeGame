$( "document" ).ready( function() {
  $("#createGame").click( function() {
    //in order to get the actual gameID onto the url
    //you can try doing a socket call after adding the game that 
    //stores the gameID onto here, and then you can just append it? 
    window.location.href = "/game/";

    $.ajax({
      type: "POST",
      url: "http://localhost:3000/gamestart",
      success: alert('YOU DID IT!'),
      error: function() {
        console.log("error in game post");
      }
    });
  });
});