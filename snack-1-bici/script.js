// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

//creo array oggetti bici
//inserisco proprieta' nome e peso
const arrBici = [
    
    {
        nome: "Bianchi Methanol",
        peso: 12.5,
        immagine: "img/bianchi-methanol.webp",
        descrizione: "La bici davvero piu' leggera"
    },

    {
        nome: "Rockrider XC 940",
        peso: 12,
        immagine: "img/rockrider-xc940.jpg",
        descrizione: "La bici davvero piu' leggera"
    },

    {
        nome: "Trek XCaliber 8 ",
        peso: 11.5,
        immagine: "img/trek-x-caliber-8.jpg",
        descrizione: "La bici davvero piu' leggera"
    },

]

let biciLeggera = arrBici[0]

console.log(arrBici[0], arrBici[1], arrBici[2]);

//creo una costante peso per ogni oggetto dell'array
for (let i = 0; i < arrBici.length; i++) {
    if (biciLeggera.peso > arrBici[i].peso){
        biciLeggera = arrBici[i]
    }
}
console.log(biciLeggera);

const {nome, peso} = biciLeggera
const cardContainer = document.querySelector(".main-container")

cardContainer.innerHTML = ""

generaCard()
function generaCard(){
    const content = ` 
    <div class="cycle-card">
        <div class="card-image">
            <img
                src="${biciLeggera.immagine}"
                alt=""
            />
        </div>
        <div class="card-text">
            <h3>${biciLeggera.nome}</h3>
            <p>${biciLeggera.descrizione}</p>
        </div>
    </div>
`;

cardContainer.innerHTML += content;
   
}

