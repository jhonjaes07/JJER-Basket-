console.log("Página de Curso de Baloncesto cargada correctamente 🏀");

function compartirPagina() {

    if (navigator.share) {

        navigator.share({

            title: "JJER Basket 🏀",

            text: "🏀 Curso Gratis de Baloncesto y Acondicionamiento Físico en Residencial Los Olivos. ¡Ven a aprender, practicar y mejorar!",

            url: "https://jhonjaes07.github.io/JJER-Basket-/"

        });

    } else {

        alert(
            "Copia y comparte este enlace:\n\n" +
            "https://jhonjaes07.github.io/JJER-Basket-/"
        );

    }

}