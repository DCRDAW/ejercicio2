/*
  Ejercicio 2
  Programa la función comprobarEdad para comprobar si la fecha introducida en el campo de fecha
  corresponde a alguien mayor de 18 años o no.
  La función mostrará un mensaje por consola indicando si es mayor de edad o no.
  Autor: Diego Carrión Rodríguez
	Licencia: GPL V3 o superior
*/

'use strict'

//funcion que recibe la fecha y devuelve si es mayor de edad o no
function comprobarEdad(fechaString) {
  var hoy = new Date();
  var fechaNacimiento = new Date(fechaString);
  var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  var m = hoy.getMonth() - fechaNacimiento.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
    edad--;
  }
  if (edad>=18){
    document.write("<h1>mayor que 18</h1>")
  }else{
    document.write("<h1>menor que 18</h1>")
  }
}


