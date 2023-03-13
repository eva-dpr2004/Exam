/*
Exercice 1 : 
 
C = A * B = 12 * 2 = 24

Exercice 2 :

A + B = 12312

Exercice 3 :

let result;

function calculTva(montantHt) {    
let tva = 1.196;
montantHt = parseInt(window.prompt("quel est le montant hors taxe de l'objet"));    
const result = montantHt * tva;    
console.log("le montant TTC est  "+ result);
}
calculTva();

Exercice 4 :

let nom = "rosario "
let prenom = "eva"
let bravo = "Bonjour votre nom est "
prompt("Quel est vôtre Nom ?"); 
prompt("Quel est vôtre Prénom?"); 
alert(bravo + nom + prenom)

Exercice 5 :

function num() {
let num1 = parseInt(window.prompt("Donnez un nombre"));
let num2 = parseInt(window.prompt("Donnez un autre nombre"));
let resultat = num1 * num2; 

if ( result > 0) {    
console.log("C'est positif");   } 
else {    
console.log("C'est négatif");    
}
}
num();

Exercice 6 : 

let age = prompt("Quel âge avez-vous?")

if(age < 13){
alert("Vous pouvez regarder Action Man")
}
else if(age >= 13){
    alert("Vous pouvez regarder Matrix")
}
else if(age > 18){
    alert("Vous pouvez regarder Evil Dead") 
}

Exercice 7 : 

const num = Math.round(Math.random() * 10);
let reponse;
let compteur = 1;

do {
    reponse = parseInt(prompt("Entrez un chiffre entre 1 et 10")); 
if ( reponse == num){
  compteur++;
  alert ( "Bien jouer BG t'a trouver la bonne réponse")
}
} while ( reponse !== num) 

Exercice 8 :

function calc(){
let nombre = parseInt(window.prompt("Quel est le bon chiffre?"))
while( nombre > 0){
    nombre--
    console.log(nombre);
}
}
calc()

Exercice 9 :

const num= Math.round(Math.random() * 0);
let reponse;
let compteur = 1;
function play(){
do {
  reponse = parseInt(prompt("entrez un chiffre entre 1 et ")); 

if (reponse < num ){
  compteur++;
  alert ("En dessous");

} else if ( reponse > num){
  compteur++;
  alert ("Au dessus");

} else if ( reponse == num){
  compteur++;
  alert ( "C'est ça !!")
}
} while ( reponse !== num) 
}
play()

Exercice 10 :

let montableau = [10, 15, 20, 15, 14, 8];
let sum = 0;

for (let i = 0; i < montableau.length; i++) {
sum += montableau[i];
}
console.log(sum);

Exercice 11 : 

function bg(){  
  let student = parseInt(prompt("Combien y a t il d'élèves?"))
  let notes = []
  for(var i = 0; i < student; i++){
  let note = parseInt(prompt("Note"))
  notes.push(note)
}
console.log(notes);
}
bg()

Exercice 12 :

function bg(){  
  let student = parseInt(prompt("Combien y a t il d'élèves?"));
  let notes = [];
  let moyenne = 0;
  for(var i = 0; i < student; i++){
  let note = parseInt(prompt("Note"));
  notes.push(note);
  if(notes[i] >= 10){
    moyenne++;
  }
}
console.log(moyenne);
}
bg();

Exercice 13 :

function abuelito(){
let array = [[0, 18], [1, 45], [45, 48], [-3, 2]]
let plat = array.flat()
let max = Math.max(...plat)

console.log(max);
}
abuelito()

Exercice 14 :

function question() {
  let quest = prompt("Ecrit ici");
  console.log(quest.length);
}
question()


Exercice 15 :

const num= Math.round(Math.random() * 0);
let reponse;
let compteur = 1;
function play(){
do {
  reponse = parseInt(prompt("entrez un chiffre entre 1 et ")); 

if (reponse < num ){
  compteur++;
  alert ("plus petit");

} else if ( reponse > num){
  compteur++;
  alert ("plus grand");

} else if ( reponse == num){
  compteur++;
  alert ( "C'est ça !!")
}
} while ( reponse !== num) 
}
play()

Exercice 16 :

function abuelita(a,b){
  a = Math.round(Math.random()*1000);
  console.log("a :", a);
  b = Math.round(Math.random()*1000);
  console.log("b :", b);
  
if(a > b){
console.log(0)
}
else{
  console.log(1)
}
}
abuelita()

*/













