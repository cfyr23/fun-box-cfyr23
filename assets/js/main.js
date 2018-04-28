$(function () {
		var $card = $('.product__outer');
		var $link = $('.product__buy');
		var $disabled = 'product_disabled';
		var $hovered = 'product_hovered';
		var $selected = 'product_selected';
	
		// Card hovering
		$card.hover(function (e) {
			var $product = $(this).parents('.product');
			if ($product.hasClass($disabled) === false) {
				$product.addClass($hovered);
				e.preventDefault();
			}
		}, function (e) {
			$(this).parents('.product').removeClass($hovered);
			e.preventDefault();
		});
	
		// Card selecting
		$.fn.selectCard = function () {
			this.on('click', function (e) {
				var $product = $(this).parents('.product');
				if ($product.hasClass($disabled) === false) {
					$product.toggleClass($selected);
					$product.removeClass($hovered);
					e.preventDefault();
				}
			});
		};
	
		// Card selecting by card
		$card.selectCard();
	
		// Card selecting by link
		$link.selectCard();
	});