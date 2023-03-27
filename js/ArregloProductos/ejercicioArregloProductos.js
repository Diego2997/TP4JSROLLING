// Arreglos de productos crear un script (en el repo de conceptos de JS o realizar un nuevo repo) Con el siguiente array de objetos, crear una funcion que permita dibujar una tabla con las columnas Producto - categoria - precio. Realizar las siguientes tareas:
// Mostrar la tabla completa
// filtrar el arreglo de productos por ‘Protectores solares' y mostrar la tabla filtrada.
// Buscar un producto serum y mostrarlo por pantalla,
// Buscar un producto 'Bruma’ y mostrar un mensaje adecuado para el usuario si el producto no existe en el array.
let listaProductos = [
  {
    nombreProducto: "Hidratante facial",
    precio: 3500,
    categoria: "Hidratante",
  },
  { nombreProducto: "Tonico exfoliante", precio: 2350.45, categoria: "Tonico" },
  {
    nombreProducto: "Protector solar factor 50",
    precio: 3300,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Protector solar toque seco factor 50",
    precio: 4100,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Protector solar con color factor 50",
    precio: 3850.5,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Gel de limpieza facial",
    precio: 1740.99,
    categoria: "Limpieza",
  },
  { nombreProducto: "Tonico hidratante", precio: 1250.99, categoria: "Tonico" },
  { nombreProducto: "Sérum hidratante", precio: 4250.99, categoria: "Sérum" },
  {
    nombreProducto: "Exfoliante de azúcar cherry",
    precio: 1200,
    categoria: "Labios",
  },
  {
    nombreProducto: "Pads de hidrogel para contorno de ojos",
    precio: 2800,
    categoria: "Ojos",
  },
  {
    nombreProducto: "Mascarilla facial",
    precio: 3250.99,
    categoria: "Mascaras",
  },
  { nombreProducto: "Sérum facial con PHA", precio: 3200, categoria: "Sérum" },
  { nombreProducto: "Bálsamo labial", precio: 3200, categoria: "Labios" },
  { nombreProducto: "Crema contorno de ojos", precio: 3200, categoria: "Ojos" },
  {
    nombreProducto: "Protector solar en barra",
    precio: 3800,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Mascara de hidratación y reparación",
    precio: 1200,
    categoria: "Mascaras",
  },
  { nombreProducto: "Agua micellar", precio: 2890, categoria: "Limpieza" },
];

function dibujarTabla() {
  document.write("<table>");
  document.write("<tr><th>Producto</th><th>Categoria</th><th>Precio</th></tr>");

  // Mostrar tabla completa
  for (let i = 0; i < listaProductos.length; i++) {
    document.write(
      `<tr><td>${listaProductos[i].nombreProducto}  </td><td>${listaProductos[i].categoria}  </td><td>${listaProductos[i].precio}  </td></tr>`
    );
  }

  document.write("</table><br>");

  // Filtrar por Protectores solares y mostrar tabla filtrada
  document.write("<table>");
  document.write("<tr><th>Producto</th><th>Categoria</th><th>Precio</th></tr>");

  for (let i = 0; i < listaProductos.length; i++) {
    if (listaProductos[i].categoria === "Protector solar") {
      document.write(
        `<tr><td>${listaProductos[i].nombreProducto}</td><td>${listaProductos[i].categoria}</td><td>${listaProductos[i].precio}</td></tr>`
      );
    }
  }

  document.write("</table><br>");

  // Buscar un producto serum y mostrarlo por pantalla
  for (let i = 0; i < listaProductos.length; i++) {
    if (listaProductos[i].nombreProducto.includes("Sérum")) {
      document.write(
        `El producto serum es: ${listaProductos[i].nombreProducto}<br>`
      );
      break;
    }
  }

  // Buscar un producto 'Bruma’ y mostrar mensaje adecuado
  let encontrado = false;
  for (let i = 0; i < listaProductos.length; i++) {
    if (listaProductos[i].nombreProducto.includes("Bruma")) {
      document.write(
        `El producto bruma es: ${listaProductos[i].nombreProducto}<br>`
      );
      encontrado = true;
      break;
    }
  }
  if (!encontrado) {
    document.write(
      `El producto bruma no se encuentra en el arreglo de productos.<br>`
    );
  }
}

dibujarTabla();
