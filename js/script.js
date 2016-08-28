$(document).ready(function() {
	$("nav li a").mouseover(function(){
		var src = $(this).find("img").attr("src");
		$(this).find("img").attr("src", src.substring(0, src.length - 4) + "1.png");
	});
	$("nav li a").mouseout(function(){
		var src = $(this).find("img").attr("src");
		$(this).find("img").attr("src", src.substring(0, src.length - 5) + ".png");
	});

	var body = $('html, body');
	$window = $(window);
	if($window.scrollTop() != 0)
		$ind = Math.ceil($window.scrollTop()/989)-1;
	else
		$ind = 0;
	$("li:eq("+$ind+")").addClass("over");
	$("#bodyPic img").load(function() {
		$(this).fadeOut(0, function(){
		//on la ré-affiche avec un effet de transparence
			$(this).fadeIn(1000);
		});
	});
	if ($window.scrollTop() > 500){
		$("ul").addClass("js");
		$("#backUp").show("slow");
	}
	else{
		$("ul").removeClass("js");
		$("#backUp").hide();
	}

	// SCROLL EVENT
	$window.scroll(function() {
		$("li").removeClass("over");
		if ($window.scrollTop() > 500){
			$("ul").addClass("js");
			$("#backUp").show("slow");
		}
		else{
			$("ul").removeClass("js");
			$("#backUp").hide("fast");
		}
		if($window.scrollTop() != 0)
			$ind = Math.ceil($window.scrollTop()/989)-1;
		else
			$ind = 0;
		$("li:eq("+$ind+")").addClass("over");
	});
	
	// MOUSE CLICK EVENT
	$("li").click(function(){
		body.animate({scrollTop:991 * $(this).index("li")}, '1500', 'swing');
	})
	$("#backUp").click(function(){
		body.animate({scrollTop:0}, '1500', 'swing');
	});
	$(".content img").css("left", "-300%");
	$(".content img").animate({ "left": "0" }, 200 );
});