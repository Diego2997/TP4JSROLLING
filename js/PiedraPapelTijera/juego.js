const opciones = ["piedra", "papel", "tijera"];

function obtenerMovimiento() {
  const opcion = prompt(
    "Elige tu movimiento (piedra, papel o tijera): "
  ).toLowerCase();
  if (opciones.includes(opcion)) {
    return opcion;
  } else {
    document.write("Movimiento no válido");
    return obtenerMovimiento();
  }
}

function MovimientoPC() {
  const randomIndex = Math.floor(Math.random() * opciones.length);
  return opciones[randomIndex];
}

let jugaOtraVez = "s";
do {
  const usuario = obtenerMovimiento();
  const computadora = MovimientoPC();
  document.write(`Tu movimiento: ${usuario}`);
  document.write(` , Movimiento de la PC: ${computadora}`);
  if (usuario === computadora) {
    document.write("Empate!");
  } else if (
    (usuario === "piedra" && computadora === "tijera") ||
    (usuario === "papel" && computadora === "piedra") ||
    (usuario === "tijera" && computadora === "papel")
  ) {
    document.write(" Ganaste!");
  } else {
    document.write(" Perdiste!");
  }
  jugaOtraVez = prompt("Quieres jugar otra vez?").toLowerCase();
} while (jugaOtraVez === "s");
alert("Gracias por jugar");
