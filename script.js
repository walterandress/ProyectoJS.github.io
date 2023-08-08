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
  { titulo: 'Risas en el Parque', genero: 'Comedia', duracion: '2h', lanzamiento: 2023 },
  { titulo: 'Rapidos y Furiosos', genero: 'Accion', duracion: '2h 30m', lanzamiento: 2023 },
  { titulo: 'Mision Imposible', genero: 'Accion', duracion: '2h 15m', lanzamiento: 2023 },
  { titulo: 'Oppenheimer', genero: 'Drama', duracion: '1h 50m', lanzamiento: 2023 },
  { titulo: 'Secretos Oscuros', genero: 'Drama', duracion: '1h 58m', lanzamiento: 2023 },
  { titulo: 'Transformers', genero: 'Ciencia ficcion', duracion: '2h 10m', lanzamiento: 2023 },
  { titulo: 'Viaje a las Estrellas', genero: 'Ciencia ficcion', duracion: '2h 30m', lanzamiento: 2023 },
  { titulo: 'Pesadillas en la Noche', genero: 'Terror', duracion: '1h 40m', lanzamiento: 2023 },
  { titulo: 'La Casa del Horror', genero: 'Terror', duracion: '2h', lanzamiento: 2023 },
];

// Pedir al usuario que ingrese su nombre
function saludar() {
  let nombre = prompt('Bienvenido a ProCine! Por favor ingrese su nombre');
  if (nombre === null || nombre === '') {
    alert('Disfrute de su visita a ProCine!');
  } else {
    alert(`Hola ${nombre}, disfrute de su visita a ProCine!`);
  }
}

// Funcion que filtra las peliculas por su genero y permite seleccionar una
function filtrarYSeleccionarPelicula() {
  let generoSeleccionado = prompt('Ingrese su genero preferido:');

  if (generoSeleccionado) {
    const peliculasFiltradas = peliculas.filter(pelicula => pelicula.genero.toLowerCase() === generoSeleccionado.toLowerCase());

    if (peliculasFiltradas.length === 0) {
      alert('No se encontraron peliculas en ese genero');
    } else {
      let mensajePeliculas = 'Por favor seleccione una de nuestras peliculas en cartelera:\n ';
      
      peliculasFiltradas.forEach((pelicula, index) => {
        mensajePeliculas += (index + 1) + '. ' + pelicula.titulo + '\n';
      });

      let eleccionPelicula = prompt(mensajePeliculas + 'Por favor ingrese el numero de la pelicula que le gustaria ver');

      if (eleccionPelicula === null) {
        alert('Gracias por su visita, esperamos que vuelva pronto');
      } else {
        eleccionPelicula = parseInt(eleccionPelicula);

        if (!isNaN(eleccionPelicula) && eleccionPelicula >= 1 && eleccionPelicula <= peliculasFiltradas.length) {
          alert(peliculasFiltradas[eleccionPelicula - 1].titulo + ' Gran eleccion!');
        }
      }
    }
  } else {
    alert('No ingreso ningun genero');
  }
}

// Compras de las entradas
function ventaDeEntradas() {
  let precioBase = 250;
  let diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

  let diaSeleccionado = prompt('Bienvenido a la venta de entradas, seleccione un dia de la semana : \n' + '1-Lunes\n' + '2-Martes\n' + '3-Miercoles\n' + '4-Jueves\n' + '5-Viernes\n' + '6-Sabado\n' + '7-Domingo\n');

  diaSeleccionado = parseInt(diaSeleccionado);

  if (diaSeleccionado === 1 || diaSeleccionado === 2) {
    precioBase *= 0.8;
  }

  let tipoDeEntrada = prompt ('Seleccione el tipo de entrada:\n' + '1-General\n' + '2-VIP\n' + '3-Estudiante\n');
  
  tipoDeEntrada = parseInt(tipoDeEntrada);

  let precioFinal;
  switch (tipoDeEntrada) {
    case 1:
      precioFinal = precioBase;
      break;

    case 2:
      precioFinal = precioBase * 1.5;
      break;

    case 3:
      precioFinal = precioBase * 0.7;
      break;
    default:
      alert('Opcion no valida. Seleccione un tipo de entrada valida')
      return;
  }
  alert ('El precio final de la entrada para el dia ' + diasSemana[diaSeleccionado - 1] + ' es: $' + precioFinal);
}

// Llamadas de funciones 
saludar();
filtrarYSeleccionarPelicula();
ventaDeEntradas();