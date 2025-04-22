AOS.init({
    duration: 1000,  
    easing: 'ease-in-out',  
    once: true,
});

document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const navLinks = document.querySelectorAll(".navbar .nav-link");

    const currentPage = window.location.pathname;
    
    navLinks.forEach((link) => {
        if (currentPage.includes(link.getAttribute("href"))) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");  
        }
    });

    window.addEventListener("scroll", function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop < lastScrollTop) {
            AOS.refresh(); 
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    AOS.init({
        duration: 1000,  
        easing: 'ease-in-out',  
        once: false, 
    });
});

let lastScrollTop = 0; 
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        navbar.style.top = '-80px'; 
    } else {
        navbar.style.top = '0';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
