// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta.

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

const cuenta = {
  titular: "Alex",
  saldo: 0,
  ingresar(cantidad) {
    this.saldo += cantidad;
  },
  extraer(cantidad) {
    if (cantidad <= this.saldo) {
      this.saldo -= cantidad;
    } else {
      console.log("No tienes suficiente saldo en tu cuenta");
    }
  },
  informar() {
    console.log(`Titular: ${this.titular}, Saldo: ${this.saldo}`);
  },
};
