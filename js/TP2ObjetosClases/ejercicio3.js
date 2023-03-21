// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo {
  constructor(alto, ancho) {
    (this.alto = alto), (this.ancho = ancho);
  }
  setAlto(alto) {
    this.alto = alto;
  }

  setAncho(ancho) {
    this.ancho = ancho;
  }
  getAlto() {
    console.log(`Alto: ${this.alto}`);
  }

  getAncho() {
    console.log(`Ancho: ${this.ancho}`);
  }

  calcularPerimetro() {
    return 2 * (this.alto + this.ancho);
  }
  calcularArea() {
    return this.alto * this.ancho;
  }
}
