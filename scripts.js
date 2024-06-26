
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 30;
let timerInicial = 30;
let tiempoRegresivoId = null;

let winAudio = new Audio('./sounds/gana.wav');
let loseAudio = new Audio('./sounds/pierde.wav');
let rightAudio = new Audio('./sounds/acierto.wav');
let wrongAudio = new Audio('./sounds/fallo.wav');
let clickAudio = new Audio('./sounds/click.wav');

let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrartiempo = document.getElementById('t-restante');

let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];


numeros = numeros.sort(() => {
    return Math.random() - 0.5;
});


function contarTiempo() {
    tiempoRegresivoId = setInterval(() => {
        timer--;
        mostrartiempo.innerHTML = `Tiempo: ${timer} segundos`;
        if(timer == 0) {
            clearInterval(tiempoRegresivoId);
            bloquearTarjetas();
            loseAudio.play();
        }
    }, 1000);
}


function bloquearTarjetas() {
    for(let i = 0; i <= 15; i++) {
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = `<img src="./img/${numeros[i]}.png">`;
        tarjetaBloqueada.disabled = true;
    }
}


function destapar(id) {
    if(temporizador == false) {
        contarTiempo();
        temporizador = true;
    }

    tarjetasDestapadas++;

    if(tarjetasDestapadas == 1) {
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id];
        let imagen = document.createElement("img");
        imagen.src = `./img/${primerResultado}.png`;
        tarjeta1.appendChild(imagen);
        clickAudio.play();

        tarjeta1.disabled = true;
    } else if(tarjetasDestapadas == 2) {
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        let imagen = document.createElement("img");
        imagen.src = `./img/${segundoResultado}.png`;
        tarjeta2.appendChild(imagen);

        tarjeta2.disabled = true;

        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

        if(primerResultado == segundoResultado) {
            rightAudio.play();
            tarjetasDestapadas = 0;

            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if(aciertos == 8) {
                winAudio.play();
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 🤩`;
                mostrartiempo.innerHTML = `Fantastico! Solo demoraste ${timerInicial - timer} segundos.`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 😎`;
            }

        } else {
            wrongAudio.play();
            setTimeout(() => {
                tarjeta1.innerHTML = ' ';
                tarjeta2.innerHTML = ' ';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            }, 800);
        }
    }
}
