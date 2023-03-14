/*Exercice 1 :

function myLength(x) {
x = prompt("Ecrit un mot")
let tot = 0;

for(i in x){
tot ++;
}
console.log(tot);
alert("Le mot fait " + tot)
}
myLength("mot")


/*Exercice 2 : myTrim()

function myTrim(){

}

/*Exercice 1bis : 

function justePrixHint(min,max){

var min=10;
var max=20;

random = Math.floor(Math.random() * (max - min) + min)
x = parseInt(prompt("Choisiser un nombre entre 10 et 20"))

while(x !== random){ 
if(x > random){
alert("C'est Moins ")
}else if( x < random){
alert("C'est Plus ")
}
x = parseInt(prompt("Choisiser un nombre entre 10 et 20"))
} 
document.write('Vous avez trouver le Bon Nombre')
} 
justePrixHint()

*/
/*Exercice2Bis:

function justePrixHint(min,max){

var min=10;
var max=20;

random = Math.floor(Math.random() * (max - min) + min)
x = parseInt(prompt("Choisiser un nombre entre 10 et 20"))

while(x !== random){ 
if(x > random){
alert("C'est Moins ")
}else if( x < random){
alert("C'est Plus ")
}
x = parseInt(prompt("Choisiser un nombre entre 10 et 20"))
} 
document.write('Bien jouer BG c\'est la bonne réponse')
} 
justePrixHint()

Exercice 3 :*/
/*

Exercice 4 : /*

function num(x){
x = parseInt(prompt("Entrez un nombre"))

for(i = 0; i <= 10; i++){
    alert(x + i);  
}
}
num()


Exercice 5 :*/

/*
function numero(x){
x = parseInt(prompt("Entrez un nombre"))
    
for(i = 0; i <= 10; i++){
    console.log(x + ' x ' + i + ' = ' + x * i);
}
}
numero()


Exercice 6*//*

function add(n) {
    n = parseInt(prompt("Entrez un nombre"))
    let sum = 0;

    for (let i = 0; i <= n; i++) {
      sum = sum + i;
    }
    console.log(sum);
  }
  add()
  
  Exercice 7*//*

  function factorial(n) {
    n = parseInt(prompt("Entrez un nombre"))
    let result = 1;

    for (var i = 1; i <= n; i++) {
    result = result *i
    console.log(result);
    }
  }
  factorial()

  Exercice 8 :
  *//*
  function success(n) {
    n = parseInt(prompt("Entrez un nombre"))
    let result = 1;

    for (var i = 1; i <= n; i++) {
    result = result *i
    console.log(result);
    }
  }
  success()

  *//*

  function num(n){
    let array = [];
    for(let i = 0; i <= 20; i++){
        n = parseInt(prompt("Entrez un nombre"));
        array.push(n);
        console.log(array);
    }
    let result = Math.max(...array);   
    console.log(result)
    let position = array.indexOf(result)
    console.log(position)
}
num()

Exercice 9 :*//*


function num(){
    let array = [];
    do{
    n = parseInt(prompt("Entrez un nombre"));
    array.push(n);
    console.log(array);
    }
    while(n != 0)
    let result = Math.max(...array);   
    console.log(result)
    let position = array.indexOf(result)
    console.log(position)  
}
num()


Exercice 10 :*//*

function marie(age){
    age = prompt('Entrez l\'âge de Marie')
    let somme = 0
    for(let i = 1; i <= age; i++){
        somme = somme + 100 + (2 * i);
    }
    console.log(somme);
}
marie()
*/



