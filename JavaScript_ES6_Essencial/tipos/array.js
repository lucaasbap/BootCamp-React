const persons = Array.of('Lucas', 'John', 'Cris');
console.log(persons);

const personsList = Array('lucas', 'john');
console.log(personsList);

//shift remove no começo ,ao contrario do pop
//unshift adiciona no começo, ao contrario do push

//apenas iteração
const arr = [1,2,3,4,5];

arr.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});

//retornando novo array
console.log(arr.map((value, index) => `${index}:${value}`));

//tem como pegar keys/values/entries com um iterator.
const arr2 = [1,2,3,4,5,6]
const allValuesGreaterThanTwo = arr2.filter(value => value > 2);
console.log(allValuesGreaterThanTwo);

//includes para saber se existe tal elemento no array
console.log(arr2.includes(7));

console.log(arr2.reduce((total,value) => total += value, 0));