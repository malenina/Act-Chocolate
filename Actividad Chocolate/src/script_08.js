const verificarElegibilidadBeca = (estudiantes) => {
  return [
    estudiantes.every(estudiante => estudiante.asistencia > 80),
    estudiantes.find(estudiante => estudiante.promedio > 95)
  ];
};

const estudiantes = [
  { nombre: "Alex", promedio: 92, asistencia: 85 },
  { nombre: "Beta", promedio: 98, asistencia: 75 },
  { nombre: "Clara", promedio: 88, asistencia: 95 },
  { nombre: "David", promedio: 97, asistencia: 90 }
];

const resultadoElegibilidad = verificarElegibilidadBeca(estudiantes);
console.log(resultadoElegibilidad);