$("document").ready( function() {

  //keep in mind this gets printed in the console on the client-side
  //window.location.href = "/game";
  //console.log("I think it's working!");
  $("#one").click(function(){
    // $(this).css("background-color", "red"); 
    // $('myOjbect').css('background-image', 'url(' + imageUrl + ')');
    // let imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR3fEye3wM7QZ1oZD011BoMSuo6FPmfFuo2MUVuGPH0J8mvtsd";
    // $('#one').css('background-image', 'url(' + imageUrl + ')');
    // $('#one').css('width', '100%');
    // $('#one').css('height', '100%');
    // $('#one').css('display', 'block');
    
    const data = {
      box: 1
      //you actually don't have this information,
      //you would have to query it once the POST request goes through
      //to the server side
      //playerfk: 1
    };

    $.ajax({
      type: "POST", 
      url: "http://localhost:3000/playermove",
      data: data,
      //remember that you can do a function call here,
      //maybe on success have it access the div and throw in
      //a picture of an x or an o there. 
      //the problem is, how do you know which symbol the player is? 
      //perhaps this is where sockets will come in handy,
      //when the player makes a move, on the router side we can query their symbol
      //once we query their symbol we can do emit and have the symbol inside
      //of the body of the emit?  
      success: null,
      error: function() {
        console.log('ERROR!');
      }
    })



  });

  $("#two").click(function(){
    //now that we can click the boxes and have them do something
    //here we need to do the ajax calls.
    //For example, when a user clicks this box, i want to send the
    $(this).css("background-color", "black");
  });
});