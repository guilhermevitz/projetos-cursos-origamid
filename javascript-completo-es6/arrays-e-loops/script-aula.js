//let videogames = ['Switch', 'PS5', 'Xbox', '3DS'];
//let ultimoItem = videogames.pop();
//videogames.push('3DS');


for (let numero = 0; numero <= 4; numero++) {
  console.log(numero);
}

let i = 0;
while (i <= 10) { 
  console.log(i);
  i++;
}

let videogames = ['Switch', 'PS5', 'Xbox', '3DS'];

for(let item = 0; item < videogames.length; item++) {
  console.log(videogames[item]);
  if(videogames[item] === 'PS5') {
    break;
  }
}

let frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva'];

frutas.forEach(function(item, index) {
  console.log(item, index)
});
