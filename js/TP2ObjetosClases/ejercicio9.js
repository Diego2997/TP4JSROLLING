// Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado.

class Animal {
  #nombre;
  #edad;
  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.#edad = edad;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  get edad() {
    return this.#edad;
  }
  set edad(nuevaEdad) {
    this.edad = nuevaEdad;
  }

  emitirSonido() {
    document.write("Sonido de un animal");
  }
}

class Perro extends Animal {
  constructor(nombre, edad) {
    super(nombre, edad);
  }

  emitirSonido() {
    document.write("Guau guau!");
  }
}

class Gato extends Animal {
  constructor(nombre, edad) {
    super(nombre, edad);
  }

  emitirSonido() {
    document.write("Miau miau!");
  }
}

const miPerro = new Perro("Fido", 3);
miPerro.emitirSonido();

const miGato = new Gato("Garfield", 5);
miGato.emitirSonido();
