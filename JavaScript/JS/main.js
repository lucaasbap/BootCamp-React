function clicked()
    {
        document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar!</b>"
        //console.log(document.getElementById("agradecimento"))
        //alert("Obrigado por Clicar!")
    }

function redirecionar()
    {
        window.open("https://www.google.com/")
    }

function trocar(elemento)
    {
        //document.getElementById("mousemove").innerHTML = "Obrigado por passar o Mouse"
        elemento.innerHTML = "Obrigado por passar o Mouse"
    }

function voltar(elemento)
    {
        //document.getElementById("mousemove").innerHTML = "Passe o Mouse aqui!"
        elemento.innerHTML = "Passe o Mouse aqui!"
    }

function funcaoChange(elemento)
    {
        console.log(elemento.value)
    }

/*function soma (n1, n2)
    {
        return n1+n2;
    }

alert (soma(5,10));*/

/*var d = new Date();
alert(d);
alert(d.getMonth());
alert(d.getHours())*/

/*for (var count = 0; count<=5; count++)
    {
        alert(count);
    }*/

/*var count = 0;
while (count <= 5)
    {
        console.log (count);
        alert(count);
        count++;
    }*/


/*var idade = prompt("Qual a sua idade?");

if (idade >= 18)
    {
        alert("Maior de Idade!");
    }

else
    {
        alert ("Menor de Idade!");
    }*/

/*var lista = ["maçã", "banana", "laranja"];
lista.push("uva")
console.log(lista);
lista.pop(3);
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "))*/

/*var fruta = {nome: "maçã", cor: "vermelha"}
console.log(fruta)
console.log(fruta.cor)*/

/*var fruta = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(fruta[1])
console.log(fruta[1].cor)*/