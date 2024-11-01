(function ($) {

    /* 
    Migliora la gestione degli errori, previene comportamenti
    scorretti e ottimizza le prestazioni
    */
    "use strict";


    // Loader
    $(window).on("load", function () {
        // Aggiungi la classe 'loaded' agli elementi con l'attributo data-preaload
        $('[data-preaload]').addClass('loaded');
        $('body').addClass('loaded'); // Aggiungi 'loaded' al body
    });


    // Inizializza wow.js
    new WOW().init();


    // Pulsante "torna su"
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) { // Se si è scorsi oltre 700px
            $('.up-btn').addClass('visible'); // Aggiungi la classe 'visible'
        } else {
            $('.up-btn').removeClass('visible'); // Rimuovi la classe
        }
    });
    // Aggiungi un evento click al pulsante "torna su"
    $('.up-btn').click(function () {
        $('html, body').animate({scrollTop: 0}, 0); // Esegui l'animazione per tornare in cima
        return false; // Prevenire il comportamento predefinito
    });

    // Navbar fissa
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) { // Se si è scorsi oltre 45px
            $('.navbar').addClass('fixed-top shadow-sm'); // Aggiungi le classi fixed e shadow
        } else {
            $('.navbar').removeClass('fixed-top shadow-sm'); // Rimuovi le classi se non più scorsi
        }
    });

    
    // Carousel delle recensioni
    $(".reviews-carousel").owlCarousel({
        autoplay: true, // Abilita l'autoplay
        smartSpeed: 1000, // Velocità dell'animazione
        center: true, // Centra gli elementi
        margin: 24, // Margine tra gli elementi
        dots: true, // Mostra i puntini di navigazione
        loop: true, // Abilita il loop
        nav: false, // Nascondi i controlli di navigazione
        responsive: { // Impostazioni responsivi
            0: {
                items: 1 // Un elemento per schermi piccoli
            },
            768: {
                items: 2 // Due elementi per schermi medi
            },
            992: {
                items: 3 // Tre elementi per schermi grandi
            }
        }
    });


    // Nascondere ID sezione
    $(document).ready(function() {
        // Aggiungi un evento click sugli elementi con l'attributo data-scroll-to
        $('[data-scroll-to]').on('click', function(event) {
            event.preventDefault(); // Prevenire il comportamento predefinito del link
            const targetId = $(this).attr('data-scroll-to'); // Ottieni l'ID del target
            const targetElement = $('#' + targetId); // Seleziona l'elemento target
            if (targetElement.length) { // Se l'elemento esiste
                // Esegui l'animazione di scroll verso l'elemento
                $('html, body').animate({
                    scrollTop: targetElement.offset().top
                }, 0);
            }
        });
    });
    
})(jQuery);