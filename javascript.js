document.addEventListener('DOMContentLoaded', function () {
    var navbarToggle = document.querySelector('.navbar-toggler');
    var dropdownMenu = document.querySelector('.navbar-collapse');

    navbarToggle.addEventListener('click', function () {
        dropdownMenu.classList.toggle('show');
    });

    window.addEventListener('click', function (event) {
        if (!event.target.matches('.navbar-toggler') && !event.target.matches('.navbar-toggler-icon')) {
            if (dropdownMenu.classList.contains('show')) {
                dropdownMenu.classList.remove('show');
            }
        }
    });

    // Initialt göm dropdown-menyn om skärmbredden är över 600px
    if (window.innerWidth > 600) {
        dropdownMenu.style.display = 'none';
    }
});

$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });

            // Dölj dropdown-menyn efter klick på länk (för små skärmar)
            var dropdownMenu = document.querySelector('.navbar-collapse');
            if (window.innerWidth <= 600 && dropdownMenu.classList.contains('show')) {
                dropdownMenu.classList.remove('show');
            }
        }
    });
});
