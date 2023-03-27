// Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

class Persona {
  #nombre;
  #edad;
  #DNI;
  #sexo;
  #peso;
  #altura;
  #anioNacimiento;
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#DNI = dni;
    this.#sexo = sexo;
    this.#peso = peso;
    this.#altura = altura;
    this.#anioNacimiento = anioNacimiento;
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
    //cumplio años 😂
    this.#edad = nuevaEdad;
  }
  get dni() {
    return this.#DNI;
  }
  set dni(nuevoDni) {
    this.#DNI = nuevoDni;
  }
  get sexo() {
    return this.#sexo;
  }
  set sexo(nuevoSexo) {
    this.#sexo = nuevoSexo;
  }
  get peso() {
    return this.#peso;
  }
  set peso(nuevoPeso) {
    this.#peso = nuevoPeso;
  }
  get altura() {
    return this.#altura;
  }
  set altura(nuevaAltura) {
    this.#altura = nuevaAltura;
  }
  get anioNacimiento() {
    return this.#anioNacimiento;
  }

  mostrarGeneracion() {
    if (this.#anioNacimiento >= 1930 && this.#anioNacimiento <= 1948) {
      document.write(
        `${
          this.#nombre
        } pertenece a la Silent Generation los niños de la posgerra caracterizados por la austeridad`
      );
    }
    if (this.#anioNacimiento >= 1949 && this.#anioNacimiento <= 1968) {
      document.write(
        `${
          this.#nombre
        } pertenece a la generacion Baby Boom  caracterizados por la ambicion`
      );
    }
    if (this.#anioNacimiento >= 1969 && this.#anioNacimiento <= 1980) {
      document.write(
        `${
          this.#nombre
        } pertenece a la generacion X caracterizados por la obsesion por el exito`
      );
    }
    if (this.#anioNacimiento >= 1981 && this.#anioNacimiento <= 1993) {
      document.write(
        `${
          this.#nombre
        } pertenece a la generacion Y caracterizados por la frustracion`
      );
    }
    if (this.#anioNacimiento >= 1994 && this.#anioNacimiento <= 2010) {
      document.write(
        `${
          this.#nombre
        } pertenece a la generacion Z caracterizados por la irreverencia`
      );
    }
  }

  esMayorDeEdad() {
    if (this.#edad >= 18) {
      document.write(`${this.#nombre} es mayor de edad `);
    }
  }
  mostrarDatos() {
    document.write(
      `${this.#nombre} tiene ${this.#edad} años, numero de DNI ${
        this.#DNI
      }, genero ${this.#sexo} tiene un peso de ${this.#peso} y altura de ${
        this.#altura
      }, nacio en el año ${this.#anioNacimiento}`
    );
  }
  generarDni() {
    return Math.floor(Math.random() * Math.pow(10, 8));
  }
}

let persona = new Persona("Diego", 25, "12345678", "M", 80, 180, 1997);
//document.write(persona.generarDni());
//persona.mostrarDatos();
//persona.esMayorDeEdad();
