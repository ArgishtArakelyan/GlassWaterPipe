

$(document).ready(function() {
    $('body').css('padding-top', $('.navigation-wrap').height());
});

$(window).resize(function(){
    $('body').css('padding-top', $('.navigation-wrap').height());
});

// $(document).on("click","",function() {
 
// }); 



$(document).ready(function(){
	$('.welcome-wrap .slider').owlCarousel({
	    loop:false,
	    nav:true,
	    dots:true,
	    items:1,
	});

	$('.product_view_popup .slider ,.product_card_info .slider').owlCarousel({
	    loop:false,
	    nav:false,
	    dots:true,
	    dotsData:true,
	    items:1,
	});

	$('.reviews_slider .slider').owlCarousel({
	    loop:false,
	    nav:true,
	    margin:12,
	    dots:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});

	$('.slider_shop .slider').owlCarousel({
	    loop:false,
	    nav:true,
	    dots:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	});

	$(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
	$(".owl-next").html('<i class="fa fa-chevron-right"></i>');
 
}); 



$('.plus_minus .minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});

$('.plus_minus .plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});

$(document).on("click",".quick_view.btn",function() {
	$('.product_view_p').fadeIn(); 
	$('body').addClass('hidden-b')
}); 

$(document).on("click",".close-popup",function() {
	$('.popup').fadeOut();
	$('body').removeClass('hidden-b');
	$('.form-box-wrap.login_form , .form-box-wrap.signup_form , .form-box-wrap.forgotpass_form').removeClass('open');
}); 

$(document).on("click",".top-menu .login",function() {
    $('.login_signup_p').fadeIn();
    $('.form-box-wrap.login_form').addClass('open');
    $('body').addClass('hidden-b')
});

$(document).on("click",".top-menu .signup",function() {
    $('.login_signup_p').fadeIn();
    $('.form-box-wrap.signup_form').addClass('open');
    $('body').addClass('hidden-b')
}); 

$(document).on("click",".forgot_pass",function() {
    $('.form-box-wrap.login_form').removeClass('open'); 
    $('.form-box-wrap.forgotpass_form').addClass('open'); 
});

$(document).on("click",".forgotpass_form .cancel",function() {
    $('.form-box-wrap.login_form').addClass('open'); 
    $('.form-box-wrap.forgotpass_form').removeClass('open'); 
});

$(document).on("click",".signup_p",function() {
    $('.form-box-wrap.login_form').removeClass('open');
    $('.form-box-wrap.signup_form').addClass('open');
});

$(document).on("click",".login_p",function() {
    $('.form-box-wrap.login_form').addClass('open');
    $('.form-box-wrap.signup_form').removeClass('open');
});