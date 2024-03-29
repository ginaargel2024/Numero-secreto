let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =texto;
    return;

}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

   console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
    asignarTextoElemento('p', `Acertastes el número en ${intentos} ${(intentos === 1) ? 'Vez' : 'Veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else {
            asignarTextoElemento('p', 'El número secreto es mayor');

        }
        intentos++;
        limpiarCaja();
    }

    return;
}


function limpiarCaja(){
    document.querySelector('#valorUsuario').value ='';
}
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')

    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)) {
 
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado
        }
        
    }
    }

    //Si el número generado esta incluido en la lista
    

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del Número Secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego() {
    //Limpiar Caja
    limpiarCaja();
    //Indicar mensaje intervalo de numeros
    //Generar el numero aleatorio
   //inicializar numero intentos
   //Deshabilitar botón nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();