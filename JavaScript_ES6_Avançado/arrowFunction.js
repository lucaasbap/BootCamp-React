//Arrow Function emitindo return, retornos normais sem statements
//é como se tivesse um return implicito =>{return a+b}
var sum = (a,b) => a + b;
console.log(sum(2,4));

//Arrow function não suporta hoisting
//Arrow functions tem o contexto igual ao contexto que ele está envolvido
//resolvendo problemas de bind, de contexto geral e local