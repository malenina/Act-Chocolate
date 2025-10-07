const asignarColores = (colores) => {
  const [colorPrimario, colorSecundario, ...paletaAdicional] = colores;
  return {
    colorPrimario,
    colorSecundario,
    paletaAdicional
  };
};

const colores = ["#0087BF", "#A6C757D", "#A28A745", "#0DC3545", "#FFC107"];
const coloresAsignados = asignarColores(colores);
console.log(coloresAsignados);