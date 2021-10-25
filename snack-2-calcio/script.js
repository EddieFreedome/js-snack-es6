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

function generateRandomNum(minNumber = 1, maxNumber = 10) {
    const numRandom = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  
    return numRandom;
  }