console.log/("Hello");
document.addEventListener('DOMContentLoaded', () => {

    function getAll(selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
    }

    var $dropdowns = getAll('.dropdown:not(.is-hoverable)');

    if ($dropdowns.length > 0) {
        $dropdowns.forEach(function ($el) {
            $el.addEventListener('click', function (event) {
                event.stopPropagation();
                $el.classList.toggle('is-active');
            });
        });

        document.addEventListener('click', function (event) {
            closeDropdowns();
        });
    }

    function closeDropdowns() {
        $dropdowns.forEach(function ($el) {
            $el.classList.remove('is-active');
        });
    }


    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            })
            ;
        })
        ;
    }

    const dialogoDatosDelegacion = document.getElementById("datos_delegacion");
    const enlaceDatosDelegacion = document.getElementById("enlace_datos_delegacion");
    const botonCerrarDatosDelegacion = document.getElementById("cerrar_datos_delegacion");
    enlaceDatosDelegacion.addEventListener("click", () => {
        dialogoDatosDelegacion.classList.add("is-active");
    });
    botonCerrarDatosDelegacion.addEventListener("click", () => {
        dialogoDatosDelegacion.classList.remove("is-active");
    })
});
