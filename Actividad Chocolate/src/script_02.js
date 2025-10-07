const calcularPromedioAumentado = (calificaciones) => {
  const sumaCalificaciones = calificaciones
    .map(calificacion => (calificacion >= 90 ? calificacion * 1.1 : calificacion))
    .reduce((acumulador, calificacion) => acumulador + calificacion, 0);

  return sumaCalificaciones / calificaciones.length;
};

const calificaciones = [85, 95, 78, 100, 60];
const promedioFinal = calcularPromedioAumentado(calificaciones);
console.log(promedioFinal);