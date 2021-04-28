let user = {
    name: 'Lucas'
};

//Alterando a propriedade de um objeto
console.log(user);
user.name = 'Outro nome 1';
console.log(user);
user['name'] = 'Outro nome 2';
console.log(user);
user.name = 'Lucas';

//criando propriedade
user.lastName = 'Baptista de Moraes';
console.log(user);

//deletando uma propriedade 
//delete user.lastName;
//console.log(user);

//chaves do objeto
console.log ('Propriedades do objeto user:', Object.keys(user));

//valores das chaves
console.log('\nValores das propriedades:', Object.values(user));

//array com propriedade e valor da prop
console.log('\nLista:', Object.entries(user));

//mergear propriedades de objetos
console.log('\nMergeando dois objetos:', Object.assign({}, user, {age:26}));

//previne todas as alterações em um objeto
const newObj = {foo: 'bar'};
Object.freeze(newObj);

//você pode alterar as propriedades, mas não pode adicionar ou remover uma ou mais 
const person = {name: 'Lucas'};
Object.seal(person);