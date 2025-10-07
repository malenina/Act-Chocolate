const extraerDatosBasicos = (perfilDeUsuario) => {
  const { id, nombre, email } = perfilDeUsuario;
  return { id, nombre, email };
};

const perfil = {
  id: "U45A",
  nombre: "Ana Martinez",
  email: "ana.m@ejemplo.com",
  configuracion: { tema: "dark", notificaciones: true },
  fechaCreacion: "2024-09-01"
};

const datosBasicos = extraerDatosBasicos(perfil);
console.log(datosBasicos);