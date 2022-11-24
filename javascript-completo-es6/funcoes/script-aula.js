function imc(peso, altura) {
  let imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80, 1.9));

function corFavorita(cor) {
  if (cor === 'azul') {
    return 'Eu gosto de azul';
  } else if (cor === 'verde') {   
    return 'Gosto de verde';
  } else {
    return 'eu não gosto dessas cores';
  }
}

addEventListener('click', function() {
  console.log('clicou');
});


function terceiraIdade(idade) {
  console.log(typeof idade);
  if(typeof idade !== 'number') {
    return 'por favor preencha um número'
  } else if(idade >= 78) {
    return true;    
  } else {
    return false;
  }
}

console.log(terceiraIdade(78));

function faltaVisitar(paisesVisitados) {
  let totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}