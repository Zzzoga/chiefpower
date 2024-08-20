var sliderModal = new Swiper(".reviews__slider.swiper", {
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	freeMode: false,
	allowTouchMove: false,
	navigation: {
		nextEl: "section.reviews .arrow.next",
		prevEl: "section.reviews .arrow.prev",
	},
	breakpoints: {
	    600: {
			slidesPerView: 2,
			spaceBetween: 16,
	    },
	    1180: {
			slidesPerView: 3,
			spaceBetween: 16,
	    },
		1360: {
			slidesPerView: 3,
			spaceBetween: 16,
		},
		1650: {
			slidesPerView: 3,
			spaceBetween: 20,
		}
	},
});

var sliderModal = new Swiper(".partners__slider.swiper", {
	slidesPerView: 'auto',
	spaceBetween: 60,
	loop: true,
	autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
	breakpoints: {
	    600: {
			slidesPerView: 3,
	    },
	    1180: {
			slidesPerView: 4,
	    },
		1360: {
			slidesPerView: 5,
		},
		1650: {
			slidesPerView: 5,
		}
	},
});