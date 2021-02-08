window.addEventListener('load', () => {
    const mobileMenuBtn = document.querySelector('#mobile_menu_btn');
    const navMenu = document.querySelector('#nav_menu');

    const offerModalBtn = document.querySelectorAll('[data-modal-btn]');
    const offerModal = document.querySelector('[data-offer-modal]');
    const offerModalClose = document.querySelector('[data-offer-close]');
    const offerPrice = document.querySelector('[data-offerPrice]');
    const offerModalSubmit = document.querySelector('[data-modal-submit]');
    const offerModalH3 = document.querySelector('[data-offer-modal] h3');

    const offerItem = document.querySelectorAll('.offer_item h3');

    const countModalBtn = document.querySelector('.member_count');
    const countModal = document.querySelector('[data-memberCount-modal]');
    const countModalClose = document.querySelector('[data-count-close]')

    const minusBtn = document.querySelectorAll('[data-minus]');
    const plusBtn = document.querySelectorAll('[data-plus]');
    const counterResault = document.querySelectorAll('[data-resault]');

    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('menu_active');
    });

    offerModalBtn.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            offerModal.style.display = 'flex';
            let silver = `57.844 AMD`;
            let gold = `98.455 AMD`;
            let vip = `250.485 AMD`;

            if (i == 0) {
                offerModalH3.innerHTML = `Վճարել։ ${offerItem[0].innerHTML}ի համար`;
                offerPrice.innerHTML = `Վճարման ենթակա գումարը։ <span> ${silver}</span>`;
                offerModalSubmit.setAttribute('value', `Վճարել ${silver}`)
            }
            if (i == 1) {
                offerModalH3.innerHTML = `Վճարել։ ${offerItem[1].innerHTML}ի համար`;
                offerPrice.innerHTML = `Վճարման ենթակա գումարը։ <span> ${gold}</span>`;
                offerModalSubmit.setAttribute('value', `Վճարել ${gold}`)
            }
            if (i == 2) {
                offerModalH3.innerHTML = `Վճարել։ ${offerItem[2].innerHTML}ի համար`;
                offerPrice.innerHTML = `Վճարման ենթակա գումարը։ <span> ${vip}</span>`;
                offerModalSubmit.setAttribute('value', `Վճարել ${vip}`)
            }
        });
    });

    offerModalClose.addEventListener('click', () => {
        offerModal.style.display = 'none';
    });

    countModalBtn.addEventListener('click', () => {
        countModal.style.display = 'flex';
    });

    countModalClose.addEventListener('click', () => {
        countModal.style.display = 'none';
    });

    const counterFilter = (minus, plus, resault) => {
        let i = 0;

        minus.addEventListener('click', () => {
            if (resault.innerHTML >= 1) {
                resault.innerHTML = --i;
            }
        });

        plus.addEventListener('click', () => {
            if (resault.innerHTML <= 8) {
                resault.innerHTML = ++i;
            }
        });
    };

    counterFilter(minusBtn[0], plusBtn[0], counterResault[0]);
    counterFilter(minusBtn[1], plusBtn[1], counterResault[1]);
    counterFilter(minusBtn[2], plusBtn[2], counterResault[2]);

    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 15,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            520: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            980: {
                slidesPerView: 3,
            },
            1140: {
                slidesPerView: 4,
            }
        }
    });

    const swiperSlide = document.querySelectorAll('.swiper-slide');

    swiperSlide.forEach(slide => {
        slide.addEventListener('mouseover', () => {
            swiper.autoplay.stop();
        });
        
        slide.addEventListener('mouseleave', () => {
            swiper.autoplay.start();
        });
    });

        const loginModal = document.querySelector('.login_modal');
        const modalClose = document.querySelector('[data-login-modal-close]');
        const openModal = document.querySelector('.open-modal');
        const openRegModal = document.querySelector('.reg_modal_block');
        const closeRegModal = document.querySelector('[data-reg-modal-close]');
        const openRegistr = document.querySelector('.registr_modal');




        modalClose.addEventListener('click', () => {
            loginModal.style.display = 'none';
            
        }); 

        openModal.addEventListener('click', () => {
            loginModal.style.opacity = '1';
        } );

        closeRegModal.addEventListener('click', () => {
            openRegModal.style.display = 'none';
        });

        openRegistr.addEventListener('click', () => {
            openRegModal.style.opacity = '1';
        });


});