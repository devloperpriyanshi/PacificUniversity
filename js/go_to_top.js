$(document).ready(function() {
			// Show or hide the sticky footer button
			$(window).scroll(function() {
				if ($(this).scrollTop() > 70) {
					$('.go-top').fadeIn(200);
				} else {
					$('.go-top').fadeOut(200);
				}
			});
			
			// Animate the scroll to top
			$('.go-top').click(function(event) {
				event.preventDefault();
				
				$('html, body').animate({scrollTop: 0}, 300);
			});
		
			
			    $('.gallery-item').hover( function() {
        $(this).find('.img-title').fadeIn(300);
    }, function() {
        $(this).find('.img-title').fadeOut(100);
    });
	
		$(".headcontain").hide();
		//$(".headcontain").first().show();
		$(".gopen").show();
		$(".headname").click(function(){
			$(this).next(".headcontain").slideToggle(300);
		});
		 setInterval(function(){
        $(".jobbox a").toggleClass("active");
     },500)

		});
		
		


	
