const analizarInteracciones = (likes, comentarios) => {
  return {
    todasSuperan100Likes: likes.every(like => like > 100),
    primerLikeViralEncontrado: likes.find(like => like > 1000)
  };
};

const likes = [150, 90, 1200, 300, 250];
const comentarios = [10, 5, 50, 15, 12];

const analisis = analizarInteracciones(likes, comentarios);
console.log(analisis);