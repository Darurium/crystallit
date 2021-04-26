$(function() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 740,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            
        ]

    });
    
    $('.choise__slider').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 1100,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
          
      ]
    });

    $('.reviews__slider').slick({
        dots: true,
        arrows: false
    });

    
});

let modalState = {};

const changeModalState = (state) => {
	const cards = document.querySelectorAll(".popup_calc__card"),
		  sills = document.querySelector(".popup_size__sills");

//  Получаем цвет выбранного подоконника в калькуляторе
	cards.forEach(item => {      
		item.addEventListener("click", (e) => {
			let target = e.target;
			if (target.parentNode.classList.contains("popup_calc__img")) {
				state.color = target.getAttribute("alt");
			} else {
				state.color = target.innerHTML;
			}

			console.log(state);
		})
	})
// -----------------

	state.sill = "";
//  Собираем значения всех input в калькуляторе
	document.querySelector("#popup_calc_end_btn").addEventListener("click", () => {
		console.log(sills.children);
		for (let i = 0; i < sills.children.length; i++) {
			if (sills.children[i].classList.contains("popup_size__sill")) {
				state.sill += `Подоконник:  ширина: ${sills.children[i].querySelector(".popup_size__width-range").value} 
				длина: ${sills.children[i].querySelector(".popup_size__length-range").value} 
				количество: ${sills.children[i].querySelector(".popup_size__quantity-range").value} шт. <br> `
			}			
		}

	})	
// ----------------
}

changeModalState(modalState);



// Modals

const modals = (triggerSelector, modalSelector, closeSelector) => {

	const trigger = document.querySelectorAll(triggerSelector),
		  modal = document.querySelector(modalSelector),
		  close = document.querySelector(closeSelector),
		  windows = document.querySelectorAll('[data-modal]');

	trigger.forEach(item => {
		item.addEventListener('click', () => {
			windows.forEach(item => {
				item.style.display = 'none';
			});

			modal.style.display = 'block';
			document.body.style.overflow = "hidden";

			
		});

	});

	close.addEventListener('click', () => {
		modal.style.display = "none";
		document.body.style.overflow = "";
	});

	modal.addEventListener('click', (e) => {
		if (e.target === modal || e.target.parentNode === modal) {
			modal.style.display = "none";
			document.body.style.overflow = "";
		}
	});

};

modals('.header__btn', '.popup_calc', '.popup_calc__close');
modals('.popup_calc__btn', '.popup_size', '.popup_size__close');
modals('.gallery__wrapper', '.popup_gallery', '.popup_gallery__close');
modals('.popup_size__btn', '.popup_calc_end', '.popup_calc_end__close');



// Hamburger - menu

const humburger = document.querySelector('.hamburger'),
      closeBtnMenu = document.querySelector('.menu__close'),
      menu = document.querySelector('.menu'),
      links = document.querySelectorAll('.menu__link');

humburger.addEventListener('click', () => {
    menu.classList.add('menu__active');
});

closeBtnMenu.addEventListener('click', () => {
    menu.classList.remove('menu__active');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('menu__active');
    });
});

const calc = () => {

	const cards = document.querySelectorAll('.popup_calc__card'),
		  colorBtn = document.querySelectorAll('.popup_calc__item'),
		  surFaceBtn = document.querySelectorAll('.popup_calc__surface__button');

	function hideCards () {
		cards.forEach(item => {
			item.style.display = 'none';
			// item.classList.remove('popup_calc__card_active');
		});		
	}

	function showCard (color='white', surface='gl', i=0) {
		cards.forEach(item => {
			if (item.dataset.color == color && item.dataset.surface == surface) {
				item.style.display = 'block';
			}
		});
		
	}

	hideCards();
	showCard();
	

	colorBtn.forEach(item => {
		item.addEventListener('click', () => {
			colorBtn.forEach(item => {
				item.classList.remove('popup_calc__item_active');
			});
			item.classList.add('popup_calc__item_active');
			let colorTrigger = document.querySelector('.popup_calc__item_active').getAttribute('data-color'),
			surfaceTrigger = document.querySelector('.popup_calc__surface__button_active').getAttribute('data-surface');
			console.log(colorTrigger, surfaceTrigger);
			hideCards();
			showCard(colorTrigger, surfaceTrigger);
		});
	});

	surFaceBtn.forEach(item => {
		item.addEventListener('click', () => {
			surFaceBtn.forEach(item => {
				item.classList.remove('popup_calc__surface__button_active');
			});
			item.classList.add('popup_calc__surface__button_active');
			let colorTrigger = document.querySelector('.popup_calc__item_active').getAttribute('data-color'),
			surfaceTrigger = document.querySelector('.popup_calc__surface__button_active').getAttribute('data-surface');
			console.log(colorTrigger, surfaceTrigger);
			hideCards();
			showCard(colorTrigger, surfaceTrigger);
		});
	});	
};

calc();

const cards = document.querySelectorAll('.popup_calc__card');

cards.forEach(item => {
	
	item.addEventListener('click', (e) => {
		let target = e.target;
		
		if (target.classList.contains('popup_calc__card') || 
			target.parentNode.classList.contains('popup_calc__card') ||
			target.parentNode.parentNode.classList.contains('popup_calc__card')) {
				cards.forEach(item => {
					item.classList.remove('popup_calc__card_active');
				});
				item.classList.add('popup_calc__card_active');
			}
	});
});






// tabs

const tabs = document.querySelector(".gallery__tabs"),
	  tab = document.querySelectorAll(".gallery__tab"),
	  content = document.querySelectorAll(".gallery__item");

function hideTabContent() {
	content.forEach(item => {
		item.style.display = 'none';
	});
	tab.forEach(item => {
		item.classList.remove("gallery__tab_active");
	});
}

function showTabContent(data = "white") {
	content.forEach(item => {
		if (item.dataset.color === data) {
			item.style.display = "block";
		}
	})
	tab.forEach(item => {
		if (item.dataset.color === data) {
			item.classList.add("gallery__tab_active")
		}
	})
}

hideTabContent();
showTabContent();

tabs.addEventListener('click', (e) => {
	const target = e.target;
	if (target.classList.contains("gallery__tab") || 
		target.parentNode.classList.contains("gallery__tab")) { 
			tab.forEach(item => {
				if (target == item || target.parentNode == item) {
					hideTabContent();
					showTabContent(target.getAttribute("data-color"));
				}
			});
	}
});

// Gallery modal

const bigImgDiv = document.createElement("div"),
	  bigImg = document.createElement("img"),
	  modal = document.querySelector(".popup_gallery__content"),
	  wrapper = document.querySelector(".gallery__wrapper"),
	  gallery = document.querySelector(".popup_gallery");

bigImgDiv.classList.add("gallery__bigimg");
bigImgDiv.append(bigImg);
modal.prepend(bigImgDiv);

wrapper.addEventListener("click", (e) => {
	e.preventDefault();
	let target = e.target;

	if(target && target.classList.contains("gallery__item") || target.parentNode.parentNode.classList.contains("gallery__item")) {

		gallery.style.display = "block";

		if (target.classList.contains("gallery__item")) {
			let path = "img/popup_calc/header/header_" + target.getAttribute("data-img");
			bigImg.setAttribute("src", path);
		} else if (target.parentNode.parentNode.classList.contains("gallery__item")){
			let path = "img/popup_calc/header/header_" + target.parentNode.parentNode.getAttribute("data-img");
			bigImg.setAttribute("src", path);
		}
		
	}

	if (target == wrapper) {
		gallery.style.display = "none";
	}
	
})


//add sills

const addSill = () => {
	const sills = document.querySelector(".popup_size__sills"),
		 
		  sill = document.createElement("div");

	sill.classList.add("popup_size__sill");
	sill.innerHTML = `
			<div class="popup_size__width-block">
				<div class="popup_size__text-width">Ширина: </div>
				<div class="popup_size__width">
					<input type="range" class="popup_size__width-range" min="100" max="600" value="100" step="50" name="width">                            
					<div class="popup_size__width-value">100 мм</div>                                
				</div>
			</div>
			<div class="popup_size__block2">
				<div class="popup_size__length">                            
					<div class="popup_size__text-length">Длина: </div>
					<div class="popup_size__length-value">                            
						<input type="number" class="popup_size__length-range" value="1500" name="length">
					</div>
				</div>
				<div class="popup_size__quantity">
					<div class="popup_size__text-quantity">Количество: </div>
					<div class="popup_size__quantity-value">                            
						<input type="number" class="popup_size__quantity-range" value="1"  name="quantity">
					</div>
				</div>
			</div>`
	

	sills.append(sill);

}
document.querySelector(".popup_size__plus").addEventListener("click", addSill);


// forms

const forms = (state) => {
	const form = document.querySelectorAll('form'),
		  textareas = document.querySelectorAll("textarea"),
		  inputs = document.querySelectorAll("input");
	
	const message = {
		loading: "Загрузка...",
		success: "Спасибо. Ваши заявка отправлена",
		failure: "Что-то пошло не так"
	}

	const clearInputs = () => {
		inputs.forEach(item => {
			item.value = "";
		})
		textareas.forEach(item => {
			item.value = "";
		})
	}

	const postData = async (url, data) => {
		let res = await fetch(url, {
			method: "POST",
			body: data
		});

		return await res.text();
	};

	form.forEach(item => {
		item.addEventListener("submit", (e) => {
			e.preventDefault();

			let statusMessage = document.createElement("div");
			item.appendChild(statusMessage);

			const formData = new FormData(item);
			if (item.getAttribute("data-calc") === "end") {
				for (let key in state) {
					formData.append(key, state[key]);
				}
			}

			postData("mailer/smart.php", formData)
				.catch(() => {
					console.log('Error');
				})
				.finally(() => {
					clearInputs();
					setTimeout(()=> {
						document.querySelector(".popup_calc_end__close").click();
					}, 3000)
				});
		})
	})
}

forms(modalState);



// inputs  передаем значения ширины 

const sillss = document.querySelector(".popup_size__sills"),
	  width = document.querySelectorAll(".popup_size__width-range");

sillss.addEventListener("click", (e) => {
	let target = e.target;
	if (target.classList.contains("popup_size__width-range")) {
		let val = target.value;
		target.nextElementSibling.innerHTML = val + " mm";
	}
})

