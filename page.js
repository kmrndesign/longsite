
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




    $("#left1").css({
    "left": fromtheTop *2.1+"px"} );

    $("#right1").css({
    "right": fromtheTop *1.1+"px"} );

    $("#left2").css({
    "left": fromtheTop *1.1+"px"} );




    $("#left3").css({
    "left": fromtheTop *0.5+"px"} );



    $("#right3").css({
    "right": fromtheTop *0.4+"px"} );



  if (fromtheTop > -1 && fromtheTop < 1999) {
    $('#symbol1').fadeIn();
  } else {
    $('#symbol1').fadeOut();
  }

  if (fromtheTop > 5 && fromtheTop < 800) {
    $('#left1').fadeIn();
  } else {
    $('#left1').fadeOut();
  }

    if (fromtheTop > 5 && fromtheTop < 1100) {
    $('#right1').fadeIn();
  } else {
    $('#right1').fadeOut();
  }

      if (fromtheTop > 5 && fromtheTop < 1500) {
    $('#left2').fadeIn();
  } else {
    $('#left2').fadeOut();
  }

        if (fromtheTop > 5 && fromtheTop < 3900) {
    $('#left3').fadeIn();
  } else {
    $('#left3').fadeOut();
  }
        if (fromtheTop > 5 && fromtheTop < 4200) {
    $('#right3').fadeIn();
  } else {
    $('#right3').fadeOut();
  }



  if (fromtheTop > 2000 && fromtheTop < 5699) {
    $('#symbol2').fadeIn();

$('.kissright1').css({
    "right": fromtheTop *0.1+"px"} );
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


