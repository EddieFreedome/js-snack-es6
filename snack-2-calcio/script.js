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

for (let i = 0; i < arrSquadre.length; i++) {
    arrSquadre[i].punti_fatti = generateRandomNum();
    arrSquadre[i].falli_subiti = generateRandomNum();
}

console.log(arrSquadre[0].punti_fatti)
console.log(arrSquadre[1].punti_fatti)
console.log(arrSquadre[2].punti_fatti)

function generateRandomNum(minNumber = 1, maxNumber = 10) {
    const numRandom = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  
    return numRandom;
}
