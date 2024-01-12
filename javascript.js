

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
