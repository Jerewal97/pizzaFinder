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


// Variables para obtener los valores del index

const inputElement = document.getElementById("inputNumber");
const btnEnviar = document.getElementById("btnEnviar");
const graficarContainer = document.getElementById("graficarContainer");


// Capturar el valor que el usuario ingresa mediante el evento Click

btnEnviar.addEventListener('click', function (e) {
  e.preventDefault();
  const valorIngresado = parseFloat(inputElement.value);


  // Verificación para saber si nos pasa un número
  if (isNaN(valorIngresado)) {
    mostrarMensajeError("Por favor, ingresa un número.");
  } else {
    const encontrarPizza = buscarPizzaPorId(valorIngresado);

    if (encontrarPizza) {
      const resultadoPizza = `
        <img src="${encontrarPizza.imagen}" alt="${encontrarPizza.nombre}" width="400">
      `;
      mostrarResultado(resultadoPizza);
      console.log(resultadoPizza);
    } else {
      mostrarMensajeError("No se encontró ninguna pizza.");
    }
  }
});


// Función para buscar las pizzas por ID.

function buscarPizzaPorId (id) {
  return pizzas.find(pizza => pizza.id === id);
}


function mostrarResultado (html) {
  graficarContainer.innerHTML = html;
}

function mostrarMensajeError(mensaje) {
  graficarContainer.innerHTML = `<p class="error">${mensaje}</p>`;
}



