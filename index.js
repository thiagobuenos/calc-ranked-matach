function calcranked(victories,
  defeats) {

  const kd = victories -
    defeats;


  let elo;
  if (victories < 10) {
    elo = "Iron";
  } else if (victories >= 11 && victories <= 20) {
    elo = "Bronze";
  } else if (victories >= 21 && victories <= 50) {
    elo = "Silver";
  } else if (victories >= 51 && victories <= 80) {
    elo = "Gold";
  } else if (victories >= 81 && victories <= 90) {
    elo = "Diamond";
  } else if (victories >= 91 && victories <= 100) {
    elo = "Legendary";
  } else {
    elo = "Immortal";
  }


  return { kd, elo };
}


const heroWins = 200;
const defeatsHeroi = 25;

const resultado = calcranked(heroWins, defeatsHeroi);


console.log(`O Herói tem um saldo de ${resultado.kd} está no nível de ${resultado.elo}`);