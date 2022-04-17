$(document).ready(function () {
  $(".icon__extend").on("click", function () {
    $(this).toggleClass("fa-solid fa-chevron-down");
    $(this).toggleClass("fa-solid fa-chevron-up");
  });
  $(".view-mode__icon").on("click", function () {
    $(".view-mode__icon").toggleClass("active");
  });

  $(".question__header").on("click", function () {
    $(this).children('i').toggleClass("fa-solid fa-angle-down")
    $(this).children('i').toggleClass("fa-solid fa-angle-up")
    $(".question__header").not(this).parent().children(".collapse").removeClass("show");
    $(".question__header").not(this).children("i").removeClass("fa-solid fa-angle-up");
    $(".question__header").not(this).children("i").addClass("fa-solid fa-angle-down");
  });

});
