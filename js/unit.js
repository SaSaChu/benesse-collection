$(function() {
	let ageSwiper = new Swiper('.age-swiper', {
		slidesPerView: 3,
		spaceBetween: 16,
		loop: true,	
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			1024: {
				slidesPerView: 'auto',
				spaceBetween: 12,
				direction: 'horizontal',
				navigation: {
					enabled: false
				}
				
			}
		},
	});

	let sidebarSwiper = new Swiper('.sidebar-swiper', {
		direction: 'horizontal',
		slidesPerView: 3,
		spaceBetween: 10,
		loop: true,
		breakpoints: {
			768: {
				spaceBetween: 15,
			},
			1024: {
				direction: 'vertical',
				slidesPerView: 'auto',
			}
		},
	});
});