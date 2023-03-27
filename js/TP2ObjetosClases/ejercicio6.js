// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

class Libro {
  #ISBN;
  #titulo;
  #autor;
  #numeroPaginas;
  constructor(titulo, autor, numeroPaginas) {
    this.#ISBN = Math.floor(Math.random() * Math.pow(10, 13)); //Cuando se lo instacia se le asigna un numero aleatorio de 13 cifras
    this.#titulo = titulo;
    this.#autor = autor;
    this.#numeroPaginas = numeroPaginas;
  }
  get ISBN() {
    return this.#ISBN;
  }
  set ISBN(nuevo) {
    this.#ISBN = nuevo;
  }
  get titulo() {
    return this.#titulo;
  }
  set titulo(nuevoTitulo) {
    this.#titulo = nuevoTitulo;
  }
  get autor() {
    return this.#autor;
  }
  set autor(nuevoAutor) {
    //aunque seria raro un nuevo autor como tambien
    // un nuevo ISBN pero bueno le hago el set porque lo pide el enunciado
    this.#autor = nuevoAutor;
  }
  get numeroPaginas() {
    return this.#numeroPaginas;
  }
  set numeroPaginas(nuevoNumeroPaginas) {
    this.#numeroPaginas = nuevoNumeroPaginas;
  }
  mostrarLibro() {
    return `El libro ${this.#titulo} con ISBN ${
      this.#ISBN
    } creado por el autor ${this.#autor} tiene ${this.#numeroPaginas} paginas`;
  }
}

let libro1 = new Libro("Martin Fierro", "Jose Hernandez", 252);
let libro2 = new Libro(
  "El Ingenioso Hidalgo Don Quijote De La Mancha",
  "Miguel de Cervantes",
  702
);

document.write(libro1.mostrarLibro() + "<br>");
document.write(libro2.mostrarLibro() + "<br>");

if (libro1.numeroPaginas > libro2.numeroPaginas) {
  document.write(`El libro ${libro1.titulo} tiene mas paginas `);
} else {
  document.write(`El libro ${libro2.titulo} tiene mas paginas `);
}
