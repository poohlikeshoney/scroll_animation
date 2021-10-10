$(function(){
  let $device = $('.device');
  let $deviceOffsetTop = $device.offset().top - 400;

  let $features = $('.features');
  let $featuresOffsetTop = $features.offset().top - 400;

  $(window).scroll(function(){
    // device section animation
    if($(this).scrollTop() > $deviceOffsetTop){
      $device.find('img').addClass('animate');
    }
    // features section animation
    if($(this).scrollTop() > $featuresOffsetTop){
      $features.find('img').addClass('grow-img');
      $features.find('h4').addClass('animate');
    }
  });
});