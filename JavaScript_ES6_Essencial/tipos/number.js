const myNumber = 12.4032;

//to string
const  numberAsString = myNumber.toString();
console.log('Número em string:', typeof numberAsString);

//uma casa decimal
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais:', fixedTwoDecimals);

//String em float
console.log('String para float: ', parseFloat('13.22'));

//String em int
console.log('String para int:', parseInt('13.20'));