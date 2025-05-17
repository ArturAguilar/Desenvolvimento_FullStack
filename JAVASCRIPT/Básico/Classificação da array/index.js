// Exemplos de classificação e ordenação de arrays em JavaScript

let frutas = ["banana", "maçã", "uva", "laranja"];
let numeros = [40, 100, 1, 5, 25, 10];

// sort() - ordena como string
let frutasSort = [...frutas].sort();
let numerosSort = [...numeros].sort(); // ordem lexicográfica

// reverse() - inverte a ordem
let frutasReverse = [...frutas].reverse();

// toSorted() e toReversed() - não alteram o original
let frutasToSorted = frutas.toSorted();
let frutasToReversed = frutas.toReversed();

// Ordenando objetos
let pessoas = [
    { nome: "Ana", idade: 22 },
    { nome: "Carlos", idade: 30 },
    { nome: "Beatriz", idade: 25 }
];
let pessoasPorIdade = pessoas.toSorted((a, b) => a.idade - b.idade);

// Ordenação numérica crescente e decrescente
let numerosCrescente = [...numeros].sort((a, b) => a - b);
let numerosDecrescente = [...numeros].sort((a, b) => b - a);

// Ordenação aleatória
let numerosRandom = [...numeros].sort(() => Math.random() - 0.5);

// Math.min() e Math.max()
let min = Math.min(...numeros);
let max = Math.max(...numeros);

// Home made Min e Max
function arrayMin(arr) {
    return arr.reduce((min, val) => val < min ? val : min, arr[0]);
}
function arrayMax(arr) {
    return arr.reduce((max, val) => val > max ? val : max, arr[0]);
}
let minCaseiro = arrayMin(numeros);
let maxCaseiro = arrayMax(numeros);

document.getElementById("demo").innerHTML = `
<strong>Classificação da Array:</strong><br>
sort() frutas: [${frutasSort.join(", ")}]<br>
sort() números (lexicográfico): [${numerosSort.join(", ")}]<br>
reverse() frutas: [${frutasReverse.join(", ")}]<br>
toSorted() frutas: [${frutasToSorted.join(", ")}]<br>
toReversed() frutas: [${frutasToReversed.join(", ")}]<br>
<br>
<strong>Sorting Objects:</strong><br>
pessoas por idade: [${pessoasPorIdade.map(p => p.nome + " (" + p.idade + ")").join(", ")}]<br>
<br>
<strong>Numeric Sort:</strong><br>
Crescente: [${numerosCrescente.join(", ")}]<br>
Decrescente: [${numerosDecrescente.join(", ")}]<br>
<br>
<strong>Random Sort:</strong><br>
Random: [${numerosRandom.join(", ")}]<br>
<br>
<strong>Math.min() e Math.max():</strong><br>
Math.min(...numeros): ${min}<br>
Math.max(...numeros): ${max}<br>
<br>
<strong>Home made Min/Max:</strong><br>
arrayMin: ${minCaseiro}<br>
arrayMax: ${maxCaseiro}<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de classificação e ordenação de arrays em JavaScript.";