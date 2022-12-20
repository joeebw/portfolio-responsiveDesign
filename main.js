const burguerNav = document.querySelector('#burguerNav');
const navMobile = document.querySelector('#nav-mobile');

const showBurguerNav = () => {
    const containClass = navMobile.classList.contains('-translate-x-full');
    
    if(!containClass) return navMobile.classList.add('-translate-x-full');
    navMobile.classList.remove('-translate-x-full');

}

burguerNav.addEventListener('click', showBurguerNav);