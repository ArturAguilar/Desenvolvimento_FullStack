// Exemplos de interação com arrays em JavaScript

let numeros = [1, 2, 3, 4, 5];

// forEach
let forEachResultado = [];
numeros.forEach(n => forEachResultado.push(n * 2));

// map()
let mapResultado = numeros.map(n => n * 2);

// flatMap()
let flatMapResultado = [1, 2, 3].flatMap(n => [n, n * 10]);

// filter()
let filterResultado = numeros.filter(n => n % 2 === 0);

// reduce()
let reduceResultado = numeros.reduce((acc, n) => acc + n, 0);

// reduceRight()
let reduceRightResultado = numeros.reduceRight((acc, n) => acc - n, 0);

// every()
let everyResultado = numeros.every(n => n > 0);

// some()
let someResultado = numeros.some(n => n > 3);

// from()
let fromResultado = Array.from("abc");

// keys()
let keysResultado = [...numeros.keys()];

// entries()
let entriesResultado = [...numeros.entries()];

// with()
let withResultado = numeros.with(2, 99);

// Spread (...)
let spreadResultado = [...numeros, 6, 7];

document.getElementById("demo").innerHTML = `
<strong>Interação com Array:</strong><br>
forEach (n * 2): [${forEachResultado.join(", ")}]<br>
map (n * 2): [${mapResultado.join(", ")}]<br>
flatMap (n, n*10): [${flatMapResultado.join(", ")}]<br>
filter (pares): [${filterResultado.join(", ")}]<br>
reduce (soma): ${reduceResultado}<br>
reduceRight (subtração): ${reduceRightResultado}<br>
every (>0): ${everyResultado}<br>
some (>3): ${someResultado}<br>
Array.from("abc"): [${fromResultado.join(", ")}]<br>
keys(): [${keysResultado.join(", ")}]<br>
entries(): [${entriesResultado.map(e => `[${e[0]},${e[1]}]`).join(", ")}]<br>
with(2,99): [${withResultado.join(", ")}]<br>
Spread [...numeros,6,7]: [${spreadResultado.join(", ")}]<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de métodos de interação com arrays em JavaScript.";