(function() {
    "use strict";
    document.addEventListener('DOMContentLoaded', function(){
        

        if (document.getElementById('mapa') ) {
            var map = L.map('mapa').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('GDLwebCamp 2020 <br> Boletos ya disponibles!')
        .openPopup()
        .bindTooltip('GDLwebCamp')
        .openToolTip()
        };
        
        

    }); // DOM Content Loaded DOM Content loaded
})();


$(function(){

    // Lettering

    $('.nombre-sitio').lettering();

    // Menu fijo


    
    
    let windowHeight = $(window).height();
    let barHeight = $('.barra').innerHeight();
    let hero = $('.hero').innerHeight();
    console.log
    
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if(scroll > windowHeight){
            $('.barra').addClass('fixed');
            $('body').css({'margin-top': barHeight+'px'});
        } else{
            $('.barra').removeClass('fixed');
            $('body').css({'margin-top': '0px'});

        };
    });

    // Menu Móvil

    $('.menu-mobile').on('click', function(){
        $('.navegacion-principal').slideToggle(777);

        return false;
    });

    $('.navegacion-principal .fa-caret-up').click(function(){
        $('.navegacion-principal').slideUp();

        return false;
    })


   //Programa de conferencias

   $('.programa-evento .info-curso').hide();
   $('.programa-evento .info-curso:first').show();
   $('.menu-programa a:first').addClass('activo');

   $('.menu-programa a').click(function(){
       $('.menu-programa a').removeClass('activo');
       $(this).addClass('activo');
       $('.ocultar').hide();
       let enlace = $(this).attr('href');
       $(enlace).show(777);
       
       return false;
   })

   // Animaciones para los números

   $('.resumen-evento li:nth-child(1) p').animateNumber({ number: 6}, 1277 );
   $('.resumen-evento li:nth-child(2) p').animateNumber({ number: 15}, 1277 );
   $('.resumen-evento li:nth-child(3) p').animateNumber({ number: 3}, 1777 );
   $('.resumen-evento li:nth-child(4) p').animateNumber({ number: 9}, 1577 );

   // Animaciones para la cuenta refresiva

   $('.cuenta-regresiva').countdown('2020/11/07 10:30:00', function(event){
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
   });

   

});