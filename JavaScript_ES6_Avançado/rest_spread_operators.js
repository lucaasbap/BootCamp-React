//rest operator ... pega todos os parametros e transforma num array
function sum (a, b,...args)
    {
        console.log(a,b,args);
    }
console.log(sum(5,4,3,2));

//spread pega um array e transforma em argumentos
const str = 'Digital Innovation One';

function logArgs(...args) {
        console.log(args);
}

logArgs(...str);

//criando objetos literais com spread
const obj = {
    test1: 123
};

const obj2 = {
    ...obj,
    test2: 'oi, td bem?'
};

console.log(obj2);