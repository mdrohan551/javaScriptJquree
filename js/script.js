$(function () {
  'use stickt';

  $('.BTN').click(function () {
    $('.hide').slideToggle(2000);
  });




  var scil = $('.main_menu').offset().top;
  $(window).scroll(function () {
    var scroling = $(this).scrollTop();
    if (scroling > scil) {
      $('.main_menu').addClass('menu_fix');

    } else {
      $('.main_menu').removeClass('menu_fix')
    }




  });




  //slider

  $('.slide_baner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    arrows: true,
    prevArrow: '<i class="fas fa-chevron-left prev_arro"></i>',
    nextArrow: '<i class="fas fa-chevron-right nxt_arro"></i>',
    dots: true,
  });


  //clikc slider


  $('.big_photo').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.small_photo'
  });
  $('.small_photo').slick({
    slidesToShow:3,
    slidesToScroll: 1,
    asNavFor: '.big_photo',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    nextArrow: '<i class="fas fa-chevron-right nxt_arro"></i>',
    prevArrow: '<i class="fas fa-chevron-right nxt_arro"></i>',
  });


  // click photo

  new VenoBox({
    selector: '.veno',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'wander',
    border: '0px',

  });












  // time year  week days 



  $('#getting-started').countdown('2030/01/01', function (event) {
    $(this).html(event.strftime(' %H'));
  });
  $('#getting-started2').countdown('2030/01/01', function (event) {
    $(this).html(event.strftime('%S'));
  });
  $('#getting-started3').countdown('2030/01/01', function (event) {
    $(this).html(event.strftime('%M'));
  });
  // time year  week days 

  // counter up
  $('.counter').counterUp({
    delay: 10,
    time: 5000,
  });




  window.onload = function () {
    win.loopFun($('.div1')[0], 60, 'red', '#00A0E9', '#00A0E9', '20px', 50, 70, 1000, 'bounce');
    win.loopFun($('.div2')[0], 88.88, '#ccc', '#565656', '#333', '20px', 20, 60, 1000, 'bounce');
    win.stripFun($('.div3')[0], 55.66, '#ccc', '#00A0E9', 'white', '14px', 300, 20, 1000, 'back-out');
    win.stripFun($('.div4')[0], 30.66, '#ccc', '#00A0E9', 'white', '14px', 300, 20, 1000, 'easeInOut');
  }
  var containerEl = document.querySelector('.fil_main');

  var mixer = mixitup(containerEl);


  // Pre Loader js start

  $(window).on('load', function () {
    $('.ided').delay(500).fadeOut();
  });

  var typed = new Typed('.typed', {
    stringsElement: '.ger'
  });
  var typed = new Typed('.type', {
    stringsElement: '.gerd'
  });
});