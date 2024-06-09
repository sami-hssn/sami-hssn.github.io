$( document ).ready( function() {

    const navBtn = document.getElementById('navbar-toggler');

    const mobileNav = document.getElementById('mobile-nav');

    const mobileNavCloseBtn = document.getElementById('mobile-nav-close-btn');

    navBtn.addEventListener("click", () => {
        mobileNav.style.opacity = '1'
        mobileNav.style.pointerEvents = 'auto'
    })

    mobileNavCloseBtn.addEventListener("click", () => {
        mobileNav.style.opacity = '0'
        mobileNav.style.pointerEvents = 'none'
    })
    
});