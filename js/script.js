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


