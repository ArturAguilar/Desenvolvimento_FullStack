// Exemplos de pesquisa em arrays em JavaScript

let numeros = [10, 20, 30, 40, 30, 20, 10];

let indexOf = numeros.indexOf(30); // primeiro índice do 30
let lastIndexOf = numeros.lastIndexOf(30); // último índice do 30
let includes = numeros.includes(40); // verifica se 40 está presente

let find = numeros.find(n => n > 25); // primeiro valor > 25
let findIndex = numeros.findIndex(n => n > 25); // índice do primeiro valor > 25

let findLast = numeros.findLast(n => n < 25); // último valor < 25
let findLastIndex = numeros.findLastIndex(n => n < 25); // índice do último valor < 25

document.getElementById("demo").innerHTML = `
<strong>Pesquisando na Array:</strong><br>
indexOf(30): ${indexOf}<br>
lastIndexOf(30): ${lastIndexOf}<br>
includes(40): ${includes}<br>
find(n > 25): ${find}<br>
findIndex(n > 25): ${findIndex}<br>
findLast(n < 25): ${findLast}<br>
findLastIndex(n < 25): ${findLastIndex}<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de métodos de pesquisa em arrays em JavaScript.";