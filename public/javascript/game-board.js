$("document").ready( function() {

  //keep in mind this gets printed in the console on the client-side
  //window.location.href = "/game";

  console.log("I think it's working!");
  $("#one").click(function(){
    $(this).css("background-color", "red"); 
    const data = {
      rowPosition: 1, 
      columnPosition: 1,
      //you actually don't have this information,
      //you would have to query it once the POST request goes through
      //to the server side
      playerfk: 1
    };

    $.ajax({
      type: "POST", 
      url: "http://localhost:3000/move",
      data: data,
      success: alert('Success!'),
      error: function() {
        console.log('ERROR!');
      }
    });  
  });

  $("#two").click(function(){
    //now that we can click the boxes and have them do something
    //here we need to do the ajax calls.
    //For example, when a user clicks this box, i want to send the
    $(this).css("background-color", "black");
  });

  //this ajax call works!!!, I think we'll be using 
  //$.post to be doing shit, but I'll figure that out later. 
  // $.get("/javascript/game-board.js", function(data, status){
  //   alert("Data: " + data + "\nStatus: " + status );
  // });

  //TODO: 
  // Actually create the game room because now that we know how to do
  //client-side js and we know that jquery and ajax calls work
  //we need to figure out how to access the game room id, the user id, and 
  //the player move because we'll probably be sending those 3 arguments into 
  //the $.post() body in order to send that shit to the server 
  //in order to make the "player move" action happen. 
});