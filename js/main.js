(function() {
    "use strict";
        let regalo = document.getElementById('regalo');
    document.addEventListener('DOMContentLoaded', function(){
        
        // Campos registro de usuario

        let nombre = document.getElementById('nombre');
        let apellido = document.getElementById('apellido');
        let email = document.getElementById('email');

        // Campos Boletos


        let pase_dia = document.getElementById('pase_dia'),
            pase_dosdias = document.getElementById('pase_dosdias'),
            pase_completo = document.getElementById('pase_completo');


        // Botones y divs

        let calcular = document.getElementById('calcular'),
            errorDiv = document.getElementById('error'),
            btnRegistro = document.getElementById('btnRegistro'),
            lista_productos = document.getElementById('lista-productos'),
            suma = document.getElementById('suma-total');

        // Extras

        let camisas = document.getElementById('camisa_evento');
        let etiquetas = document.getElementById('etiquetas');


        calcular.addEventListener('click', calcularMontos);
        pase_dia.addEventListener('blur', mostrarDias);
        pase_dosdias.addEventListener('blur', mostrarDias);
        pase_completo.addEventListener('blur', mostrarDias);

        nombre.addEventListener('blur', validarCampos);
        apellido.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarEmail);

        function validarCampos(){
            if(this.value == '') {
                errorDiv.style.display = 'flex';
                errorDiv.style.flexBasis = '100%';
                errorDiv.style.justifyContent = 'center';
                errorDiv.style.padding = '20px';
                errorDiv.innerHTML = 'Este campo es obligatorio.';
                this.style.border ='1px solid red';
                errorDiv.style.border = '1px solid red';
                errorDiv.style.margin = '0 auto';
            } else {
                errorDiv.style.display = 'none';
                this.style.border ='1px solid #cccccc';
            }
        }

        function validarEmail(){
            if(this.value.indexOf('@') > -1){
                errorDiv.style.display = 'none';
                this.style.border = '1px solid #cccccc';
            } else {
                errorDiv.style.display = 'flex';
                errorDiv.style.flexBasis = '100%';
                errorDiv.style.justifyContent = 'center';
                errorDiv.style.padding = '20px';
                errorDiv.innerHTML = 'Debes introducir un e-mail válido, (tuemail@---.---).';
                this.style.border ='1px solid red';
                errorDiv.style.border = '1px solid red';
                errorDiv.style.margin = '0 auto';
            }
        }


            function calcularMontos(event){
                event.preventDefault();
                if(regalo.value === ''){
                    alert('Debes elegir un regalo!!');
                    regalo.focus();
                } else{
                    
                    let boletoDia = parseInt(pase_dia.value, 10)|| 0,
                        boletos2Dias = parseInt(pase_dosdias.value, 10)|| 0,
                        boletoCompleto = parseInt(pase_completo.value, 10)|| 0,
                        cantCamisas = parseInt(camisas.value, 10)|| 0,
                        cantEtiquetas = parseInt(etiquetas.value, 10)|| 0;

                    let totalPagar = (boletoDia * 30) + (boletos2Dias * 40) + (boletoCompleto * 50) + ((cantCamisas * 10) * .93) + (cantEtiquetas * 2);

                    let listadoProductos = [];
                    if(boletoDia >= 1){
                        listadoProductos.push(boletoDia + ' Pases por día');
                    }
                    
                    if(boletos2Dias >= 1){
                        listadoProductos.push(boletos2Dias + ' Pases por 2 días');
                    }
                    
                    if(boletoCompleto >= 1){
                        listadoProductos.push(boletoCompleto + ' Pases completos');
                    }
                    
                    if(cantCamisas >= 1){
                        listadoProductos.push(cantCamisas + ' Camisas');
                    }

                    if(cantEtiquetas >= 1){
                        listadoProductos.push(cantEtiquetas + ' Etiquetas');
                    }
                    lista_productos.style.display = 'block';
                    lista_productos.innerHTML = '';
                    for(var i = 0; i< listadoProductos.length; i++) {
                        lista_productos.innerHTML += listadoProductos[i] + '<br/>';
                    }

                   suma.innerHTML = '$ ' +  totalPagar.toFixed(2);

                }
            }

            function mostrarDias(){
                    let boletoDia = parseInt(pase_dia.value, 10)|| 0,
                        boletos2Dias = parseInt(pase_dosdias.value, 10)|| 0,
                        boletoCompleto = parseInt(pase_completo.value, 10)|| 0;

                    let diasElegidos = [];

                    if(boletoDia > 0){
                        diasElegidos.push('viernes');
                        console.log(diasElegidos);
                    }
                    if(boletos2Dias > 0){
                        diasElegidos.push('viernes', 'sabado');
                        console.log(diasElegidos);
                    }
                    if(boletoCompleto > 0){
                        diasElegidos.push('viernes', 'sabado', 'domingo');
                        console.log(diasElegidos);
                    }
                    for(let i = 0; i < diasElegidos.length; i++){
                        document.getElementById(diasElegidos[i]).style.display = 'flex';
                        document.getElementById(diasElegidos[i]).style.flexWrap= 'wrap';
                    }
            }




    }); // DOM Content Loaded DOM Content loaded
})();