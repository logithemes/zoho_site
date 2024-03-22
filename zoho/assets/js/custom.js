
$(document).ready(function() {





	
//BANNER ANIMATION
$(".banner-inner").addClass("act");
  $(".group-img").addClass("act");
  $(".banner-main-img").addClass("act");
  $(".bann-group-img").addClass("act");
  

	//CLICK FOOTER BTN DROP DOWN
	$(".footer-img span").on("click", function() {
		$(".footer-links").toggleClass("act");
	});
	//FOOTER LINKES DROP DOWN
	$(".fo-links h4").on("click", function() {
		$(this).siblings().closest("a").toggleClass("act");
	});
	$(".footer-links img").click(function() {
			$(".footer-links").removeClass("act");
		})
		//SOCIAL MEDIA DROP DOWN
	$(".social-media h4").on("click", function() {
		$(".social-media a").toggleClass("act");
	});



	//ON WINDOW SCROOL FUNCTION
	$(Window).on("scroll", function() {

	var _top = $(window).scrollTop();
	console.log(_top);

		//MOUSE SCROLL IMG MOVE
		var _topMi = "-"+_top/8+"px";
		var _topP =  _top/8+"px";
		$(".p-absolute-3").css({'transform' : 'translate(' + _topMi +', ' + _topMi + ')'});
		$(".p-absolute-2").css({'transform' : 'translate(' + _topP +', ' + _topMi + ')'});
		$(".ban-left").css({'transform' : 'translateX(' + _topMi +' )'});
		$(".ban-right").css({'transform' : 'translateX(' + _topP +' )'});
		$(".p-absolute-1").css({'transform' : 'translate(' + _topP +', ' + _topP + ')'});
		$(".p-absolute").css({'transform' : 'translate(' + _topMi +', ' + _topP + ')'});
		
	


		//REMOVE ANIMATION 
    if($(window).width() > 992) {
      $(".ani-comm").each(function() {
        var _window = $(this).offset().top - 350;
        if(_top >= _window) {
          $(this).addClass("ani-start");
        }
      });
    }

		
	})
});
//MOUSE MOVE CURSOR
$(document).mousemove(function(event) {
	var _left = event.pageX + "px";
	var _top = event.pageY + "px";
	$(".cursor").css("left", _left);
	$(".cursor").css("top", _top);
});

//MOUSE MOVE CURSOR
$(document).mousemove(function(event) {
	var _left = event.pageX + "px";
	var _top = event.pageY + "px";
	$(".cursor1").css("left", _left);
	$(".cursor1").css("top", _top);
})
