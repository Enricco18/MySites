/*
//Criando variável
var a = 2;
var b = 3;

var soma = a + b;
var subt = a - b;
var mult = a*b;
var div = a/b;
var resto= a%b;

//cria um alerta pop-up
alert("Bem vindo ao código teste!");

// if and else
if(a%2 == 1){
    alert("Número ímpar!");
}else if(a%2 == 0){
    alert("Número par!");
}else{
    alert("Valor inválido");
}

//while and for
var j=0;
var l = [12,8,7,4];
var s = 0;
alert(l);

while(j<4){
    s = s + l[j]
    alert(s);
    j= j + 1;
}
alert("acabou o programa")

for(var j = 0 ; j<4;j++){
        s = s + l[j]
        alert(s);
}

//Array
var lista = ["Maçã", "Laranja", "Banana"];
//Printa o indice e o elemento do indice que começa em 0
for(i in lista){
    alert(i);
    alert(lista[i]);
}

//Console.log
var oi = "amanda hacker"
console.log("Eu amo minha namorada");
console.log(oi)

//Funções
function soma(a,b){
    console.log(a+b);
}

function subt(a,b){
    return a-b;
}
alert("amor, to programando :) te amo -A"+ oi)
console.log(subt(3,4));
//Eventos
*/
function oi(){
    alert("acalma");
    var ele= document.getElementById("hide");
    ele.style.display= "block" ;
}
//te amo
function valida(){
    var nome = document.getElementById("s2");

    if(nome.value == "Amanda"){
        alert("Acertouuuuu");
    }else{
        alert("Ta loco porra??? ta maluco?")
    }

}

//Manipulando a DOM
var div = document.querySelector('div.oi');
var pElement= document.createElement("p");
var textElement = document.createTextNode("eaeeee tudo bem??");
pElement.appendChild(textElement);
//div.appendChild(pElement);
var a = document.querySelector('input');
var b = document.querySelector("input[name=tchau]")

console.log(div);