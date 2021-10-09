$(function(){
  let $device = $('.device');
  let $offset = 300;
  let $deviceOffsetTop = $device.offset().top - $offset;

  $(window).scroll(function(){
    if($(this).scrollTop() > $deviceOffsetTop){
      $device.find('img').addClass('animate');
    }
  });
});