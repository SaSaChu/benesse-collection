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
			992: {
				slidesPerView: 'auto',
				spaceBetween: 30,
				direction: 'horizontal',
				loop: false,
				navigation: {
					enabled: false
				}
				
			}
		},
	});

	if($('.sidebar-swiper').length > 0) {
		let sidebarSwiper = new Swiper('.sidebar-swiper', {
			direction: 'horizontal',
			slidesPerView: 2.2,	
			spaceBetween: 10,
			loop: true,
			breakpoints: {
				768: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
				1024: {
					direction: 'vertical',
					slidesPerView: 'auto',
					loop: false,
				}
			},
		});
	}

	if($('.sidebar04-swiper').length > 0) {
		let swiperWrapper = $('.sidebar04-swiper .swiper-wrapper');
		// 檢查是否有 swiper-slide，若無則抓取預設的第一個 accordion 內容
		if ($('.sidebar04-swiper .swiper-slide').length === 0) {
			
			let defaultItems = $('#accordionPanelsStayOpen').find('.show .sidebar-item');
			
			defaultItems.each(function() {
				let slide = $('<div>').addClass('swiper-slide');
				slide.append($(this).clone());
				swiperWrapper.append(slide);
			});
		}

		$('.select-wrapper .sidebar-select').on('click', function() {
			let target = $(this).data('target');
			let targetTitle = $(this).text();
			let sidebarItems = $(target).find('.sidebar-item');
			
			swiperWrapper.empty();
			sidebarItems.each(function() {
				let slide = $('<div>').addClass('swiper-slide');
				slide.append($(this).clone());
				swiperWrapper.append(slide);
			});

			$('.select-wrapper .dropdown-toggle').text(targetTitle);
		});

		let sidebar04Swiper = new Swiper('.sidebar04-swiper', {
			direction: 'horizontal',
			slidesPerView: 2.2,	
			spaceBetween: 10,
			loop: true,
			breakpoints: {
				768: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
			},
		});
	}
});