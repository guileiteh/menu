document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menuButton');
    const navMenu = document.getElementById('navMenu');

    menuButton.addEventListener('click', function () {
        const isOpen = navMenu.style.transform === 'translateX(0%)';
        navMenu.style.transform = isOpen ? 'translateX(-100%)' : 'translateX(0%)';
        menuButton.classList.toggle('open', !isOpen);
    });
});
