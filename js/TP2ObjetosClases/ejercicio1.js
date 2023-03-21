const auto = {
  color: "blanco",
  marca: "Volkswagen",
  modelo: "Gol",
  encendido: false,

  encender() {
    if (!this.encendido) {
      this.encendido = true;
      console.log("El auto está encendido.");
    } else {
      console.log("El auto ya está encendido.");
    }
  },

  apagar() {
    if (this.encendido) {
      this.encendido = false;
      console.log("El auto está apagado.");
    } else {
      console.log("El auto ya está apagado.");
    }
  },
};
