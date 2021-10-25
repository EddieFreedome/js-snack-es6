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

console.log(arrSquadre)


function generateRandomNum(minNumber = 1, maxNumber = 10) {
    const numRandom = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  
    return numRandom;
}

const newArr = []

for (let i = 0; i < arrSquadre.length; i++) {
    //destructuring
    const {falli_subiti, nome} = arrSquadre[i]
    //const falli_subiti = 4
    //const nome = Parma
    newArr.push(falli_subiti, nome)
    
}
console.log(newArr);
