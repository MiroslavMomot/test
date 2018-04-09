var wWidth = $(window).width();
const emailValidate = function () {
	const reg = /^\w+@\w+\.[a-z]{2,}$/;
	var text;
	$('#email').blur(function () {
		text = $(this).val();
		if (!reg.test(text)) {
            $(this).addClass('invalid');
			$(this).next().addClass('active');
			return;
		}
		$(this).removeClass('invalid');
        $(this).next().removeClass('active');
        if(!$('#email').hasClass('invalid') && !$('#name').hasClass('invalid')){
            $('#submit').removeAttr('disabled')
        }
    })
    
};
const nameValidate = function () {
	const reg = /^[^ ]{3,20}$/;
	var text;
	$('#name').blur(function () {
		text = $(this).val();
		if (!reg.test(text)) {
            $(this).addClass('invalid');    
			$(this).next().addClass('active');
			return;
		}
		$(this).removeClass('invalid');
        $(this).next().removeClass('active');
        if(!$('#email').hasClass('invalid') && !$('#name').hasClass('invalid')){
            $('#submit').removeAttr('disabled')
        }
	})
};

$("#phone").mask("+380 (999) 999-9999");
var mainSlider = function(selector){
    $(selector).slick({
        arrows: false,
        dots: false,
        infinite: true,
        fade: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false
    });
};
$('.search_trigger .icon').click(function(){
    $(this).toggleClass('active');
    $(this).parent().toggleClass('active');
    $('.search_form').toggleClass('active');
});
$('.modal_trigger').click(function(e){
    e.preventDefault();
    var thisData = $(this).attr('data-modal');
    $('#' + thisData).addClass('active');
});
$('.close_overlay').click(function(){
    $(this).parent().removeClass('active');
});
$('.cancel_button').click(function(){
    $(this).parent().parent().removeClass('active');
});

if(wWidth < 1024){
    $('.drop_trigger').click(function(e){
        e.preventDefault();
        $(this).next().toggleClass('open');
    });
    $('.burger').click(function(){
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
        $('body').toggleClass('ovh');
        $('.drop_trigger').next().removeClass('open');
        $('.search_form').removeClass('active');
        $('.search_trigger').removeClass('active');
        $('.search_trigger .icon').removeClass('active');
    });
}
$(document).ready(function(){
    mainSlider('.main_slider');
    emailValidate();
    nameValidate();
});