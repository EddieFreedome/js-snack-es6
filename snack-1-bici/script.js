// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

//creo array oggetti bici
//inserisco proprieta' nome e peso
const arrBici = [
    
    {
        nome: "Bianchi Methanol",
        peso: `${12.5}Kg`,
        immagine: "img/bianchi-methanol.webp"
    },

    {
        nome: "Rockrider XC 940",
        peso: `${12}Kg`,
        immagine: "img/bianchi-methanol.webp"
    },

    {
        nome: "Trek XCaliber 8 ",
        peso: `${11.5}Kg`,
        immagine: "img/bianchi-methanol.webp"
    },

]

console.log(arrBici[0], arrBici[1], arrBici[2]);

//creo una costante peso per ogni oggetto dell'array
for (let i = 0; i < arrBici.length; i++) {
    let {peso} = arrBici[i];
    
}