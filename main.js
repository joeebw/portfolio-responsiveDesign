const burguerNav = document.querySelector('#burguerNav');
const navMobile = document.querySelector('#nav-mobile');

const showBurguerNav = () => {
    const containClass = navMobile.classList.contains('-translate-x-[500%]');
    
    if(!containClass) return navMobile.classList.add('-translate-x-[500%]');
    navMobile.classList.remove('-translate-x-[500%]');

}

burguerNav.addEventListener('click', showBurguerNav);