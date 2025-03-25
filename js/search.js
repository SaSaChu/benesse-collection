$(function() {	
	// 月刊有書書
	let bookSwiper = new Swiper('.featured-book-swiper', {
		// autoplay: true,
    	loop: true,
		slidesPerView: 5,
		slidesPerGroup: 5,
		spaceBetween: 28,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	// 月刊學習影音
	let videoSwiper = new Swiper('.featured-video-swiper', {
		autoplay: true,
		loop: true,
		slidesPerView: 4,
		slidesPerGroup: 4,
		spaceBetween: 20,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	// 巧虎影音
	let tigerSwiper = new Swiper('.tiger-swiper', {
		autoplay: true,
		loop: true,
		slidesPerView: 4,
		slidesPerGroup: 4,
		spaceBetween: 20,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	// 奇酷網影音
	let kidSchoolSwiper = new Swiper('.kid-school-swiper', {
		autoplay: true,
		slidesPerView: 5,
		slidesPerGroup: 5,
		spaceBetween: 30,
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
});