(function($){
  $(function(){

/*
the below code has been added so that that the user has a way of closing the sidebar. I found closing the side bar
quite buggy when the window was at mobile size.

*/
    $('.button-collapse').sideNav({
      onOpen: function(el) { $(".closeSide").show() }, // A function to be called when sideNav is opened
      onClose: function(el) { $(".closeSide").hide() }, // A function to be called when sideNav is closed
    });

    $('.hide-on-med-and-down').sideNav({
      onOpen: function(el) { $(".closeSide").show() }, // A function to be called when sideNav is opened
      onClose: function(el) { $(".closeSide").hide() }, // A function to be called when sideNav is closed
      });






  $("#button2").click(function(){
  $('.button-collapse').sideNav("hide");
  $('.hide-on-med-and-down').sideNav("hide");


  });
 });


   // end of document ready
})(jQuery); // end of jQuery name space
