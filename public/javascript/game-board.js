$("document").ready( function() {
  //FIGURE OUT WHY THE POST AJAX CALLS KEEP THROWING ERRORS
  //ALSO FIGURE OUT WHY YOU NEED TIMEOUT B/C THE SERVER HANGS WITHOUT IT
  
  $("#one").click(function(){
    $(this).css("background-color", "red"); 
    // $('myOjbect').css('background-image', 'url(' + imageUrl + ')');
    // let imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR3fEye3wM7QZ1oZD011BoMSuo6FPmfFuo2MUVuGPH0J8mvtsd";
    // $('#one').css('background-image', 'url(' + imageUrl + ')');
    // $('#one').css('width', '100%');
    // $('#one').css('height', '100%');
    // $('#one').css('display', 'block');
    
    const data = {
      box: 1
    };

    $.ajax({
      type: "POST", 
      url: "http://localhost:3000/playermove",
      data: data,
      timeout: 5000,
      success: null,
      error: function(error) {
        console.log('ERROR!:', error);
      }
    });
  });

  $("#two").click(function(){
    $(this).css("background-color", "red"); 
     
    const data = {
      box: 2
    };

    $.ajax({
      type: "POST", 
      url: "http://localhost:3000/playermove",
      data: data,
      //datatype: "json",
      timeout: 5000,
      success: null,
      error: function() {
        console.log('ERROR!');
      }
    });
  });

  $("#three").click(function(){
    $(this).css("background-color", "red"); 

    const data = {
      box: 3
    };

    $.ajax({
      type: "POST", 
      url: "http://localhost:3000/playermove",
      data: data,
      //datatype: "json",
      timeout: 5000,
      success: null,
      error: function() {
        console.log('ERROR!');
      }
    });
  });

  $("#four").click(function(){
    $(this).css("background-color", "red"); 
     
    const data = {
      box: 4
    };

    $.ajax({
      type: "POST", 
      url: "http://localhost:3000/playermove",
      data: data,
      //datatype: "json",
      timeout: 5000,
      success: null,
      error: function() {
        console.log('ERROR!');
      }
    });
  });

  $("#five").click(function(){
    $(this).css("background-color", "red"); 
     
    const data = {
      box: 5
    };

    $.ajax({
      type: "POST", 
      url: "http://localhost:3000/playermove",
      data: data,
      //datatype: "json",
      timeout: 5000,
      success: null,
      error: function() {
        console.log('ERROR!');
      }
    });
  });

  $("#six").click(function(){
    $(this).css("background-color", "red"); 
     
    const data = {
      box: 6
    };

    $.ajax({
      type: "POST", 
      url: "http://localhost:3000/playermove",
      data: data,
      //datatype: "json",
      timeout: 5000,
      success: null,
      error: function() {
        console.log('ERROR!');
      }
    });
  });

  $("#seven").click(function(){
    $(this).css("background-color", "red"); 
     
    const data = {
      box: 7
    };

    $.ajax({
      type: "POST", 
      url: "http://localhost:3000/playermove",
      data: data,
      //datatype: "json",
      timeout: 5000,
      success: null,
      error: function() {
        console.log('ERROR!');
      }
    });
  });

  $("#eight").click(function(){
    $(this).css("background-color", "red"); 
     
    const data = {
      box: 8
    };

    $.ajax({
      type: "POST", 
      url: "http://localhost:3000/playermove",
      data: data,
      //datatype: "json",
      timeout: 5000,
      success: null,
      error: function() {
        console.log('ERROR!');
      }
    });
  });

  $("#nine").click(function(){
    $(this).css("background-color", "red"); 
     
    const data = {
      box: 9
    };

    $.ajax({
      type: "POST", 
      url: "http://localhost:3000/playermove",
      data: data,
      //datatype: "json",
      timeout: 5000,
      success: null,
      error: function() {
        console.log('ERROR!');
      }
    });
  });  
});