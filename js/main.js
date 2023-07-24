// Swiper js
new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});

new Swiper('.swiper', {
    slidesPerView: 3,
    direction: getDirection(),
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        },
    },
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
}

let prays = document.querySelector('.prays')
let catalog = document.querySelector('.catalog')
let opt = document.querySelector('.opt')
let deliver = document.querySelector('.deliver')
let about = document.querySelector('.about')
let contacts = document.querySelector('.contacts')

let prays_sec = document.querySelector('.main')
let prays_sec_pos = prays_sec.offsetTop;

prays.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: prays_sec_pos, left: 0, behavior: 'smooth' })
});

let catalog_sec = document.querySelector('.st1')
let catalog_sec_pos = catalog_sec.offsetTop;

catalog.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: catalog_sec_pos - 180, left: 0, behavior: 'smooth' })
});

let opt_sec = document.querySelector('.st3')
let opt_sec_pos = opt_sec.offsetTop;

opt.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: opt_sec_pos - 140, left: 0, behavior: 'smooth' })
});

let deliver_sec = document.querySelector('.st4')
let deliver_sec_pos = deliver_sec.offsetTop;

deliver.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: deliver_sec_pos - 150, left: 0, behavior: 'smooth' })
});

let about_sec = document.querySelector('.st5')
let about_sec_pos = about_sec.offsetTop;

about.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: about_sec_pos - 170, left: 0, behavior: 'smooth' })
});

let contacts_sec = document.querySelector('.footer')
let contacts_sec_pos = contacts_sec.offsetTop;

contacts.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: contacts_sec_pos - 150, left: 0, behavior: 'smooth' })
});

// modal window

let btn_main = document.querySelector('.btn_main')
let modal_window_header_bg = document.querySelector('.modal_window_main_bg')
let exit_btn = document.querySelector('.mw_main')
let exit = document.querySelector('.exit')

btn_main.addEventListener('click', () => {
    modal_window_header_bg.style.display = "block"
    modal_window_header_bg.style.zIndex = 100
    document.body.style.userSelect = "none"
    document.body.style.overflowY = "hidden"
})

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
        modal_window_header_bg.style.display = "none"
        modal_window_header_bg.style.zIndex = 0
        document.body.style.userSelect = "auto"
        document.body.style.overflowY = "auto"
    }
});


exit_btn.addEventListener('click', () => {
    modal_window_header_bg.style.display = "none"
    modal_window_header_bg.style.zIndex = 0
    document.body.style.userSelect = "auto"
    document.body.style.overflowY = "auto"
});

exit.addEventListener('click', () => {
    modal_window_header_bg.style.display = "none"
    modal_window_header_bg.style.zIndex = 0
    document.body.style.userSelect = "auto"
    document.body.style.overflowY = "auto"
});




let btn_order = document.querySelector('.btn_order');
let modal_window_more_inf = document.querySelector('.modal_window_more_inf');
let exit1 = document.querySelector('.exit1')
let exit_btn1 = document.querySelector('.mw_order')

btn_order.addEventListener('click', () => {
    modal_window_more_inf.style.display = "block"
    modal_window_more_inf.style.zIndex = 100
    document.body.style.userSelect = "none"
    document.body.style.overflowY = "hidden"
})

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
        modal_window_more_inf.style.display = "none"
        modal_window_more_inf.style.zIndex = 0
        document.body.style.userSelect = "auto"
        document.body.style.overflowY = "auto"
    }
});

exit_btn1.addEventListener('click', () => {
    modal_window_more_inf.style.display = "none"
    modal_window_more_inf.style.zIndex = 0
    document.body.style.userSelect = "auto"
    document.body.style.overflowY = "auto"
});

exit1.addEventListener('click', () => {
    modal_window_more_inf.style.display = "none"
    modal_window_more_inf.style.zIndex = 0
    document.body.style.userSelect = "auto"
    document.body.style.overflowY = "auto"
});


let btn_order1 = document.querySelector('.btn_order1');
let modal_window_more_inf1 = document.querySelector('.modal_window_more_inf');
let exit2 = document.querySelector('.exit1')
let exit_btn2 = document.querySelector('.mw_order')

btn_order1.addEventListener('click', () => {
    modal_window_more_inf1.style.display = "block"
    modal_window_more_inf1.style.zIndex = 100
    document.body.style.userSelect = "none"
    document.body.style.overflowY = "hidden"
})

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
        modal_window_more_inf1.style.display = "none"
        modal_window_more_inf1.style.zIndex = 0
        document.body.style.userSelect = "auto"
        document.body.style.overflowY = "auto"
    }
});

exit_btn2.addEventListener('click', () => {
    modal_window_more_inf1.style.display = "none"
    modal_window_more_inf1.style.zIndex = 0
    document.body.style.userSelect = "auto"
    document.body.style.overflowY = "auto"
});

exit2.addEventListener('click', () => {
    modal_window_more_inf1.style.display = "none"
    modal_window_more_inf1.style.zIndex = 0
    document.body.style.userSelect = "auto"
    document.body.style.overflowY = "auto"
});


let btn_order2 = document.querySelector('.btn_order2');
let modal_window_more_inf2 = document.querySelector('.modal_window_more_inf');
let exit3 = document.querySelector('.exit1')
let exit_btn3 = document.querySelector('.mw_order')

btn_order2.addEventListener('click', () => {
    modal_window_more_inf2.style.display = "block"
    modal_window_more_inf2.style.zIndex = 100
    document.body.style.userSelect = "none"
    document.body.style.overflowY = "hidden"
})

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
        modal_window_more_inf2.style.display = "none"
        modal_window_more_inf2.style.zIndex = 0
        document.body.style.userSelect = "auto"
        document.body.style.overflowY = "auto"
    }
});

exit_btn3.addEventListener('click', () => {
    modal_window_more_inf2.style.display = "none"
    modal_window_more_inf2.style.zIndex = 0
    document.body.style.userSelect = "auto"
    document.body.style.overflowY = "auto"
});

exit3.addEventListener('click', () => {
    modal_window_more_inf2.style.display = "none"
    modal_window_more_inf2.style.zIndex = 0
    document.body.style.userSelect = "auto"
    document.body.style.overflowY = "auto"
});