$(".button").on("click", function(){
	$(this).toggleClass("active");
	$("#sidebar").add("#sidebox").toggleClass("slice");
	console.log("1");
})