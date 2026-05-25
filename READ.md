# 🌿 Fibonacci en el Diseño Natural

**Desafío Web · Matemáticas que resuelven problemas**  
INF-111 · Universidad Mayor de San Andrés (UMSA) · 2025

---

## 📋 Descripción

Página web interactiva que aplica la **serie de Fibonacci** para modelar el crecimiento de niveles de una planta, explicando cómo la naturaleza usa este patrón matemático para optimizar el espacio y la captación de luz.

## 🚀 Ver el proyecto

- **Repositorio:** [github.com/tu-usuario/desafio-fibonacci-primos](#)
- **Página publicada:** [tu-usuario.github.io/desafio-fibonacci-primos](#)

---

## 📁 Estructura del proyecto

```
desafio-fibonacci-primos/
│
├── index.html          ← Estructura HTML de la página
├── css/
│   └── estilos.css     ← Diseño visual y responsivo
├── js/
│   └── script.js       ← Lógica de Fibonacci con JavaScript
└── README.md           ← Este archivo
```

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura de la página |
| CSS3 | Diseño visual y responsivo |
| JavaScript | Lógica del algoritmo de Fibonacci |
| Git / GitHub | Control de versiones |
| GitHub Pages | Publicación del sitio |

## ✅ Requisitos del desafío cumplidos

- [x] Uso obligatorio de `document.getElementById()`
- [x] Formulario para ingreso de datos
- [x] Resultados mostrados en pantalla (no solo en consola)
- [x] Diseño responsivo (celular, tablet, computadora)
- [x] Código organizado en HTML, CSS y JavaScript separados

## 🧮 Algoritmo

La serie de Fibonacci se calcula **sin arreglos**, usando solo variables simples:

```javascript
var a = 0;
var b = 1;
var c;

for (var nivel = 1; nivel <= niveles; nivel++) {
    // b contiene el término actual
    c = a + b;
    a = b;
    b = c;
}
```

---

*Proyecto académico · UMSA · Bolivia*
