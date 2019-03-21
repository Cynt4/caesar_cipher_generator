"use strict"
function encrypt() {
const message = document.getElementById("msg").value.toLowerCase();
let foo = document.getElementById("shift")
let bar = foo.options[foo.selectedIndex].index;
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let output = "";
for (let i=0; i<message.length; i++) {
if (alphabet.includes(message[i].toLowerCase())) {output += alphabet[(alphabet.indexOf(message[i])+bar)%26]} else {output += message[i]}};
document.getElementById("output").innerHTML = output.toUpperCase()};