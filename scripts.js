
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

