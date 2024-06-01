const botonArriba = document.querySelector('.boton-arriba');

botonArriba.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth'});
});
