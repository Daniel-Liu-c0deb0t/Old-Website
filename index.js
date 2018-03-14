var shouldParallax = true;
var showFlowers = true;

var parallax_inner_back;
var parallax_foreground_back;

$(document).ready(function(){
	$.fn.parallax = function(options){
		var windowHeight = $(window).height();
		
		var settings = $.extend({
			speed: 0.5
		}, options);
		
		this.each(function(){
			var $this = $(this);
			
			$(document).scroll(function(){
				if(shouldParallax){
					var scrollTop = $(window).scrollTop();
					var offset = $this.offset().top;
					var height = $this.outerHeight();
					
					if(offset + height <= scrollTop || offset >= scrollTop + windowHeight){
						return;
					}
					
					var yBgPosition = Math.round((offset - scrollTop) * settings.speed - 200 * settings.speed);
					$this.css("background-position", "center " + yBgPosition + "px");
				}
			});
			
			$(document).scroll();
		});
	}
	
	$(".parallax_inner").parallax({
		speed: 0.3
	});
	
	$(".parallax_foreground").parallax({
		speed: 1
	});
	
	setTimeout(function(){
		$(".overlay").css("background-color", "rgba(255, 255, 255, 0)");
		$(".overlay_title").css("color", "rgba(255, 255, 255, 0)");
		$(".overlay_title").css("padding", "0 0 0 0");
		$(".overlay_loading").css("opacity", "0");
	}, 1200);
	
	setTimeout(function(){
		$(".overlay").css("display", "none");
	}, 3200);
	
	setTimeout(function(){
		$("#overlay_icon1").css("opacity", "1");
	}, 100);
	
	setTimeout(function(){
		$("#overlay_icon2").css("opacity", "1");
	}, 600);
	
	setTimeout(function(){
		$("#overlay_icon3").css("opacity", "1");
	}, 1100);
	
	$(".side_menu a, .header_title a").each(function(){
		$(this).on("click", function(e){
			var hash = this.hash;
			e.preventDefault();
			$("html, body").animate({
				scrollTop: $(hash).offset().top - 100
			}, 1000, function(){
				window.location.hash = hash;
			});
		});
	});
	
	$(".toggle_parallax input").prop("checked", true);
	$(".toggle_flowers input").prop("checked", true);
	
	$(".toggle_parallax input").on("click", function(e){
		shouldParallax = !shouldParallax;
	});
	
	parallax_inner_back = $(".parallax_inner").css("background-image");
	parallax_foreground_back = $(".parallax_foreground").css("background-image");
	
	$(".toggle_flowers input").on("click", function(e){
		showFlowers = !showFlowers;
		
		$(".separator").each(function(){
			if(showFlowers){
				$(this).css("display", "initial");
			}else{
				$(this).css("display", "none");
			}
		});
		
		if(showFlowers){
			$(".parallax_inner").css("background-image", parallax_inner_back);
			$(".parallax_foreground").css("background-image", parallax_foreground_back);
		}else{
			$(".parallax_inner").css("background-image", "none");
			$(".parallax_foreground").css("background-image", "none");
		}
	});
});