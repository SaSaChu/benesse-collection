$(function() {
	if($(window).width() <= 992) {
		const $cols = $('.category-section .category-col');
		let $activeCol = $cols.filter('.active');
		
		function updateOrder() {
			// active 項目永遠是 order: 3
			$activeCol.css('order', 3);
			
			const totalItems = $cols.length;
			$cols.not('.active').each(function() {
				let distance = $(this).index() - $activeCol.index();
				let newOrder;
				
				if(distance < 0) {
					// 前面的項目
					newOrder = 3 + distance;
					if(newOrder < 1) newOrder += totalItems;
				} else {
					// 後面的項目
					newOrder = 3 + distance;
					if(newOrder > totalItems) newOrder -= totalItems;
				}
				
				$(this).css('order', newOrder);
			});
		}

		// 點擊項目時更新順序
		$cols.on('click', function() {
			$cols.removeClass('active');
			$(this).addClass('active');
			$activeCol = $(this);
			updateOrder();
		});

		// 初始化順序
		updateOrder();
	}
});
