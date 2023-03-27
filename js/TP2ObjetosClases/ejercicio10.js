// 10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
// Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

// Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.

// Clase Avión
class Avion {
  #nombre;
  #capacidad;
  #destino;
  #listaPasajeros;
  constructor(nombre, capacidad, destino, listaPasajeros) {
    this.#nombre = nombre;
    this.#capacidad = capacidad;
    this.#destino = destino;
    this.#listaPasajeros = listaPasajeros || [];
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  get capadidad() {
    return this.#capacidad;
  }
  set capacidad(nuevaCapacidad) {
    this.#capacidad = nuevaCapacidad;
  }
  get destino() {
    return this.#destino;
  }
  set destino(nuevoDestino) {
    this.#destino = nuevoDestino;
  }

  abordar(pasajero) {
    if (this.#listaPasajeros.length < this.#capacidad) {
      this.#listaPasajeros.push(pasajero);
      alert(`El pasajero ${pasajero} ha abordado el avión ${this.#nombre}.`);
    } else {
      alert(`Lo siento, el avión ${this.#nombre} está lleno.`);
    }
  }
}

// Clase Aeropuerto
class Aeropuerto {
  #nombreAeropuerto;
  #listaAviones;
  constructor(nombreAeropuerto, listaAviones) {
    this.#nombreAeropuerto = nombreAeropuerto;
    this.#listaAviones = listaAviones || [];
  }
  get nombreAeropuerto() {
    return this.#nombreAeropuerto;
  }
  set nombreAeropuerto(nuevoNombreAeropuerto) {
    this.#nombreAeropuerto = nuevoNombreAeropuerto;
  }

  agregarAvion(avion) {
    this.#listaAviones.push(avion);
    alert(
      `El avión ${avion.nombre} ha sido agregado al aeropuerto ${
        this.#nombreAeropuerto
      }.`
    );
  }

  buscarAvion(nombreAvion) {
    const avionEncontrado = this.#listaAviones.find(
      (avion) => avion.nombre === nombreAvion
    );
    if (avionEncontrado) {
      alert(
        `El avión ${avionEncontrado.nombre} tiene destino a ${avionEncontrado.destino}.`
      );
      return avionEncontrado;
    } else {
      alert(
        `No se encontró el avión ${nombreAvion} en el aeropuerto ${
          this.#nombreAeropuerto
        }.`
      );
      return null;
    }
  }
}

// Crear el objeto de tipo Aeropuerto
const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");

// Crear 3 objetos de tipo Avión
const avion1 = new Avion("Avión 1", 100, "Buenos Aires");
const avion2 = new Avion("Avión 2", 80, "Tierra del Fuego");
const avion3 = new Avion("Avión 3", 120, "Misiones");

// Agregar los 3 aviones al aeropuerto
aeropuertoInternacional.agregarAvion(avion1);
aeropuertoInternacional.agregarAvion(avion2);
aeropuertoInternacional.agregarAvion(avion3);

// Buscar un avión y usar el método abordar
const avionEncontrado = aeropuertoInternacional.buscarAvion("Avión 1");
if (avionEncontrado) {
  avionEncontrado.abordar("Juan");
}
