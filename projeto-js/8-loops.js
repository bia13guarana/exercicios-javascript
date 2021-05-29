console.log("\n Trabalhando com loops");
const listaDeDestinos = new Array(
    "Salvador",
    "Recife",
    "Rio de Janeiro"
);

const idadeDoComprador = 18;
const estiverAcompanhado = false;
let temPassagemComprada = false;
const destino = "Natal";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeDoComprador >= 18 || estiverAcompanhado == true;

let contador = 0;
let destinoExiste = false;
while(contador<3){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem!");
}else{
    console.log("Desculpe, ocorreu um erro");
}

for(let i  = 0 ; i < 3 ; i++){
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
    }
   
}