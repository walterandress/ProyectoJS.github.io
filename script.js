class Pelicula {
  constructor(titulo, genero, duracion, lanzamiento) {
    this.titulo = titulo;
    this.genero = genero;
    this.duracion = duracion;
    this.lanzamiento = lanzamiento;
  }
}

const peliculas = [];

// Guardar datos de la compra en localStorage
const guardarDatosEnLocalStorage = () => {
  const seleccionarPelicula = document.getElementById('pelicula');
  const seleccionarDia = document.getElementById('dia');
  const seleccionarEntrada = document.getElementById('entrada');
  const seleccionarSnacks = document.getElementById('snacks');
  const precioTotal = document.getElementById('totalCarrito');

  const tipoDeEntradaSeleccionada = seleccionarEntrada.value;
  const snacksSeleccionados = seleccionarSnacks.value;
  const precioFinal = parseFloat(precioTotal.textContent.replace(' pesos', ''));

  const datosCompra = {
    pelicula: seleccionarPelicula.value,
    dia: seleccionarDia.value,
    entrada: tipoDeEntradaSeleccionada,
    snacks: snacksSeleccionados,
    precioTotal: precioFinal,
  };

  localStorage.setItem('datosCompra', JSON.stringify(datosCompra));
};

// Cargar datos en localStorage
const cargarDatosDesdeLocalStorage = () => {
  const datosGuardados = localStorage.getItem('datosCompra');
  if (datosGuardados) {
    const datosCompra = JSON.parse(datosGuardados);

    // Actualizar datos cargados
    const seleccionarPelicula = document.getElementById('pelicula');
    const seleccionarDia = document.getElementById('dia');
    const seleccionarEntrada = document.getElementById('entrada');
    const seleccionarSnacks = document.getElementById('snacks');

    seleccionarPelicula.value = datosCompra.pelicula;
    seleccionarDia.value = datosCompra.dia;
    seleccionarEntrada.value = datosCompra.entrada;
    seleccionarSnacks.value = datosCompra.snacks;
    calcularPrecioTotal();
  }
};

document.addEventListener('DOMContentLoaded', () => {
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

  // Cargar datos desde el JSON 
  fetch('./data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      data.forEach(item => {
        const pelicula = new Pelicula(item.titulo, item.genero, item.duracion, item.lanzamiento);
        peliculas.push(pelicula);
      });
    })
    .catch(error => console.error('Error al cargar las películas:', error));

  seleccionarGenero.dispatchEvent(new Event('change'));
});

const diasSemana = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];

const preciosEntradas = {
  general: 380,
  vip: 410,
  estudiante: 330
};

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

  let precioBase = preciosEntradas[tipoDeEntradaSeleccionada];
  let precioFinal = precioBase;

  if (diaSeleccionado === 'lunes' || diaSeleccionado === 'martes') {
    precioFinal *= 0.8;
  }

  let precioSnack = 0;
  if (snacksSeleccionados !== 'ninguno') {
    precioSnack = preciosSnacks[snacksSeleccionados];
  }

  precioFinal += precioSnack;

  precioTotal.textContent = `${precioFinal} pesos`;

  // mostrar certel
  const botonPagar = document.querySelector('button[type="submit"]');
  botonPagar.addEventListener('click', () => {
    mostrarAgradecimiento();
  });
}

function mostrarAgradecimiento() {
  Swal.fire('¡Gracias por su compra!', '', 'success');
}

const formularioPeliculas = document.getElementById('formularioPeliculas');
formularioPeliculas.addEventListener('submit', event => {
  event.preventDefault();
  calcularPrecioTotal();
});

// codigo para la compra de entradas y eventos
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

// sugar syntax 
const saludar = () => {
  console.log('¡Hola! Bienvenido a ProCine.');
};

saludar();

