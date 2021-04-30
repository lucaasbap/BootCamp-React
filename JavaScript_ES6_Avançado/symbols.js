//symbol é apenas um identificador, utilizado muito para debugs
const uniqueId = Symbol();
console.log(uniqueId);

//pode ser utilizada para acessar/definir propriedades
const obj = {
    [uniqueId]: 'Hello'
};
console.log(obj); 

const arr = [1,2,3,4];
const it = arr[Symbol.iterator]();

for (let value of arr){
    console.log(value);
}

const obj2 = {
    values: [1,2,3,4],
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                i++;
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

for (let value of obj2) {
    console.log(value);
} 