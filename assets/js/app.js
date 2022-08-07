let menuOpenBtn = document.querySelector('#menuOpen');
let menuCloseBtn = document.querySelector('#menuClose');

menuOpenBtn.addEventListener('click', () => {
    document.querySelector('.overlayMobileNav').classList.add('active');
    menuOpenBtn.style.display='none';
    menuCloseBtn.style.display='block';
})

menuCloseBtn.addEventListener('click', () => {
    document.querySelector('.overlayMobileNav').classList.remove('active');
    menuCloseBtn.style.display='none';
    menuOpenBtn.style.display='block';
})

document.querySelectorAll('.overlayMobileNav ul li').forEach(element => {
    element.addEventListener('click', () => {
        document.querySelector('.overlayMobileNav').classList.remove('active');
        menuCloseBtn.style.display='none';
        menuOpenBtn.style.display='block';
    })
})