const generarRankingFinal = (jugadores) => {
  return jugadores
    .filter(jugador => !jugador.esHack)
    .sort((a, b) => b.puntajeFinal - a.puntajeFinal)
    .slice(0, 3)
    .map(jugador => ({ nombreUsuario: jugador.nombreUsuario, puntajeFinal: jugador.puntajeFinal }));
};

const jugadores = [
    {nombreUsuario: "NeoMata", puntajeFinal: 1200, nivel: 8, esHack: false },
    {nombreUsuario: "Alpha7", puntajeFinal: 2500, nivel: 10, esHack: true },
    {nombreUsuario: "ZetaOne", puntajeFinal: 900, nivel: 5, esHack: false },
    {nombreUsuario: "GamerPro", puntajeFinal: 1500, nivel: 9, esHack: false },
    {nombreUsuario: "Shadow", puntajeFinal: 3000, nivel: 12, esHack: false },
];

const rankingFinal = generarRankingFinal(jugadores);
console.log(rankingFinal);