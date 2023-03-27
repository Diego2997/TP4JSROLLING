// Clase para un contacto
class Contacto {
  #nombre;
  #telefono;
  constructor(nombre, telefono) {
    this.#nombre = nombre;
    this.#telefono = telefono;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  get telefono() {
    return this.#telefono;
  }
  set telefono(nuevoTelefono) {
    this.#telefono = nuevoTelefono;
  }
}

// Clase para la agenda telefónica
class Agenda {
  #tamanio;
  #contactos;
  constructor(tamanio = 10) {
    this.#tamanio = tamanio;
    this.#contactos = [];
  }
  get tamanio() {
    return this.#tamanio;
  }
  set tamanio(nuevo) {
    this.#tamanio = nuevo;
  }

  // Método para añadir un contacto a la agenda
  agregarContacto(contacto) {
    if (this.#contactos.length < this.#tamanio) {
      this.#contactos.push(contacto);
      alert(`Contacto ${contacto.nombre} añadido a la agenda.`);
    } else {
      alert("La agenda está llena, no se puede añadir el contacto.");
    }
  }

  // Método para comprobar si un contacto ya existe en la agenda
  existeContacto(contacto) {
    for (let i = 0; i < this.#contactos.length; i++) {
      if (this.#contactos[i].nombre === contacto.nombre) {
        return true;
      }
    }
    return false;
  }

  // Método para listar todos los contactos de la agenda
  listarContactos() {
    for (let i = 0; i < this.#contactos.length; i++) {
      alert(
        `Contactos en la agenda - ${this.#contactos[i].nombre}: ${
          this.#contactos[i].telefono
        }`
      );
    }
  }

  // Método para buscar un contacto por su nombre
  buscarContacto(nombre) {
    let encontrado = false;
    for (let i = 0; i < this.#contactos.length; i++) {
      if (this.#contactos[i].nombre === nombre) {
        alert(`El teléfono de ${nombre} es ${this.#contactos[i].telefono}.`);
        encontrado = true;
        break;
      }
    }
    if (!encontrado)
      alert(`No se ha encontrado ningún contacto con el nombre ${nombre}.`);
  }

  // Método para eliminar un contacto de la agenda
  eliminarContacto(contacto) {
    for (let i = 0; i < this.#contactos.length; i++) {
      if (this.#contactos[i].nombre === contacto.nombre) {
        this.#contactos.splice(i, 1);
        alert(`Contacto ${contacto.nombre} eliminado de la agenda.`);
        return;
      }
    }
    alert(
      `No se ha encontrado ningún contacto con el nombre ${contacto.nombre}.`
    );
  }

  // Método para comprobar si la agenda está llena
  agendaLlena() {
    return this.#contactos.length === this.#tamanio;
  }

  // Método para comprobar cuántos contactos más podemos añadir a la agenda
  huecosLibres() {
    return this.#tamanio - this.#contactos.length;
  }
}

// Crear una agenda con un tamaño de 5 contactos
const agenda = new Agenda(5);

// Menú para interactuar con la agenda
let bucle = 0;
while (bucle != 5) {
  const opcion = prompt(
    `Elige una opción:\n1. Añadir contacto\n2. Buscar contacto\n3. Eliminar contacto\n4. Listar contactos\n5. Salir`
  );

  switch (opcion) {
    case "1":
      const nombre = prompt("Introduce el nombre del contacto:");
      const telefono = prompt("Introduce el teléfono del contacto:");
      const nuevoContacto = new Contacto(nombre, telefono);
      if (agenda.existeContacto(nuevoContacto)) {
        alert(`El contacto ${nuevoContacto.nombre} ya existe en la agenda.`);
      } else {
        agenda.agregarContacto(nuevoContacto);
      }
      break;
    case "2":
      const nombreABuscar = prompt(
        "Introduce el nombre del contacto que quieres buscar:"
      );
      agenda.buscarContacto(nombreABuscar);
      break;

    case "3":
      const nombreAEliminar = prompt(
        "Introduce el nombre del contacto que quieres eliminar:"
      );
      const contactoAEliminar = new Contacto(nombreAEliminar, "");
      agenda.eliminarContacto(contactoAEliminar);
      break;

    case "4":
      agenda.listarContactos();
      break;

    case "5":
      alert("Saliendo de la agenda.");
      bucle = 5;
      break;

    default:
      alert("Opción no válida.");
  }
}
