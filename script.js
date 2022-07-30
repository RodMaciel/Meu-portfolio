$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation
    var typed = new Typed(".typing", {
        strings: [ "Desenvolvedor", "Gamer", "Estudante", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Desenvolvedor", "Gamer", "Estudante", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            300: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});
// efeito click
const OPTS = {
    fill: 'none',
    radius: 25,
    strokeWidth: { 50: 0 },
    scale: { 0: 1 },
    angle: { 'rand(-35, -70)': 0 },
    duration: 500,
    left: 0, top: 0,
    easing: 'cubic.out'
};

const circle1 = new mojs.Shape({
    ...OPTS,
    stroke: 'cyan',
});

const circle2 = new mojs.Shape({
    ...OPTS,
    radius: { 0: 15 },
    strokeWidth: { 30: 0 },
    stroke: 'green',
    delay: 'rand(75, 150)'
});

document.addEventListener('click', function (e) {

    circle1
        .tune({ x: e.pageX, y: e.pageY })
        .replay();

    circle2
        .tune({ x: e.pageX, y: e.pageY })
        .replay();

});
// animation contrata-me restart
let restartButton = document.querySelector("#home1");
restartButton.addEventListener("click", restartAnimation, false);

function restartAnimation() {
    let circle = document.querySelector(".home .home-content a");

    circle.style.animationName = "none";

    requestAnimationFrame(() => {
        setTimeout(() => {
            circle.style.animationName = ""
        }, 0);
    });
}
// email js contato

// script sendmail
function sendMail(params) {
    var tempParams = {
        from_name: document.getElementById("from_email").value,
        to_name: document.getElementById("toName").value,
        sobrenome: document.getElementById("sobrenome").value,
        message: document.getElementById("msg").value,
    };
    emailjs.send('service_8x60t8j', 'template_dh3w3eq', tempParams)
        .then(function (res) {
            alert("email enviado" + res.status);
        })
}
