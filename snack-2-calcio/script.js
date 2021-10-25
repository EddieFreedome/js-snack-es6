const arrSquadre = [
    
    {
        nome: "Atalanta",
        punti_fatti: 0,
        falli_subiti: 0
    },

    {
        nome: "Parma",
        punti_fatti: 0,
        falli_subiti: 0
    },

    {
        nome: "Lecce",
        punti_fatti: 0,
        falli_subiti: 0
    },
]

let puntiFatti = arrSquadre.punti_fatti
let falliSubiti = arrSquadre.falli_subiti
console.log(puntiFatti)

// function generateRandomNum(minNumber = 1, maxNumber = 10) {
//     const numRandom = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  
//     return numRandom;
// }

// for (let i = 0; i < arrSquadre.length; i++) {
//     arrSquadre[i].punti_fatti = generateRandomNum(arrSquadre[i].punti_fatti);
//     arrSquadre[i].falli_subiti = generateRandomNum(arrSquadre[i].falli_subiti);
// }
// console.log(punti_fatti, falli_subiti);