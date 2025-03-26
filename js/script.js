new Swiper('.carousel-apps', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

new Swiper('.carousel-branding', {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
new Swiper('.carousel-design', {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

new Swiper('.carousel-design1', {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
new Swiper('.carousel-art', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

new Swiper('.carousel-img', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 2,
    pagination: {
        el: ".swiper-pagination",
        clickable: false,

    },
    autoplay: {
        delay: 5000
    }
});

new Swiper('.carousel-project', {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 1000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
new Swiper('.carousel-service', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
new Swiper('.carousel-main', {
    slidesPerView: 1,
    spaceBetween: 1,
    autoplay: {
        delay: 4000,
    },
    navigation: {
        nextEl: '.swiper-button-next-new',
        prevEl: '.swiper-button-prev-new',
    },
});
new Swiper('.carousel-roadmap', {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 4000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const partsVisible = []

document.querySelectorAll('.namebanner').forEach((namebanner, index) => {
    partsVisible[index] = {
        element: namebanner,
        visible: false,
    }
});

window.addEventListener('scroll',
    function () {
        var bottomspos =
            document.getElementById('bottomspos');
        var backscroll = document.querySelector('.backscroll');
        if (window.scrollY > 308) {
            bottomspos.classList.add('bottomsposfixed');
            backscroll.classList.add('show');
        } else {
            bottomspos.classList.remove('bottomsposfixed');
            backscroll.classList.remove('show');
        }

        document.querySelectorAll('.namebanner').forEach((namebanner, index) => {
            const isPartVisible = namebanner.getBoundingClientRect().top < 150;
            if (partsVisible[index].visible !== isPartVisible) {
                partsVisible[index].visible = isPartVisible;

                if (isPartVisible) {
                    document.getElementById(namebanner.dataset.btn).classList.add('backpart');

                    if (index > 0) {
                        document.getElementById(partsVisible[index - 1].element.dataset.btn).classList.remove('backpart');
                    }
                } else {
                    document.getElementById(namebanner.dataset.btn).classList.remove('backpart');

                    if (index > 0) {
                        document.getElementById(partsVisible[index - 1].element.dataset.btn).classList.add('backpart');
                    }
                }
            }
        });

        // if (window.scrollY > 1100) {
        //     document.getElementById('p1').classList.add('backpart');
        // } else {
        //     document.getElementById('p1').classList.remove('backpart');
        // }
        // if (window.scrollY > 3800) {
        //     document.getElementById('p1').classList.remove('backpart');
        // }
        // if (window.scrollY > 3900) {
        //     document.getElementById('p2').classList.add('backpart');
        // } else {
        //     document.getElementById('p2').classList.remove('backpart');
        // }
        // if (window.scrollY > 5900) {
        //     document.getElementById('p2').classList.remove('backpart');
        // }
        // if (window.scrollY > 6000) {
        //     document.getElementById('p3').classList.add('backpart');
        // } else {
        //     document.getElementById('p3').classList.remove('backpart');
        // }
        // if (window.scrollY > 8000) {
        //     document.getElementById('p3').classList.remove('backpart');
        // }
        // if (window.scrollY > 8010) {
        //     document.getElementById('p4').classList.add('backpart');
        // } else {
        //     document.getElementById('p4').classList.remove('backpart');
        // }
        // if (window.scrollY > 10010) {
        //     document.getElementById('p4').classList.remove('backpart');
        // }
    });

document.querySelectorAll('a[href^="#"]').forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault()

        const element = document.querySelector(item.attributes['href'].value)

        if (element) {
            currentSection = element.dataset.section
            element.scrollIntoView({
                behavior: 'smooth',
            })
        }

        return false
    })
})


