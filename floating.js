const floating = document.querySelector('.floating');

window.addEventListener('scroll', () => {

    if (window.scrollY > 400) {
        floating.classList.add('show');
    } else {
        floating.classList.remove('show');
    }

});