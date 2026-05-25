// ===================================================
// script.js — Fibonacci en el Diseño Natural
// INF-111 · UMSA
// ===================================================
// IMPORTANTE: Todo acceso al HTML se hace mediante
// document.getElementById() según los requisitos
// del desafío. No se usan arrays para la serie.
// ===================================================

/**
 * Función principal que se ejecuta al presionar el botón.
 * Lee el formulario, valida, calcula y muestra resultados.
 */
function calcularFibonacci() {

  // --- 1. LEER DATOS DEL FORMULARIO ---
  // Se usa getElementById() obligatoriamente
  var inputNiveles    = document.getElementById("niveles");
  var inputPlanta     = document.getElementById("nombre-planta");
  var divResultado    = document.getElementById("resultado");
  var divError        = document.getElementById("mensaje-error");
  var resumenDiv      = document.getElementById("resultado-resumen");
  var tablaBody       = document.getElementById("tabla-fibonacci");
  var totalDiv        = document.getElementById("resultado-total");

  var niveles = parseInt(inputNiveles.value);
  var nombrePlanta = inputPlanta.value.trim();

  // --- 2. OCULTAR MENSAJES PREVIOS ---
  divResultado.style.display = "none";
  divError.style.display     = "none";

  // --- 3. VALIDAR ENTRADA ---
  if (isNaN(niveles) || niveles < 1 || niveles > 30) {
    divError.innerHTML = "⚠️ Por favor ingresa un número entre 1 y 30 para los niveles de crecimiento.";
    divError.style.display = "block";
    return;  // detener ejecución si hay error
  }

  // --- 4. CALCULAR LA SERIE DE FIBONACCI SIN ARREGLOS ---
  // Usamos solo variables simples: a, b, c
  // a = término anterior anterior
  // b = término anterior
  // c = término actual (a + b)

  var a = 0;  // término F(0) - no se muestra, es base
  var b = 1;  // término F(1) - primer nivel
  var c;      // variable temporal para el siguiente

  var totalRamas = 0;    // acumulador de ramas totales
  var filasHTML  = "";   // texto HTML que iremos construyendo

  for (var nivel = 1; nivel <= niveles; nivel++) {

    // En cada iteración, "b" contiene el término actual de Fibonacci
    var ramasNivel = b;
    totalRamas     = totalRamas + ramasNivel;

    // Calcular el ancho de la barra visual (máximo 200px)
    // Se usa una escala logarítmica para que no explote en pantalla
    var anchoMaximo = 200;
    var anchoBarra  = Math.min(ramasNivel * 8, anchoMaximo);
    if (anchoBarra < 4) anchoBarra = 4;

    // Construir la fila de la tabla
    filasHTML = filasHTML +
      "<tr>" +
        "<td><strong>" + nivel + "</strong></td>" +
        "<td>" + ramasNivel + "</td>" +
        "<td>" + totalRamas + "</td>" +
        "<td>" +
          "<span class='barra-visual' style='width:" + anchoBarra + "px'></span>" +
          " " + ramasNivel +
        "</td>" +
      "</tr>";

    // Avanzar al siguiente término de Fibonacci
    c = a + b;
    a = b;
    b = c;
  }

  // --- 5. MOSTRAR RESULTADOS EN LA PÁGINA ---
  // Preparar texto del resumen
  var nombreMostrar = (nombrePlanta !== "") ? nombrePlanta : "la planta";

  resumenDiv.innerHTML =
    "Patrón de crecimiento de <em>" + nombreMostrar + "</em> " +
    "en <strong>" + niveles + " niveles</strong>";

  // Llenar la tabla con las filas calculadas
  tablaBody.innerHTML = filasHTML;

  // Mostrar el total
  totalDiv.innerHTML =
    "🌿 Total de ramas en todos los niveles: <strong>" + totalRamas + " ramas</strong>" +
    "<br><small>Estos números siguen exactamente la serie de Fibonacci, " +
    "el mismo patrón que usa la naturaleza para optimizar el espacio.</small>";

  // Hacer visible el bloque de resultados con animación
  divResultado.style.display = "block";

  // Desplazarse suavemente hacia los resultados
  divResultado.scrollIntoView({ behavior: "smooth", block: "start" });
}


// ===================================================
// FUNCIÓN AUXILIAR: verificar si un número es primo
// (incluida para referencia del algoritmo del desafío)
// ===================================================
function esPrimo(numero) {
  if (numero < 2) return false;

  var contador = 0;

  // Contamos cuántos divisores tiene el número
  for (var i = 1; i <= numero; i++) {
    if (numero % i == 0) {
      contador = contador + 1;
    }
  }

  // Un primo solo tiene exactamente 2 divisores: 1 y sí mismo
  return (contador == 2);
}