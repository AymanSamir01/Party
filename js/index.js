// open & close side bar
let slideWidth = $("#inner-side").innerWidth();
$(".sideBar").css("left", -`${slideWidth}`);
$(".close").click(function () {
  $(".sideBar").animate({ left: -`${slideWidth}` }, 500);
  $(".open").animate({ left: "10px" });
  $(".open").fadeIn(500);
});
$(".open").click(function () {
  $(".open").animate({ left: "260px" });
  $(".sideBar").animate({ left: "0" }, 500);
  $(".open").fadeOut(500);
});

// scroll to accordion by arrow down
$("#slider").click(function () {
  let accordionOffset = $("#accordion").offset().top;
  $("html, body").animate({ scrollTop: `${accordionOffset}` }, 1000);
});

// up to top
$(window).scroll(function () {
  let accordionOffset = $("#accordion").offset().top;
  let scrollTop = $(window).scrollTop();
  if (scrollTop > accordionOffset) {
    $("#upBtn").fadeIn(500);
  } else {
    $("#upBtn").fadeOut(500);
  }
});

$("#upBtn").click(function () {
  $("html, body").animate({ scrollTop: "0px" }, 1000);
});

// scroll to section smoothy
$('li a[href ^= "#"]').click(function (e) {
  let aHref = e.target.getAttribute("href");
  let sectionOffset = $(aHref).offset().top;
  $("html, body").animate({ scrollTop: sectionOffset }, 1000);
  $('li a[href ^= "#"]').removeClass("active");
  $(e.target).addClass("active");
});

// accordion slide up & down
$(".slider-down h3").click(function (e) {
  let nextP = $(e.target).next();
  $(".slider-down p").not(nextP).slideUp(500);
  $(nextP).slideToggle(500);
});

// count down
var countDownDate = new Date("sept 21, 2023 15:37:25").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  $("#days").html(days + " d");
  $("#hours").html(hours + " h");
  $("#minutes").html(minutes + " m");
  $("#seconds").html(seconds + " s");
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// check if textarea contain 100 char or no
var maxLength = 100;
$("textarea").keyup(function () {
  let currLength = $("textarea").val().length;
  var avilable = maxLength - currLength;
  if (avilable <= 0) {
    $("#avilChar").text("your available character finished");
  } else {
    $("#avilChar").text(avilable);
  }
});
