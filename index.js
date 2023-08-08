const pizzas = [
{
  id: 1,
  nombre: "pizza de Muzzarella",
  precio: 500,
  ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  imagen: "./img/muzzarella.png",
},

{
  id: 2,
  nombre: "pizza de Cebolla",
  precio: 1500,
  ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  imagen: "./img/cebolla.png",
},

{
  id: 3,
  nombre: "pizza 4 Quesos",
  precio: 1380,
  ingredientes: [
    "Muzzarella",
    "Tomate",
    "Queso Azul",
    "Parmesano",
    "Roquefort",
  ],
  imagen: "./img/4quesos.png",
},

{
  id: 4,
  nombre: "pizza Especial",
  precio: 1000,
  ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
  imagen: "./img/especial.png",
},

{
  id: 5,
  nombre: "pizza con Anana",
  precio: 600,
  ingredientes: ["Muzzarella", "Tomate", "Anana"],
  imagen: "./img/anana.png",
},
];

const inputElement = document.getElementById("inputNumber");
const btnEnviar = document.getElementById("btnEnviar");
const graficarContainer = document.getElementById("graficarContainer");



// Función para capturar el click

btnEnviar.addEventListener("click", function (e) {
  e.preventDefault();
  const valorIngresado = parseInt(inputElement.value);

  if (isNaN(valorIngresado)) {
    mostrarMensajeError("Por favor, ingresa un número.");
  } else {
    const encontrarPizza = buscarPizzaPorId(valorIngresado);

    if (encontrarPizza) {
      mostrarResultado(encontrarPizza);
      localStorage.setItem("pizzaEncontrada", JSON.stringify(encontrarPizza));
      mostrarUltimaPizzaEncontrada();
    } else {
      mostrarMensajeError("No se encontró ninguna pizza con el ID proporcionado.");
    }
  }
});


// Función para capturar el enter del usuario

inputElement.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    const valorIngresado = parseInt(inputElement.value);

    if (!isNaN(valorIngresado)) {
      const encontrarPizza = buscarPizzaPorId(valorIngresado);

      if (encontrarPizza) {
        mostrarResultado(encontrarPizza);
        localStorage.setItem("pizzaEncontrada", JSON.stringify(encontrarPizza));
        mostrarUltimaPizzaEncontrada();
      } else {
        mostrarMensajeError("No se encontró ninguna pizza con el ID proporcionado.");
      }
    }
  }
});


// Función para buscar las pizzas por ID

function buscarPizzaPorId(id) {
  return pizzas.find((pizza) => pizza.id === id);
}

function mostrarResultado(pizza) {
  const resultadoPizza = `
  <div class="pizza__card">
    <h3 class="pizza__title">${pizza.nombre}</h3>
    <img src="${pizza.imagen}" alt="${pizza.nombre}" class="pizza__image">
    <p class="pizza__paragraph">Ingredientes:</p>
    <ul>
      ${pizza.ingredientes.map(ingrediente => `<li class="pizza__ingredientes">${ingrediente}</li>`).join("")}
    </ul>
    <p class="pizza__precio">Precio: $${pizza.precio}</p>
  </div>  
  `;
  graficarContainer.innerHTML = resultadoPizza;
}


// Mostrar mensaje de error

function mostrarMensajeError(mensaje) {
  graficarContainer.innerHTML = `<div class="error__mensaje">${mensaje}</div>`;
}


// Funcion para evitar errores antes de que el DOM este cargado completamente

document.addEventListener("DOMContentLoaded", function () {
  const pizzaEncontradaStr = localStorage.getItem("pizzaEncontrada");
  if (pizzaEncontradaStr) {
    const pizzaEncontrada = JSON.parse(pizzaEncontradaStr);
    mostrarResultado(pizzaEncontrada);
  }
});

// Funcion para preservar la ultima pizza por ID encontrada

window.addEventListener("unload", () => {
  const pizzaEncontrada = JSON.parse(localStorage.getItem("pizzaEncontrada"));
  if (pizzaEncontrada) {
    localStorage.setItem("pizzaEncontrada", JSON.stringify(pizzaEncontrada));
  }
});

