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
		spaceBetween: 30,
		loop: true,
		breakpoints: {
			1024: {
				direction: 'vertical',
				slidesPerView: 'auto',
			}
		},
	});

	let bookSwiper = new Swiper('.featured-book-swiper', {
		autoplay: true,
    loop: true,
    
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	let videoSwiper = new Swiper('.featured-video-swiper', {
		autoplay: true,
		loop: true,
		
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	let carouselSwiper = new Swiper('.carousel-swiper', {
		autoplay: true,
		slidesPerView: '3',
		spaceBetween: 20,
		loop: true,
		breakpoints: {
			1024: {
				slidesPerView: 4,
			},
		},
	});
});