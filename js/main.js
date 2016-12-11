$(".button").on("click", function(){
	$(this).toggleClass("active");
	$("#sidebar").add("#sidebox").toggleClass("slice");
  $(".wraper").toggleClass("slice2");
})

function clock() { 
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
  $("html").add("body").add(".wraper").css("overflow","visible");
  $("#clock").css("display","none");
  $.ajax({
    url: "artical.html",
    cache: false,
    success: function(html){
        $(".wraper").html(html);
    }
  });
})

$(".btn_homepage").on("click",function(){
  console.log('1');
  $("html").add("body").add(".wraper").css("overflow","hidden");
  $("#clock").css("display","block");
  $.ajax({
    url: "homepage.html",
    cache: false,
    success: function(html){
        $(".wraper").html(html);
    }
  });
})