// Pedir al usuario que ingrese su nombre

function saludar() {
  let nombre = prompt('Bienvenido a ProCine! Por favor ingrese su nombre');
  if (nombre === null || nombre === '') {
    alert('Disfrute de su visita a ProCine!');
  } else {
    alert(`Hola ${nombre}, disfrute de su visita a ProCine!`);
  }
}

saludar();

// Seleccion de peliculas en cartelera

function seleccionCartelera() {
  let peliculas = [' La Barby\n', ' Rapidos y Furiosos 18\n', ' Mision Super Imposible\n', ' El Openjaimer\n', ' Los Transformes Tesla\n'];
  let mensajePeliculas = 'Peliculas en cartelera:\n';

  for (let numPelicula = 0; numPelicula < peliculas.length; numPelicula++) {
    mensajePeliculas += (numPelicula + 1) + peliculas[numPelicula];
  }

  mensajePeliculas += 'Por favor, ingrese el número de la película que le gustaría ver';

  let eleccionPelicula = prompt(mensajePeliculas);

  if (eleccionPelicula === null) {
    alert('Gracias por visitarnos, Esperamos vuelvas pronto');
  } else {
    eleccionPelicula = parseInt(eleccionPelicula);

    if (!isNaN(eleccionPelicula) && eleccionPelicula >= 1 && eleccionPelicula <= peliculas.length) {
      alert(peliculas[eleccionPelicula - 1] + 'Gran eleccion! ');
    } else {
      alert('Opción inválida, por favor ingrese un número válido');
    }
  }
}

seleccionCartelera();

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

ventaDeEntradas();
