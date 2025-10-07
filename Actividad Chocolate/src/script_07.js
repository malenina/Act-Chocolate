const generarReporteInventario = (productos) => {
  const productosFiltrados = productos.filter(producto => producto.disponible && producto.precio <= 500);

  const reportePorProducto = productosFiltrados.map(({ idProducto: sku, nombre, modelo, stock }) => ({
    nombreCompleto: `${nombre} ${modelo}`,
    sku,
    stock
  }));

  const stockTotal = reportePorProducto.reduce((acumulador, producto) => acumulador + producto.stock, 0);

  return {
    reportePorProducto,
    stockTotal
  };
};

const productos = [
  { idProducto: 101, nombre: "Mouse", modelo: "G-502", precio: 650, stock: 20, disponible: true },
  { idProducto: 102, nombre: "Teclado", modelo: "K-100", precio: 450, stock: 15, disponible: true },
  { idProducto: 103, nombre: "Monitor", modelo: "S-27", precio: 800, stock: 5, disponible: true },
    { idProducto: 105, nombre: "Webcam", modelo: "C-920", precio: 500, stock: 10, disponible: true }
];

const reporteInventario = generarReporteInventario(productos);
console.log(reporteInventario);