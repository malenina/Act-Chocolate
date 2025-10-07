const procesarBibliotecaPremium = (recursos) => {
  return recursos
    .filter(recurso => recurso.esPremium)
    .sort((a, b) => b.calificacion - a.calificacion)
    .map(({ titulo, calificacion, creador: autor }) => ({ titulo, calificacion, autor }));
};

const recursos = [
  { titulo: "JS Avanzado", creador: "Prof. Toledo", calificacion: 5, esPremium: true },
  { titulo: "Introducción a HTML", creador: "Estefania", calificacion: 4, esPremium: false },
  { titulo: "APIs para Adolescentes", creador: "NeoCoder", calificacion: 4, esPremium: true },
  { titulo: "CSS Básico", creador: "Estefania", calificacion: 5, esPremium: false },
  { titulo: "Algoritmos Ciberseguros", creador: "Prof. Toledo", calificacion: 3, esPremium: true }
];

const bibliotecaProcesada = procesarBibliotecaPremium(recursos);
console.log(bibliotecaProcesada);