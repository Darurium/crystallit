$(function() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
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



// Modals

const modals = (triggerSelector, modalSelector, closeSelector) => {

	const trigger = document.querySelectorAll(triggerSelector),
		  modal = document.querySelector(modalSelector),
		  close = document.querySelector(closeSelector);

	trigger.forEach(item => {
		item.addEventListener('click', () => {
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


// services

const getResource = async (url) => {
	let res = await fetch(url);

	if (!res.ok) {
		throw new Error(`Could not fetch ${url}, status: ${res.status}`);
	}

	return await res.json();
};

document.querySelector('.header__btn').addEventListener('click', () => {
	getResource('http://localhost:3000/sills')
		.then(res => console.log(res));
});

const createCard = (response) => {
	response.forEach(item => {
		let card;
	});
};