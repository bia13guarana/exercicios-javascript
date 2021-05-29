console.log("Trabalhando com listas");
// const salvador = "Salvador";
// const recife = "Recife";
// const rioDeJaneiro = "Rio de Janeiro";

const listaDeDestinos = new Array(
    "Salvador",
    "Recife",
    "Rio de Janeiro"
);

listaDeDestinos.push("Curitiba") // adicionando item na lista
console.log("Destinos possíveis:");
// console.log(salvador, recife, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(2,1);
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]);





