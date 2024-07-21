$(document).ready(function () {

  var wow_animations = new WOW({
    boxClass: "wow",
    animateClass: "animated",
  });
  wow_animations.init();

  var ScrollTop = $(this).scrollTop() !== 0;
  $(window).bind("scroll", function () {
    if ($(window).scrollTop() > ScrollTop) {
      // console.log('not equal to 0'); 
      $(".scrolltoTop").fadeIn(700);
    } else {
      // console.log('equal to 0'); 
      $(".scrolltoTop").fadeOut(700);
    }
  });

  $(".scrolltoTop").click(function () {
    $("body,html").animate({ 
        scrollTop: 0 
    },700);
  });

  //open and close tab menu
$('.sec3 .nav-tabs-dropdown')
.on("click", "li:not('.active') a", function(event) {  $(this).closest('ul').removeClass("open");
})
.on("click", "li.active a", function(event) {        $(this).closest('ul').toggleClass("open");
});

  $(".scrollto-herf").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top - 0,
      },700);
  });
});
