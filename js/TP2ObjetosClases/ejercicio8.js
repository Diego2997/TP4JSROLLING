// 8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".

class Persona {
  #nombre;
  #edad;
  #profesion;
  constructor(nombre, edad, profesion) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#profesion = profesion;
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
    this.#edad = nuevaEdad;
  }
  get profesion() {
    return this.#profesion;
  }
  set profesion(nuevaProfesion) {
    this.#profesion = nuevaProfesion;
  }

  Saludar() {
    document.write(`Hola ${this.#nombre}`);
  }
  Despedirse() {
    document.write(`Adios ${this.#nombre}`);
  }
}

let persona1 = new Persona("Diego", 25, "Profesor Ed Fisica");
let persona2 = new Persona("Pepito", 50, "Programador");
let arreglo = [persona1, persona2];

for (let i = 0; i < arreglo.length; i++) {
  arreglo[i].Saludar(), arreglo[i].Despedirse();
}
