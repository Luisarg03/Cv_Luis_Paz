window.sr= ScrollReveal();

/*sr.reveal('.navbar',{
    duration : 1250,
    origin : 'top',
    distance : '300px'
});*/

sr.reveal('.ico-header-left',{
    duration : 2000,
    origin : 'left',
    distance : '300px'
});

sr.reveal('.text-header-right',{
    duration : 2000,
    origin : 'right',
    distance : '300px'
});

/*sr.reveal('#sobre_mi',{
    duration : 1500,
    origin : 'bottom',
    distance : '300px'
});*/

//scroll smooth

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
