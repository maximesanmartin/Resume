$(document).ready(function() {
		$("nav li a").mouseover(function(){
			var src = $(this).find("img").attr("src");
			$(this).find("img").attr("src", src.substring(0, src.length - 4) + "1.png");
		});
		$("nav li a").mouseout(function(){
			var src = $(this).find("img").attr("src");
			$(this).find("img").attr("src", src.substring(0, src.length - 5) + ".png");
		});
	});