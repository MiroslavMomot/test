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
$(document).ready(function(){
    mainSlider('.main_slider');
});