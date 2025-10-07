const separarTareas = (listaTareas) => {
  const [prioridadAlta, prioridadMedia, ...otrasTareas] = listaTareas;
  return [prioridadAlta, prioridadMedia, otrasTareas];
};

const listaTareas = ["Estudiar JS", "Proyecto Web", "Revisar Correo", "Ir al Gym", "Comprar"];
const tareasSeparadas = separarTareas(listaTareas);
console.log(tareasSeparadas);