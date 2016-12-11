$(".button").on("click", function(){
	$(this).toggleClass("active");
	$("#sidebar").add("#sidebox").toggleClass("slice");
  $(".wraper").toggleClass("slice2");
  $(".back-to-top").toggleClass("slice3");
})

function clock(){ 
  var t = moment(),
      a = t.minutes() * 6,
      o = t.hours() % 12 / 12 * 360 + (a / 12);
      s = t.second() * 6,
  $(".hour").css("transform", "rotate(" + o + "deg)");
  $(".minute").css("transform", "rotate(" + a + "deg)");
  $(".second").css("transform", "rotate(" + s + "deg)");
}

function refreshClock() {
  clock(), setTimeout(refreshClock, 100)
}
refreshClock();

$(".btn_artical").on("click",function(){
  $.ajax({
    url: "artical.html",
    cache: false,
    success: function(html){
        $(".wraper").html(html);
    }
  });
  $(".bar").toggleClass("barColorChange");
  $("html").add("body").add(".wraper").css("overflow","visible");
  $("#clock").css("opacity","0");
})

$(".btn_homepage").on("click",function(){
  $.ajax({
    url: "homepage.html",
    cache: false,
    success: function(html){
        $(".wraper").html(html);
    }
  });
  $("html").add("body").add(".wraper").css("overflow","hidden");
  $("#clock").css("opacity","1");
  $(".bar").removeClass("barColorChange");
})

// back to top
var $backToTop = $(".back-to-top");
$backToTop.hide();


$(window).on('scroll', function() {
  if ($(this).scrollTop() > 100) {
    $backToTop.fadeIn();
  } else {
    $backToTop.fadeOut();
  }
});

$backToTop.on('click', function() {
  $("html, body").animate({scrollTop: 0}, 500);
});