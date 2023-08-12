$(document).ready(function () {
	$('.main-screen__sliders').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		dotsClass: 'dots-style',
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 3000

	});
	$('.tabs-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		autoplay: false,
		centerMode: true,
		speed: 1000,
		autoplaySpeed: 3000

	});
	$('.tabs-content__block').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		autoplay: false,
		centerMode: true,
		centerPadding: '25px',
		speed: 1000,
		autoplaySpeed: 3000,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 481,
				settings: {
					centerPadding: '40px',
				}
			},
			{
				breakpoint: 1024,
				settings: "unslick"
			}
		]

	});
	$('.testimonials__sliders').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: '.next-img',
		prevArrow: '.prev-img',
		dots: true,
		dotsClass: 'dots-style',
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 320,
				settings: {
					arrows: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					arrows: false
				}
			}

		]

	});


});

$(document).ready(function () {
	$('.tabs-triggers__item').click(function (e) {
		e.preventDefault();

		$('.tabs-triggers__item').removeClass('tabs-triggers__item--active');
		$('.tabs-content__item').removeClass('tabs-content__item--active');

		$(this).addClass('tabs-triggers__item--active');
		$($(this).attr('href')).addClass('tabs-content__item--active');

	});

	$('.tabs-triggers__item:first').click();
});

$(document).ready(function () {
	$('.uslugi-tabs__triggers-item').click(function (e) {
		e.preventDefault();

		$('.uslugi-tabs__triggers-item').removeClass('uslugi-tabs__triggers-item--active');
		$('.uslugi-tabs__content-item').removeClass('uslugi-tabs__content-item--active');

		$(this).addClass('uslugi-tabs__triggers-item--active');
		$($(this).attr('href')).addClass('uslugi-tabs__content-item--active');

	});

	$('.uslugi-tabs__triggers-item:first').click();
});







