/**************************************************
    MENU: TOGGLE
**************************************************/
$(document).ready(function () {
    $("#menubtn").click(function () {
      $("#menu").toggleClass("active");
      $("#menubar").toggleClass("active");
      $(".logotype a").toggleClass("active");                  
      $("#menubtn").toggleClass("active");
      $(".bar1").toggleClass("active");
      $(".bar2").toggleClass("active");
      // $('.menu-item-wrapper').toggleClass("active");
    });
});

/**************************************************
    SCROLL TO TOP
**************************************************/
/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 100) {
      $('#back2Top').fadeIn();
  } else {
      $('#back2Top').fadeOut();
  }
});
$(document).ready(function() {
  $("#back2Top").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });

});
/*Scroll to top when arrow up clicked END*/