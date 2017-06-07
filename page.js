
$(window).scroll(function(){
  
  
  console.log("yeah");
  console.log("hm");  
  console.log("go");

  
  console.log($(document).scrollTop());
  
  
  var fromtheTop = $(document).scrollTop();
  
  console.log(fromtheTop);
  
  $("#counter").text( fromtheTop );
   
  $("#counter").css({
     "color": "white",
     "backgound-color": "yellow",
     "top": fromtheTop *1.1+"px"
  });
  
     
     
    $("#box1").css({
     "top": fromtheTop *1.5+"px"
    });

    $("#symbol1").css({
      "top": 300 + fromtheTop *1.1+"px"} );

    $("#symbol2").css({
    "top": fromtheTop *1.1+"px"} );

    $("#symbol3").css({
    "top": fromtheTop *1.1+"px"} );






  if (fromtheTop > -1 && fromtheTop < 1999) {
    $('#symbol1').fadeIn();
  } else {
    $('#symbol1').fadeOut();
  }





  if (fromtheTop > 2000 && fromtheTop < 5699) {
    $('#symbol2').fadeIn();
  } else {
    $('#symbol2').fadeOut();
  }



  if (fromtheTop > 5700 && fromtheTop < 10000) {
    $('#symbol3').fadeIn();
  } else {
    $('#symbol3').fadeOut();
  }


// var someVariable = new AudioFade(elementId, fadeIn, fadeOut, fadeDuration).init();

var first = new AudioFade('#scrollaudio', 50, 1000, 500 ).init();

 var second = new AudioFade('#scrollaudio2', 2000, 4500, ).init();

// With no fade effect.
 var third = new AudioFade('#scrollaudio3', 5000, 9500, ).init();



  });


/*#counter:hover{
  left:0;
}*/


