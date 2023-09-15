 // Clase pelicula y sus propiedades
 class Pelicula {
  titulo;
  genero;
  duracion;
  lanzamiento;
}

// Array con objetos de peliculas con sus propiedades
const peliculas = [
  { titulo: 'Barbi', genero: 'Comedia', duracion: '1h 45m', lanzamiento: 2023 },
  { titulo: 'Mario Bros', genero: 'Comedia', duracion: '2h', lanzamiento: 2023 },
  { titulo: 'Rapidos y Furiosos', genero: 'Accion', duracion: '2h 30m', lanzamiento: 2023 },
  { titulo: 'Mision Imposible', genero: 'Accion', duracion: '2h 15m', lanzamiento: 2023 },
  { titulo: 'Oppenheimer', genero: 'Drama', duracion: '1h 50m', lanzamiento: 2023 },
  { titulo: 'Detective Knight', genero: 'Drama', duracion: '1h 58m', lanzamiento: 2023 },
  { titulo: 'Transformers', genero: 'Ciencia ficcion', duracion: '2h 10m', lanzamiento: 2023 },
  { titulo: '65', genero: 'Ciencia ficcion', duracion: '2h 30m', lanzamiento: 2023 },
  { titulo: 'El exorcista del Papa', genero: 'Terror', duracion: '1h 40m', lanzamiento: 2023 },
  { titulo: 'M3gan', genero: 'Terror', duracion: '2h', lanzamiento: 2023 },
];

// Funcion para saludar al usuario
function saludar() {
  let nombre = prompt('Bienvenido a ProCine! Por favor ingrese su nombre');
  if (nombre === null || nombre === '') {
    alert('Disfrute de su visita a ProCine!');
  } else {
    alert(`Hola ${nombre}, disfrute de su visita a ProCine!`);
  }
}

// Filtrar peliculas por genero
document.addEventListener('DOMContentLoaded', function () {
  const seleccionarGenero = document.getElementById('genero');
  const seleccionarPelicula = document.getElementById('pelicula');

  seleccionarGenero.addEventListener('change', () => {
    const generoSeleccionado = seleccionarGenero.value;

    seleccionarPelicula.innerHTML = '';

    peliculas.forEach(pelicula => {
      if (generoSeleccionado === 'todos' || pelicula.genero === generoSeleccionado) {
        const option = document.createElement('option');
        option.value = pelicula.titulo;
        option.textContent = pelicula.titulo;
        seleccionarPelicula.appendChild(option);
      }
    });
  });

  seleccionarGenero.dispatchEvent(new Event('change'));
});

// Compra de entradas

// Dias de la semana
const diasSemana = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];

// Precios de las entradas
const preciosEntradas = {
  general: 380,
  vip: 410,
  estudiante: 330
};

// Precios de los snacks
const preciosSnacks = {
  grande: 345,
  mediano: 330,
  chico: 300
};

function calcularPrecioTotal() {
  const seleccionarDia = document.getElementById('dia');
  const seleccionarEntrada = document.getElementById('entrada');
  const seleccionarSnacks = document.getElementById('snacks');
  const precioTotal = document.getElementById('totalCarrito');

  const diaSeleccionado = seleccionarDia.value;
  const tipoDeEntradaSeleccionada = seleccionarEntrada.value;
  const snacksSeleccionados = seleccionarSnacks.value;

  // Obtener el precio base segun el tipo de entrada seleccionado
  const precioBase = preciosEntradas[tipoDeEntradaSeleccionada];

  // Aplicar descuento del 20%
  let precioFinal = precioBase;
  if (diaSeleccionado === 'lunes' || diaSeleccionado === 'martes') {
    precioFinal *= 0.8;
  }

  // Obtener el precio del snack seleccionado
  let precioSnack = 0;
  if (snacksSeleccionados !== 'ninguno') {
    precioSnack = preciosSnacks[snacksSeleccionados];
  }

  precioFinal += precioSnack;

  precioTotal.textContent = `${precioFinal} pesos`;

  // Guardar datos de la compra en localStorage
  const datosCompra = {
    pelicula: seleccionarPelicula.value,
    dia: seleccionarDia.value,
    entrada: tipoDeEntradaSeleccionada,
    snacks: snacksSeleccionados,
    precioTotal: precioFinal,
  };

  localStorage.setItem('datosCompra', JSON.stringify(datosCompra));
};

// Cargar datos almacenados en localStorage
function cargarDatosDesdeLocalStorage() {
  const datosGuardados = localStorage.getItem('datosCompra');
  if (datosGuardados) {
    const datosCompra = JSON.parse(datosGuardados);

    // Actualizar elementos en la pagina con datos cargados
    seleccionarPelicula.value = datosCompra.pelicula;
    seleccionarDia.value = datosCompra.dia;
    seleccionarEntrada.value = datosCompra.entrada;
    seleccionarSnacks.value = datosCompra.snacks;
    calcularPrecioTotal();
  }
};

let listado = document.getElementById('listado');

fetch('./data.json')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((producto) => {
      const li = document.createElement('li');

      li.innerHTML = `
      <h2>${producto.id}</h2>
      <p>${producto.nombre}</p>
      <p>${producto.genero}</p>
      <b>${producto.duracion}</b>
      <h2>${producto.id}</h2>
      `;

      listado.append(li);
    });
  });

// Asociar eventos
const seleccionarDia = document.getElementById('dia');
const seleccionarEntrada = document.getElementById('entrada');
const seleccionarSnacks = document.getElementById('snacks');

seleccionarDia.addEventListener('change', calcularPrecioTotal);
seleccionarEntrada.addEventListener('change', calcularPrecioTotal);
seleccionarSnacks.addEventListener('change', calcularPrecioTotal);

document.addEventListener('DOMContentLoaded', function () {
  const seleccionarGenero = document.getElementById('genero');
  const seleccionarPelicula = document.getElementById('pelicula');

  seleccionarGenero.addEventListener('change', () => {
    const generoSeleccionado = seleccionarGenero.value;

    seleccionarPelicula.innerHTML = '';

    peliculas.forEach(pelicula => {
      if (generoSeleccionado === 'todos' || pelicula.genero === generoSeleccionado) {
        const option = document.createElement('option');
        option.value = pelicula.titulo;
        option.textContent = pelicula.titulo;
        seleccionarPelicula.appendChild(option);
      }
    });
  });

  seleccionarGenero.dispatchEvent(new Event('change'));

  cargarDatosDesdeLocalStorage();
});

saludar();
