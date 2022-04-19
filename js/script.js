"use strict"
//*< Общие переменные>==========================================================================================
const body = document.querySelector('body');
let unlock = true;
// Функция возвращает устройство на котором открыт сайт   isMobile.any()    вернет true, если сайт открыт на устройстве с тачскрином
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

//*</ Общие переменные>==========================================================================================
// swiper
// Общие свайперы
if (document.querySelector('.advantagas__slider')) {
	new Swiper('.advantagas__slider', {
		//Навигация
		pagination: {
			el: '.controls__pagination_ad',
			// Буллеты
			//тип по умолчанию
			type: 'bullets',
			//можно ли на него нажимать
			clickable: true,
		},
		//Переключение с помощью клавиатуры
		keyboard: {
			//включить/выключить
			enabled: true,
			//Только когда слайдер в пределах вьюпорта вкдючить/выключить
			onlyInViewport: true,
			// Управление клавишами pageUp/pageDown включить/выключить
			pageUpDown: true,
		},
		// Количество слайдов для показа, можно указывать не целые числа, можно 'auto'-колво слайдеров выводится автоматически, в зависимости от контента или заданной ширины
		slidesPerView: 1,
		// Если слайдов меньше чем нужно, слайдер полностью перестанет работать, пока будет нужного количества
		watchOverflow: true,
		// Отступ между слайдами
		spaceBetween: 30,
				// Arrows
		navigation: {
			nextEl: ".advantagas__slider .controls__arrow_next",
			prevEl: ".advantagas__slider .controls__arrow_prev",
		},
		// Брейк поинты, работают по принципу мобайл ферст, срабатывают н аширине больще указанной
		// Этим способом нельзя координально измеить логику слайдера, например поменять горизонтальный скролл на вертикальный
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			600: {
				slidesPerView: 1.4,
				spaceBetween: 30,
			},
			899.98: {
				slidesPerView: 3.5,
				spaceBetween: 0,
			}
		}
	});
};
if (document.querySelector('.popular__slider')) {
	new Swiper('.popular__slider', {
		//Навигация
		pagination: {
			el: '.controls__pagination_pp',
			// Буллеты
			//тип по умолчанию
			type: 'bullets',
			//можно ли на него нажимать
			clickable: true,
		},
		//Переключение с помощью клавиатуры
		keyboard: {
			//включить/выключить
			enabled: true,
			//Только когда слайдер в пределах вьюпорта вкдючить/выключить
			onlyInViewport: true,
			// Управление клавишами pageUp/pageDown включить/выключить
			pageUpDown: true,
		},
		// Количество слайдов для показа, можно указывать не целые числа, можно 'auto'-колво слайдеров выводится автоматически, в зависимости от контента или заданной ширины
		slidesPerView: 3,
		// Если слайдов меньше чем нужно, слайдер полностью перестанет работать, пока будет нужного количества
		watchOverflow: true,
		// Отступ между слайдами
		 spaceBetween: 31,
				// Arrows
		navigation: {
			nextEl: ".popular__controls .controls__arrow_next",
			prevEl: ".popular__controls .controls__arrow_prev",
		},
		loop: true,
		// Брейк поинты, работают по принципу мобайл ферст, срабатывают н аширине больще указанной
		// Этим способом нельзя координально измеить логику слайдера, например поменять горизонтальный скролл на вертикальный
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			600: {
				slidesPerView: 1.6,
			},
			850: {
				slidesPerView: 2.4,
			},
			1100: {
				slidesPerView: 3,
			},
		}
	});
};
if (document.querySelector('.discount__slider')) {
	new Swiper('.discount__slider', {
		//Навигация
		pagination: {
			el: '.controls__pagination_dp',
			// Буллеты
			//тип по умолчанию
			type: 'bullets',
			//можно ли на него нажимать
			clickable: true,
		},
		//Переключение с помощью клавиатуры
		keyboard: {
			//включить/выключить
			enabled: true,
			//Только когда слайдер в пределах вьюпорта вкдючить/выключить
			onlyInViewport: true,
			// Управление клавишами pageUp/pageDown включить/выключить
			pageUpDown: true,
		},
		// Количество слайдов для показа, можно указывать не целые числа, можно 'auto'-колво слайдеров выводится автоматически, в зависимости от контента или заданной ширины
		slidesPerView: 3,
		// Если слайдов меньше чем нужно, слайдер полностью перестанет работать, пока будет нужного количества
		watchOverflow: true,
		// Отступ между слайдами
		 spaceBetween: 31,
				// Arrows
		navigation: {
			nextEl: ".discount__controls .controls__arrow_next",
			prevEl: ".discount__controls .controls__arrow_prev",
		},
		loop: true,
		// Брейк поинты, работают по принципу мобайл ферст, срабатывают н аширине больще указанной
		// Этим способом нельзя координально измеить логику слайдера, например поменять горизонтальный скролл на вертикальный
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			600: {
				slidesPerView: 1.6,
			},
			850: {
				slidesPerView: 2.4,
			},
			1100: {
				slidesPerView: 3,
			},
		}
	});
};
if (document.querySelector('.payment__items')) {
	new Swiper('.payment__items', {
		//Навигация
		pagination: {
			el: '.controls__pagination_pay',
			// Буллеты
			//тип по умолчанию
			type: 'bullets',
			//можно ли на него нажимать
			clickable: true,
		},
		//Переключение с помощью клавиатуры
		keyboard: {
			//включить/выключить
			enabled: true,
			//Только когда слайдер в пределах вьюпорта вкдючить/выключить
			onlyInViewport: true,
			// Управление клавишами pageUp/pageDown включить/выключить
			pageUpDown: true,
		},
		// Количество слайдов для показа, можно указывать не целые числа, можно 'auto'-колво слайдеров выводится автоматически, в зависимости от контента или заданной ширины
		slidesPerView: 1,
		// Если слайдов меньше чем нужно, слайдер полностью перестанет работать, пока будет нужного количества
		watchOverflow: true,
		// Отступ между слайдами
		spaceBetween: 30,
				// Arrows
		navigation: {
			nextEl: ".payment__controls .controls__arrow_next",
			prevEl: ".payment__controls .controls__arrow_prev",
		},
		// Брейк поинты, работают по принципу мобайл ферст, срабатывают н аширине больще указанной
		// Этим способом нельзя координально измеить логику слайдера, например поменять горизонтальный скролл на вертикальный
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			500: {
				slidesPerView: 1.4,
				spaceBetween: 30,
			},
			767.98: {
				slidesPerView: 20,
				spaceBetween: 0,
			}
		}
	});
};
// Свайпер каталогов на 1 странице
if (document.querySelector('.catalog-page__body')) {
	new Swiper('.catalog-page__body', {
		//Навигация
		pagination: {
			el: '.controls__pagination_cp',
			// Буллеты
			//тип по умолчанию
			type: 'bullets',
			//можно ли на него нажимать
			clickable: true,
		},
		keyboard: {
			//включить/выключить
			enabled: true,
			//Только когда слайдер в пределах вьюпорта вкдючить/выключить
			onlyInViewport: true,
			// Управление клавишами pageUp/pageDown включить/выключить
			pageUpDown: true,
		},
		watchOverflow: true,
		navigation: {
			nextEl: ".catalog-page__controls .controls__arrow_next",
			prevEl: ".catalog-page__controls .controls__arrow_prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			450: {
				slidesPerView: 1.3,
				spaceBetween: 0,
			},
			600: {
				slidesPerView: 1.8,
			},
			700: {
				slidesPerView: 2.4,
			},
			850: {
				slidesPerView: 20,
			},
		}
	});
};
// Свайпер каталогов на 2 странице
if (document.querySelector('.catalog-hub__body')) {
	new Swiper('.catalog-hub__body', {
		//Навигация
		pagination: {
			el: '.controls__pagination_cc',
			// Буллеты
			//тип по умолчанию
			type: 'bullets',
			//можно ли на него нажимать
			clickable: true,
		},
		keyboard: {
			//включить/выключить
			enabled: true,
			//Только когда слайдер в пределах вьюпорта вкдючить/выключить
			onlyInViewport: true,
			// Управление клавишами pageUp/pageDown включить/выключить
			pageUpDown: true,
		},
		watchOverflow: true,
		navigation: {
			nextEl: ".catalog-hub__controls .controls__arrow_next",
			prevEl: ".catalog-hub__controls .controls__arrow_prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			450: {
				slidesPerView: 1.3,
				spaceBetween: 0,
			},
			600: {
				slidesPerView: 1.8,
			},
			700: {
				slidesPerView: 2.4,
			},
			850: {
				slidesPerView: 20,
			},
		}
	});
};
// Свайпер каталогов на услугах
if (document.querySelector('.catalog-services__body')) {
	new Swiper('.catalog-services__body', {
		//Навигация
		pagination: {
			el: '.controls__pagination_cs',
			// Буллеты
			//тип по умолчанию
			type: 'bullets',
			//можно ли на него нажимать
			clickable: true,
		},
		keyboard: {
			//включить/выключить
			enabled: true,
			//Только когда слайдер в пределах вьюпорта вкдючить/выключить
			onlyInViewport: true,
			// Управление клавишами pageUp/pageDown включить/выключить
			pageUpDown: true,
		},
		watchOverflow: true,
		navigation: {
			nextEl: ".catalog-services__controls .controls__arrow_next",
			prevEl: ".catalog-services__controls .controls__arrow_prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			450: {
				slidesPerView: 1.3,
				spaceBetween: 0,
			},
			600: {
				slidesPerView: 1.8,
			},
			700: {
				slidesPerView: 2.4,
			},
			850: {
				slidesPerView: 20,
			},
		}
	});
};
// Свайперы каталогов на 3 странице
if (document.querySelector('.list-catalog-gutes__body_1')) {
	new Swiper('.list-catalog-gutes__body_1', {
		//Навигация
		pagination: {
			el: '.controls__pagination_icg_1',
			// Буллеты
			//тип по умолчанию
			type: 'bullets',
			//можно ли на него нажимать
			clickable: true,
		},
		watchOverflow: true,
		navigation: {
			nextEl: ".list-catalog-gutes__controls_1 .controls__arrow_next",
			prevEl: ".list-catalog-gutes__controls_1 .controls__arrow_prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			450: {
				slidesPerView: 1.3,
				spaceBetween: 0,
			},
			600: {
				slidesPerView: 1.8,
			},
			767.98: {
				slidesPerView: 20,
			},
		}
	});
};
if (document.querySelector('.list-catalog-gutes__body_2')) {
	new Swiper('.list-catalog-gutes__body_2', {
		//Навигация
		pagination: {
			el: '.controls__pagination_icg_2',
			// Буллеты
			//тип по умолчанию
			type: 'bullets',
			//можно ли на него нажимать
			clickable: true,
		},
		watchOverflow: true,
		navigation: {
			nextEl: ".list-catalog-gutes__controls_2 .controls__arrow_next",
			prevEl: ".list-catalog-gutes__controls_2 .controls__arrow_prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			450: {
				slidesPerView: 1.3,
				spaceBetween: 0,
			},
			600: {
				slidesPerView: 1.8,
			},
			767.98: {
				slidesPerView: 20,
			},
		}
	});
};
if (document.querySelector('.list-catalog-gutes__body_3')) {
	new Swiper('.list-catalog-gutes__body_3', {
		//Навигация
		pagination: {
			el: '.controls__pagination_icg_3',
			// Буллеты
			//тип по умолчанию
			type: 'bullets',
			//можно ли на него нажимать
			clickable: true,
		},
		watchOverflow: true,
		navigation: {
			nextEl: ".list-catalog-gutes__controls_3 .controls__arrow_next",
			prevEl: ".list-catalog-gutes__controls_3 .controls__arrow_prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			450: {
				slidesPerView: 1.3,
				spaceBetween: 0,
			},
			600: {
				slidesPerView: 1.8,
			},
			767.98: {
				slidesPerView: 20,
			},
		}
	});
};
if (document.querySelector('.list-catalog-gutes__body_4')) {
	new Swiper('.list-catalog-gutes__body_4', {
		//Навигация
		pagination: {
			el: '.controls__pagination_icg_4',
			// Буллеты
			//тип по умолчанию
			type: 'bullets',
			//можно ли на него нажимать
			clickable: true,
		},
		watchOverflow: true,
		navigation: {
			nextEl: ".list-catalog-gutes__controls_4 .controls__arrow_next",
			prevEl: ".list-catalog-gutes__controls_4 .controls__arrow_prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			450: {
				slidesPerView: 1.3,
				spaceBetween: 0,
			},
			600: {
				slidesPerView: 1.8,
			},
			767.98: {
				slidesPerView: 20,
			},
		}
	});
};
// Свайпер материалов на 4 странице
if (document.querySelector('.catalog-material__body')) {
	new Swiper('.catalog-material__body', {
		//Навигация
		pagination: {
			el: '.controls__pagination_cm',
			// Буллеты
			//тип по умолчанию
			type: 'bullets',
			//можно ли на него нажимать
			clickable: true,
		},
		watchOverflow: true,
		navigation: {
			nextEl: ".catalog-material__controls .controls__arrow_next",
			prevEl: ".catalog-material__controls .controls__arrow_prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			479.98: {
				slidesPerView: 20,
				spaceBetween: 0,
			},
		}
	});
};
// Свайперы выполненых работ
if (document.querySelector('.items-work_rollback')) {
	new Swiper('.items-work_rollback', {
		//Навигация
		pagination: {
			el: '.controls__pagination_iw-1',
			// Буллеты
			//тип по умолчанию
			type: 'bullets',
			//можно ли на него нажимать
			clickable: true,
		},
		//Переключение с помощью клавиатуры
		keyboard: {
			//включить/выключить
			enabled: true,
			//Только когда слайдер в пределах вьюпорта вкдючить/выключить
			onlyInViewport: true,
			// Управление клавишами pageUp/pageDown включить/выключить
			pageUpDown: true,
		},
		// Количество слайдов для показа, можно указывать не целые числа, можно 'auto'-колво слайдеров выводится автоматически, в зависимости от контента или заданной ширины
		slidesPerView: 1,
		// Если слайдов меньше чем нужно, слайдер полностью перестанет работать, пока будет нужного количества
		watchOverflow: true,
		// Отступ между слайдами
		 spaceBetween: 50,
				// Arrows
		navigation: {
			nextEl: ".items-work__controls-1 .controls__arrow_next",
			prevEl: ".items-work__controls-1 .controls__arrow_prev",
		},
		 //loop: true,
		// Брейк поинты, работают по принципу мобайл ферст, срабатывают н аширине больще указанной
		// Этим способом нельзя координально измеить логику слайдера, например поменять горизонтальный скролл на вертикальный
		// breakpoints: {
		// 	320: {
		// 		slidesPerView: 1,
		// 	},
		// 	600: {
		// 		slidesPerView: 1.6,
		// 	},
		// 	850: {
		// 		slidesPerView: 2.4,
		// 	},
		// 	1100: {
		// 		slidesPerView: 3,
		// 	},
		// }
	});
};
if (document.querySelector('.items-work_swing')) {
	new Swiper('.items-work_swing', {
		//Навигация
		pagination: {
			el: '.controls__pagination_iw-2',
			// Буллеты
			//тип по умолчанию
			type: 'bullets',
			//можно ли на него нажимать
			clickable: true,
		},
		//Переключение с помощью клавиатуры
		keyboard: {
			//включить/выключить
			enabled: true,
			//Только когда слайдер в пределах вьюпорта вкдючить/выключить
			onlyInViewport: true,
			// Управление клавишами pageUp/pageDown включить/выключить
			pageUpDown: true,
		},
		// Количество слайдов для показа, можно указывать не целые числа, можно 'auto'-колво слайдеров выводится автоматически, в зависимости от контента или заданной ширины
		slidesPerView: 1,
		// Если слайдов меньше чем нужно, слайдер полностью перестанет работать, пока будет нужного количества
		watchOverflow: true,
		// Отступ между слайдами
		 spaceBetween: 50,
				// Arrows
				navigation: {
					nextEl: ".items-work__controls-2 .controls__arrow_next",
					prevEl: ".items-work__controls-2 .controls__arrow_prev",
				},
		 //loop: true,
		// Брейк поинты, работают по принципу мобайл ферст, срабатывают н аширине больще указанной
		// Этим способом нельзя координально измеить логику слайдера, например поменять горизонтальный скролл на вертикальный
		// breakpoints: {
		// 	320: {
		// 		slidesPerView: 1,
		// 	},
		// 	600: {
		// 		slidesPerView: 1.6,
		// 	},
		// 	850: {
		// 		slidesPerView: 2.4,
		// 	},
		// 	1100: {
		// 		slidesPerView: 3,
		// 	},
		// }
	});
};
if (document.querySelector('.items-work_sectional')) {
	new Swiper('.items-work_sectional', {
		//Навигация
		pagination: {
			el: '.controls__pagination_iw-3',
			// Буллеты
			//тип по умолчанию
			type: 'bullets',
			//можно ли на него нажимать
			clickable: true,
		},
		//Переключение с помощью клавиатуры
		keyboard: {
			//включить/выключить
			enabled: true,
			//Только когда слайдер в пределах вьюпорта вкдючить/выключить
			onlyInViewport: true,
			// Управление клавишами pageUp/pageDown включить/выключить
			pageUpDown: true,
		},
		// Количество слайдов для показа, можно указывать не целые числа, можно 'auto'-колво слайдеров выводится автоматически, в зависимости от контента или заданной ширины
		slidesPerView: 1,
		// Если слайдов меньше чем нужно, слайдер полностью перестанет работать, пока будет нужного количества
		watchOverflow: true,
		// Отступ между слайдами
		 spaceBetween: 50,
				// Arrows
		navigation: {
			nextEl: ".items-work__controls-3 .controls__arrow_next",
			prevEl: ".items-work__controls-3 .controls__arrow_prev",
		},
		// loop: true,
		// Брейк поинты, работают по принципу мобайл ферст, срабатывают н аширине больще указанной
		// Этим способом нельзя координально измеить логику слайдера, например поменять горизонтальный скролл на вертикальный
		// breakpoints: {
		// 	320: {
		// 		slidesPerView: 1,
		// 	},
		// 	600: {
		// 		slidesPerView: 1.6,
		// 	},
		// 	850: {
		// 		slidesPerView: 2.4,
		// 	},
		// 	1100: {
		// 		slidesPerView: 3,
		// 	},
		// }
	});
};
if (document.querySelector('.item-work__slider-h1')) {
	new Swiper('.item-work__slider-h1', {
		//Навигация
		pagination: {
			el: '.controls__pagination_h1',
			// Буллеты
			//тип по умолчанию
			type: 'bullets',
			//можно ли на него нажимать
			clickable: true,
		},
		// Количество слайдов для показа, можно указывать не целые числа, можно 'auto'-колво слайдеров выводится автоматически, в зависимости от контента или заданной ширины
		slidesPerView: 1,
		// Если слайдов меньше чем нужно, слайдер полностью перестанет работать, пока будет нужного количества
		watchOverflow: true,
		// Отступ между слайдами
		spaceBetween: 10,
		autoplay: {
			delay: 4000,
			stopOnLastSlide: false,
			disableOnInteraction: false,
		},
		effect: 'fade',
		fadeEffect: {
			crossFade:true,
		},
	});
};
if (document.querySelector('.item-work__slider-h2')) {
	new Swiper('.item-work__slider-h2', {
		//Навигация
		pagination: {
			el: '.controls__pagination_h2',
			// Буллеты
			//тип по умолчанию
			type: 'bullets',
			//можно ли на него нажимать
			clickable: true,
		},
		// Количество слайдов для показа, можно указывать не целые числа, можно 'auto'-колво слайдеров выводится автоматически, в зависимости от контента или заданной ширины
		slidesPerView: 1,
		// Если слайдов меньше чем нужно, слайдер полностью перестанет работать, пока будет нужного количества
		watchOverflow: true,
		// Отступ между слайдами
		spaceBetween: 10,
		autoplay: {
			delay: 4000,
			stopOnLastSlide: false,
			disableOnInteraction: false,
		},
		effect: 'fade',
		fadeEffect: {
			crossFade:true,
		},
	});
};
if (document.querySelector('.item-work__slider-h3')) {
	new Swiper('.item-work__slider-h3', {
		//Навигация
		pagination: {
			el: '.controls__pagination_h3',
			// Буллеты
			//тип по умолчанию
			type: 'bullets',
			//можно ли на него нажимать
			clickable: true,
		},
		// Количество слайдов для показа, можно указывать не целые числа, можно 'auto'-колво слайдеров выводится автоматически, в зависимости от контента или заданной ширины
		slidesPerView: 1,
		// Если слайдов меньше чем нужно, слайдер полностью перестанет работать, пока будет нужного количества
		watchOverflow: true,
		// Отступ между слайдами
		spaceBetween: 10,
		autoplay: {
			delay: 4000,
			stopOnLastSlide: false,
			disableOnInteraction: false,
		},
		effect: 'fade',
		fadeEffect: {
			crossFade:true,
		},
	});
};
if (document.querySelector('.item-work__slider-h4')) {
	new Swiper('.item-work__slider-h4', {
		//Навигация
		pagination: {
			el: '.controls__pagination_h4',
			// Буллеты
			//тип по умолчанию
			type: 'bullets',
			//можно ли на него нажимать
			clickable: true,
		},
		// Количество слайдов для показа, можно указывать не целые числа, можно 'auto'-колво слайдеров выводится автоматически, в зависимости от контента или заданной ширины
		slidesPerView: 1,
		// Если слайдов меньше чем нужно, слайдер полностью перестанет работать, пока будет нужного количества
		watchOverflow: true,
		// Отступ между слайдами
		spaceBetween: 10,
		autoplay: {
			delay: 4000,
			stopOnLastSlide: false,
			disableOnInteraction: false,
		},
		effect: 'fade',
		fadeEffect: {
			crossFade:true,
		},
	});
};
if (document.querySelector('.item-work__slider-h5')) {
	new Swiper('.item-work__slider-h5', {
		//Навигация
		pagination: {
			el: '.controls__pagination_h5',
			// Буллеты
			//тип по умолчанию
			type: 'bullets',
			//можно ли на него нажимать
			clickable: true,
		},
		// Количество слайдов для показа, можно указывать не целые числа, можно 'auto'-колво слайдеров выводится автоматически, в зависимости от контента или заданной ширины
		slidesPerView: 1,
		// Если слайдов меньше чем нужно, слайдер полностью перестанет работать, пока будет нужного количества
		watchOverflow: true,
		// Отступ между слайдами
		spaceBetween: 10,
		autoplay: {
			delay: 4000,
			stopOnLastSlide: false,
			disableOnInteraction: false,
		},
		effect: 'fade',
		fadeEffect: {
			crossFade:true,
		},
	});
};
if (document.querySelector('.item-work__slider-h6')) {
	new Swiper('.item-work__slider-h6', {
		//Навигация
		pagination: {
			el: '.controls__pagination_h6',
			// Буллеты
			//тип по умолчанию
			type: 'bullets',
			//можно ли на него нажимать
			clickable: true,
		},
		// Количество слайдов для показа, можно указывать не целые числа, можно 'auto'-колво слайдеров выводится автоматически, в зависимости от контента или заданной ширины
		slidesPerView: 1,
		// Если слайдов меньше чем нужно, слайдер полностью перестанет работать, пока будет нужного количества
		watchOverflow: true,
		// Отступ между слайдами
		spaceBetween: 10,
		autoplay: {
			delay: 4000,
			stopOnLastSlide: false,
			disableOnInteraction: false,
		},
		effect: 'fade',
		fadeEffect: {
			crossFade:true,
		},
	});
};
if (document.querySelector('.item-work__slider-h7')) {
	new Swiper('.item-work__slider-h7', {
		//Навигация
		pagination: {
			el: '.controls__pagination_h7',
			// Буллеты
			//тип по умолчанию
			type: 'bullets',
			//можно ли на него нажимать
			clickable: true,
		},
		// Количество слайдов для показа, можно указывать не целые числа, можно 'auto'-колво слайдеров выводится автоматически, в зависимости от контента или заданной ширины
		slidesPerView: 1,
		// Если слайдов меньше чем нужно, слайдер полностью перестанет работать, пока будет нужного количества
		watchOverflow: true,
		// Отступ между слайдами
		spaceBetween: 10,
		autoplay: {
			delay: 4000,
			stopOnLastSlide: false,
			disableOnInteraction: false,
		},
		effect: 'fade',
		fadeEffect: {
			crossFade:true,
		},
	});
};
if (document.querySelector('.item-work__slider-h8')) {
	new Swiper('.item-work__slider-h8', {
		//Навигация
		pagination: {
			el: '.controls__pagination_h8',
			// Буллеты
			//тип по умолчанию
			type: 'bullets',
			//можно ли на него нажимать
			clickable: true,
		},
		// Количество слайдов для показа, можно указывать не целые числа, можно 'auto'-колво слайдеров выводится автоматически, в зависимости от контента или заданной ширины
		slidesPerView: 1,
		// Если слайдов меньше чем нужно, слайдер полностью перестанет работать, пока будет нужного количества
		watchOverflow: true,
		// Отступ между слайдами
		spaceBetween: 10,
		autoplay: {
			delay: 4000,
			stopOnLastSlide: false,
			disableOnInteraction: false,
		},
		effect: 'fade',
		fadeEffect: {
			crossFade:true,
		},
	});
};
if (document.querySelector('.item-work__slider-h9')) {
	new Swiper('.item-work__slider-h9', {
		//Навигация
		pagination: {
			el: '.controls__pagination_h9',
			// Буллеты
			//тип по умолчанию
			type: 'bullets',
			//можно ли на него нажимать
			clickable: true,
		},
		// Количество слайдов для показа, можно указывать не целые числа, можно 'auto'-колво слайдеров выводится автоматически, в зависимости от контента или заданной ширины
		slidesPerView: 1,
		// Если слайдов меньше чем нужно, слайдер полностью перестанет работать, пока будет нужного количества
		watchOverflow: true,
		// Отступ между слайдами
		spaceBetween: 10,
		autoplay: {
			delay: 4000,
			stopOnLastSlide: false,
			disableOnInteraction: false,
		},
		effect: 'fade',
		fadeEffect: {
			crossFade:true,
		},
	});
};
//Свайпер выполненных работ на выполненных работах
if (document.querySelector('.items-work_rollback-works')) {
	new Swiper('.items-work_rollback-works', {
		//Навигация
		pagination: {
			el: '.controls__pagination_works-1',
			type: 'bullets',
			clickable: true,
		},
		keyboard: {
			enabled: true,
			onlyInViewport: true,
			pageUpDown: true,
		},
		// Если слайдов меньше чем нужно, слайдер полностью перестанет работать, пока будет нужного количества
		watchOverflow: true,
		navigation: {
			nextEl: ".items-work__controls_works-1 .controls__arrow_next",
			prevEl: ".items-work__controls_works-1 .controls__arrow_prev",
		},
		// Брейк поинты, работают по принципу мобайл ферст, срабатывают н аширине больще указанной
		// Этим способом нельзя координально измеить логику слайдера, например поменять горизонтальный скролл на вертикальный
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 50,
			},
			889.98: {
				slidesPerView: 20,
				spaceBetween: 0,
			},
		}
	});
};
if (document.querySelector('.items-work_swing-works')) {
	new Swiper('.items-work_swing-works', {
		//Навигация
		pagination: {
			el: '.controls__pagination_works-2',
			type: 'bullets',
			clickable: true,
		},
		keyboard: {
			enabled: true,
			onlyInViewport: true,
			pageUpDown: true,
		},
		// Если слайдов меньше чем нужно, слайдер полностью перестанет работать, пока будет нужного количества
		watchOverflow: true,
		navigation: {
			nextEl: ".items-work__controls_works-2 .controls__arrow_next",
			prevEl: ".items-work__controls_works-2 .controls__arrow_prev",
		},
		// Брейк поинты, работают по принципу мобайл ферст, срабатывают н аширине больще указанной
		// Этим способом нельзя координально измеить логику слайдера, например поменять горизонтальный скролл на вертикальный
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 50,
			},
			889.98: {
				slidesPerView: 20,
				spaceBetween: 0,
			},
		}
	});
};
if (document.querySelector('.items-work_sectional-works')) {
	new Swiper('.items-work_sectional-works', {
		//Навигация
		pagination: {
			el: '.controls__pagination_works-3',
			type: 'bullets',
			clickable: true,
		},
		keyboard: {
			enabled: true,
			onlyInViewport: true,
			pageUpDown: true,
		},
		// Если слайдов меньше чем нужно, слайдер полностью перестанет работать, пока будет нужного количества
		watchOverflow: true,
		navigation: {
			nextEl: ".items-work__controls_works-3 .controls__arrow_next",
			prevEl: ".items-work__controls_works-3 .controls__arrow_prev",
		},
		// Брейк поинты, работают по принципу мобайл ферст, срабатывают н аширине больще указанной
		// Этим способом нельзя координально измеить логику слайдера, например поменять горизонтальный скролл на вертикальный
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 50,
			},
			889.98: {
				slidesPerView: 20,
				spaceBetween: 0,
			},
		}
	});
};
// Таблицы
const priceControl = document.querySelector('.price__control');
const priceButtons = document.querySelectorAll('.price__button');
const priceTables = document.querySelectorAll('.table');
const priceSelect = document.querySelector('.price__select select');
const trs = document.querySelectorAll('tr');
const tds = document.querySelectorAll('td');
if (priceControl != null) {
	priceControl.addEventListener('click', function (e) {
		if (e.target.classList.contains("price__button") ) {
			priceButtons.forEach(button => {
				button.classList.remove('_active');
			});
			e.target.classList.add('_active');
			const dataElem = e.target.dataset.price;
			priceTables.forEach(block => {
				block.classList.remove('_active');
				const dataBlock = block.dataset.price;
				if (dataElem==dataBlock) {
					block.classList.add('_active');
				}
			});
		}
	})
	priceSelect.addEventListener('change', function (e) {
		priceTables.forEach(block => {
			block.classList.remove('_active');
			const dataBlock = block.dataset.price;
			if (priceSelect.value==dataBlock) {
				block.classList.add('_active');
			}
		});
	})
}
priceTables.forEach(priceTable => {
	priceTable.addEventListener('mouseover', function (e) {
		if (!e.target.classList.contains('table') && !isMobile.any()) {
			e.target.classList.add('_hover');
			if (e.target.dataset.tr) {
				tds.forEach(td => {
					if (td.dataset.td==e.target.dataset.tr) {
						td.classList.add('_hover');
					}
					
				});
			} else if(e.target.dataset.td) {
				tds.forEach(td => {
					if (td.dataset.tr==e.target.dataset.td) {
						td.classList.add('_hover');
					}
				});
			}
			const trParent = e.target.parentElement;
			trParent.classList.add('_hover');
			for (let i = trParent.children.length; i > 0; i--) {
				if (trParent.children[trParent.children.length - i] == e.target) {
					const table = trParent.parentElement.children;

					for (let index = 0; index < table.length; index++) {
						const t = table[index];

						for (let y = t.children.length; y >= 0; y--) {
							if ( t.children.length-y == i) {
								t.children[y].classList.add('_hover');
							}
						}
					}
				}
			}
		}
	})
	priceTable.addEventListener('mouseout', function (e) {
		if (!e.target.classList.contains('table') && !isMobile.any()) {
			e.target.classList.remove('_hover');
			if (e.target.dataset.tr) {
				tds.forEach(td => {
					if (td.dataset.td==e.target.dataset.tr) {
						td.classList.remove('_hover');
					}
					
				});
			} else if(e.target.dataset.td){
				tds.forEach(td => {
					if (td.dataset.tr==e.target.dataset.td) {
						td.classList.remove('_hover');
					}
				});
			}
			const trParent = e.target.parentElement;
			trParent.classList.remove('_hover');
			for (let i = trParent.children.length; i > 0; i--) {

				if (trParent.children[trParent.children.length - i] == e.target) {
					const table = trParent.parentElement.children;

					for (let index = 0; index < table.length; index++) {
						const t = table[index];
						for (let y = t.children.length; y >= 0; y--) {
							
							if ( t.children.length-y == i) {
								t.children[y].classList.remove('_hover');
							}
						}
					}
				}
			}
		}
	})
	priceTable.addEventListener('click', function (e) {
		if (!e.target.classList.contains('table') && isMobile.any()) {
			trs.forEach(tr => {
				tr.classList.remove('_active');
				const trChilds = tr.children
				for (let index = 0; index < trChilds.length; index++) {
					trChilds[index].classList.remove('_active');
				}
			});
			e.target.classList.add('_active');
			if (e.target.dataset.tr) {
				tds.forEach(td => {
					if (td.dataset.td==e.target.dataset.tr) {
						td.classList.add('_active');
					}
					
				});
			} else if(e.target.dataset.td){
				tds.forEach(td => {
					if (td.dataset.tr==e.target.dataset.td) {
						td.classList.add('_active');
					}
				});
			}
			const trParent = e.target.parentElement;
			trParent.classList.add('_active');
			for (let i = trParent.children.length; i > 0; i--) {
				if (trParent.children[trParent.children.length - i] == e.target) {
					const table = trParent.parentElement.children;

					for (let index = 0; index < table.length; index++) {
						const t = table[index];

						for (let y = t.children.length; y >= 0; y--) {
							if ( t.children.length-y == i) {
								t.children[y].classList.add('_active');
							}
						}
					}
				}
			}
		}
	})
});
//Табы выполненных работ
const workControl = document.querySelector('.work__control');
const workButtons = document.querySelectorAll('.work__button');
const workItems = document.querySelectorAll('.items-work');
const workSelect = document.querySelector('.work__select select');
if (workControl != null) {
	workControl.addEventListener('click', function (e) {
		if (e.target.classList.contains('work__button') ) {
			workButtons.forEach(button => {
				button.classList.remove('_active');
			});
			e.target.classList.add('_active');
			const dataElem = e.target.dataset.work;
			workItems.forEach(block => {
				block.classList.remove('_active');
				const dataBlock = block.dataset.work;
				if (dataElem==dataBlock) {
					block.classList.add('_active');
				}
			});
		}
	})
	workSelect.addEventListener('change', function (e) {
		workItems.forEach(block => {
			block.classList.remove('_active');
			const dataBlock = block.dataset.work;
			if (workSelect.value==dataBlock) {
				block.classList.add('_active');
			}
		});
	})
}
// Табы описания товара
const descriptionControl = document.querySelector('.description__control');
const descriptionButtons = document.querySelectorAll('.description__button');
const descriptionItems = document.querySelectorAll('.description__item');
const descriptionSelect = document.querySelector('.description__select select');
if (descriptionControl != null) {
	descriptionControl.addEventListener('click', function (e) {
		if (e.target.classList.contains('description__button') ) {
			descriptionButtons.forEach(button => {
				button.classList.remove('_active');
			});
			e.target.classList.add('_active');
			const dataElem = e.target.dataset.description;
			descriptionItems.forEach(block => {
				block.classList.remove('_active');
				const dataBlock = block.dataset.description;
				if (dataElem==dataBlock) {
					block.classList.add('_active');
				}
			});
		}
	})
	descriptionSelect.addEventListener('change', function (e) {
		descriptionItems.forEach(block => {
			block.classList.remove('_active');
			const dataBlock = block.dataset.description;
			if (descriptionSelect.value==dataBlock) {
				block.classList.add('_active');
			}
		});
	})
}

// Меню бургер, открытие подменю каталога
const iconMenu = document.querySelector('.icon-menu');
const menuHeaderBody = document.querySelector('.menu-header__body');
const catalogBtn=document.querySelector('.catalog-header__button')
document.addEventListener('click', function (e) {
	if (iconMenu != null) {
		if (e.target.closest('.icon-menu')) {
			iconMenu.classList.toggle('_active');
			menuHeaderBody.classList.toggle('_active');
			bodyLock();
			if (!menuHeaderBody.classList.contains('_active')) {
				bodyUnLock();
			}
		}
		if (!e.target.closest('.icon-menu') && !e.target.closest('._popup-link') && !e.target.closest('.popup__content') && !e.target.closest('.catalog-header__button')) {
			iconMenu.classList.remove('_active');
			menuHeaderBody.classList.remove('_active');
			bodyUnLock();
			catalogBtn.classList.remove('_active');
		}
	};
		if (e.target.closest('.catalog-header__button') || e.target.classList.contains('catalog-header__button')) {
			catalogBtn.classList.toggle('_active');
		}
});

// Спойлеры
let _slideUp = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height,margin,padding';
		target.style.transitionDuration = duration + "ms";
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideDown = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (target.hidden) {
			target.hidden = false;
		}
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = 'height,margin,padding';
		target.style.transitionDuration = duration + "ms";
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
}
const spollersArray = document.querySelectorAll('[data-spollers]');
if (spollersArray.length > 0) {
	// Получение обычных слойлеров
	const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
		return !item.dataset.spollers.split(",")[0];
	});
	// Инициализация обычных слойлеров
	if (spollersRegular.length > 0) {
		initSpollers(spollersRegular);
	}

	// Получение слойлеров с медиа запросами
	const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
		return item.dataset.spollers.split(",")[0];
	});

	// Инициализация слойлеров с медиа запросами
	if (spollersMedia.length > 0) {
		const breakpointsArray = [];
		spollersMedia.forEach(item => {
			const params = item.dataset.spollers;
			const breakpoint = {};
			const paramsArray = params.split(",");
			breakpoint.value = paramsArray[0];
			breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
			breakpoint.item = item;
			breakpointsArray.push(breakpoint);
		});

		// Получаем уникальные брейкпоинты
		let mediaQueries = breakpointsArray.map(function (item) {
			return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
		});
		mediaQueries = mediaQueries.filter(function (item, index, self) {
			return self.indexOf(item) === index;
		});

		// Работаем с каждым брейкпоинтом
		mediaQueries.forEach(breakpoint => {
			const paramsArray = breakpoint.split(",");
			const mediaBreakpoint = paramsArray[1];
			const mediaType = paramsArray[2];
			const matchMedia = window.matchMedia(paramsArray[0]);

			// Объекты с нужными условиями
			const spollersArray = breakpointsArray.filter(function (item) {
				if (item.value === mediaBreakpoint && item.type === mediaType) {
					return true;
				}
			});
			// Событие
			matchMedia.addListener(function () {
				initSpollers(spollersArray, matchMedia);
			});
			initSpollers(spollersArray, matchMedia);
		});
	}
	// Инициализация
	function initSpollers(spollersArray, matchMedia = false) {
		spollersArray.forEach(spollersBlock => {
			spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
			if (matchMedia.matches || !matchMedia) {
				spollersBlock.classList.add('_init');
				initSpollerBody(spollersBlock);
				spollersBlock.addEventListener("click", setSpollerAction);
			} else {
				spollersBlock.classList.remove('_init');
				initSpollerBody(spollersBlock, false);
				spollersBlock.removeEventListener("click", setSpollerAction);
			}
		});
	}
	// Работа с контентом
	function initSpollerBody(spollersBlock, hideSpollerBody = true) {
		const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
		if (spollerTitles.length > 0) {
			spollerTitles.forEach(spollerTitle => {
				if (hideSpollerBody) {
					spollerTitle.removeAttribute('tabindex');
					if (!spollerTitle.classList.contains('_active')) {
						spollerTitle.nextElementSibling.hidden = true;
					}
				} else {
					spollerTitle.setAttribute('tabindex', '-1');
					spollerTitle.nextElementSibling.hidden = false;
				}
			});
		}
	}
	function setSpollerAction(e) {
		const el = e.target;
		if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
			const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
			const spollersBlock = spollerTitle.closest('[data-spollers]');
			const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
			if (!spollersBlock.querySelectorAll('._slide').length) {
				if (oneSpoller && !spollerTitle.classList.contains('_active')) {
					hideSpollersBody(spollersBlock);
				}
				spollerTitle.classList.toggle('_active');
				_slideToggle(spollerTitle.nextElementSibling, 500);
			}
			e.preventDefault();
		}
	}
	function hideSpollersBody(spollersBlock) {
		const spoller_activeTitle = spollersBlock.querySelector('[data-spoller]._active');
		if (spoller_activeTitle) {
			spoller_activeTitle.classList.remove('_active');
			_slideUp(spoller_activeTitle.nextElementSibling, 500);
		}
	}
}
//Popups
//у попапа должен быть id с его названием, а у кнопки, по которой он открывается href='#{название поп-апа}'
let popupLink = document.querySelectorAll('._popup-link'); //этот класс добавляется ко всем кнопкам, на которых открывается поп-ап
const lockPadding = document.querySelectorAll('.lock-padding'); //Этот класс добавляется к фиксированным объектам, например к шапке
if (popupLink.length > 0) {
	for (let index = 0; index < popupLink.length; index++) {
		const el = popupLink[index];
		el.addEventListener('click', function (e) {
			let popupName = el.getAttribute('href').replace('#', '');
			let curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		})
	}
}
let popupCloseIcon = document.querySelectorAll('.popup__close');//этот класс добавляется для крестика, по которому поп-ап закрывается
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			e.stopPropagation();
			if (menuBody.classList.contains('_active')) {
				popupClose(el.closest('.popup'), false);
			} else {
				popupClose(el.closest('.popup'));
			}
			e.preventDefault();
		})
	}
}
document.addEventListener('keydown', function (e) {
	if (e.code === 'Escape') {
		const popup_active = document.querySelector('.popup._active');
		if (menuBody.classList.contains('_active')) {
			popupClose(popup_active, false);
		} else {
			popupClose(popup_active);
		}
	}
});

//*< Функции>==========================================================================================
//Закрывает меню бургер
function menu_close() {
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
	bodyUnLock();
}
// Убирает переданный класс у переданного элемента
function _removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
	}
}
//эта функция точно узнает местоположение объекта.Можно получить значение сверху и слева
function offset(el) { //в скобках объект, чье местоположение нужно
	const rect = el.getBoundingClientRect(),
		scrollLeft = window.scrollX || document.documentElement.scrollLeft,
		scrollTop = window.scrollY || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
//Открывает поп-ап
function popupOpen(curentPopup) { //В скобках попап, который надо открыть (найти его можно по айди)
	if (curentPopup && unlock) {
		let _activePopup = document.querySelector('.popup._active');
		if (_activePopup) {
			popupClose(_activePopup, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('_active');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				e.stopPropagation();
				if (menuBody.classList.contains('_active')) {
					popupClose(e.target.closest('.popup'), false);
				} else {
					popupClose(e.target.closest('.popup'));
				}
			}
		});
	}
}
//Закрывает поп-ап
function popupClose(item, doUnlock = true) { //в скобках поп-ап, который надо закрыть и надо ли разблокировать прокрутку
	if (unlock) {
		item.classList.remove('_active');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}
//Блокирует прокрутку
function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('_lock')

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, 500); //Время, в течении которого нельзя повторно открыть поп-ап, обычно равен времени анимации
}
//Разблокировывает прокрутку
function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('_lock')
	}, 200);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, 500); //Время, в течении которого нельзя повторно открыть поп-ап, обычно равен времени анимации
}
//Ставит картинку как фон
function _ibg() {
	let _ibg = document.querySelectorAll("._ibg");
	for (var i = 0; i < _ibg.length; i++) {
		if (_ibg[i].querySelector('img')) {
			_ibg[i].style.backgroundImage = 'url(' + _ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
_ibg();
//*</ Функции>==========================================================================================