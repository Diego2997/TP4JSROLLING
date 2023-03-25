// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto {
  #codigo;
  #nombre;
  #precio;
  constructor(codigo, nombre, precio) {
    this.#codigo = codigo;
    this.#nombre = nombre;
    this.#precio = precio;
  }
  get codigo() {
    return this.#codigo;
  }
  set codigo(nuevoCodigo) {
    this.#codigo = nuevoCodigo;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  get precio() {
    return this.#precio;
  }
  set precio(nuevoPrecio) {
    this.#precio = nuevoPrecio;
  }

  Imprimir() {
    return `El codigo del producto es ${this.#codigo} , nombre ${
      this.#nombre
    } y vale ${this.#precio} `;
  }
}
let producto1 = new Producto("E3MS-CVGT-LU5S-AEHJ", "Lapicera", 150);
let producto2 = new Producto("E3MS-CVGT-LU5S-AEHJ", "Cuaderno", 1000);
let producto3 = new Producto("E3MS-CVGT-LU5S-AEHJ", "Liquido Corrector", 500);
let arregloProductos = [producto1, producto2, producto3];

for (let i = 0; i < 3; i++) {
  document.write(arregloProductos[i].Imprimir());
  document.write("<br>");
}
