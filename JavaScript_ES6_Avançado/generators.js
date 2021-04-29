function* hello (){
    console.log('Hello');
    yield 1;
    console.log('From');
    const value = yield 2;
    //console.log('Function!');
    console.log(value);
}

const it = hello();
console.log(it.next());
console.log(it.next());
console.log(it.next('Outside!')); //enviando dados para o proximo passo da função, bom para fluxo de dados

//criando interface de interação com generators
const obj = {
    values: [1,2,3,4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
} //comparar esse código com o do symbols, mt mais simples

for (let value of obj) {
    console.log(value);
}
