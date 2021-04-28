//tamanho 
const textSize = 'Oi'.length;
console.log('Quantidade de letras:', textSize);

//array quebrado
const splittedText = 'Texto'.split('x');
console.log('\n Array dividido: ', splittedText);

//substituir
const replacedText = 'texto'.replace('text', 'TxT');
console.log ('\n Substituindo: ', replacedText);

//retornando fatia
const lastChar = 'Texto'.slice(-1);
console.log('\n última letra: ', lastChar);

//retornando a partir de uma posição
const twoCharAfterFirstPos = 'Texto'.substr(0,2);
console.log('\n As duas primeiras letras: ', twoCharAfterFirstPos);