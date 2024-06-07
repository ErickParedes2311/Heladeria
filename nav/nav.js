const botonResponsive = document.querySelector('.btn_amburgesa');
const contentNav = document.querySelector('.content_nav_responsive');
botonResponsive.addEventListener('click', () =>
        {
                contentNav.classList.toggle('cerrar');
        });