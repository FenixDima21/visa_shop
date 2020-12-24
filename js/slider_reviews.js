$('.reviews__slider-list').slick({
	arrows: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 640,
			settings: {
				slidesToShow: 1,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				centerMode: true,
			}
		},
		{
			breakpoint: 360,
			settings: {
				slidesToShow: 1,
				centerMode: false,
			}
		},
	],
});