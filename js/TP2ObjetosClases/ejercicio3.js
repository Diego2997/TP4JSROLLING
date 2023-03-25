// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo {
  #alto;
  #ancho;
  constructor(alto, ancho) {
    (this.#alto = alto), (this.#ancho = ancho);
  }
  set alto(alto) {
    this.#alto = alto;
  }

  set ancho(ancho) {
    this.#ancho = ancho;
  }
  get alto() {
    console.log(`Alto: ${this.#alto}`);
  }

  get ancho() {
    console.log(`Ancho: ${this.#ancho}`);
  }

  calcularPerimetro() {
    return 2 * (this.#alto + this.#ancho);
  }
  calcularArea() {
    return this.#alto * this.#ancho;
  }
}

let rectangulo1 = new Rectangulo(2, 3);
document.write(rectangulo1.calcularArea());
