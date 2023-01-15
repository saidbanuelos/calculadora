
function init(){
  //Variables
  let operaPantalla = document.getElementById('operacion');
  let numsPantalla = document.getElementById('numeros-pantalla');
  let resultado = document.getElementById('resultado');
  let operandoB;
  let operacion;
  let operandoA;

  //Constantes números
  const UNO = document.getElementById('uno');
  const DOS = document.getElementById('dos');
  const TRES = document.getElementById('tres');
  const CUATRO = document.getElementById('cuatro');
  const CINCO = document.getElementById('cinco');
  const SEIS = document.getElementById('seis');
  const SIETE = document.getElementById('siete');
  const OCHO = document.getElementById('ocho');
  const NUEVE = document.getElementById('nueve');
  const CERO = document.getElementById('cero');

  //Constantes símbolos
  const EULER = document.getElementById('euler');
  const PI = document.getElementById('pi');
  const LIMPIAR = document.getElementById('borratodo');
  const BORRAR = document.getElementById('retroceso');
  const DIVISION = document.getElementById('division');
  const RAIZ = document.getElementById('raiz');
  const MULTIPLICACION = document.getElementById('multiplicacion');
  const POTENCIA = document.getElementById('potencia');
  const RESTA = document.getElementById('resta');
  const IGUAL = document.getElementById('igual');
  const PUNTO = document.getElementById('punto');
  const MODULO = document.getElementById('sobrante');
  const SUMA = document.getElementById('suma');

  //Eventos números
  UNO.onclick = function(e){
    numsPantalla.textContent = numsPantalla.textContent + '1';
    operaPantalla.textContent = operaPantalla.textContent + numsPantalla.textContent;
  }
  DOS.onclick = function(e){
    numsPantalla.textContent = numsPantalla.textContent + '2';
  }
  TRES.onclick = function(e){
    numsPantalla.textContent = numsPantalla.textContent + '3';
  }
  CUATRO.onclick = function(e){
    numsPantalla.textContent = numsPantalla.textContent + '4';
  }
  CINCO.onclick = function(e){
    numsPantalla.textContent = numsPantalla.textContent + '5';
  }
  SEIS.onclick = function(e){
    numsPantalla.textContent = numsPantalla.textContent + '6';
  }
  SIETE.onclick = function(e){
    numsPantalla.textContent = numsPantalla.textContent + '7';
  }
  OCHO.onclick = function(e){
    numsPantalla.textContent = numsPantalla.textContent + '8';
  }
  NUEVE.onclick = function(e){
    numsPantalla.textContent = numsPantalla.textContent + '9';
  }
  CERO.onclick = function(e){
    numsPantalla.textContent = numsPantalla.textContent + '0';
  }

  //Eventos símbolos
  EULER.onclick = function(e){
    numsPantalla.textContent = numsPantalla.textContent + '2.71828';
  }
  PI.onclick = function(e){
    numsPantalla.textContent = numsPantalla.textContent + '3.141593';
  }
  DIVISION.onclick = function(e){
    numsPantalla.textContent = numsPantalla.textContent + '÷';
    operandoA = numsPantalla.textContent;
    operacion = '/';
    guardar();
  }
  RAIZ.onclick = function(e){
    operaPantalla.textContent = numsPantalla.textContent + '√';
    operacion = '√'
  }
  MULTIPLICACION.onclick = function(e){
    numsPantalla.textContent = numsPantalla.textContent + 'x';
    operandoA = numsPantalla.textContent;
    operacion = '*';
    guardar();
  }
  POTENCIA.onclick = function(e){
    numsPantalla.textContent = numsPantalla.textContent + '^';
    operandoA = numsPantalla.textContent;
    operacion = '^';
    guardar();
  }
  RESTA.onclick = function(e){
    numsPantalla.textContent = numsPantalla.textContent + '-';
    operandoA = numsPantalla.textContent;
    operacion = '-';
    guardar();
  }
  PUNTO.onclick = function(e){
    numsPantalla.textContent = numsPantalla.textContent + '.';
  }
  SUMA.onclick = function(e){
    numsPantalla.textContent = numsPantalla.textContent + '+';
    operandoA = numsPantalla.textContent;
    operacion = '+';
    guardar();
  }
  LIMPIAR.onclick = function(e){
    reset();
  }
  BORRAR.onclick = function(e){
    numsPantalla.textContent = numsPantalla.textContent.toString().slice(0,-1);
  }
  IGUAL.onclick = function(e){
    operandoB = numsPantalla.textContent;
    resolver(); 
  }
  MODULO.onclick = function(e){
    numsPantalla.textContent = numsPantalla.textContent + '%';
    operandoA = numsPantalla.textContent;
    operacion = '%';
    guardar();
  }

  //funciones
  function reset(){
    operaPantalla.textContent = '';
    numsPantalla.textContent = '';
    resultado.textContent= '';
    operandoA = 0;
    operandoB = 0;
    operacion = '';
  }

  function guardar(){
    operaPantalla.textContent = numsPantalla.textContent;
    numsPantalla.textContent = '';
  }

  function resolver(){
    let result = 0;
    switch(operacion){
      case '+':
        result = parseFloat(operandoA) + parseFloat(operandoB);
        break;
      case '-':
        result = parseFloat(operandoA) - parseFloat(operandoB);
        break;
      case '*':
        result = parseFloat(operandoA) * parseFloat(operandoB);
        break;
      case '/':
        result = parseFloat(operandoA) / parseFloat(operandoB);
        break;
      case '%':
        result = parseFloat(operandoA) % parseFloat(operandoB);
        break;
      case '√':
        result = Math.sqrt(parseFloat(operandoB));
        break;
      case '^':
        result = Math.pow((parseFloat(operandoA)), (parseFloat(operandoB)));
        break;
    }
    reset();
    resultado.textContent = result;
  }
}