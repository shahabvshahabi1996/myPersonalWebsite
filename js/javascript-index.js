$(document).ready(function(){
  $('#goLeft').on('click', function(){
    if($(".myWorks").css("opacity") == "0")
    {
       $('.wrap').animate({
      marginRight : '76.5%'
    },"slow");
   $('.about_me').toggleClass("Visibility_to_visible").css('opacity',1);
         }
    else {
    $('.myWorks').toggleClass("Visibility_to_visible1").css('opacity',0);
    $('.wrap').animate({
     marginRight : '76.5%'
    },"slow");
   $('.about_me').toggleClass("Visibility_to_visible").css('opacity',1); 
    }
  });
  ////////////////////////////////////////////////////////////////////
  $('#goRight').on('click', function(){

    if($(".about_me").css("opacity") == "0")
    {
       $('.wrap').animate({
      marginRight : '1.7%'
    },"slow");
   $('.myWorks').toggleClass("Visibility_to_visible1").css('opacity',1);
         }
    else {
    $('.about_me').toggleClass("Visibility_to_visible").css('opacity',0);
    $('.wrap').animate({
      marginRight : '1.7%'
    },"slow");
   $('.myWorks').toggleClass("Visibility_to_visible1").css('opacity',1); 
    }
  });
  /////////////////////////////////////////////////////////////////
  $('#goUp').on('click', function(){

       $('.desktop').animate({
      marginTop : '-50%'
    },"slow");
     $('body').toggleClass("overflow").css('overflow','scroll');
  });
   $('#goDown').on('click', function(){
   
       $('.desktop').animate({
      marginTop : '0%'
    },"slow");
    $('body').toggleClass("overflow").css('overflow','hidden');
  });
   $('#Opacity_ON').on('click', function(){
    $('.text').toggleClass("Opacity").css('opacity',0);
  });
});

setInterval(function() {
  function r(el, deg) {
    el.setAttribute('transform', 'rotate('+ deg +' 50 50)')
  }
  var d = new Date()
  r(sec, 6*d.getSeconds())  
  r(min, 6*d.getMinutes())
  r(hour, 30*(d.getHours()%12) + d.getMinutes()/2)
}, 1)